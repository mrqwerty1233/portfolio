import Link from "next/link";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <div className="border-b border-zinc-200/60 dark:border-zinc-800/60">
        <Container>
          <div className="py-16 sm:py-20">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Web Development • Web Design • Unity
            </p>

            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              I build clean, fast websites and interactive Unity experiences.
            </h1>

            <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
              This is my portfolio hub. I’ll be adding case studies and project
              breakdowns here as I ship new work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Section
          title="What you’ll find here"
          subtitle="A simple structure now, then we’ll plug in projects later."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Websites",
                text: "Landing pages, multi-page sites, and web apps with strong UX.",
              },
              {
                title: "Web Design",
                text: "Layout, typography, responsiveness, and interaction polish.",
              },
              {
                title: "Unity Projects",
                text: "Gameplay prototypes, UI, systems, and performance-focused builds.",
              },
              {
                title: "Case Studies",
                text: "Clear breakdowns: goal → process → tech → results.",
              },
              {
                title: "Tech Stack",
                text: "Next.js, TypeScript, Tailwind CSS, and modern tooling.",
              },
              {
                title: "Contact",
                text: "A direct way to reach me for collaboration or work.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-zinc-200/60 bg-white p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950"
              >
                <h3 className="font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Featured work"
          subtitle="You don’t have projects added yet—this will become a grid later."
        >
          <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              No projects yet. When you’re ready, we’ll add project cards,
              filters, and case study pages.
            </p>
            <div className="mt-4">
              <Link
                href="/projects"
                className="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
              >
                Go to Projects →
              </Link>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
}