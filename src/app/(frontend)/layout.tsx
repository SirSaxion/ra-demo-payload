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
  // Fetch site settings, header and footer data for BOTH locales
  // The client-side SiteLayout will choose which to display based on pathname
  const payload = await getPayload({ config })
  
  const [siteSettingsNL, siteSettingsEN, headerNL, footerNL, headerEN, footerEN] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings', locale: 'nl' }).catch(() => null),
    payload.findGlobal({ slug: 'site-settings', locale: 'en' }).catch(() => null),
    payload.findGlobal({ slug: 'header', locale: 'nl' }).catch(() => null),
    payload.findGlobal({ slug: 'footer', locale: 'nl' }).catch(() => null),
    payload.findGlobal({ slug: 'header', locale: 'en' }).catch(() => null),
    payload.findGlobal({ slug: 'footer', locale: 'en' }).catch(() => null),
  ])

  // Transform both locales to SiteLayout config format
  // Now using SiteSettings for company/contact/social data
  const createConfig = (siteSettings: any, headerData: any, footerData: any) => {
    if (!siteSettings || !headerData || !footerData) return null
    
    return {
      company: {
        name: siteSettings.companyName || 'Real Accelerate',
        tagline: siteSettings.tagline || 'Online marketing voor vastgoedprofessionals',
        logo: '/images/logorealaccelerate.webp',
        badge: siteSettings.badge || 'IQI Global Partner',
        address: siteSettings.address || {
          street: 'Daalwijkdreef 47',
          postalCode: '1103 AD',
          city: 'Amsterdam',
        },
      },
      contact: {
        phone: siteSettings.phone || '085 060 2989',
        phoneLink: siteSettings.phoneLink || 'tel:+31850602989',
        email: siteSettings.email || 'info@realaccelerate.nl',
        emailLink: siteSettings.emailLink || 'mailto:info@realaccelerate.nl',
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
        linkedin: siteSettings.social?.linkedin ?? 'https://www.linkedin.com/company/realaccelerate',
        facebook: siteSettings.social?.facebook ?? 'https://www.facebook.com/realaccelerate',
        instagram: siteSettings.social?.instagram ?? undefined,
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
  }
  
  const siteConfigNL = createConfig(siteSettingsNL, headerNL, footerNL)
  const siteConfigEN = createConfig(siteSettingsEN, headerEN, footerEN)
  
  return (
    <StrategySessionDialogProvider>
      <SiteLayout configNL={siteConfigNL} configEN={siteConfigEN}>{children}</SiteLayout>
      <Toaster position="top-right" />
    </StrategySessionDialogProvider>
  );
}
