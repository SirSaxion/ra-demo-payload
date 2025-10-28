/**
 * Version Diff Utility
 * Calculates differences between two page versions
 */

interface Block {
  id: string;
  type: string;
  order: number;
  props: Record<string, any>;
}

interface PageContent {
  blocks?: Block[];
  [key: string]: any;
}

interface VersionSnapshot {
  title?: string;
  content?: {
    nl?: PageContent;
    [key: string]: any;
  };
  metadata?: Record<string, any>;
}

export interface BlockChange {
  blockId: string;
  blockType: string;
  changeType: 'added' | 'removed' | 'modified' | 'reordered';
  oldOrder?: number;
  newOrder?: number;
  propChanges?: PropChange[];
}

export interface PropChange {
  key: string;
  oldValue: any;
  newValue: any;
  changeType: 'added' | 'removed' | 'modified';
}

export interface VersionDiff {
  hasChanges: boolean;
  titleChanged: boolean;
  oldTitle?: string;
  newTitle?: string;
  blocks: {
    added: BlockChange[];
    removed: BlockChange[];
    modified: BlockChange[];
    reordered: BlockChange[];
  };
  summary: {
    totalChanges: number;
    blocksAdded: number;
    blocksRemoved: number;
    blocksModified: number;
    blocksReordered: number;
  };
}

/**
 * Calculate prop-level differences
 */
function calculatePropChanges(oldProps: Record<string, any>, newProps: Record<string, any>): PropChange[] {
  const changes: PropChange[] = [];
  const allKeys = new Set([...Object.keys(oldProps || {}), ...Object.keys(newProps || {})]);

  for (const key of allKeys) {
    const oldValue = oldProps?.[key];
    const newValue = newProps?.[key];

    // Skip if values are identical
    if (JSON.stringify(oldValue) === JSON.stringify(newValue)) {
      continue;
    }

    if (oldValue === undefined) {
      changes.push({ key, oldValue, newValue, changeType: 'added' });
    } else if (newValue === undefined) {
      changes.push({ key, oldValue, newValue, changeType: 'removed' });
    } else {
      changes.push({ key, oldValue, newValue, changeType: 'modified' });
    }
  }

  return changes;
}

/**
 * Format value for display (truncate if too long)
 */
function formatValue(value: any, maxLength: number = 50): string {
  if (value === null || value === undefined) return 'empty';
  
  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return `Array (${value.length} items)`;
    }
    return 'Object';
  }
  
  const str = String(value);
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + '...';
  }
  return str;
}

/**
 * Get human-readable description of a prop change
 */
export function getPropChangeDescription(propChange: PropChange): string {
  const { key, oldValue, newValue, changeType } = propChange;
  
  // Special handling for common prop names
  const isImage = key.toLowerCase().includes('image') || key.toLowerCase().includes('src') || key.toLowerCase().includes('avatar');
  const isUrl = key.toLowerCase().includes('url') || key.toLowerCase().includes('href') || key.toLowerCase().includes('link');
  
  switch (changeType) {
    case 'added':
      if (isImage) return `Added image: ${formatValue(newValue)}`;
      if (isUrl) return `Added link: ${formatValue(newValue)}`;
      return `Added: ${formatValue(newValue)}`;
      
    case 'removed':
      if (isImage) return `Removed image: ${formatValue(oldValue)}`;
      if (isUrl) return `Removed link: ${formatValue(oldValue)}`;
      return `Removed: ${formatValue(oldValue)}`;
      
    case 'modified':
      if (isImage) return `Image changed: ${formatValue(oldValue, 30)} → ${formatValue(newValue, 30)}`;
      if (isUrl) return `Link changed: ${formatValue(oldValue, 30)} → ${formatValue(newValue, 30)}`;
      return `${formatValue(oldValue)} → ${formatValue(newValue)}`;
      
    default:
      return `Changed ${key}`;
  }
}

/**
 * Get human-readable description of a block change
 */
export function getChangeDescription(change: BlockChange): string {
  const { blockType, changeType } = change;
  const cleanType = blockType.replace('Home-', '');

  switch (changeType) {
    case 'added':
      return `Added ${cleanType} block`;
    case 'removed':
      return `Removed ${cleanType} block`;
    case 'reordered':
      return `Moved ${cleanType} (position ${change.oldOrder} → ${change.newOrder})`;
    case 'modified':
      return `${cleanType}`;
    default:
      return `Changed ${cleanType}`;
  }
}

/**
 * Calculate differences between two versions
 */
export function calculateVersionDiff(
  oldVersion: VersionSnapshot,
  newVersion: VersionSnapshot
): VersionDiff {
  const oldBlocks = oldVersion?.content?.nl?.blocks || [];
  const newBlocks = newVersion?.content?.nl?.blocks || [];

  const oldBlocksMap = new Map(oldBlocks.map(b => [b.id, b]));
  const newBlocksMap = new Map(newBlocks.map(b => [b.id, b]));

  const added: BlockChange[] = [];
  const removed: BlockChange[] = [];
  const modified: BlockChange[] = [];
  const reordered: BlockChange[] = [];

  // Find removed blocks
  for (const oldBlock of oldBlocks) {
    if (!newBlocksMap.has(oldBlock.id)) {
      removed.push({
        blockId: oldBlock.id,
        blockType: oldBlock.type,
        changeType: 'removed',
      });
    }
  }

  // Find added and modified blocks
  for (const newBlock of newBlocks) {
    const oldBlock = oldBlocksMap.get(newBlock.id);

    if (!oldBlock) {
      // Block was added
      added.push({
        blockId: newBlock.id,
        blockType: newBlock.type,
        changeType: 'added',
        newOrder: newBlock.order,
      });
    } else {
      // Check for modifications
      const propChanges = calculatePropChanges(oldBlock.props || {}, newBlock.props || {});
      
      if (propChanges.length > 0) {
        modified.push({
          blockId: newBlock.id,
          blockType: newBlock.type,
          changeType: 'modified',
          propChanges,
        });
      }

      // Check for reordering
      if (oldBlock.order !== newBlock.order) {
        reordered.push({
          blockId: newBlock.id,
          blockType: newBlock.type,
          changeType: 'reordered',
          oldOrder: oldBlock.order,
          newOrder: newBlock.order,
        });
      }
    }
  }

  // Check title changes
  const oldTitle = oldVersion?.title;
  const newTitle = newVersion?.title;
  const titleChanged = oldTitle !== newTitle;

  const totalChanges = added.length + removed.length + modified.length + reordered.length + (titleChanged ? 1 : 0);

  return {
    hasChanges: totalChanges > 0,
    titleChanged,
    oldTitle,
    newTitle,
    blocks: {
      added,
      removed,
      modified,
      reordered,
    },
    summary: {
      totalChanges,
      blocksAdded: added.length,
      blocksRemoved: removed.length,
      blocksModified: modified.length,
      blocksReordered: reordered.length,
    },
  };
}
