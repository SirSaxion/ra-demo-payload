'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, Edit3, MoveVertical, RotateCcw, ArrowLeft, Loader2 } from 'lucide-react';
import { VersionDiff, getChangeDescription, getPropChangeDescription } from '@/lib/version-diff';
import { useState } from 'react';
import { toast } from 'sonner';

interface VersionDetailsProps {
  open: boolean;
  onClose: () => void;
  onBack: () => void;
  versionNumber: number;
  diff: VersionDiff | null;
  loading: boolean;
  slug: string;
  onRestore: () => void;
}

export default function VersionDetails({
  open,
  onClose,
  onBack,
  versionNumber,
  diff,
  loading,
  slug,
  onRestore,
}: VersionDetailsProps) {
  const [restoring, setRestoring] = useState(false);

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
        toast.success(`Restored to version ${versionNumber}. Refreshing page...`);
        // Call onRestore which will trigger page reload and close dialogs
        onRestore();
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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col bg-[#1a1a1a]" showCloseButton={false}>
        <DialogHeader className="border-b border-[#2a2a2a] pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                onClick={onBack}
                className="gap-2 text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div>
                <DialogTitle className="text-white">
                  Version {versionNumber} Details
                </DialogTitle>
                {diff && (
                  <div className="flex gap-3 text-xs text-zinc-400 mt-1">
                    {diff.summary.blocksAdded > 0 && <span>+{diff.summary.blocksAdded} added</span>}
                    {diff.summary.blocksModified > 0 && <span>~{diff.summary.blocksModified} modified</span>}
                    {diff.summary.blocksRemoved > 0 && <span>-{diff.summary.blocksRemoved} removed</span>}
                    {diff.summary.blocksReordered > 0 && <span>↕{diff.summary.blocksReordered} moved</span>}
                  </div>
                )}
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleRestore}
              disabled={restoring}
              className="gap-2 bg-[var(--brand-500)] hover:bg-[var(--brand-600)] text-black"
            >
              {restoring ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Restoring...
                </>
              ) : (
                <>
                  <RotateCcw className="w-4 h-4" />
                  Restore
                </>
              )}
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-3 text-[var(--brand-500)]" />
                <p className="text-[var(--color-text-muted)]">Loading changes...</p>
              </div>
            </div>
          ) : !diff ? (
            <div className="text-center py-12 text-[var(--color-text-muted)]">
              No diff data available
            </div>
          ) : !diff.hasChanges ? (
            <div className="text-center py-12 text-[var(--color-text-muted)]">
              No changes detected
            </div>
          ) : (
            <div className="space-y-3 max-w-3xl mx-auto">
              {/* Added Blocks */}
              {diff.blocks.added.map((change, i) => (
                <div key={`added-${i}`} className="border border-emerald-500/30 rounded-lg overflow-hidden bg-emerald-500/5">
                  <div className="bg-emerald-500/10 px-4 py-3 border-b border-emerald-500/20 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">
                      {getChangeDescription(change)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Modified Blocks */}
              {diff.blocks.modified.map((change, i) => (
                <div key={`modified-${i}`} className="border border-[var(--brand-500)]/30 rounded-lg overflow-hidden bg-[#2a2a2a]">
                  <div className="bg-[#2a2a2a] px-4 py-3 border-b border-[#3a3a3a] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Edit3 className="w-4 h-4 text-[var(--brand-500)] flex-shrink-0" />
                      <span className="text-sm font-medium text-white">
                        {getChangeDescription(change)}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400">
                      {change.propChanges?.length || 0} change{change.propChanges?.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  {change.propChanges && change.propChanges.length > 0 && (
                    <div className="p-4 space-y-3">
                      {change.propChanges.map((propChange, pIdx) => (
                        <div key={pIdx} className="border-l-2 border-[var(--brand-500)]/30 pl-3">
                          <div className="font-mono text-xs text-zinc-500 mb-1">
                            {propChange.key}
                          </div>
                          <div className="text-sm text-zinc-300">
                            {getPropChangeDescription(propChange)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Removed Blocks */}
              {diff.blocks.removed.map((change, i) => (
                <div key={`removed-${i}`} className="border border-red-500/30 rounded-lg overflow-hidden bg-red-500/5">
                  <div className="bg-red-500/10 px-4 py-3 border-b border-red-500/20 flex items-center gap-2">
                    <Minus className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-white">
                      {getChangeDescription(change)}
                    </span>
                  </div>
                </div>
              ))}

              {/* Reordered Blocks */}
              {diff.blocks.reordered.map((change, i) => (
                <div key={`reordered-${i}`} className="border border-amber-500/30 rounded-lg overflow-hidden bg-amber-500/5">
                  <div className="bg-amber-500/10 px-4 py-3 flex items-center gap-2">
                    <MoveVertical className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-sm text-white">
                      {getChangeDescription(change)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
