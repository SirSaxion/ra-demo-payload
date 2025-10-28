'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { VersionDiff } from '@/lib/version-diff';
import VersionDetails from './VersionDetails';

interface Version {
  _id: string;
  versionNumber: number;
  author: string;
  message: string;
  createdAt: string;
}

interface VersionHistoryProps {
  open: boolean;
  onClose: () => void;
  slug: string;
  onRestore: () => void;
}

const ITEMS_PER_PAGE = 10;

export default function VersionHistory({ open, onClose, slug, onRestore }: VersionHistoryProps) {
  const [versions, setVersions] = useState<Version[]>([]);
  const [loading, setLoading] = useState(true);
  const [restoring, setRestoring] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVersion, setSelectedVersion] = useState<number | null>(null);
  const [diff, setDiff] = useState<VersionDiff | null>(null);
  const [loadingDiff, setLoadingDiff] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (open) {
      fetchVersions();
    }
  }, [open, slug]);

  const fetchVersions = async () => {
    setLoading(true);
    try {
      console.log('📋 [CLIENT] Fetching versions for slug:', slug);
      const url = `/api/pages/${encodeURIComponent(slug)}/versions`;
      console.log('📋 [CLIENT] Request URL:', url);
      
      const response = await fetch(url);
      console.log('📋 [CLIENT] Response status:', response.status);
      console.log('📋 [CLIENT] Response ok:', response.ok);
      
      const data = await response.json();
      console.log('📋 [CLIENT] Response data:', data);

      if (data.success) {
        console.log('✅ [CLIENT] Successfully loaded versions:', data.versions.length);
        setVersions(data.versions);
      } else {
        console.error('❌ [CLIENT] Failed to load versions:', data.error);
        toast.error(data.error || 'Failed to load versions');
      }
    } catch (error) {
      console.error('❌ [CLIENT] Error fetching versions:', error);
      toast.error('Failed to load versions');
    } finally {
      setLoading(false);
    }
  };

  const fetchDiff = async (versionNumber: number) => {
    setLoadingDiff(true);
    setSelectedVersion(versionNumber);
    setDetailsOpen(true); // Open details dialog
    
    try {
      const response = await fetch(
        `/api/pages/${encodeURIComponent(slug)}/versions/${versionNumber}/diff`
      );
      const data = await response.json();

      if (data.success) {
        setDiff(data.diff);
      } else {
        toast.error(data.error || 'Failed to load changes');
        setDetailsOpen(false);
      }
    } catch (error) {
      console.error('Error fetching diff:', error);
      toast.error('Failed to load changes');
      setDetailsOpen(false);
    } finally {
      setLoadingDiff(false);
    }
  };

  const handleDetailsClose = () => {
    setDetailsOpen(false);
    setSelectedVersion(null);
    setDiff(null);
  };

  const handleDetailsBack = () => {
    // Close details, reopen history
    setDetailsOpen(false);
  };

  const handleRestore = async (versionNumber: number) => {
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

  // Pagination
  const totalPages = Math.ceil(versions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedVersions = versions.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {/* Version History Dialog */}
      <Dialog open={open && !detailsOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl max-h-[85vh] overflow-hidden flex flex-col bg-[#1a1a1a]" showCloseButton={false}>
          <DialogHeader>
            <DialogTitle className="text-white">Version history</DialogTitle>
          </DialogHeader>

        {loading ? (
          <div className="text-center py-12 text-zinc-400">
            Loading versions...
          </div>
        ) : versions.length === 0 ? (
          <div className="text-center py-12 text-zinc-400">
            No version history available
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="flex-1 overflow-y-auto border border-[#2a2a2a] rounded-lg bg-[#1a1a1a]">
              <table className="w-full">
                <thead className="bg-[#2a2a2a] sticky top-0 z-10">
                  <tr className="border-b border-[#3a3a3a]">
                    <th className="text-left px-4 py-3 text-sm font-medium text-white">Version</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-white">Date</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-white">Author</th>
                    <th className="text-left px-4 py-3 text-sm font-medium text-white">Message</th>
                    <th className="text-right px-4 py-3 text-sm font-medium text-white">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedVersions.map((version, index) => {
                    const isLatest = currentPage === 1 && index === 0;
                    
                    return (
                      <tr
                        key={version._id}
                        className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a] transition-colors"
                      >
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-white">v{version.versionNumber}</span>
                            {isLatest && (
                              <span className="text-xs bg-[var(--brand-500)] text-black px-2 py-0.5 rounded font-medium">
                                Current
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          {formatDate(version.createdAt)}
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          {version.author}
                        </td>
                        <td className="px-4 py-3 text-sm text-zinc-400">
                          {version.message || '-'}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex gap-2 justify-end">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => fetchDiff(version.versionNumber)}
                              disabled={loadingDiff}
                              className="gap-2"
                            >
                              <Eye className="w-3 h-3" />
                              View details
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRestore(version.versionNumber)}
                              disabled={isLatest || restoring}
                              className="gap-2 border-[var(--brand-500)] text-[var(--brand-500)] hover:bg-[var(--brand-500)] hover:text-white"
                            >
                              <RotateCcw className="w-3 h-3" />
                              Restore
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 py-3 border-t border-[#2a2a2a]">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded border border-[#3a3a3a] disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-[#2a2a2a]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <span className="text-sm text-zinc-400">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded border border-[#3a3a3a] disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-[#2a2a2a]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Stats */}
            <div className="text-center text-xs text-zinc-500 py-2">
              Showing {startIndex + 1}-{Math.min(endIndex, versions.length)} of {versions.length} versions
            </div>
          </>
        )}

        {/* Close button */}
        <div className="flex gap-2 pt-3 border-t border-[#2a2a2a]">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>

      {/* Version Details Dialog */}
      <VersionDetails
        open={detailsOpen}
        onClose={handleDetailsClose}
        onBack={handleDetailsBack}
        versionNumber={selectedVersion || 0}
        diff={diff}
        loading={loadingDiff}
        slug={slug}
        onRestore={onRestore}
      />
    </>
  );
}
