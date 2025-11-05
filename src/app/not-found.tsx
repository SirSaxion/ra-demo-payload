import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { headers } from 'next/headers';

export default async function NotFound() {
  // Fetch 404 page content and site settings
  const payload = await getPayload({ config });
  
  // Determine locale from headers
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const locale = pathname.startsWith('/en') ? 'en' : 'nl';
  
  const [notFoundData, siteSettings] = await Promise.all([
    payload.findGlobal({ slug: 'not-found-page', locale }).catch(() => null),
    payload.findGlobal({ slug: 'site-settings', locale }).catch(() => null),
  ]);

  // Fallback data if fetch fails
  const title = notFoundData?.title || (locale === 'en' ? 'Page not found' : 'Pagina niet gevonden');
  const description = notFoundData?.description || (locale === 'en' 
    ? "The page you are looking for does not exist or has been moved. Don't worry, we're happy to help you!"
    : 'De pagina die je zoekt bestaat niet of is verplaatst. Geen zorgen, we helpen je graag verder!');
  const helpText = notFoundData?.helpText || (locale === 'en' ? 'Need help? Contact us directly:' : 'Hulp nodig? Neem direct contact op:');
  const primaryButton = notFoundData?.primaryButton || { text: locale === 'en' ? 'Go to homepage' : 'Naar homepage', href: '/' };
  const secondaryButton = notFoundData?.secondaryButton || { text: locale === 'en' ? 'View cases' : 'Bekijk cases', href: '/cases' };
  
  // Get contact info from site settings
  const phone = siteSettings?.phone || '085 060 2989';
  const phoneLink = siteSettings?.phoneLink || 'tel:+31850602989';
  const email = siteSettings?.email || 'info@realaccelerate.nl';
  const emailLink = siteSettings?.emailLink || 'mailto:info@realaccelerate.nl';

  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-hero text-foreground">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.06] [mask-image:radial-gradient(70%_70%_at_50%_45%,#161616,transparent)]">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="404-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#404-grid)" className="text-foreground" />
              </svg>
            </div>
            {/* Brand glow */}
            <div className="absolute left-1/2 top-[30%] h-40 w-[130vw] -translate-x-1/2 rotate-[6deg] bg-[linear-gradient(90deg,transparent,rgba(255,215,0,0.08),transparent)] blur-[26px]" />
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_48%,transparent,rgba(22,22,22,0.06))]" />
          </div>

          <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-6">
            <div className="mx-auto max-w-2xl text-center">
              {/* 404 Number */}
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] bg-clip-text text-transparent">
                  404
                </h1>
              </div>

              {/* Title */}
              <h2 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">
                {title}
              </h2>

              {/* Description */}
              <p className="mb-8 text-lg text-foreground/80 leading-relaxed">
                {description}
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-lg bg-[#ffd700] px-6 py-3 text-[16px] font-semibold text-black shadow-lg transition-all hover:brightness-95 hover:shadow-xl"
                >
                  <Link href={primaryButton.href}>
                    <Home className="mr-2 h-4 w-4" />
                    {primaryButton.text}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="rounded-lg px-6 py-3 text-[16px] font-medium text-foreground/90"
                >
                  <Link href={secondaryButton.href}>
                    <Search className="mr-2 h-4 w-4" />
                    {secondaryButton.text}
                  </Link>
                </Button>
              </div>

              {/* Contact info */}
              <div className="mt-12 pt-8 border-t border-foreground/10">
                <p className="text-sm text-foreground/60 mb-4">
                  {helpText}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <a 
                    href={phoneLink}
                    className="text-[#ffd700] hover:text-[#ffed4e] font-medium transition-colors"
                  >
                    {phone}
                  </a>
                  <span className="hidden sm:inline text-foreground/40">•</span>
                  <a 
                    href={emailLink}
                    className="text-[#ffd700] hover:text-[#ffed4e] font-medium transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
