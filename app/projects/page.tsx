import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ProjectsPage() {
  return (
    <Container>
      <Section
        title="Projects"
        subtitle="This page will list your projects once you add them."
      >
        <div className="rounded-2xl border border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700">
          <h3 className="text-base font-medium">No projects yet</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            When you’re ready, we’ll add a project grid, categories (Web, Design,
            Unity), and case study pages.
          </p>
        </div>
      </Section>
    </Container>
  );
}