import mongoose from 'mongoose';

export interface NavLink {
  name: string;
  href: string;
  order?: number;
}

export interface TargetGroup {
  name: string;
  href: string;
  icon: string;
  description: string;
  highlights: string[];
  order?: number;
}

export interface SocialMedia {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface SiteSettingsDocument {
  // Company info
  company: {
    name: string;
    tagline: string;
    logo: string;
    address: {
      street: string;
      postalCode: string;
      city: string;
      country: string;
    };
    badge?: string;
  };

  // Contact
  contact: {
    phone: string;
    phoneLink: string;
    email: string;
    emailLink: string;
  };

  // Social Media
  social: SocialMedia;

  // Navigation
  navigation: {
    mainLinks: NavLink[];
    targetGroups: TargetGroup[];
  };

  // Footer
  footer: {
    copyrightText: string;
    showAddress: boolean;
    showSocial: boolean;
  };

  // Meta
  isActive: boolean;
  version: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const NavLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
  order: { type: Number, default: 0 },
});

const TargetGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  href: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  highlights: [{ type: String }],
  order: { type: Number, default: 0 },
});

const SiteSettingsSchema = new mongoose.Schema<SiteSettingsDocument>(
  {
    company: {
      name: { type: String, required: true, default: 'Real Accelerate' },
      tagline: { type: String, required: true, default: 'Voorspelbare groei voor makelaars en vastgoedteams' },
      logo: { type: String, required: true, default: '/images/logorealaccelerate.webp' },
      address: {
        street: { type: String, required: true, default: 'Daalwijkdreef 47' },
        postalCode: { type: String, required: true, default: '1103 AD' },
        city: { type: String, required: true, default: 'Amsterdam' },
        country: { type: String, required: true, default: 'Nederland' },
      },
      badge: { type: String, default: 'IQI Global Partner' },
    },

    contact: {
      phone: { type: String, required: true, default: '085 060 2989' },
      phoneLink: { type: String, required: true, default: 'tel:+31850602989' },
      email: { type: String, required: true, default: 'info@realaccelerate.nl' },
      emailLink: { type: String, required: true, default: 'mailto:info@realaccelerate.nl' },
    },

    social: {
      linkedin: { type: String, default: 'https://www.linkedin.com/company/realaccelerate' },
      facebook: { type: String, default: 'https://www.facebook.com/realaccelerate' },
      instagram: { type: String, default: 'https://www.instagram.com/realaccelerate' },
      twitter: { type: String, default: '' },
    },

    navigation: {
      mainLinks: { type: [NavLinkSchema], default: [] },
      targetGroups: { type: [TargetGroupSchema], default: [] },
    },

    footer: {
      copyrightText: { type: String, default: '© {year} Real Accelerate. Alle rechten voorbehouden.' },
      showAddress: { type: Boolean, default: true },
      showSocial: { type: Boolean, default: true },
    },

    isActive: { type: Boolean, default: true },
    version: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

// Ensure only one active settings document
SiteSettingsSchema.pre('save', async function (next) {
  if (this.isActive) {
    await mongoose.model('SiteSettings').updateMany(
      { _id: { $ne: this._id } },
      { $set: { isActive: false } }
    );
  }
  next();
});

const SiteSettings = mongoose.models.SiteSettings || mongoose.model<SiteSettingsDocument>('SiteSettings', SiteSettingsSchema);

export default SiteSettings;
