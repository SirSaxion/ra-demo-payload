'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'
import { BLOCK_REGISTRY } from '@/lib/cms/blocks'

interface BlockPaletteProps {
  onSelectBlock: (blockType: string) => void
  onClose: () => void
}

export default function BlockPalette({ onSelectBlock, onClose }: BlockPaletteProps) {
  const [search, setSearch] = useState('')

  const categories = Array.from(new Set(Object.values(BLOCK_REGISTRY).map((b) => b.category)))

  const filteredBlocks = Object.entries(BLOCK_REGISTRY).filter(([type, info]) => {
    const searchLower = search.toLowerCase()
    return (
      info.name.toLowerCase().includes(searchLower) ||
      info.category.toLowerCase().includes(searchLower) ||
      type.toLowerCase().includes(searchLower)
    )
  })

  const blocksByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredBlocks.filter(([, info]) => info.category === category)
    return acc
  }, {} as Record<string, [string, any][]>)

  return (
    <Card className="border-[var(--brand-500)]/50 bg-[var(--color-surface-1)]">
      <CardContent className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Add a block</h3>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <Input
            placeholder="Search blocks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-input pl-10 text-foreground"
          />
        </div>

        <div className="max-h-[400px] space-y-4 overflow-y-auto">
          {Object.entries(blocksByCategory).map(([category, blocks]) =>
            blocks.length > 0 ? (
              <div key={category}>
                <h4 className="mb-2 text-sm font-semibold text-[var(--brand-500)]">{category}</h4>
                <div className="grid gap-2">
                  {blocks.map(([type, info]) => (
                    <button
                      key={type}
                      onClick={() => onSelectBlock(type)}
                      className="rounded-lg border border-border bg-card p-3 text-left"
                    >
                      <div className="font-medium text-foreground">{info.name}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{info.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null
          )}

          {filteredBlocks.length === 0 && (
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              No blocks found matching "{search}"
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
