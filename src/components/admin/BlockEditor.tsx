'use client'

import { useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import SortableBlock from './SortableBlock'
import BlockPalette from './BlockPalette'
import { BLOCK_REGISTRY } from '@/lib/cms/blocks'

interface Block {
  id: string
  type: string
  order: number
  props: Record<string, any>
}

interface BlockEditorProps {
  blocks: Block[]
  onBlocksChange: (blocks: Block[]) => void
}

export default function BlockEditor({ blocks, onBlocksChange }: BlockEditorProps) {
  const [showPalette, setShowPalette] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id)
      const newIndex = blocks.findIndex((b) => b.id === over.id)

      const reorderedBlocks = arrayMove(blocks, oldIndex, newIndex).map((block, index) => ({
        ...block,
        order: index,
      }))

      onBlocksChange(reorderedBlocks)
    }
  }

  const handleAddBlock = (blockType: string) => {
    // Get default props from block registry
    const blockDefinition = BLOCK_REGISTRY[blockType]
    const defaultProps = blockDefinition?.defaultProps || {}
    
    const newBlock: Block = {
      id: `${blockType.toLowerCase()}_${Date.now()}`,
      type: blockType,
      order: blocks.length,
      props: defaultProps,
    }

    console.log(`✨ [BLOCK EDITOR] Adding new block: ${blockType} with default props:`, defaultProps)
    
    onBlocksChange([...blocks, newBlock])
    setShowPalette(false)
  }

  const handleDeleteBlock = (blockId: string) => {
    const updatedBlocks = blocks
      .filter((b) => b.id !== blockId)
      .map((block, index) => ({ ...block, order: index }))

    onBlocksChange(updatedBlocks)
  }

  const handleUpdateBlock = (blockId: string, props: Record<string, any>) => {
    console.log('📝 [BLOCK EDITOR] Updating block:', blockId, 'with props:', props)
    const updatedBlocks = blocks.map((block) =>
      block.id === blockId ? { ...block, props } : block
    )
    console.log('📝 [BLOCK EDITOR] Updated blocks:', updatedBlocks)
    onBlocksChange(updatedBlocks)
  }

  return (
    <div className="space-y-4">
      <Card className="border-border bg-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-foreground">Page content</CardTitle>
            <Button
              size="sm"
              className="gap-2 bg-[var(--primary)] text-[var(--primary-foreground)]"
              onClick={() => setShowPalette(!showPalette)}
            >
              <Plus className="h-4 w-4" />
              Add block
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {showPalette && (
            <BlockPalette onSelectBlock={handleAddBlock} onClose={() => setShowPalette(false)} />
          )}

          {blocks.length === 0 ? (
            <div className="rounded-lg border-2 border-dashed border-border bg-card/50 p-12 text-center">
              <p className="text-[var(--color-text-secondary)]">
                No blocks yet. Click "Add block" to get started.
              </p>
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
                <div className="space-y-3">
                  {blocks.map((block) => (
                    <SortableBlock
                      key={block.id}
                      block={block}
                      onDelete={handleDeleteBlock}
                      onUpdate={handleUpdateBlock}
                    />
                  ))}
                </div>
              </SortableContext>
            </DndContext>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
