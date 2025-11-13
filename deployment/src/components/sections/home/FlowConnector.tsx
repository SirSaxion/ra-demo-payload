export default function FlowConnector() {
  return (
    <section className="relative isolate overflow-hidden bg-section text-foreground pt-2 pb-2 md:pt-16 md:pb-36">
      {/* Subtle grid tint for consistency */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--bg-section),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="connector-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#connector-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Gradient flow line */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <svg
          className="absolute left-0 right-0 top-1/2 h-[240px] w-full -translate-y-1/2 hidden lg:block"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="connector-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--brand-500)" stopOpacity="0.15" />
              <stop offset="12%" stopColor="var(--brand-500)" stopOpacity="0.50" />
              <stop offset="50%" stopColor="var(--brand-200)" stopOpacity="0.60" />
              <stop offset="88%" stopColor="var(--brand-500)" stopOpacity="0.50" />
              <stop offset="100%" stopColor="var(--brand-500)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path
            d="M 0 160 C 220 60, 420 40, 600 100 S 980 200, 1200 120"
            fill="none"
            stroke="url(#connector-flow)"
            strokeWidth="4"
            strokeLinecap="round"
            className="[filter:drop-shadow(0_0_18px_color-mix(in_oklab,var(--brand-500)_25%,transparent))]"
          />
        </svg>
      </div>

      {/* Content intentionally removed per request: keep background and wave only */}
    </section>
  );
}
