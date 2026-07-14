// Proxy for the landing signup form. Forwards to the metrixme backend server-side
// so the browser never makes a cross-origin POST (no CORS dance) AND the upstream
// endpoint + secret key stay server-only — never shipped to the client.
//
// Required env (set in .env.local locally, project env in prod — NOT NEXT_PUBLIC_):
//   SIGNUP_UPSTREAM_URL  full backend endpoint, e.g. https://metrixme.com/api/signup
//   SIGNUP_API_KEY       shared secret; backend accepts the request only with it
const UPSTREAM = process.env.SIGNUP_UPSTREAM_URL;
const API_KEY = process.env.SIGNUP_API_KEY;

export async function POST(request: Request) {
  if (!UPSTREAM || !API_KEY) {
    // Misconfiguration — fail loud server-side, generic to client.
    console.error("signup: missing SIGNUP_UPSTREAM_URL or SIGNUP_API_KEY");
    return Response.json({ error: "server not configured" }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  try {
    const res = await fetch(UPSTREAM, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Secret key proves the request came from this landing app.
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    return new Response(text, {
      status: res.status,
      headers: { "Content-Type": res.headers.get("content-type") ?? "application/json" },
    });
  } catch {
    return Response.json({ error: "upstream unreachable" }, { status: 502 });
  }
}
