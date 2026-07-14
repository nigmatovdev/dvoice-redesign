# Deploying to a VM

How to self-host this Next.js app on a Linux VM (Ubuntu 22.04/24.04 assumed) behind Nginx with HTTPS. Pick **one** process manager: **systemd** (built in) or **PM2** (npm). Both covered below.

- App: Next.js 16 (`next start`), listens on port **3000**
- Node.js: **24 LTS** (required by this Next version)
- Reverse proxy: Nginx → port 3000
- TLS: Let's Encrypt via Certbot

---

## 0. Prerequisites

- A VM with a public IP and SSH access (a non-root sudo user).
- A domain (e.g. `metrixme.com`) with an **A record** pointing to the VM's IP.
- Inbound ports **80** and **443** open (and **22** for SSH).

---

## 1. Server basics

SSH in, update, install tooling:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl ufw nginx
```

Firewall — allow SSH + web, deny the rest:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

> Note: port 3000 is **not** opened to the public. Nginx talks to it over localhost only.

---

## 2. Install Node.js 24

Using NodeSource:

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # v24.x
npm -v
```

> Alternative: install [`nvm`](https://github.com/nvm-sh/nvm) and `nvm install 24`. If you use nvm, the systemd unit below needs the absolute Node path (see notes in step 5a).

---

## 3. Get the code

Deploy as a dedicated user (here: the current sudo user, in `/var/www`):

```bash
sudo mkdir -p /var/www
sudo chown "$USER":"$USER" /var/www
cd /var/www
git clone <YOUR_REPO_URL> metrixme
cd metrixme
```

If the repo is private, set up a deploy key or use a PAT in the clone URL.

---

## 4. Environment variables

The app reads server-only secrets at runtime. Create `.env.local` in the project root (gitignored, lives only on the server):

```bash
cd /var/www/metrixme
cat > .env.local <<'EOF'
SIGNUP_UPSTREAM_URL=https://[YOURDOMAIN]/api/signup
SIGNUP_API_KEY=PASTE_THE_REAL_SECRET_HERE
EOF
chmod 600 .env.local
```

- `SIGNUP_API_KEY` must match the key set in the main SaaS app (`LANDING_API_KEY`).
- Generate the key once with `openssl rand -hex 32`, paste the same value into both projects.
- **Never** prefix these with `NEXT_PUBLIC_` — they must stay server-side.

`next start` loads `.env.local` automatically. (If you prefer, you can instead pass these via the systemd unit `Environment=` or PM2 `env` — pick one place, not both.)

---

## 5. Build

```bash
cd /var/www/metrixme
npm ci          # clean install from package-lock.json
npm run build   # production build (.next/)
```

Smoke-test before wiring up a service:

```bash
npm run start   # should print "Ready" on http://localhost:3000
# Ctrl+C to stop
```

Now keep it running with **either** 5a (systemd) **or** 5b (PM2).

### 5a. Option A — systemd (recommended, no extra deps)

Create the unit:

```bash
sudo tee /etc/systemd/system/metrixme.service > /dev/null <<EOF
[Unit]
Description=metrixme landing (Next.js)
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=/var/www/metrixme
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF
```

Enable + start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now metrixme
sudo systemctl status metrixme      # should be active (running)
```

Logs:

```bash
journalctl -u metrixme -f
```

> Notes:
> - `ExecStart` uses `/usr/bin/npm` (from NodeSource). If you used **nvm**, npm isn't there — point `ExecStart` at the absolute path: run `which npm` and `which node`, then use e.g. `ExecStart=/home/youruser/.nvm/versions/node/v24.x.y/bin/npm run start`.
> - To inject env via systemd instead of `.env.local`, add more `Environment=` lines (or `EnvironmentFile=/var/www/metrixme/.env.local`).

### 5b. Option B — PM2

```bash
sudo npm install -g pm2
cd /var/www/metrixme
pm2 start npm --name metrixme -- run start
pm2 save
pm2 startup        # run the command it prints (sets up boot persistence)
```

Manage:

```bash
pm2 status
pm2 logs metrixme
pm2 restart metrixme
```

---

## 6. Nginx reverse proxy

Create a site config:

```bash
sudo tee /etc/nginx/sites-available/metrixme > /dev/null <<'EOF'
server {
    listen 80;
    server_name metrixme.com www.metrixme.com;   # <-- your domain(s)

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF
```

Enable it, drop the default, test, reload:

```bash
sudo ln -s /etc/nginx/sites-available/metrixme /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Visit `http://metrixme.com` — you should see the site over plain HTTP.

---

## 7. HTTPS with Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d metrixme.com -d www.metrixme.com
```

Follow the prompts (email, agree, redirect HTTP→HTTPS). Certbot rewrites the Nginx config and installs the cert.

Auto-renewal is installed as a systemd timer; verify with:

```bash
sudo certbot renew --dry-run
```

Site is now live on `https://metrixme.com`.

---

## 8. Deploying updates

Pull, rebuild, restart:

```bash
cd /var/www/metrixme
git pull
npm ci
npm run build
sudo systemctl restart metrixme    # or: pm2 restart metrixme
```

Optional `deploy.sh` to script it:

```bash
#!/usr/bin/env bash
set -euo pipefail
cd /var/www/metrixme
git pull
npm ci
npm run build
sudo systemctl restart metrixme
echo "Deployed."
```

```bash
chmod +x deploy.sh && ./deploy.sh
```

> Zero-downtime note: `next build` writes to `.next/` while the old process still serves from memory; the restart swaps in the new build with only a ~1–2s blip. For true zero-downtime, run two instances on different ports and flip Nginx `proxy_pass` between them, or use PM2 cluster mode.

---

## Troubleshooting

| Symptom | Check |
| --- | --- |
| 502 Bad Gateway | App not running — `systemctl status metrixme` / `pm2 status`; confirm it's on port 3000. |
| Form returns "server not configured" (500) | `.env.local` missing/unreadable — confirm `SIGNUP_UPSTREAM_URL` + `SIGNUP_API_KEY` set, then restart. |
| Form returns 401 from backend | `SIGNUP_API_KEY` here ≠ key in main app. Regenerate once, paste same value both sides. |
| Changes not showing | Forgot `npm run build` and/or restart. |
| Port 3000 already in use | `sudo lsof -i :3000` — kill the stray process or change `PORT`. |
| Cert renewal fails | Port 80 must stay open and reach Nginx; `sudo certbot renew --dry-run`. |

Logs: `journalctl -u metrixme -f` (systemd) or `pm2 logs metrixme`. Nginx: `sudo tail -f /var/log/nginx/error.log`.
