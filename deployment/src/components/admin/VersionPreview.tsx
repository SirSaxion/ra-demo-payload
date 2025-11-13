'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, RotateCcw, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import BlockRenderer from '@/components/cms/BlockRenderer';

interface VersionPreviewProps {
  open: boolean;
  onClose: () => void;
  slug: string;
  versionNumber: number;
  onRestore: () => void;
}

interface Block {
  id: string;
  type: string;
  order: number;
  props: Record<string, any>;
}

interface VersionData {
  versionNumber: number;
  author: string;
  message: string;
  createdAt: string;
  snapshot: {
    title: string;
    content: {
      nl: {
        blocks: Block[];
      };
    };
  };
}

export default function VersionPreview({ 
  open, 
  onClose, 
  slug, 
  versionNumber,
  onRestore 
}: VersionPreviewProps) {
  const [version, setVersion] = useState<VersionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState(false);

  useEffect(() => {
    if (open && versionNumber) {
      fetchVersion();
    }
  }, [open, versionNumber, slug]);

  const fetchVersion = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/pages/${encodeURIComponent(slug)}/versions/${versionNumber}`
      );
      const data = await response.json();

      if (data.success) {
        setVersion(data.version);
      } else {
        toast.error(data.error || 'Failed to load version');
      }
    } catch (error) {
      console.error('Error fetching version:', error);
      toast.error('Failed to load version');
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    if (!confirm(`Restore to version ${versionNumber}?\n\nThe current version will be backed up.`)) {
      return;
    }

    setRestoring(true);
    try {
      const response = await fetch(`/api/pages/${encodeURIComponent(slug)}/restore`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ versionNumber }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(`Restored to version ${versionNumber}`);
        onRestore();
        onClose();
      } else {
        toast.error(data.error || 'Failed to restore');
      }
    } catch (error) {
      console.error('Error restoring version:', error);
      toast.error('Failed to restore version');
    } finally {
      setRestoring(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const blocks = version?.snapshot?.content?.nl?.blocks || [];
  const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[90vh] overflow-hidden flex flex-col bg-[var(--color-surface-1)]">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-foreground text-lg">
                Version Preview: v{versionNumber}
              </DialogTitle>
              {version && (
                <div className="flex gap-4 text-xs text-[var(--color-text-secondary)] mt-1">
                  <span>{formatDate(version.createdAt)}</span>
                  <span>by {version.author}</span>
                  {version.message && <span>• {version.message}</span>}
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleRestore}
                disabled={restoring}
                className="gap-2 bg-[var(--brand-500)] hover:bg-[var(--brand-600)] text-white"
              >
                {restoring ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Restoring...
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    Restore this version
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={onClose}
                className="hover:bg-[var(--color-surface-3)]"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {loading ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-[var(--brand-500)]" />
              <p className="text-[var(--color-text-muted)]">Loading version preview...</p>
            </div>
          </div>
        ) : !version ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <p className="text-[var(--color-text-muted)]">Version not found</p>
          </div>
        ) : (
          <>
            {/* Warning Banner */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-4">
              <p className="text-sm text-foreground">
                <strong>Preview Mode:</strong> You're viewing how this page looked at version {versionNumber}. 
                This is read-only. Click "Restore" to make this the current version.
              </p>
            </div>

            {/* Preview Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-7xl">
                {/* Page Title */}
                <div className="mb-6 pb-4 border-b border-border">
                  <h1 className="text-2xl font-bold text-foreground">
                    {version.snapshot.title}
                  </h1>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                    {sortedBlocks.length} block{sortedBlocks.length !== 1 ? 's' : ''}
                  </p>
                </div>

                {/* Blocks Preview */}
                <div className="space-y-4">
                  {sortedBlocks.map((block) => (
                    <div 
                      key={block.id} 
                      className="border border-border rounded-lg overflow-hidden bg-[var(--color-surface-2)]"
                    >
                      {/* Block Header */}
                      <div className="bg-[var(--color-surface-3)] px-4 py-2 border-b border-border">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-[var(--brand-500)]">
                              {block.type.replace('Home-', '')}
                            </span>
                            <span className="text-xs text-[var(--color-text-muted)]">
                              #{block.order}
                            </span>
                          </div>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {Object.keys(block.props || {}).length} props
                          </span>
                        </div>
                      </div>

                      {/* Block Preview (Simplified) */}
                      <div className="p-4">
                        <div className="space-y-2">
                          {Object.entries(block.props || {}).slice(0, 5).map(([key, value]) => {
                            const displayValue = typeof value === 'object' 
                              ? Array.isArray(value) 
                                ? `Array (${value.length} items)`
                                : 'Object'
                              : String(value).slice(0, 100);
                            
                            return (
                              <div key={key} className="text-sm">
                                <span className="text-[var(--color-text-muted)] font-mono text-xs">
                                  {key}:
                                </span>{' '}
                                <span className="text-foreground">
                                  {displayValue}
                                  {String(value).length > 100 && '...'}
                                </span>
                              </div>
                            );
                          })}
                          {Object.keys(block.props || {}).length > 5 && (
                            <p className="text-xs text-[var(--color-text-muted)] italic">
                              + {Object.keys(block.props).length - 5} more props
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
