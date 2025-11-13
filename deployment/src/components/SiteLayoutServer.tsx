import { getPayload } from 'payload'
import config from '@/payload.config'
import SiteLayout from './SiteLayout'

interface SiteLayoutServerProps {
  children: React.ReactNode
  locale: 'nl' | 'en'
}

/**
 * Server component that fetches Header, Footer and SiteSettings globals from Payload
 * and passes them to the client SiteLayout component.
 * Contact info comes ONLY from SiteSettings (centralized).
 */
export default async function SiteLayoutServer({ children, locale }: SiteLayoutServerProps) {
  const payload = await getPayload({ config })

  // Fetch header, footer and site-settings globals with locale
  const [siteSettings, headerData, footerData] = await Promise.all([
    payload.findGlobal({
      slug: 'site-settings',
      locale,
    }),
    payload.findGlobal({
      slug: 'header',
      locale,
    }),
    payload.findGlobal({
      slug: 'footer',
      locale,
    }),
  ])

  // Transform to SiteLayout config format
  const siteConfig = {
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
      // Alle contact info komt ALLEEN uit SiteSettings
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
      // Social media komt ALLEEN uit SiteSettings
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

  return <SiteLayout config={siteConfig} locale={locale}>{children}</SiteLayout>
}
