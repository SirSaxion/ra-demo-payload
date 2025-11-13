import { Frown, DollarSign, TrendingDown, AlertTriangle, Swords, Users } from "lucide-react";

export default function PostItNotesSection() {
  return (
    <section className="relative overflow-hidden bg-section text-foreground py-16 md:py-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,var(--bg-section)_15%,var(--bg-section)_85%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pain-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pain-grid)" className="text-foreground" />
        </svg>
      </div>

      {/* Top subtle fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[color-mix(in_oklab,var(--neutral-900)_28%,transparent)] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-card px-3 py-1 type-kicker font-medium text-[var(--color-text-secondary)] mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            Herkenbare frustraties
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-foreground mb-4">
            Ken jij deze frustraties als makelaar?
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            De meeste makelaars worstelen met dezelfde uitdagingen. Je bent niet alleen.
          </p>
        </div>

        {/* Pain Points Post-it Notes */}
        <div className="mx-auto max-w-7xl">
          <div className="relative min-h-[600px] md:min-h-[700px]">
            {/* Post-it Note 1 - Overwerkt & Onderbetaald */}
            <div className="absolute top-0 left-4 md:left-12 w-64 md:w-72 transform -rotate-2 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-yellow-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                {/* Post-it tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-yellow-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Frown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-lg font-bold text-gray-800">Overwerkt & Onderbetaald</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Ambitie om te groeien maar geen tijd/energie om de juiste stappen te zetten. Je werkt hard, maar ziet dit niet terug in je bankrekening of vrije tijd.
                </p>
                <div className="flex items-center gap-2 text-orange-600 font-medium text-sm">
                  <span>→</span>
                  <span>Bekijk oplossing</span>
                </div>
              </div>
            </div>

            {/* Post-it Note 2 - Geld- en Tijd-verspilling */}
            <div className="absolute top-16 right-8 md:right-16 w-64 md:w-72 transform rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-pink-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-2 left-1/3 w-12 h-4 bg-pink-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-red-600" />
                  <h3 className="text-lg font-bold text-gray-800">Geld- en Tijd-verspilling</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Slechte kwaliteit leads van Funda en Jaap.nl die nergens toe leiden. Altijd onzekerheid over de toekomst.
                </p>
                <div className="flex items-center gap-2 text-red-600 font-medium text-sm">
                  <span>→</span>
                  <span>Betere leads</span>
                </div>
              </div>
            </div>

            {/* Post-it Note 3 - Inkomens Rollercoaster */}
            <div className="absolute top-32 md:top-40 left-1/2 transform -translate-x-1/2 -rotate-1 w-64 md:w-72 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-blue-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-2 right-1/4 w-12 h-4 bg-blue-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <TrendingDown className="h-6 w-6 text-blue-700" />
                  <h3 className="text-lg font-bold text-gray-800">Inkomens Rollercoaster</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Ene maand fantastisch, de volgende maand zonder inkomen. Waar komt de volgende deal vandaan?
                </p>
                <div className="flex items-center gap-2 text-blue-700 font-medium text-sm">
                  <span>→</span>
                  <span>Stabiel inkomen</span>
                </div>
              </div>
            </div>

            {/* Post-it Note 4 - Constante Stress */}
            <div className="absolute bottom-32 md:bottom-40 left-8 md:left-20 w-64 md:w-72 transform rotate-2 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-green-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-2 left-2/3 w-12 h-4 bg-green-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-green-700" />
                  <h3 className="text-lg font-bold text-gray-800">Constante Stress</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Altijd onzekerheid over de toekomst. Waar komt de volgende deal vandaan? Altijd tijd onzekerheid over de toekomst.
                </p>
                <div className="flex items-center gap-2 text-green-700 font-medium text-sm">
                  <span>→</span>
                  <span>Meer zekerheid</span>
                </div>
              </div>
            </div>

            {/* Post-it Note 5 - Concurrentie Strijd */}
            <div className="absolute bottom-16 right-12 md:right-24 w-64 md:w-72 transform -rotate-3 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-purple-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-2 left-1/4 w-12 h-4 bg-purple-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Swords className="h-6 w-6 text-purple-700" />
                  <h3 className="text-lg font-bold text-gray-800">Concurrentie Strijd</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Vechten met 5-10 andere makelaars per lead. Prijsdruk en stress. Vaak met 5-10 andere makelaars per lead.
                </p>
                <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
                  <span>→</span>
                  <span>Exclusieve leads</span>
                </div>
              </div>
            </div>

            {/* Post-it Note 6 - Werk-Privé Balans */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 rotate-1 w-64 md:w-72 hover:rotate-0 transition-transform duration-300 hover:scale-105 hover:z-10">
              <div className="bg-orange-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute -top-2 right-1/3 w-12 h-4 bg-orange-100/60 rounded-sm"></div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-orange-700" />
                  <h3 className="text-lg font-bold text-gray-800">Werk-Privé Balans</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Hoge eisen bedrijf vs. weinig terug voor je gezin en persoonlijke tijd. Hoge eisen bedrijf vs. weinig terug.
                </p>
                <div className="flex items-center gap-2 text-orange-700 font-medium text-sm">
                  <span>→</span>
                  <span>Betere balans</span>
                </div>
              </div>
            </div>

            {/* Central "Goed nieuws!" note */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-64 rotate-0 z-20">
              <div className="bg-[var(--brand-400)] p-6 shadow-xl relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-[var(--brand-300)] rounded-sm"></div>
                
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <h3 className="text-xl font-bold text-[var(--color-accent-contrast)] mb-3">Goed nieuws!</h3>
                  <p className="text-[var(--color-accent-contrast)] text-sm leading-relaxed">
                    Wij hebben de code gekraakt voor een voorspelbare stroom aan kwalitieve leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
