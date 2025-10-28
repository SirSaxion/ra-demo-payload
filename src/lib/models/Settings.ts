import mongoose, { Model } from 'mongoose';

interface ISettings {
  general: {
    siteName: string;
    siteTagline: string;
    logo: string;
    favicon: string;
  };
  media: {
    maxUploadSize: number;
    imageQuality: number;
    allowedTypes: string[];
    autoGenerateThumbnails: boolean;
  };
  security: {
    loginRateLimit: number;
    sessionTimeout: number;
  };
  developer: {
    customCss: string;
    customJs: string;
  };
  updatedAt: Date;
}

interface ISettingsModel extends Model<ISettings> {
  getSingleton(): Promise<mongoose.Document<unknown, {}, ISettings> & ISettings>;
}

const settingsSchema = new mongoose.Schema<ISettings>({
  general: {
    siteName: { type: String, default: 'Real Accelerate' },
    siteTagline: { type: String, default: 'Your success accelerator' },
    logo: { type: String, default: '' },
    favicon: { type: String, default: '' },
  },
  media: {
    maxUploadSize: { type: Number, default: 50 }, // in MB
    imageQuality: { type: Number, default: 85 }, // 1-100
    allowedTypes: {
      type: [String],
      default: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg+xml', 'image/x-icon', 'image/vnd.microsoft.icon', 'video/mp4', 'video/webm']
    },
    autoGenerateThumbnails: { type: Boolean, default: true },
  },
  security: {
    loginRateLimit: { type: Number, default: 5 }, // attempts per minute
    sessionTimeout: { type: Number, default: 7 }, // in days
  },
  developer: {
    customCss: { type: String, default: '' },
    customJs: { type: String, default: '' },
  },
  updatedAt: { type: Date, default: Date.now },
});

// Only one settings document should exist
// We'll use a singleton pattern with a fixed ID
settingsSchema.statics.getSingleton = async function() {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

const Settings = (mongoose.models.Settings || mongoose.model<ISettings, ISettingsModel>('Settings', settingsSchema)) as ISettingsModel;

export default Settings;
