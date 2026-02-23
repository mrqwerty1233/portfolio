"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/60">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            {site.name}
          </Link>

          <nav className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-md px-3 py-2 text-sm transition",
                    active
                      ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </Container>
    </header>
  );
}