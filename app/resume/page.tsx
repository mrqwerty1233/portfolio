import Container from "@/components/Container";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata = {
  title: "Resume",
  description: `Resume for ${site.name}.`,
};

export default function ResumePage() {
  return (
    <Container>
      <Section
        title="Resume"
        subtitle="Download my resume as a PDF. This is a placeholder for now."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
            <h3 className="font-medium">Download</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Use the button below to download the PDF version.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Download Resume (PDF)
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
              >
                View in browser
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
              File path: <span className="font-mono">public/resume.pdf</span>
            </p>
          </div>

          <div className="rounded-2xl border border-dashed border-zinc-300 p-6 dark:border-zinc-700">
            <h3 className="font-medium">Resume highlights (placeholder)</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>• Web Development: Next.js, React, TypeScript, Tailwind</li>
              <li>• Unity Development: C#, gameplay systems, UI</li>
              <li>• Focus: clean UI, performance, maintainable code</li>
              <li>• Portfolio: case studies and projects will be added soon</li>
            </ul>

            <div className="mt-5 rounded-xl border border-zinc-200/60 bg-white p-4 text-sm text-zinc-700 dark:border-zinc-800/60 dark:bg-zinc-950 dark:text-zinc-300">
              Replace this section later with real experience, education, and
              skills.
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}