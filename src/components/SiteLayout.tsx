'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout wrapper that adds Navbar and Footer to all pages
 * Fully static - no props, no database, just hardcoded content
 */

interface SiteConfig {
  company: {
    name: string
    tagline: string
    logo: string
    badge: string
    address: { street: string; postalCode: string; city: string }
  }
  contact: {
    phone: string
    phoneLink: string
    email: string
    emailLink: string
  }
  navigation: {
    mainLinks: Array<{ name: string; href: string }>
    targetGroups: Array<{
      name: string
      href: string
      icon: string
      description: string
      highlights: string[]
    }>
  }
  social: {
    linkedin?: string
    facebook?: string
    instagram?: string
  }
  footer: {
    mainLinks: Array<{ name: string; href: string }>
    targetGroups: Array<{ name: string; href: string }>
    copyrightText: string
    showAddress: boolean
    showSocial: boolean
  }
}

interface SiteLayoutProps {
  children: React.ReactNode
  config?: SiteConfig
  configNL?: SiteConfig | null
  configEN?: SiteConfig | null
  locale?: 'nl' | 'en'
}

// Default/fallback site configuration
const DEFAULT_SITE_CONFIG: SiteConfig = {
  company: {
    name: 'Real Accelerate',
    tagline: 'Online marketing voor vastgoedprofessionals',
    logo: '/images/logorealaccelerate.webp',
    badge: 'IQI Global Partner',
    address: { 
      street: 'Daalwijkdreef 47', 
      postalCode: '1103 AD', 
      city: 'Amsterdam' 
    }
  },
  contact: {
    phone: '085 060 2989',
    phoneLink: 'tel:+31850602989',
    email: 'info@realaccelerate.nl',
    emailLink: 'mailto:info@realaccelerate.nl'
  },
  navigation: {
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'Over ons', href: '/over-ons' }
    ],
    targetGroups: []
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/realaccelerate',
    facebook: 'https://www.facebook.com/realaccelerate',
    instagram: 'https://www.instagram.com/realaccelerate'
  },
  footer: {
    mainLinks: [
      { name: 'Home', href: '/' },
      { name: 'Cases', href: '/cases' },
      { name: 'Over ons', href: '/over-ons' },
    ],
    targetGroups: [
      { name: 'Makelaars', href: '/makelaars' },
      { name: 'Hypotheekadviseurs', href: '/hypotheekadviseurs' },
      { name: 'Makelaars buitenland', href: '/makelaars-buitenland' },
      { name: 'Projectontwikkelaars', href: '/projectontwikkelaars' },
      { name: 'HR & Recruitment', href: '/hr-recruitment' },
    ],
    copyrightText: '© 2025 Real Accelerate. Alle rechten voorbehouden.',
    showAddress: true,
    showSocial: true
  }
}

export default function SiteLayout({ children, config, configNL, configEN, locale }: SiteLayoutProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')
  
  // Auto-detect locale from pathname
  const detectedLocale = locale || (pathname?.startsWith('/en') ? 'en' : 'nl')
  
  // Choose config based on detected locale
  const localeConfig = detectedLocale === 'en' ? configEN : configNL
  const siteConfig = config || localeConfig || DEFAULT_SITE_CONFIG

  // Admin routes don't need navbar/footer
  if (isAdminRoute) {
    return <main className="bg-background">{children}</main>
  }

  // Regular routes with navbar/footer
  return (
    <>
      <Navbar
        logo={siteConfig.company.logo}
        phone={siteConfig.contact.phone}
        phoneLink={siteConfig.contact.phoneLink}
        email={siteConfig.contact.email}
        emailLink={siteConfig.contact.emailLink}
        mainLinks={siteConfig.navigation.mainLinks}
        targetGroups={siteConfig.navigation.targetGroups}
      />
      <main className="bg-background">{children}</main>
      <Footer
        logo={siteConfig.company.logo}
        companyName={siteConfig.company.name}
        tagline={siteConfig.company.tagline}
        address={siteConfig.company.address}
        badge={siteConfig.company.badge}
        phone={siteConfig.contact.phone}
        email={siteConfig.contact.email}
        mainLinks={siteConfig.footer.mainLinks}
        targetGroups={siteConfig.footer.targetGroups}
        social={siteConfig.social}
        copyrightText={siteConfig.footer.copyrightText}
        showAddress={siteConfig.footer.showAddress}
        showSocial={siteConfig.footer.showSocial}
        locale={detectedLocale}
      />
    </>
  )
}
