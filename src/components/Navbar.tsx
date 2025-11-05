"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import type { ElementType, CSSProperties } from "react"
import { cn } from "@/lib/utils"
import { Menu, Building2, Globe2, PiggyBank, Factory, Users, CheckCircle2, ChevronRight, Languages, type LucideIcon } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { AnimatePresence, motion } from "motion/react"
import { useStrategyDialog } from "@/components/strategy/StrategySessionDialog"

type NavItem = { name: string; link?: string; href?: string }

const groups: NavItem[] = [
  { name: "Makelaars", link: "/makelaars" },
  { name: "Buitenland / IQI", link: "/makelaars-buitenland" },
  { name: "Hypotheekadviseurs", link: "/hypotheekadviseurs" },
  { name: "Projectontwikkelaars", link: "/projectontwikkelaars" },
  { name: "HR & Recruitment", link: "/hr-recruitment" },
]

type GroupDetail = {
  title: string
  description: string
  highlights: string[]
  icon: ElementType | string
  href: string
}

interface NavbarProps {
  logo?: string
  phone?: string
  phoneLink?: string
  email?: string
  emailLink?: string
  mainLinks?: NavItem[]
  targetGroups?: Array<{
    name: string
    href: string
    icon: string
    description: string
    highlights: string[]
  }>
}

const groupDetails: Record<string, GroupDetail> = {
  "/makelaars": {
    title: "Makelaars",
    description:
      "Volledige funnel: van kwalitatieve leads tot afspraken die wél doorgaan. Ontworpen voor lokale en regionale makelaars.",
    highlights: [
      "Consistente instroom van bezichtigingen",
      "Meetbare ROI en transparante rapportage",
      "Integratie met je huidige tools",
    ],
    icon: Building2,
    href: "/makelaars",
  },
  "/makelaars-buitenland": {
    title: "Buitenland / IQI",
    description:
      "Internationale campagnes met schaal: multi-market targeting, meertalige funnels en cross-border performance.",
    highlights: [
      "Schaalbaar naar meerdere regio’s",
      "Lead kwalificatie op maat",
      "Team en tooling voor snelheid",
    ],
    icon: Globe2,
    href: "/makelaars-buitenland",
  },
  "/hypotheekadviseurs": {
    title: "Hypotheekadviseurs",
    description:
      "Gerichte aanvragen van starters, doorstromers en ondernemers. Slimme pre-kwalificatie voor minder no-shows.",
    highlights: [
      "Betere show-rate bij afspraken",
      "Heldere intake vóór het gesprek",
      "Sterke lokale positionering",
    ],
    icon: PiggyBank,
    href: "/hypotheekadviseurs",
  },
  "/projectontwikkelaars": {
    title: "Projectontwikkelaars",
    description:
      "Lanceringen met impact: leadgeneratie voor nieuwbouwprojecten met focus op snelheid en verkooptempo.",
    highlights: [
      "Snelle validatie van propositie",
      "Datagedreven marketingmix",
      "Content en ads volledig verzorgd",
    ],
    icon: Factory,
    href: "/projectontwikkelaars",
  },
  "/hr-recruitment": {
    title: "HR & Recruitment",
    description:
      "Van reactief zoeken naar proactief aantrekken: bouw een talent pipeline die zorgt voor een constante stroom gekwalificeerde kandidaten.",
    highlights: [
      "73% meer sollicitaties binnen 3 maanden",
      "3x sneller vacatures vullen",
      "Sterk werkgeversmerk opbouwen",
    ],
    icon: Users,
    href: "/hr-recruitment",
  },
}

const topLinks: NavItem[] = [
  { name: "Home", link: "/" },
  { name: "Cases", link: "/cases" },
  { name: "Over ons", link: "/over-ons" },
  { name: "Contact", link: "/contact" },
]

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Globe2,
  PiggyBank,
  Factory,
  Users,
}

