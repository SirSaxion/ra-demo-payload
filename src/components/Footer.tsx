"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin } from "lucide-react";

interface FooterProps {
  logo?: string;
  companyName?: string;
  tagline?: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
  };
  badge?: string;
  phone?: string;
  email?: string;
  mainLinks?: Array<{ name: string; href: string }>;
  targetGroups?: Array<{ name: string; href: string }>;
  social?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
  copyrightText?: string;
  showAddress?: boolean;
  showSocial?: boolean;
  locale?: 'nl' | 'en';
}

// Localized section labels
const sectionLabels = {
  nl: {
    pages: "Pagina's",
    forWho: "Voor wie?",
    contact: "Contact",
  },
  en: {
    pages: "Pages",
    forWho: "For who?",
    contact: "Contact",
  },
}

export default function Footer({
  logo = '/images/logorealaccelerate.webp',
  companyName = 'Real Accelerate',
  tagline = 'Voorspelbare groei voor makelaars en vastgoedteams.',
  address = {
    street: 'Daalwijkdreef 47',
    postalCode: '1103 AD',
    city: 'Amsterdam',
  },
  badge = 'IQI Global Partner',
  phone = '085 060 2989',
  email = 'info@realaccelerate.nl',
  mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cases', href: '/cases' },
    { name: 'Over ons', href: '/over-ons' },
  ],
  targetGroups = [
    { name: 'Makelaars', href: '/makelaars' },
    { name: 'Hypotheekadviseurs', href: '/hypotheekadviseurs' },
    { name: 'Makelaars buitenland', href: '/makelaars-buitenland' },
    { name: 'Projectontwikkelaars', href: '/projectontwikkelaars' },
    { name: 'HR & Recruitment', href: '/hr-recruitment' },
  ],
  social = {
    linkedin: 'https://www.linkedin.com/company/realaccelerate',
    facebook: 'https://www.facebook.com/realaccelerate',
  },
  copyrightText = '© {year} Real Accelerate. Alle rechten voorbehouden.',
  showAddress = true,
  showSocial = true,
  locale = 'nl',
}: FooterProps = {}) {
  const t = sectionLabels[locale]
  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface-3)] text-foreground">

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center">
              <Image src={logo} alt={`${companyName} logo`} width={170} height={40} className="rounded-sm" />
            </div>
            <p className="mt-3 max-w-xs text-sm text-[var(--color-text-secondary)]">
              {tagline}
            </p>
            {showAddress && (
              <div className="mt-4 space-y-1 text-sm text-[var(--color-text-secondary)]">
                <div>{address.street}</div>
                <div>{address.postalCode} {address.city}</div>
                {badge && <div>{badge}</div>}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                {t.pages}
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
                {t.forWho}
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                {targetGroups.map((group) => (
                  <li key={group.href}>
                    <Link href={group.href} className="hover:text-foreground transition-colors">
                      {group.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
              {t.contact}
            </div>
            <div className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <div>{phone}</div>
              <div>{email}</div>
            </div>
            {showSocial && (
              <div className="mt-4 flex gap-2">
                {social?.linkedin && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ring-1 ring-[color-mix(in_oklab,var(--brand-500)_35%,transparent)] hover:bg-transparent hover:text-inherit"
                    asChild
                  >
                    <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {social?.facebook && (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full ring-1 ring-[color-mix(in_oklab,var(--brand-500)_35%,transparent)] hover:bg-transparent hover:text-inherit"
                    asChild
                  >
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8 opacity-60" />

        <div className="flex justify-end text-xs text-[var(--color-text-muted)]">
          <div>{copyrightText.replace('{year}', new Date().getFullYear().toString())}</div>
        </div>
      </div>
    </footer>
  );
}


