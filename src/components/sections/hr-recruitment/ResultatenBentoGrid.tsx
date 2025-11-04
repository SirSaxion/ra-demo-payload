"use client";

interface Result {
  metric: string;
  description: string;
}

interface ResultatenBentoGridProps {
  badge?: string;
  title?: string;
  results?: Result[];
}

export default function ResultatenBentoGrid({
  badge,
  title,
  results = [],
}: ResultatenBentoGridProps = {}) {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className={`relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-3)] rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[var(--brand-400)] mb-2">
                {result.metric}
              </div>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
