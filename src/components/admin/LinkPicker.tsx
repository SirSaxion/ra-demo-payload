'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileText, Image as ImageIcon, Link as LinkIcon, Mail, Phone } from 'lucide-react'
import MediaPicker from './MediaPicker'

interface LinkPickerProps {
  open: boolean
  onClose: () => void
  onSelect: (url: string) => void
  currentValue?: string
}

export default function LinkPicker({ open, onClose, onSelect, currentValue }: LinkPickerProps) {
  const [activeTab, setActiveTab] = useState<'page' | 'media' | 'contact' | 'custom'>('page')
  const [pages, setPages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [customUrl, setCustomUrl] = useState(currentValue || '')
  const [mediaPickerOpen, setMediaPickerOpen] = useState(false)
  const [contactType, setContactType] = useState<'email' | 'phone'>('email')
  const [contactValue, setContactValue] = useState('')

  useEffect(() => {
    if (open) {
      fetchPages()
      setCustomUrl(currentValue || '')
      // Detect if current value is mailto or tel
      if (currentValue?.startsWith('mailto:')) {
        setContactType('email')
        setContactValue(currentValue.replace('mailto:', ''))
        setActiveTab('contact')
      } else if (currentValue?.startsWith('tel:')) {
        setContactType('phone')
        setContactValue(currentValue.replace('tel:', ''))
        setActiveTab('contact')
      }
    }
  }, [open, currentValue])

  const fetchPages = async () => {
    try {
      const response = await fetch('/api/pages')
      if (response.ok) {
        const data = await response.json()
        setPages(data.pages || [])
      }
    } catch (error) {
      console.error('Failed to fetch pages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePageSelect = (slug: string) => {
    onSelect(slug)
    onClose()
  }

  const handleMediaSelect = (url: string) => {
    onSelect(url)
    setMediaPickerOpen(false)
    onClose()
  }

  const handleCustomSubmit = () => {
    if (customUrl) {
      onSelect(customUrl)
      onClose()
    }
  }

  const handleContactSubmit = () => {
    if (contactValue) {
      const prefix = contactType === 'email' ? 'mailto:' : 'tel:'
      onSelect(prefix + contactValue)
      onClose()
    }
  }

  return (
    <>
      <Dialog open={open && !mediaPickerOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Kies link bestemming</DialogTitle>
          </DialogHeader>

          {/* Tab Buttons */}
          <div className="flex gap-2 border-b border-border pb-4">
            <Button
              variant={activeTab === 'page' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('page')}
              className="gap-2"
            >
              <FileText className="h-4 w-4" />
              Pagina
            </Button>
            <Button
              variant={activeTab === 'media' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('media')}
              className="gap-2"
            >
              <ImageIcon className="h-4 w-4" />
              Bestand / Media
            </Button>
            <Button
              variant={activeTab === 'contact' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('contact')}
              className="gap-2"
            >
              <Mail className="h-4 w-4" />
              Mail / Telefoon
            </Button>
            <Button
              variant={activeTab === 'custom' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('custom')}
              className="gap-2"
            >
              <LinkIcon className="h-4 w-4" />
              Eigen URL
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'page' && (
              <div className="space-y-2">
                {loading ? (
                  <p className="text-center py-8 text-[var(--color-text-muted)]">Loading pages...</p>
                ) : pages.length === 0 ? (
                  <p className="text-center py-8 text-[var(--color-text-muted)]">No pages found</p>
                ) : (
                  pages.map((page) => (
                    <button
                      key={page._id}
                      onClick={() => handlePageSelect(page.slug)}
                      className="w-full text-left p-3 rounded-lg border border-border bg-card"
                    >
                      <div className="font-medium text-foreground">{page.title}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{page.slug}</div>
                    </button>
                  ))
                )}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-4">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Klik op de knop om een bestand te kiezen uit de media bibliotheek
                </p>
                <Button
                  onClick={() => setMediaPickerOpen(true)}
                  className="w-full gap-2"
                >
                  <ImageIcon className="h-4 w-4" />
                  Open media bibliotheek
                </Button>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    variant={contactType === 'email' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setContactType('email')}
                    className="gap-2 flex-1"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Button>
                  <Button
                    variant={contactType === 'phone' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setContactType('phone')}
                    className="gap-2 flex-1"
                  >
                    <Phone className="h-4 w-4" />
                    Telefoon
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactValue" className="text-foreground">
                    {contactType === 'email' ? 'Email adres' : 'Telefoonnummer'}
                  </Label>
                  <Input
                    id="contactValue"
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    placeholder={contactType === 'email' ? 'info@realaccelerate.nl' : '+31 6 12345678'}
                    className="bg-input text-foreground"
                    type={contactType === 'email' ? 'email' : 'tel'}
                  />
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Wordt automatisch omgezet naar {contactType === 'email' ? 'mailto:' : 'tel:'} link
                  </p>
                </div>
                <Button
                  onClick={handleContactSubmit}
                  disabled={!contactValue}
                  className="w-full"
                >
                  Gebruik {contactType === 'email' ? 'email' : 'telefoon'}
                </Button>
              </div>
            )}

            {activeTab === 'custom' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customUrl" className="text-foreground">
                    URL of pad
                  </Label>
                  <Input
                    id="customUrl"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                    placeholder="/contact of https://example.com"
                    className="bg-input text-foreground"
                  />
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Voer een relatief pad (bijv. /contact) of volledige URL in
                  </p>
                </div>
                <Button
                  onClick={handleCustomSubmit}
                  disabled={!customUrl}
                  className="w-full"
                >
                  Gebruik deze URL
                </Button>
              </div>
            )}
          </div>

          {/* Close button */}
          <div className="pt-4 border-t border-border">
            <Button variant="outline" onClick={onClose} className="w-full">
              Annuleren
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <MediaPicker
        open={mediaPickerOpen}
        onClose={() => setMediaPickerOpen(false)}
        onSelect={handleMediaSelect}
        currentValue={currentValue}
      />
    </>
  )
}
