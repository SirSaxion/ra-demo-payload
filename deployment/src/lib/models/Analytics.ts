import mongoose, { Model } from 'mongoose';

interface IAnalyticsEvent {
  path: string;
  timestamp: Date;
  referrer?: string;
  userAgent?: string;
}

interface IAnalyticsModel extends Model<IAnalyticsEvent> {}

const analyticsSchema = new mongoose.Schema<IAnalyticsEvent>({
  path: { type: String, required: true, index: true },
  timestamp: { type: Date, default: Date.now, required: true, index: true },
  referrer: { type: String, default: '' },
  userAgent: { type: String, default: '' },
});

// Index for common queries
analyticsSchema.index({ timestamp: -1, path: 1 });

const Analytics = (mongoose.models.Analytics || 
  mongoose.model<IAnalyticsEvent, IAnalyticsModel>('Analytics', analyticsSchema)) as IAnalyticsModel;

export default Analytics;
