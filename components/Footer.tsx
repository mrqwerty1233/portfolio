import Container from "./Container";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 py-10 dark:border-zinc-800/60">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {year} {site.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              href={site.socials.email}
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}