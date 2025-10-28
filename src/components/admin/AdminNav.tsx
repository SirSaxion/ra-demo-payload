'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, Home, Image, Settings, Save, Loader2, Search, BarChart3, Globe } from 'lucide-react'
import type { JWTPayload } from '@/lib/auth'
import { usePageEditor } from '@/contexts/PageEditorContext'

interface AdminNavProps {
  user: JWTPayload
}

export default function AdminNav({ user }: AdminNavProps) {
  const router = useRouter()
  const { isSaving, onSave } = usePageEditor()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-[var(--color-surface-1)] shadow-sm backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">RA</span>
            </div>
            <span className="text-lg font-semibold text-foreground">CMS</span>
          </Link>
          
          <div className="flex items-center gap-1">
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="h-4 w-4" />
                Pages
              </Button>
            </Link>
            <Link href="/admin/media">
              <Button variant="ghost" size="sm" className="gap-2">
                <Image className="h-4 w-4" />
                Media
              </Button>
            </Link>
            <Link href="/admin/analytics">
              <Button variant="ghost" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Button>
            </Link>
            <Link href="/admin/seo">
              <Button variant="ghost" size="sm" className="gap-2">
                <Search className="h-4 w-4" />
                SEO
              </Button>
            </Link>
            <Link href="/admin/settings">
              <Button variant="ghost" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
            <Link href="/admin/site-settings">
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                Site
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {onSave && (
            <Button
              size="sm"
              onClick={onSave}
              disabled={isSaving}
              className="gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save
                </>
              )}
            </Button>
          )}
          <span className="text-sm text-[var(--color-text-secondary)]">
            {user.email}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}
