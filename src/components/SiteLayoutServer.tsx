import { getPayload } from 'payload'
import config from '@/payload.config'
import SiteLayout from './SiteLayout'

interface SiteLayoutServerProps {
  children: React.ReactNode
  locale: 'nl' | 'en'
}

/**
 * Server component that fetches Header and Footer globals from Payload
 * and passes them to the client SiteLayout component
 */
export default async function SiteLayoutServer({ children, locale }: SiteLayoutServerProps) {
  const payload = await getPayload({ config })

  // Fetch header and footer globals with locale
  const [headerData, footerData] = await Promise.all([
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
      name: footerData.companyName || 'Real Accelerate',
      tagline: footerData.tagline || 'Online marketing voor vastgoedprofessionals',
      logo: '/images/logorealaccelerate.webp', // For now keep static, can be updated to use media field
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

  return <SiteLayout config={siteConfig} locale={locale}>{children}</SiteLayout>
}
