import Container from "@/components/Container";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Container>
      <Section
        title="About"
        subtitle="Replace this text later with your real background."
      >
        <div className="max-w-3xl space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>
            I’m Vin, a developer focused on building modern web experiences and
            interactive Unity projects. I care about clean UI, performance, and
            code that’s easy to maintain.
          </p>
          <p>
            This portfolio is intentionally simple right now. We’ll add projects,
            case studies, and media as you build them.
          </p>
        </div>
      </Section>

      <Section title="Skills (placeholder)">
        <div className="flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Unity",
            "C#",
            "UI/UX",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </Container>
  );
}