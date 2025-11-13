import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  image: any; // Media object from CMS
}

interface TeamSectionProps {
  badge?: string;
  title?: string;
  members?: TeamMember[];
}

export default function TeamSection({
  badge = "Team",
  title = "Het team achter Real Accelerate",
  members = [
    { name: "Joep", role: "Founder — CEO", image: "/images/1.EmiroSmolders-Settle-DSC06894-.webp" },
    { name: "Partner Naam", role: "Co-Founder — CTO", image: "/images/2.EmiroSmolders-Settle-DSC06899-.webp" },
    { name: "Nina", role: "Klant succes baas", image: "/images/3.EmiroSmolders-Settle-DSC06907-.webp" },
    { name: "Ravi", role: "Sales tijger", image: "/images/4.EmiroSmolders-Settle-DSC06915-.webp" },
    { name: "Milo", role: "Creatieve baas", image: "/images/5.EmiroSmolders-Settle-DSC06927-.webp" },
    { name: "Sofie", role: "Data baas", image: "/images/6.EmiroSmolders-Settle-DSC06931-.webp" },
    { name: "Alex", role: "Product owner", image: "/images/10.EmiroSmolders-Settle-DSC06970-.webp" },
    { name: "Maya", role: "Design lead", image: "/images/9.EmiroSmolders-Settle-DSC06956-.webp" },
  ],
}: TeamSectionProps = {}) {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* subtle grid for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="teamshow-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#teamshow-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>

      {/* Top wave divider from previous (dark) section */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg
          className="block h-[84px] w-full md:h-[120px] rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto mb-8 max-w-3xl text-left sm:text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {badge}
          </span>
          <h2 className="mt-4 type-h2 text-black">{title}</h2>
        </div>

        {/* Unified Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <Card
              key={i}
              className="border border-black/10 bg-white/60 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] rounded-2xl"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 flex items-center justify-center">
                  <div className="relative size-24 md:size-28 overflow-hidden rounded-full ring-2 ring-black/10 shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                    <Image
                      src={member.image?.sizes?.thumbnail?.url || member.image?.url}
                      alt={member.name}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-xl md:text-2xl font-semibold text-black">{member.name}</CardTitle>
                <CardDescription className="text-base md:text-lg text-black/70">{member.role}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom wave divider into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg
          className="block h-[84px] w-full md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,40 C 240,60 520,30 820,55 S 1100,85 1200,70 L1200,120 L0,120 Z"
            fill="var(--bg-section)"
          />
        </svg>
      </div>
    </section>
  );
}
