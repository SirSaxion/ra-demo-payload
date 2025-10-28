'use client';

import { useState, useEffect } from 'react';
import { Search, Image as ImageIcon, Video, Check, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import OptimizedImage from '@/components/admin/OptimizedImage';

const ITEMS_PER_PAGE = 12;

interface MediaFile {
  id: string;
  filename: string;
  originalName: string;
  path: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
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

interface MediaPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (url: string) => void;
  currentValue?: string;
}

export default function MediaPicker({ open, onClose, onSelect, currentValue }: MediaPickerProps) {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUrl, setSelectedUrl] = useState<string | null>(currentValue || null);
  const [currentPage, setCurrentPage] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (open) {
      fetchFiles();
    }
  }, [open]);

  const fetchFiles = async () => {
    try {
      const response = await fetch('/api/media/list');
      const data = await response.json();
      
      if (data.success) {
        setFiles(data.files);
      }
    } catch (error) {
      console.error('Failed to fetch files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;

    setUploading(true);
    const file = fileList[0];

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/media/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('File uploaded successfully');
        await fetchFiles();
        setSelectedUrl(data.file.url);
      } else {
        toast.error(data.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  const filteredFiles = files.filter((file) =>
    file.originalName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredFiles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedFiles = filteredFiles.slice(startIndex, endIndex);

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files);
    }
  };

  const handleSelect = () => {
    if (selectedUrl) {
      onSelect(selectedUrl);
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden flex flex-col bg-zinc-900">
        <DialogHeader>
          <DialogTitle>Select media</DialogTitle>
        </DialogHeader>

        {/* Upload zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive
              ? 'border-primary bg-primary/5'
              : 'border-zinc-700 bg-zinc-800/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">
                {uploading ? 'Uploading...' : 'Drag and drop or click to upload'}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                JPG, PNG, WebP, SVG, MP4, WebM • Max 50MB
              </p>
            </div>
            <label className="shrink-0">
              <Button disabled={uploading} size="sm" className="cursor-pointer" asChild>
                <span>
                  {uploading ? 'Uploading...' : 'Browse'}
                </span>
              </Button>
              <input
                type="file"
                className="hidden"
                accept="image/*,video/*"
                onChange={(e) => handleUpload(e.target.files)}
                disabled={uploading}
              />
            </label>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
          <Input
            type="text"
            placeholder="Search files..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Files grid */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="text-center py-12 text-[var(--color-text-muted)]">
              Loading...
            </div>
          ) : filteredFiles.length === 0 ? (
            <div className="text-center py-12 text-[var(--color-text-muted)]">
              <p className="mb-2">
                {searchQuery ? 'No files found' : 'No files uploaded yet'}
              </p>
              <p className="text-xs text-[var(--color-text-secondary)] mb-4">
                Upload a file using the button above
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 pb-4">
              {paginatedFiles.map((file) => {
                const isSelected = selectedUrl === file.url;
                
                return (
                  <div
                    key={file.id}
                    onClick={() => setSelectedUrl(file.url)}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 ${
                      isSelected
                        ? 'border-primary ring-2 ring-primary/50'
                        : 'border-zinc-700'
                    }`}
                  >
                    {/* Preview */}
                    <div className="aspect-square bg-zinc-800 flex items-center justify-center overflow-hidden">
                      {file.type.startsWith('image/') ? (
                        <OptimizedImage
                          src={file.url}
                          alt={file.originalName}
                          blurPlaceholder={file.blurPlaceholder}
                          sizes={file.sizes}
                          targetWidth={250}
                          className="w-full h-full"
                        />
                      ) : file.type.startsWith('video/') ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-[var(--color-text-muted)]" />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-[var(--color-text-muted)]" />
                        </div>
                      )}
                    </div>

                    {/* Selected indicator */}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}

                    {/* Name */}
                    <div className="p-2 bg-zinc-800/80">
                      <p className="text-xs truncate">{file.originalName}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 py-2 border-t">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-800 hover:bg-zinc-700"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-sm text-[var(--color-text-secondary)]">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded border border-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-800 hover:bg-zinc-700"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Stats */}
        {filteredFiles.length > 0 && (
          <div className="text-center text-xs text-[var(--color-text-muted)] py-1">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredFiles.length)} of {filteredFiles.length}
            {searchQuery && ' (filtered)'}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t">
          <Button
            onClick={handleSelect}
            disabled={!selectedUrl}
            className="flex-1"
          >
            Insert
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
