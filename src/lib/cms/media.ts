import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  path: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
  // Image-specific fields
  sizes?: {
    size: string;
    url: string;
    width: number;
    height: number;
    fileSize: number;
  }[];
  blurPlaceholder?: string;
  width?: number;
  height?: number;
}

export interface MediaIndex {
  files: MediaFile[];
}

const MEDIA_INDEX_PATH = path.join(process.cwd(), 'data', 'media', 'index.json');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Ensure media directories exist
async function ensureMediaDirectories() {
  const dirs = [
    path.join(process.cwd(), 'data', 'media'),
    path.join(PUBLIC_DIR, 'images', 'uploads'),
    path.join(PUBLIC_DIR, 'videos', 'uploads'),
  ];

  for (const dir of dirs) {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Get media index
export async function getMediaIndex(): Promise<MediaIndex> {
  await ensureMediaDirectories();

  try {
    const data = await fs.readFile(MEDIA_INDEX_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty index
    return { files: [] };
  }
}

// Save media index
async function saveMediaIndex(index: MediaIndex): Promise<void> {
  await ensureMediaDirectories();
  await fs.writeFile(MEDIA_INDEX_PATH, JSON.stringify(index, null, 2), 'utf-8');
}

// Add file to index
export async function addFileToIndex(file: MediaFile): Promise<void> {
  const index = await getMediaIndex();
  index.files.unshift(file); // Add to beginning
  await saveMediaIndex(index);
}

// Remove file from index
export async function removeFileFromIndex(fileId: string): Promise<void> {
  const index = await getMediaIndex();
  index.files = index.files.filter(f => f.id !== fileId);
  await saveMediaIndex(index);
}

// Generate unique filename
export function generateUniqueFilename(originalName: string): string {
  const ext = path.extname(originalName);
  const nameWithoutExt = path.basename(originalName, ext);
  const hash = crypto.randomBytes(8).toString('hex');
  const timestamp = Date.now();
  
  // Sanitize filename
  const sanitized = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 30);
  
  return `${timestamp}-${hash}-${sanitized}${ext}`;
}

// Get file category (images or videos)
export function getFileCategory(mimeType: string): 'images' | 'videos' {
  if (mimeType.startsWith('image/')) return 'images';
  if (mimeType.startsWith('video/')) return 'videos';
  return 'images'; // default
}

// Validate file type
export function isValidFileType(mimeType: string, allowedTypes?: string[]): boolean {
  const validTypes = allowedTypes || [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
    'image/svg+xml',
    'video/mp4',
    'video/webm',
  ];
  
  return validTypes.includes(mimeType);
}

// Delete physical file
export async function deletePhysicalFile(filePath: string): Promise<void> {
  const fullPath = path.join(PUBLIC_DIR, filePath);
  try {
    await fs.unlink(fullPath);
  } catch (error) {
    console.error('Error deleting file:', error);
  }
}
