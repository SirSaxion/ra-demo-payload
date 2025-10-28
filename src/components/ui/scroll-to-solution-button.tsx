'use client'

interface ScrollToSolutionButtonProps {
  className?: string
}

export function ScrollToSolutionButton({ className }: ScrollToSolutionButtonProps) {
  const handleClick = () => {
    const nextSection = document.querySelector('#solution') || document.querySelector('section:nth-of-type(3)')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {/* Animated lightbulb - slower */}
      <div className="relative">
        <div className="text-3xl animate-bounce" style={{animationDuration: '2s'}}>💡</div>
        <div className="absolute -inset-2 bg-[var(--brand-400)]/20 rounded-full blur-md animate-pulse" />
      </div>
      
      {/* Text with gradient */}
      <div className="text-left">
        <p className="text-lg font-bold bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-300)] bg-clip-text text-transparent mb-1">
          Goed nieuws!
        </p>
        <p className="text-sm font-medium text-[var(--color-text-secondary)] max-w-md">
          Er is een <strong className="text-foreground">bewezen oplossing</strong> voor al deze problemen
        </p>
      </div>
      
      {/* Down Arrow indicator */}
      <div className="ml-2">
        <svg className="w-5 h-5 text-[var(--brand-500)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Subtle floating sparkles - only on content */}
      <div className="absolute -top-1 left-8 w-1 h-1 bg-[var(--brand-400)] rounded-full opacity-30 animate-ping" style={{animationDelay: '0s', animationDuration: '3s'}} />
      <div className="absolute top-2 right-12 w-0.5 h-0.5 bg-[var(--brand-300)] rounded-full opacity-25 animate-ping" style={{animationDelay: '1.5s', animationDuration: '4s'}} />
      <div className="absolute -bottom-1 right-20 w-1 h-1 bg-[var(--brand-500)] rounded-full opacity-20 animate-ping" style={{animationDelay: '2.5s', animationDuration: '3.5s'}} />
    </button>
  )
}
