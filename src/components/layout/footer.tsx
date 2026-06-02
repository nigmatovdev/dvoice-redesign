import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm opacity-60">
        © {siteConfig.name}. Built with Next.js.
      </div>
    </footer>
  );
}
