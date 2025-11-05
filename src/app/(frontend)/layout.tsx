import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { StrategySessionDialogProvider } from "@/components/strategy/StrategySessionDialog";
import { Toaster } from "@/components/ui/sonner";
import { getPayload } from 'payload'
import config from '@/payload.config'
import SiteLayout from "@/components/SiteLayout";
import { headers } from 'next/headers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://realaccelerate.nl'),
  title: {
    default: 'Real Accelerate | Online marketing voor vastgoedprofessionals',
    template: '%s | Real Accelerate'
  },
  description: 'Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers',
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://realaccelerate.nl',
    siteName: 'Real Accelerate',
  },
}

// Organization structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Real Accelerate",
  "description": "Online marketing bureau gespecialiseerd in vastgoedmarketing voor makelaars en vastgoedondernemers",
  "url": "https://realaccelerate.nl",
  "logo": "https://realaccelerate.nl/images/logorealaccelerate.webp",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+31-85-060-2989",
    "contactType": "Customer Service",
    "email": "info@realaccelerate.nl",
    "areaServed": "NL",
    "availableLanguage": ["Dutch", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Daalwijkdreef 47",
    "postalCode": "1103 AD",
    "addressLocality": "Amsterdam",
    "addressCountry": "NL"
  },
  "sameAs": [
    "https://www.linkedin.com/company/realaccelerate",
    "https://www.facebook.com/realaccelerate",
    "https://www.instagram.com/realaccelerate"
  ]
};

interface FrontendLayoutProps {
  children: React.ReactNode;
  params?: Promise<{ locale?: string }>;
}

export default async function FrontendLayout({
  children,
  params,
}: Readonly<FrontendLayoutProps>) {
  // Fetch header and footer data for BOTH locales
  // The client-side SiteLayout will choose which to display based on pathname
  const payload = await getPayload({ config })
  
  const [headerNL, footerNL, headerEN, footerEN] = await Promise.all([
    payload.findGlobal({ slug: 'header', locale: 'nl' }).catch(() => null),
    payload.findGlobal({ slug: 'footer', locale: 'nl' }).catch(() => null),
    payload.findGlobal({ slug: 'header', locale: 'en' }).catch(() => null),
    payload.findGlobal({ slug: 'footer', locale: 'en' }).catch(() => null),
  ])

  // Transform both locales to SiteLayout config format
  const createConfig = (headerData: any, footerData: any) => (!headerData || !footerData) ? null : {
    company: {
      name: footerData.companyName || 'Real Accelerate',
      tagline: footerData.tagline || 'Online marketing voor vastgoedprofessionals',
      logo: '/images/logorealaccelerate.webp',
      badge: footerData.badge || 'IQI Global Partner',
      address: footerData.address || {
        street: 'Daalwijkdreef 47',
        postalCode: '1103 AD',
        city: 'Amsterdam',
      },
    },
    contact: {
      phone: headerData.phone || '085 060 2989',
      phoneLink: headerData.phoneLink || 'tel:+31850602989',
      email: headerData.email || 'info@realaccelerate.nl',
      emailLink: headerData.emailLink || 'mailto:info@realaccelerate.nl',
    },
    navigation: {
      mainLinks: (headerData.mainLinks || []).map((link: any) => ({
        name: link.name,
        href: link.href,
      })),
      targetGroups: (headerData.targetGroups || []).map((group: any) => ({
        name: group.name,
        href: group.href,
        icon: group.icon,
        description: group.description,
        highlights: group.highlights?.map((h: any) => h.text) || [],
      })),
    },
    social: {
      linkedin: footerData.social?.linkedin ?? 'https://www.linkedin.com/company/realaccelerate',
      facebook: footerData.social?.facebook ?? 'https://www.facebook.com/realaccelerate',
      instagram: footerData.social?.instagram ?? undefined,
    },
    footer: {
      mainLinks: (footerData.mainLinks || []).map((link: any) => ({
        name: link.name,
        href: link.href,
      })),
      targetGroups: (footerData.targetGroups || []).map((group: any) => ({
        name: group.name,
        href: group.href,
      })),
      copyrightText:
        footerData.copyrightText || '© {year} Real Accelerate. Alle rechten voorbehouden.',
      showAddress: footerData.showAddress ?? true,
      showSocial: footerData.showSocial ?? true,
    },
  }
  
  const siteConfigNL = createConfig(headerNL, footerNL)
  const siteConfigEN = createConfig(headerEN, footerEN)
  
  return (
    <StrategySessionDialogProvider>
      <SiteLayout configNL={siteConfigNL} configEN={siteConfigEN}>{children}</SiteLayout>
      <Toaster position="top-right" />
    </StrategySessionDialogProvider>
  );
}
