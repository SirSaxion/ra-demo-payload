import Image from "next/image";
import { Users, Globe, type LucideIcon } from "lucide-react";

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface HeroSectionProps {
  badge?: string;
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  stats?: StatItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Users,
  Globe,
};

export default function HeroSection({
  badge = "Over ons",
  title = "Van",
  highlightedWord = "vastgoedondernemers",
  subtitle = "voor vastgoedondernemers",
  description = "Wij zijn Real Accelerate. Een team dat dagelijks actief is in de vastgoedbranche. We kennen de uitdagingen van binnenuit – omdat we ze zelf ervaren hebben. Vanuit die praktijk helpen we anderen vooruit met een aanpak die vernieuwend, praktisch en resultaatgericht is.",
  image = "/images/teamfoto_einde.png",
  imageAlt = "Team Real Accelerate",
  stats = [
    { icon: "Users", value: "200+ klanten", label: "Europa-breed" },
    { icon: "Globe", value: "IQI Global Partner", label: "Internationale slagkracht" },
  ],
}: HeroSectionProps = {}) {
  return (
    <section className="relative isolate overflow-hidden bg-section min-h-[calc(100svh-56px)] md:min-h-[calc(100svh-76px)] mt-14 md:mt-[76px] flex items-center">
      <div className="mx-auto w-full max-w-[90rem] px-4 lg:px-6 py-8 md:py-12 grid gap-10 xl:grid-cols-2 items-center">
        {/* Visual montage */}
        <div className="relative order-2 xl:order-1">
          <div className="relative aspect-[4/3]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover [-webkit-mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)] [mask-image:linear-gradient(to_top,transparent_0%,var(--bg-section)_12%,var(--bg-section)_100%)]"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 xl:order-2 min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            {badge}
          </span>
          <h1 className="mt-5 md:mt-6 max-w-full md:max-w-[24ch] text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-5xl xl:text-6xl break-words overflow-wrap-anywhere">
            {title} <span className="text-[var(--brand-400)]">{highlightedWord}</span>,
            <br className="hidden md:block" /> {subtitle}
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/80 md:text-lg">
            {description}
          </p>

          <ul className="mt-7 md:mt-8 grid w-full max-w-md grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-foreground/80" role="list">
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon] || Users;
              return (
                <li key={index} className="rounded-lg border border-white/10 bg-white/5 p-4 h-full">
                  <div className="flex items-start gap-2">
                    <Icon className="mt-0.5 h-5 w-5 text-[var(--brand-400)]" aria-hidden />
                    <div>
                      <div className="font-semibold">{stat.value}</div>
                      <div className="text-foreground/60">{stat.label}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
