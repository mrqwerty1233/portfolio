import type { ReactNode } from "react";

export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}