import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

export interface ImageSize {
  name: string;
  width: number;
  height?: number;
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

export interface ProcessedImage {
  size: string;
  url: string;
  width: number;
  height: number;
  fileSize: number;
}

// WordPress-inspired image sizes
export const IMAGE_SIZES: ImageSize[] = [
  { name: 'thumbnail', width: 150, height: 150, fit: 'cover' },
  { name: 'small', width: 300, height: 300, fit: 'cover' },
  { name: 'medium', width: 768, fit: 'inside' },
  { name: 'large', width: 1024, fit: 'inside' },
  { name: 'xlarge', width: 1920, fit: 'inside' },
];

// Generate a tiny blur placeholder (20x20px, base64)
export async function generateBlurPlaceholder(buffer: Buffer): Promise<string> {
  try {
    const blurBuffer = await sharp(buffer)
      .resize(20, 20, { fit: 'inside' })
      .blur(2)
      .jpeg({ quality: 50 })
      .toBuffer();
    
    return `data:image/jpeg;base64,${blurBuffer.toString('base64')}`;
  } catch (error) {
    console.error('Error generating blur placeholder:', error);
    return '';
  }
}

// Process image and generate multiple sizes
export async function processImage(
  buffer: Buffer,
  originalFilename: string,
  outputDir: string,
  quality: number = 85
): Promise<{
  sizes: ProcessedImage[];
  blurPlaceholder: string;
  metadata: { width: number; height: number; format: string };
}> {
  const ext = path.extname(originalFilename);
  const nameWithoutExt = path.basename(originalFilename, ext);
  
  // Get original image metadata
  const image = sharp(buffer);
  const metadata = await image.metadata();
  
  if (!metadata.width || !metadata.height) {
    throw new Error('Could not read image dimensions');
  }

  // Generate blur placeholder
  const blurPlaceholder = await generateBlurPlaceholder(buffer);

  const processedSizes: ProcessedImage[] = [];

  // Process each size
  for (const size of IMAGE_SIZES) {
    // Skip if original is smaller than target size
    if (metadata.width < size.width && !size.height) {
      continue;
    }

    try {
      const resizeOptions: sharp.ResizeOptions = {
        width: size.width,
        height: size.height,
        fit: size.fit || 'inside',
        withoutEnlargement: true,
      };

      const resizedBuffer = await sharp(buffer)
        .resize(resizeOptions)
        .jpeg({ quality, progressive: true })
        .toBuffer();

      const resizedMetadata = await sharp(resizedBuffer).metadata();
      
      // Generate filename: original-name-medium.jpg
      const sizedFilename = `${nameWithoutExt}-${size.name}${ext}`;
      const sizedPath = path.join(outputDir, sizedFilename);
      
      // Save to disk
      await fs.writeFile(sizedPath, resizedBuffer);

      // Get relative URL path
      const relativePath = sizedPath.split('/public')[1] || sizedPath;
      
      processedSizes.push({
        size: size.name,
        url: relativePath,
        width: resizedMetadata.width || size.width,
        height: resizedMetadata.height || size.height || 0,
        fileSize: resizedBuffer.length,
      });
    } catch (error) {
      console.error(`Error processing ${size.name} size:`, error);
    }
  }

  return {
    sizes: processedSizes,
    blurPlaceholder,
    metadata: {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format || 'unknown',
    },
  };
}

// Get the best size for a given width requirement
export function getBestSize(
  sizes: ProcessedImage[],
  targetWidth: number
): ProcessedImage | null {
  if (!sizes || sizes.length === 0) return null;

  // Find the smallest size that's larger than target
  const suitable = sizes
    .filter(s => s.width >= targetWidth)
    .sort((a, b) => a.width - b.width);

  // If found, return the smallest suitable size
  if (suitable.length > 0) {
    return suitable[0];
  }

  // Otherwise return the largest available
  return sizes.sort((a, b) => b.width - a.width)[0];
}

// Check if file is an image that can be processed
export function isProcessableImage(mimeType: string): boolean {
  const processableTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];
  
  return processableTypes.includes(mimeType);
}
