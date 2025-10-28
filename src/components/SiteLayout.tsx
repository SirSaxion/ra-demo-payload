'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout wrapper that adds Navbar and Footer to all pages
 * Fully static - no props, no database, just hardcoded content
 */

interface SiteLayoutProps {
  children: React.ReactNode
}

// Hardcoded site configuration
const SITE_CONFIG = {
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
    copyrightText: '© 2025 Real Accelerate. Alle rechten voorbehouden.',
    showAddress: true,
    showSocial: true
  }
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname?.startsWith('/admin')

  // Admin routes don't need navbar/footer
  if (isAdminRoute) {
    return <main className="bg-background">{children}</main>
  }

  // Regular routes with navbar/footer
  return (
    <>
      <Navbar
        logo={SITE_CONFIG.company.logo}
        phone={SITE_CONFIG.contact.phone}
        phoneLink={SITE_CONFIG.contact.phoneLink}
        email={SITE_CONFIG.contact.email}
        emailLink={SITE_CONFIG.contact.emailLink}
        mainLinks={SITE_CONFIG.navigation.mainLinks}
        targetGroups={SITE_CONFIG.navigation.targetGroups}
      />
      <main className="bg-background">{children}</main>
      <Footer
        logo={SITE_CONFIG.company.logo}
        companyName={SITE_CONFIG.company.name}
        tagline={SITE_CONFIG.company.tagline}
        address={SITE_CONFIG.company.address}
        badge={SITE_CONFIG.company.badge}
        phone={SITE_CONFIG.contact.phone}
        email={SITE_CONFIG.contact.email}
        mainLinks={SITE_CONFIG.navigation.mainLinks}
        targetGroups={SITE_CONFIG.navigation.targetGroups}
        social={SITE_CONFIG.social}
        copyrightText={SITE_CONFIG.footer.copyrightText}
        showAddress={SITE_CONFIG.footer.showAddress}
        showSocial={SITE_CONFIG.footer.showSocial}
      />
    </>
  )
}
