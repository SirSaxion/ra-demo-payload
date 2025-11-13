'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GripVertical, Trash2, ChevronDown, ChevronUp, Edit } from 'lucide-react'
import { useState } from 'react'
import { BLOCK_REGISTRY } from '@/lib/cms/blocks'
import PropertyEditor from './PropertyEditor'

interface Block {
  id: string
  type: string
  order: number
  props: Record<string, any>
}

interface SortableBlockProps {
  block: Block
  onDelete: (id: string) => void
  onUpdate: (id: string, props: Record<string, any>) => void
}

export default function SortableBlock({ block, onDelete, onUpdate }: SortableBlockProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: block.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const blockInfo = BLOCK_REGISTRY[block.type] || {
    name: block.type,
    category: 'Unknown',
    description: 'No description available',
  }

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't toggle editor if clicking on buttons, inputs, textareas, or drag handle
    const target = e.target as HTMLElement
    if (
      target.closest('button') ||
      target.closest('[data-slot="button"]') ||
      target.closest('input') ||
      target.closest('textarea') ||
      target.closest('select') ||
      target.closest('[role="dialog"]') ||
      isDragging ||
      isEditing // Don't toggle if already editing
    ) {
      return
    }
    // Toggle editing state
    setIsEditing(!isEditing)
  }

  return (
    <div ref={setNodeRef} style={style}>
      <Card 
        className="border-border bg-[var(--color-surface-2)] cursor-pointer"
        onClick={handleCardClick}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {/* Drag Handle */}
            <button
              {...attributes}
              {...listeners}
              className="cursor-grab touch-none text-[var(--color-text-muted)] active:cursor-grabbing"
              onClick={(e) => e.stopPropagation()}
            >
              <GripVertical className="h-5 w-5" />
            </button>

            {/* Block Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">{blockInfo.name}</span>
                <span className="rounded-full bg-[var(--brand-500)]/20 px-2 py-0.5 text-xs text-[var(--brand-500)]">
                  {blockInfo.category}
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">{block.type}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsEditing(!isEditing)
                }}
                className="h-8 w-8 p-0"
                title="Edit properties"
              >
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsExpanded(!isExpanded)
                }}
                className="h-8 w-8 p-0"
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  onDelete(block.id)
                }}
                className="h-8 w-8 p-0 text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Property Editor */}
          {isEditing && (
            <div className="mt-4 border-t border-border pt-4">
              <PropertyEditor
                blockType={block.type}
                props={block.props}
                onSave={(newProps) => onUpdate(block.id, newProps)}
                onClose={() => setIsEditing(false)}
              />
            </div>
          )}

          {/* Expanded Info */}
          {isExpanded && (
            <div className="mt-4 space-y-3 border-t border-border pt-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {blockInfo.description}
              </p>
              <div className="rounded-md bg-[var(--color-surface-1)] p-3">
                <p className="text-xs text-[var(--color-text-muted)]">Current properties:</p>
                <pre className="mt-2 text-xs text-[var(--color-text-secondary)] overflow-x-auto">
                  {JSON.stringify(block.props, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
