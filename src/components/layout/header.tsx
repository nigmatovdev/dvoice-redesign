import Link from "next/link";

import { siteConfig } from "@/config/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const;

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
