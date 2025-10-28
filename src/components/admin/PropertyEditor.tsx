'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Image as ImageIcon, Link as LinkIcon } from 'lucide-react'
import MediaPicker from './MediaPicker'
import LinkPicker from './LinkPicker'

interface PropertyEditorProps {
  blockType: string
  props: Record<string, any>
  onSave: (newProps: Record<string, any>) => void
  onClose: () => void
}

export default function PropertyEditor({ blockType, props, onSave, onClose }: PropertyEditorProps) {
  const [editedProps, setEditedProps] = useState(props || {})
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false)
  const [mediaPickerKey, setMediaPickerKey] = useState<string | null>(null)
  const [linkPickerOpen, setLinkPickerOpen] = useState(false)
  const [linkPickerKey, setLinkPickerKey] = useState<string | null>(null)

  const handleChange = (key: string, value: any) => {
    const newProps = { ...editedProps, [key]: value }
    setEditedProps(newProps)
    onSave(newProps)
  }

  const handleArrayChange = (key: string, index: number, value: any) => {
    const array = [...(editedProps[key] || [])]
    array[index] = value
    const newProps = { ...editedProps, [key]: array }
    setEditedProps(newProps)
    onSave(newProps)
  }

  const handleObjectChange = (key: string, subKey: string, value: any) => {
    const obj = { ...(editedProps[key] || {}) }
    obj[subKey] = value
    const newProps = { ...editedProps, [key]: obj }
    setEditedProps(newProps)
    onSave(newProps)
  }

  const addArrayItem = (key: string) => {
    const currentArray = editedProps[key] || []
    
    // Determine what type of item to add based on existing items
    let newItem: any = ''
    
    if (currentArray.length > 0) {
      const firstItem = currentArray[0]
      
      // If first item is an object, create a new object with same structure but empty values
      if (typeof firstItem === 'object' && firstItem !== null && !Array.isArray(firstItem)) {
        newItem = {}
        Object.keys(firstItem).forEach(itemKey => {
          const value = firstItem[itemKey]
          if (typeof value === 'string') {
            newItem[itemKey] = ''
          } else if (typeof value === 'number') {
            newItem[itemKey] = 0
          } else if (typeof value === 'boolean') {
            newItem[itemKey] = false
          } else if (Array.isArray(value)) {
            newItem[itemKey] = []
          } else if (typeof value === 'object' && value !== null) {
            newItem[itemKey] = {}
          } else {
            newItem[itemKey] = ''
          }
        })
      }
    }
    
    const array = [...currentArray, newItem]
    const newProps = { ...editedProps, [key]: array }
    setEditedProps(newProps)
    onSave(newProps)
  }

  const removeArrayItem = (key: string, index: number) => {
    const array = [...(editedProps[key] || [])]
    array.splice(index, 1)
    const newProps = { ...editedProps, [key]: array }
    setEditedProps(newProps)
    onSave(newProps)
  }


  const openMediaPicker = (key: string) => {
    setMediaPickerKey(key)
    setMediaPickerOpen(true)
  }

  const handleMediaSelect = (url: string) => {
    if (mediaPickerKey) {
      // Check if it's a 3-level nested key (e.g., "testimonials[0].author.avatar")
      const deepMatch = mediaPickerKey.match(/^(.+)\[(\d+)\]\.(.+)\.(.+)$/)
      if (deepMatch) {
        const [, arrayKey, indexStr, objectKey, nestedKey] = deepMatch
        const index = parseInt(indexStr)
        const array = [...(editedProps[arrayKey] || [])]
        const item = { ...array[index] }
        const nestedObj = { ...(item[objectKey] || {}), [nestedKey]: url }
        item[objectKey] = nestedObj
        array[index] = item
        const newProps = { ...editedProps, [arrayKey]: array }
        setEditedProps(newProps)
        onSave(newProps)
        return
      }
      
      // Check if it's an array nested key (e.g., "testimonials[0].href")
      if (mediaPickerKey.includes('[')) {
        const match = mediaPickerKey.match(/^(.+)\[(\d+)\]\.(.+)$/)
        if (match) {
          const [, arrayKey, indexStr, subKey] = match
          const index = parseInt(indexStr)
          const array = [...(editedProps[arrayKey] || [])]
          const item = { ...array[index], [subKey]: url }
          array[index] = item
          const newProps = { ...editedProps, [arrayKey]: array }
          setEditedProps(newProps)
          onSave(newProps)
        }
      }
      // Check if it's a nested key (e.g., "ctaPrimary.href")
      else if (mediaPickerKey.includes('.')) {
        const [parentKey, subKey] = mediaPickerKey.split('.')
        handleObjectChange(parentKey, subKey, url)
      } else {
        handleChange(mediaPickerKey, url)
      }
    }
  }

  const openLinkPicker = (key: string) => {
    setLinkPickerKey(key)
    setLinkPickerOpen(true)
  }

  const handleLinkSelect = (url: string) => {
    if (linkPickerKey) {
      // Check if it's a 3-level nested key (e.g., "testimonials[0].author.href")
      const deepMatch = linkPickerKey.match(/^(.+)\[(\d+)\]\.(.+)\.(.+)$/)
      if (deepMatch) {
        const [, arrayKey, indexStr, objectKey, nestedKey] = deepMatch
        const index = parseInt(indexStr)
        const array = [...(editedProps[arrayKey] || [])]
        const item = { ...array[index] }
        const nestedObj = { ...(item[objectKey] || {}), [nestedKey]: url }
        item[objectKey] = nestedObj
        array[index] = item
        const newProps = { ...editedProps, [arrayKey]: array }
        setEditedProps(newProps)
        onSave(newProps)
        return
      }
      
      // Check if it's an array nested key (e.g., "testimonials[0].href")
      if (linkPickerKey.includes('[')) {
        const match = linkPickerKey.match(/^(.+)\[(\d+)\]\.(.+)$/)
        if (match) {
          const [, arrayKey, indexStr, subKey] = match
          const index = parseInt(indexStr)
          const array = [...(editedProps[arrayKey] || [])]
          const item = { ...array[index], [subKey]: url }
          array[index] = item
          const newProps = { ...editedProps, [arrayKey]: array }
          setEditedProps(newProps)
          onSave(newProps)
        }
      }
      // Check if it's a nested key (e.g., "ctaPrimary.href")
      else if (linkPickerKey.includes('.')) {
        const [parentKey, subKey] = linkPickerKey.split('.')
        handleObjectChange(parentKey, subKey, url)
      } else {
        handleChange(linkPickerKey, url)
      }
    }
  }

  const isImageField = (key: string, value: any): boolean => {
    const imageKeywords = ['image', 'img', 'src', 'photo', 'picture', 'avatar', 'thumbnail']
    const keyLower = key.toLowerCase()
    const isImageKey = imageKeywords.some(keyword => keyLower.includes(keyword))
    const isUrl = typeof value === 'string' && (value.startsWith('/') || value.startsWith('http'))
    return isImageKey && isUrl
  }

  const isLinkField = (key: string): boolean => {
    const linkKeywords = ['href', 'link', 'url', 'to', 'path', 'redirect']
    const keyLower = key.toLowerCase()
    return linkKeywords.some(keyword => keyLower.includes(keyword))
  }

  const renderField = (key: string, value: any, level = 0) => {
    const indent = level * 16

    // String or number
    if (typeof value === 'string' || typeof value === 'number') {
      const isLongText = typeof value === 'string' && value.length > 50
      const isImage = isImageField(key, value)
      const isLink = isLinkField(key)
      
      return (
        <div key={key} style={{ marginLeft: indent }} className="space-y-2">
          <Label className="text-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
          {isLongText ? (
            <Textarea
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              className="bg-input text-foreground"
              rows={3}
            />
          ) : (
            <div className="flex gap-2">
              <Input
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-input text-foreground flex-1"
                placeholder={isLink ? 'Select page/file or enter URL...' : ''}
              />
              {isImage && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => openMediaPicker(key)}
                  className="gap-2 shrink-0"
                >
                  <ImageIcon className="h-4 w-4" />
                  Browse
                </Button>
              )}
              {isLink && !isImage && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => openLinkPicker(key)}
                  className="gap-2 shrink-0"
                >
                  <LinkIcon className="h-4 w-4" />
                  Select page / file
                </Button>
              )}
            </div>
          )}
        </div>
      )
    }

    // Boolean
    if (typeof value === 'boolean') {
      return (
        <div key={key} style={{ marginLeft: indent }} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => handleChange(key, e.target.checked)}
            className="h-4 w-4"
          />
          <Label className="text-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
        </div>
      )
    }

    // Array of strings
    if (Array.isArray(value)) {
      return (
        <div key={key} style={{ marginLeft: indent }} className="space-y-2">
          <Label className="text-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</Label>
          {value.map((item, index) => (
            <div key={index} className="flex gap-2">
              {typeof item === 'string' ? (
                <>
                  <Input
                    value={item}
                    onChange={(e) => handleArrayChange(key, index, e.target.value)}
                    className="bg-input text-foreground flex-1"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeArrayItem(key, index)}
                  >
                    Remove
                  </Button>
                </>
              ) : (
                <div className="w-full rounded border border-border bg-[var(--color-surface-1)] p-2">
                  {Object.entries(item).map(([subKey, subValue]) => {
                    // Handle nested objects (like author: { name, handle, avatar })
                    if (typeof subValue === 'object' && subValue !== null && !Array.isArray(subValue)) {
                      return (
                        <div key={subKey} className="mb-3">
                          <Label className="text-sm text-foreground font-semibold capitalize mb-1">
                            {subKey.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                          <div className="ml-3 space-y-2 border-l-2 border-border pl-3">
                            {Object.entries(subValue).map(([nestedKey, nestedValue]) => {
                              const isImage = isImageField(nestedKey, nestedValue)
                              const isLink = isLinkField(nestedKey)
                              const fullNestedKey = `${key}[${index}].${subKey}.${nestedKey}`
                              
                              return (
                                <div key={nestedKey}>
                                  <Label className="text-xs text-foreground capitalize">
                                    {nestedKey.replace(/([A-Z])/g, ' $1').trim()}
                                  </Label>
                                  <div className="flex gap-2 mt-1">
                                    <Input
                                      value={String(nestedValue)}
                                      onChange={(e) => {
                                        const newNestedObj = { ...subValue, [nestedKey]: e.target.value }
                                        const newItem = { ...item, [subKey]: newNestedObj }
                                        handleArrayChange(key, index, newItem)
                                      }}
                                      className="bg-input text-foreground flex-1 text-sm"
                                      placeholder={isLink ? 'Select page/file or enter URL...' : ''}
                                    />
                                    {isImage && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openMediaPicker(fullNestedKey)}
                                        className="gap-2 shrink-0"
                                      >
                                        <ImageIcon className="h-4 w-4" />
                                        Browse
                                      </Button>
                                    )}
                                    {isLink && !isImage && (
                                      <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openLinkPicker(fullNestedKey)}
                                        className="gap-2 shrink-0"
                                      >
                                        <LinkIcon className="h-4 w-4" />
                                        Select
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )
                    }
                    
                    // Handle arrays within array items (like badges: [...])
                    if (Array.isArray(subValue)) {
                      return (
                        <div key={subKey} className="mb-3">
                          <Label className="text-sm text-foreground capitalize mb-1">
                            {subKey.replace(/([A-Z])/g, ' $1').trim()}
                          </Label>
                          <div className="ml-3 space-y-1">
                            {subValue.map((arrItem, arrIndex) => (
                              <div key={arrIndex} className="flex gap-2">
                                <Input
                                  value={String(arrItem)}
                                  onChange={(e) => {
                                    const newArray = [...subValue]
                                    newArray[arrIndex] = e.target.value
                                    const newItem = { ...item, [subKey]: newArray }
                                    handleArrayChange(key, index, newItem)
                                  }}
                                  className="bg-input text-foreground flex-1 text-sm"
                                />
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newArray = subValue.filter((_, i) => i !== arrIndex)
                                    const newItem = { ...item, [subKey]: newArray }
                                    handleArrayChange(key, index, newItem)
                                  }}
                                >
                                  ×
                                </Button>
                              </div>
                            ))}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                const newArray = [...subValue, '']
                                const newItem = { ...item, [subKey]: newArray }
                                handleArrayChange(key, index, newItem)
                              }}
                              className="text-xs"
                            >
                              + Add {subKey}
                            </Button>
                          </div>
                        </div>
                      )
                    }
                    
                    // Regular string/number fields
                    const isImage = isImageField(subKey, subValue)
                    const isLink = isLinkField(subKey)
                    const nestedKey = `${key}[${index}].${subKey}`
                    
                    return (
                      <div key={subKey} className="mb-2">
                        <Label className="text-sm text-foreground capitalize">
                          {subKey.replace(/([A-Z])/g, ' $1').trim()}
                        </Label>
                        <div className="flex gap-2 mt-1">
                          <Input
                            value={String(subValue)}
                            onChange={(e) => {
                              const newItem = { ...item, [subKey]: e.target.value }
                              handleArrayChange(key, index, newItem)
                            }}
                            className="bg-input text-foreground flex-1"
                            placeholder={isLink ? 'Select page/file or enter URL...' : ''}
                          />
                          {isImage && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => openMediaPicker(nestedKey)}
                              className="gap-2 shrink-0"
                            >
                              <ImageIcon className="h-4 w-4" />
                              Browse
                            </Button>
                          )}
                          {isLink && !isImage && (
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => openLinkPicker(nestedKey)}
                              className="gap-2 shrink-0"
                            >
                              <LinkIcon className="h-4 w-4" />
                              Select
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeArrayItem(key, index)}
                    className="mt-2"
                  >
                    Remove item
                  </Button>
                </div>
              )}
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={() => addArrayItem(key)}>
            Add {key}
          </Button>
        </div>
      )
    }

    // Object (like CTA buttons)
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={key} style={{ marginLeft: indent }} className="space-y-2">
          <Label className="text-foreground font-semibold capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </Label>
          <div className="rounded border border-border bg-[var(--color-surface-1)] p-3 space-y-2">
            {Object.entries(value).map(([subKey, subValue]) => {
              const isImage = isImageField(subKey, subValue)
              const isLink = isLinkField(subKey)
              const nestedKey = `${key}.${subKey}`
              
              return (
                <div key={subKey}>
                  <Label className="text-sm text-foreground capitalize">
                    {subKey.replace(/([A-Z])/g, ' $1').trim()}
                  </Label>
                  <div className="flex gap-2 mt-1">
                    <Input
                      value={String(subValue)}
                      onChange={(e) => handleObjectChange(key, subKey, e.target.value)}
                      className="bg-input text-foreground flex-1"
                      placeholder={isLink ? 'Select page/file or enter URL...' : ''}
                    />
                    {isImage && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => openMediaPicker(nestedKey)}
                        className="gap-2 shrink-0"
                      >
                        <ImageIcon className="h-4 w-4" />
                        Browse
                      </Button>
                    )}
                    {isLink && !isImage && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => openLinkPicker(nestedKey)}
                        className="gap-2 shrink-0"
                      >
                        <LinkIcon className="h-4 w-4" />
                        Select page / file
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    return null
  }

  return (
    <Card className="border-[var(--brand-500)] bg-card flex flex-col max-h-[600px]">
      <CardHeader className="shrink-0">
        <CardTitle className="text-foreground">Edit {blockType}</CardTitle>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">
          Wijzigingen worden automatisch bijgehouden. Klik op "Save" rechtsboven om alles op te slaan.
        </p>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {Object.entries(editedProps).map(([key, value]) => renderField(key, value))}
        
        {Object.keys(editedProps).length === 0 && (
          <p className="text-center text-[var(--color-text-secondary)]">
            No editable properties for this block type.
          </p>
        )}
      </CardContent>

      <MediaPicker
        open={mediaPickerOpen}
        onClose={() => setMediaPickerOpen(false)}
        onSelect={handleMediaSelect}
        currentValue={
          mediaPickerKey
            ? (() => {
                // 3-level nested key (e.g., "testimonials[0].author.avatar")
                const deepMatch = mediaPickerKey.match(/^(.+)\[(\d+)\]\.(.+)\.(.+)$/)
                if (deepMatch) {
                  const [, arrayKey, indexStr, objectKey, nestedKey] = deepMatch
                  const index = parseInt(indexStr)
                  return editedProps[arrayKey]?.[index]?.[objectKey]?.[nestedKey]
                }
                
                // Array nested key (e.g., "testimonials[0].imageSrc")
                if (mediaPickerKey.includes('[')) {
                  const match = mediaPickerKey.match(/^(.+)\[(\d+)\]\.(.+)$/)
                  if (match) {
                    const [, arrayKey, indexStr, subKey] = match
                    const index = parseInt(indexStr)
                    return editedProps[arrayKey]?.[index]?.[subKey]
                  }
                }
                // Object nested key (e.g., "ctaPrimary.href")
                else if (mediaPickerKey.includes('.')) {
                  const [parentKey, subKey] = mediaPickerKey.split('.')
                  return editedProps[parentKey]?.[subKey]
                }
                // Top-level key
                return editedProps[mediaPickerKey]
              })()
            : undefined
        }
      />

      <LinkPicker
        open={linkPickerOpen}
        onClose={() => setLinkPickerOpen(false)}
        onSelect={handleLinkSelect}
        currentValue={
          linkPickerKey
            ? (() => {
                // 3-level nested key (e.g., "testimonials[0].author.href")
                const deepMatch = linkPickerKey.match(/^(.+)\[(\d+)\]\.(.+)\.(.+)$/)
                if (deepMatch) {
                  const [, arrayKey, indexStr, objectKey, nestedKey] = deepMatch
                  const index = parseInt(indexStr)
                  return editedProps[arrayKey]?.[index]?.[objectKey]?.[nestedKey]
                }
                
                // Array nested key (e.g., "testimonials[0].href")
                if (linkPickerKey.includes('[')) {
                  const match = linkPickerKey.match(/^(.+)\[(\d+)\]\.(.+)$/)
                  if (match) {
                    const [, arrayKey, indexStr, subKey] = match
                    const index = parseInt(indexStr)
                    return editedProps[arrayKey]?.[index]?.[subKey]
                  }
                }
                // Object nested key (e.g., "ctaPrimary.href")
                else if (linkPickerKey.includes('.')) {
                  const [parentKey, subKey] = linkPickerKey.split('.')
                  return editedProps[parentKey]?.[subKey]
                }
                // Top-level key
                return editedProps[linkPickerKey]
              })()
            : undefined
        }
      />
    </Card>
  )
}
