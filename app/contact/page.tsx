import Container from "@/components/Container";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <Section
        title="Contact"
        subtitle="Simple contact section for now. You can add a form later."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
            <h3 className="font-medium">Reach me</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Email is the fastest way. Socials are here too.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <a className="underline underline-offset-4" href={site.socials.email}>
                Email
              </a>
              <div>
                <a
                  className="underline underline-offset-4"
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a
                  className="underline underline-offset-4"
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
            <h3 className="font-medium">Contact form (optional)</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              We can add a real form later using Formspree, Resend, or a custom
              API route.
            </p>

            <div className="mt-4 grid gap-3">
              <input
                className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:focus:ring-zinc-600"
                placeholder="Name (placeholder)"
                disabled
              />
              <input
                className="rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:focus:ring-zinc-600"
                placeholder="Email (placeholder)"
                disabled
              />
              <textarea
                className="min-h-28 rounded-lg border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-700 dark:focus:ring-zinc-600"
                placeholder="Message (placeholder)"
                disabled
              />
              <button
                className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white opacity-60 dark:bg-zinc-50 dark:text-zinc-950"
                disabled
              >
                Send (disabled)
              </button>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}