export default function Navbar({
  logo = '/images/logorealaccelerate.webp',
  phone = '085 060 2989',
  phoneLink = 'tel:+31850602989',
  email = 'info@realaccelerate.nl',
  emailLink = 'mailto:info@realaccelerate.nl',
  mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Cases', href: '/cases' },
    { name: 'Over ons', href: '/over-ons' },
    { name: 'Contact', href: '/contact' },
  ],
  targetGroups = [],
}: NavbarProps = {}) {
  const pathname = usePathname()
  const router = useRouter()
  const [voorWieOpen, setVoorWieOpen] = useState(false)
  const [currentLocale, setCurrentLocale] = useState('nl')
  
  // Translations
  const translations = {
    nl: {
      contactCta: 'Neem contact op',
      switchToEn: 'Switch to English',
      forWho: 'Voor wie?',
    },
    en: {
      contactCta: 'Contact us',
      switchToNl: 'Schakel naar Nederlands',
      forWho: 'For who?',
    },
  }
  const t = translations[currentLocale as 'nl' | 'en'] || translations.nl
  
  // Detect current locale from URL
  useEffect(() => {
    const path = pathname
    if (path.startsWith('/en')) {
      setCurrentLocale('en')
    } else if (path.startsWith('/nl') || path === '/') {
      setCurrentLocale('nl')
    } else {
      setCurrentLocale('nl')
    }
  }, [pathname])
  
  // Helper function to make links locale-aware (read directly from pathname)
  const getLocalizedHref = (href: string) => {
    const isEnglish = pathname?.startsWith('/en')
    // Homepage is special: / for NL, /en for EN
    if (href === '/') {
      return isEnglish ? '/en' : '/'
    }
    // All other pages: /nl/slug for NL, /en/slug for EN
    return isEnglish ? `/en${href}` : `/nl${href}`
  }
  
  const switchLocale = (newLocale: string) => {
    let newPath = pathname
    
    // Remove current locale prefix if exists
    if (pathname.startsWith('/en')) {
      newPath = pathname.substring(3) || '/'
    } else if (pathname.startsWith('/nl')) {
      newPath = pathname.substring(3) || '/'
    }
    
    // Homepage is special case
    if (newPath === '/' || newPath === '') {
      router.push(newLocale === 'en' ? '/en' : '/')
      return
    }
    
    // All other pages: add locale prefix
    if (newLocale === 'en') {
      router.push(`/en${newPath}`)
    } else {
      router.push(`/nl${newPath}`)
    }
  }
  
  // Convert targetGroups to groups format
  const groups: NavItem[] = targetGroups.length > 0 
    ? targetGroups.map(g => ({ name: g.name, link: g.href, href: g.href }))
    : [
        { name: "Makelaars", link: "/makelaars", href: "/makelaars" },
        { name: "Buitenland / IQI", link: "/makelaars-buitenland", href: "/makelaars-buitenland" },
        { name: "Hypotheekadviseurs", link: "/hypotheekadviseurs", href: "/hypotheekadviseurs" },
        { name: "Projectontwikkelaars", link: "/projectontwikkelaars", href: "/projectontwikkelaars" },
        { name: "HR & Recruitment", link: "/hr-recruitment", href: "/hr-recruitment" },
      ];
  
  const [activeIndex, setActiveIndex] = useState(() => {
    const i = groups.findIndex((g) => pathname.startsWith(g.link || g.href || ''))
    return i >= 0 ? i : 0
  })
  
  // Convert targetGroups to groupDetails format
  const dynamicGroupDetails: Record<string, GroupDetail> = {}
  targetGroups.forEach(group => {
    const IconComponent = iconMap[group.icon] || Building2
    dynamicGroupDetails[group.href] = {
      title: group.name,
      description: group.description,
      highlights: group.highlights,
      icon: IconComponent,
      href: group.href,
    }
  })
  const voorWieRef = useRef<HTMLDivElement | null>(null)
  const triggerBtnRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({})
  const [menuPlacement, setMenuPlacement] = useState<"bottom" | "top" | "left" | "right">("bottom")
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openDialog } = useStrategyDialog()
  const closeTimeout = useRef<number | null>(null)
  const openTimeout = useRef<number | null>(null)
  const navBarRef = useRef<HTMLDivElement | null>(null)

  const cancelClose = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimeout.current = window.setTimeout(() => setVoorWieOpen(false), 120)
  }

  const cancelOpen = () => {
    if (openTimeout.current) {
      clearTimeout(openTimeout.current)
      openTimeout.current = null
    }
  }

  const scheduleOpen = () => {
    cancelOpen()
    openTimeout.current = window.setTimeout(() => setVoorWieOpen(true), 140)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const insideTrigger = !!voorWieRef.current?.contains(target)
      const insideMenu = !!menuRef.current?.contains(target)
      if (!insideTrigger && !insideMenu) {
        setVoorWieOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (!voorWieOpen) return
    const compute = () => {
      const trigger = triggerBtnRef.current
      if (!trigger) return
      const triggerRect = trigger.getBoundingClientRect()
      const navRect = navBarRef.current?.getBoundingClientRect()

      // Mega-menu uses ~70% of viewport width
      const desiredWidth = Math.floor(window.innerWidth * 0.7)
      // Prefer measured height if available for clamping top
      const measured = menuRef.current
      const menuWidth = desiredWidth
      const menuHeight = measured?.offsetHeight || 380 // approximate default height

      const spaceBelow = window.innerHeight - triggerRect.bottom
      const spaceAbove = triggerRect.top
      const spaceRight = window.innerWidth - triggerRect.right
      const spaceLeft = triggerRect.left

      let placement: "bottom" | "top" | "left" | "right" = "bottom"

      const margin = 14
      if (spaceBelow >= menuHeight + margin) {
        placement = "bottom"
      } else if (spaceAbove >= menuHeight + margin) {
        placement = "top"
      } else if (spaceRight >= menuWidth + margin) {
        placement = "right"
      } else if (spaceLeft >= menuWidth + margin) {
        placement = "left"
      } else {
        // Choose the direction with more space (and we'll clamp position)
        placement = spaceBelow >= spaceAbove ? "bottom" : "top"
      }

      let top = 0
      let left = 0
      const centerLeft = Math.max(0, Math.floor((window.innerWidth - menuWidth) / 2))

      if (placement === "bottom") {
        top = Math.min(
          (navRect?.bottom ?? triggerRect.bottom) + margin,
          Math.max(0, window.innerHeight - menuHeight - 8),
        )
        left = centerLeft
      } else if (placement === "top") {
        top = Math.max(
          triggerRect.top - menuHeight - margin,
          8,
        )
        left = centerLeft
      } else if (placement === "right") {
        left = centerLeft
        top = Math.min(
          Math.max(8, triggerRect.top),
          window.innerHeight - menuHeight - 8,
        )
      } else {
        // left
        left = centerLeft
        top = Math.min(
          Math.max(8, triggerRect.top),
          window.innerHeight - menuHeight - 8,
        )
      }

      setMenuPlacement(placement)
      setMenuStyle({ position: "fixed", top, left, width: menuWidth })
    }

    // Compute now and on next frame (after potential content paints)
    compute()
    const raf = requestAnimationFrame(compute)

    const onScroll = () => compute()
    const onResize = () => compute()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [voorWieOpen])

  const motionInitial =
    menuPlacement === "top"
      ? { opacity: 0, y: -8, scale: 0.98 }
      : menuPlacement === "bottom"
        ? { opacity: 0, y: 8, scale: 0.98 }
        : menuPlacement === "right"
          ? { opacity: 0, x: 8, scale: 0.98 }
          : { opacity: 0, x: -8, scale: 0.98 }

  const motionExit =
    menuPlacement === "top"
      ? { opacity: 0, y: -6, scale: 0.98 }
      : menuPlacement === "bottom"
        ? { opacity: 0, y: 6, scale: 0.98 }
        : menuPlacement === "right"
          ? { opacity: 0, x: 6, scale: 0.98 }
          : { opacity: 0, x: -6, scale: 0.98 }

  return (
    <>
      {/* Top bar (not floating) */}
      <div ref={navBarRef} className="fixed left-0 top-0 z-[5000] flex h-14 w-full items-center justify-between border-b border-border bg-hero/80 px-4 backdrop-blur-md text-foreground md:h-[76px]">
        <Link href={getLocalizedHref('/')} className="flex items-center">
          <Image
            src={logo}
            alt="Real Accelerate"
            width={220}
            height={44}
            className="h-9 w-auto md:h-12"
            priority
          />
        </Link>
        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex md:gap-3 lg:gap-4">
          <nav className="flex items-center gap-1 md:gap-1.5 lg:gap-2">
            {/* Home */}
            <Link
              href={getLocalizedHref('/')}
              className={cn(
                "rounded-[var(--radius-md)] px-2 py-2 text-[14px] font-medium text-foreground/90 transition-colors hover:bg-[color-mix(in_oklab,var(--brand-500)_10%,transparent)] md:px-3 lg:px-4 lg:text-[16px]",
                pathname === "/" && "bg-accent/20 text-foreground",
              )}
            >
              Home
            </Link>
            <div
              ref={voorWieRef}
              className="relative"
              onMouseEnter={() => {
                cancelClose()
                scheduleOpen()
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                onClick={() => setVoorWieOpen((v) => !v)}
                aria-expanded={voorWieOpen}
                className="rounded-[var(--radius-md)] px-2 py-2 text-[14px] font-medium text-foreground/90 transition-colors hover:bg-[color-mix(in_oklab,var(--brand-500)_10%,transparent)] md:px-3 lg:px-4 lg:text-[16px]"
                ref={triggerBtnRef}
              >
                {t.forWho}
              </button>
              <AnimatePresence>
                {voorWieOpen && (
                  <>
                    {/* Hover bridge to prevent flicker between button and menu */}
                    <div
                      className="absolute left-0 top-full z-[5999] h-3 w-[260px]"
                      onMouseEnter={() => {
                        cancelClose()
                        setVoorWieOpen(true)
                      }}
                    />
                    <motion.div
                      initial={{ ...motionInitial, clipPath: "inset(12% 8% 14% 8% round 18px)" } as any}
                      animate={{ opacity: 1, x: 0, y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0% round 22px)" } as any}
                      exit={{ ...motionExit, clipPath: "inset(10% 6% 12% 6% round 18px)" } as any}
                      transition={{ type: "spring", stiffness: 360, damping: 28, mass: 0.9 }}
                      ref={menuRef}
                      style={menuStyle}
                      data-placement={menuPlacement}
                      className="fixed z-[6000] overflow-hidden rounded-3xl border border-white/20 bg-hero/95 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-lg ring-1 ring-white/25 relative"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      {/* Decorative subtle overlay */}
                      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(255,255,255,0.12),transparent)]" />
                      {/* Inner container to match site width */}
                      <div className="relative z-10 mx-auto max-w-7xl px-5 py-5">
                        <div className="grid grid-cols-[320px_1fr] gap-4">
                          {/* Left: list */}
                          <div className="flex flex-col gap-1 p-1">
                            {groups.map((g, i) => (
                              <Link
                                key={g.link ?? g.href}
                                href={getLocalizedHref(g.link ?? g.href ?? '/')}
                                onMouseEnter={() => setActiveIndex(i)}
                                className={cn(
                                  "group relative flex items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-[15px] font-medium text-foreground transition-all hover:bg-yellow-400/20 hover:ring-1 hover:ring-yellow-300/40 hover:text-foreground",
                                  i === activeIndex && "bg-yellow-400/25 ring-1 ring-yellow-300/50 text-foreground font-semibold",
                                )}
                              >
                                <span className="truncate">{g.name}</span>
                                <ChevronRight className={cn("size-4 shrink-0 text-yellow-400 opacity-0 transition-opacity group-hover:opacity-80", i === activeIndex && "opacity-90")} />
                              </Link>
                            ))}
                          </div>

                          {/* Right: preview */}
                          <div
                            className="relative rounded-2xl border border-white/15 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                const g = groups[activeIndex]
                                const detail = groupDetails[g.link ?? g.href ?? '']
                                router.push(detail?.href ?? g.link ?? g.href ?? '/')
                              }
                            }}
                            onClick={() => {
                              const g = groups[activeIndex]
                              const detail = groupDetails[g.link ?? g.href ?? '']
                              router.push(detail?.href ?? g.link ?? g.href ?? '/')
                            }}
                            aria-label="Open detail pagina"
                          >
                            {(() => {
                              const g = groups[activeIndex]
                              const detail = (targetGroups.length > 0 ? dynamicGroupDetails[g.link || g.href || ''] : groupDetails[g.link || g.href || '']) || groupDetails[(g.link || g.href) ?? '']
                              const IconComponent = detail?.icon
                              const Icon = (typeof IconComponent === 'string' ? iconMap[IconComponent] : IconComponent) ?? Building2
                              return (
                                <div className="flex h-full flex-col gap-4">
                                  <div className="flex items-start gap-3">
                                    <div className="rounded-xl border border-white/15 bg-black/40 p-2 text-yellow-400 shadow-sm">
                                      <Icon className="size-6" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-[16px] font-semibold leading-tight">{detail?.title ?? g.name}</div>
                                      <p className="mt-1 text-[13.5px] leading-relaxed text-foreground/85">
                                        {detail?.description}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    {(detail?.highlights ?? []).map((h, idx) => (
                                      <div key={idx} className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-transparent px-2 py-1">
                                        <CheckCircle2 className="mt-0.5 size-4 text-yellow-400" />
                                        <span className="text-[13.5px] text-foreground/90">{h}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-auto">
                                    <Link
                                      href={getLocalizedHref(detail?.href ?? g.link ?? g.href ?? '/')}
                                      className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-yellow-500 px-4 py-2.5 text-[14px] font-semibold text-black shadow-sm transition-[transform,filter] hover:brightness-95 active:scale-[0.99]"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      Ontdek {detail?.title ?? g.name}
                                      <ChevronRight className="size-4" />
                                    </Link>
                                  </div>
                                </div>
                              )
                            })()}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            {/* Other main links */}
            {mainLinks
              .filter((l) => l.name !== "Home" && l.name !== "Contact")
              .map((l) => (
                <Link
                  key={l.link ?? l.href}
                  href={getLocalizedHref(l.link ?? l.href ?? '/')}
                  className={cn(
                    "rounded-[var(--radius-md)] px-2 py-2 text-[14px] font-medium text-foreground/90 transition-colors hover:bg-[color-mix(in_oklab,var(--brand-500)_10%,transparent)] md:px-3 lg:px-4 lg:text-[16px]",
                    pathname === (l.link ?? l.href) && "bg-accent/20 text-foreground",
                  )}
                >
                  {l.name}
                </Link>
              ))}
          </nav>
          <div className="ml-1 flex items-center gap-1.5 md:ml-2 md:gap-2 lg:gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => switchLocale(currentLocale === 'nl' ? 'en' : 'nl')}
                className="flex items-center gap-1.5 rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--brand-500)_25%,transparent)] px-2 py-2 text-[13px] font-medium text-foreground/90 transition-colors hover:bg-[color-mix(in_oklab,var(--brand-500)_10%,transparent)] lg:px-3 lg:text-[15px]"
                title={currentLocale === 'nl' ? 'Switch to English' : 'Schakel naar Nederlands'}
              >
                <Languages className="size-4" />
                <span className="uppercase">{currentLocale}</span>
              </button>
            </div>
            <a
              href={phoneLink}
              className="rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--brand-500)_35%,transparent)] px-2 py-2 text-[13px] font-semibold text-foreground/90 hover:bg-transparent md:px-3 lg:px-4 lg:text-[16px]"
            >
              {phone}
            </a>
            <a
              href={emailLink}
              className="rounded-[var(--radius-md)] bg-[var(--primary)] px-2 py-2 text-[13px] font-semibold text-[var(--primary-foreground)] hover:brightness-95 md:px-3 lg:px-4 lg:text-[16px]"
            >
              {t.contactCta}
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="rounded-md p-2 hover:bg-accent/30" aria-label="Open menu">
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="inset-0 h-screen w-full max-w-none rounded-none border-none bg-hero/95 p-0 text-foreground backdrop-blur-sm"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image src={logo} alt="RA" width={140} height={28} className="h-7 w-auto" />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 p-2">
                <SheetClose asChild>
                  <Link
                    href={getLocalizedHref('/')}
                    className={cn(
                      "rounded-[var(--radius-md)] px-3 py-2 text-[16px] hover:bg-accent hover:text-accent-foreground",
                      pathname === "/" && "bg-accent/50",
                    )}
                  >
                    Home
                  </Link>
                </SheetClose>
                <div className="mt-2">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="voor-wie">
                      <AccordionTrigger className="rounded-[var(--radius-md)] px-3 py-2 text-[16px] font-semibold text-foreground/90 hover:no-underline">
                        {t.forWho}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-1 flex flex-col gap-1">
                          {groups.map((g) => (
                            <SheetClose asChild key={g.link ?? g.href}>
                              <Link
                                href={getLocalizedHref(g.link ?? g.href ?? '/')}
                                className={cn(
                                  "rounded-[var(--radius-md)] px-3 py-2 text-[16px] hover:bg-accent hover:text-accent-foreground",
                                  pathname === g.link && "bg-accent/50",
                                )}
                              >
                                {g.name}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <SheetClose asChild>
                  <Link
                    href={getLocalizedHref('/cases')}
                    className={cn(
                      "rounded-[var(--radius-md)] px-3 py-2 text-[16px] hover:bg-accent hover:text-accent-foreground",
                      pathname === "/cases" && "bg-accent/50",
                    )}
                  >
                    Cases
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={getLocalizedHref('/over-ons')}
                    className={cn(
                      "rounded-[var(--radius-md)] px-3 py-2 text-[16px] hover:bg-accent hover:text-accent-foreground",
                      pathname === "/over-ons" && "bg-accent/50",
                    )}
                  >
                    Over ons
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href={getLocalizedHref('/contact')}
                    className={cn(
                      "rounded-[var(--radius-md)] px-3 py-2 text-[16px] hover:bg-accent hover:text-accent-foreground",
                      pathname === "/contact" && "bg-accent/50",
                    )}
                  >
                    Contact
                  </Link>
                </SheetClose>
                
                {/* Language Selector Mobile */}
                <div className="mt-4 border-t border-border pt-4">
                  <button
                    onClick={() => {
                      switchLocale(currentLocale === 'nl' ? 'en' : 'nl')
                      setMobileOpen(false)
                    }}
                    className="flex w-full items-center gap-2 rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--brand-500)_25%,transparent)] px-3 py-2 text-[16px] font-medium"
                  >
                    <Languages className="size-5" />
                    <span>{currentLocale === 'nl' ? translations.nl.switchToEn : translations.en.switchToNl}</span>
                  </button>
                </div>
                
                <SheetClose asChild>
                  <a
                    href={phoneLink}
                    className="mt-2 rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--brand-500)_35%,transparent)] px-3 py-2 text-[16px]"
                  >
                    {phone}
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={emailLink}
                    className="mt-2 rounded-[var(--radius-md)] bg-[var(--primary)] px-4 py-2 text-[15px] font-semibold text-[var(--primary-foreground)]"
                  >
                    {t.contactCta}
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* No separate floating nav */}
    </>
  )
}


