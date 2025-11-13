import { connectDB } from '@/lib/mongodb';
import SiteSettings from '@/lib/models/SiteSettings';
import type { SiteSettingsDocument } from '@/lib/models/SiteSettings';

/**
 * Server-side function to get site settings
 * Can be used in Server Components - no client-side flash!
 */
export async function getSiteSettings(): Promise<SiteSettingsDocument> {
  try {
    await connectDB();
    const settings = await SiteSettings.findOne({ isActive: true }).lean();
    
    if (settings) {
      // Convert MongoDB document to plain object
      return JSON.parse(JSON.stringify(settings));
    }
    
    // Return default settings if none exist
    return getDefaultSettings();
  } catch (error) {
    console.error('Failed to fetch site settings:', error);
    return getDefaultSettings();
  }
}

function getDefaultSettings(): SiteSettingsDocument {
  return {
    company: {
      name: 'Real Accelerate',
      tagline: 'Voorspelbare groei voor makelaars en vastgoedteams',
      logo: '/images/logorealaccelerate.webp',
      address: {
        street: 'Daalwijkdreef 47',
        postalCode: '1103 AD',
        city: 'Amsterdam',
      },
      badge: 'IQI Global Partner',
    },
    contact: {
      phone: '085 060 2989',
      phoneLink: 'tel:+31850602989',
      email: 'info@realaccelerate.nl',
      emailLink: 'mailto:info@realaccelerate.nl',
    },
    social: {
      linkedin: 'https://linkedin.com/company/realaccelerate',
      instagram: 'https://instagram.com/realaccelerate',
      facebook: '',
      twitter: '',
    },
    navigation: {
      mainLinks: [
        { name: 'Over ons', href: '/over-ons', order: 1 },
        { name: 'Cases', href: '/cases', order: 2 },
        { name: 'Contact', href: '/contact', order: 3 },
      ],
      targetGroups: [
        {
          name: 'Makelaars',
          href: '/makelaars',
          icon: 'Building2',
          description: 'Voor makelaars die meer leads en omzet willen',
          highlights: [
            'Meer bezichtigingen per maand',
            'Hogere conversie naar verkoop',
            'Voorspelbare dealflow',
          ],
          order: 1,
        },
        {
          name: 'Makelaars buitenland',
          href: '/makelaars-buitenland',
          icon: 'Globe2',
          description: 'Voor buitenlandse makelaars die Nederlandse kopers zoeken',
          highlights: [
            'Nederlandse kopers bereiken',
            'Lagere acquisitiekosten',
            'Meer internationale deals',
          ],
          order: 2,
        },
        {
          name: 'Hypotheekadviseurs',
          href: '/hypotheekadviseurs',
          icon: 'PiggyBank',
          description: 'Voor hypotheekadviseurs die hun pipeline willen vullen',
          highlights: [
            'Constante stroom aanvragen',
            'Betere kwaliteit leads',
            'Hogere conversieratio',
          ],
          order: 3,
        },
        {
          name: 'Projectontwikkelaars',
          href: '/projectontwikkelaars',
          icon: 'Factory',
          description: 'Voor projectontwikkelaars die sneller willen verkopen',
          highlights: [
            'Sneller units verkopen',
            'Minder marketingkosten',
            'Betere ROI op campagnes',
          ],
          order: 4,
        },
        {
          name: 'HR & Recruitment',
          href: '/hr-recruitment',
          icon: 'Users',
          description: 'Voor vastgoedbedrijven die toptalent zoeken',
          highlights: [
            '3x sneller vacatures vullen',
            'Sterk werkgeversmerk opbouwen',
          ],
          order: 5,
        },
      ],
    },
    footer: {
      copyrightText: '© {year} Real Accelerate. Alle rechten voorbehouden.',
      showAddress: true,
      showSocial: true,
    },
    isActive: true,
    version: 1,
  } as SiteSettingsDocument;
}
