"use client";

import { cn } from "@/lib/utils";
import { Check, CheckCheck } from "lucide-react";

export default function ChatSuccessStory() {
  return (
    <section className="relative isolate overflow-hidden bg-section">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <pattern id="chat-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#chat-grid)" className="text-foreground" />
        </svg>
      </div>

      <div className="relative mx-auto px-6 max-w-7xl py-16 md:py-20">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-[var(--brand-400)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--brand-500)]" />
            Live Reactie
          </span>
          <h2 className="mt-4 type-h2 text-foreground">💬 Zo reageren onze klanten</h2>
          <p className="mt-2 type-body text-[var(--color-text-secondary)]">
            Echte berichten van makelaars die nieuwe leads en deals binnenhalen
          </p>
        </div>

        {/* Chat Interface */}
        <div className="mx-auto max-w-md">
          {/* Phone mockup container */}
          <div className="relative">
            {/* Phone frame */}
            <div className="bg-[var(--color-surface-1)] border border-[var(--color-border)] rounded-[2.5rem] p-2 shadow-2xl">
              {/* Screen */}
              <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-[#0a0a0a] text-white text-sm">
                  <span className="font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm opacity-60" />
                    <div className="w-6 h-3 border border-white rounded-sm opacity-60">
                      <div className="w-4 h-1.5 bg-white rounded-xs m-0.5" />
                    </div>
                  </div>
                </div>

                {/* Chat header */}
                <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-[#2a2a2a]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-400)] to-[var(--brand-600)] flex items-center justify-center text-black font-bold text-lg">
                    RA
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold">Real Accelerate</div>
                    <div className="text-green-400 text-xs flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      online
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="bg-[#0a0a0a] px-4 py-6 space-y-4 min-h-[400px]">
                  {/* Incoming message */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-400)] to-[var(--brand-600)] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      RA
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#1a1a1a] text-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                        <p className="text-sm">Hoi! Hoe gaat het met de nieuwe leads? 🚀</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 ml-2">14:32</div>
                    </div>
                  </div>

                  {/* Outgoing messages */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-[var(--brand-500)] text-black rounded-2xl rounded-tr-md px-4 py-3">
                        <p className="text-sm font-medium">Wauw! Ik kan het bijna niet geloven! 🤩</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 mr-2 text-right flex items-center justify-end gap-1">
                        14:33
                        <CheckCheck className="w-3 h-3 text-[var(--brand-500)]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-[var(--brand-500)] text-black rounded-2xl rounded-tr-md px-4 py-3">
                        <p className="text-sm font-medium">Vandaag al 8 nieuwe leads binnen! 📈</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 mr-2 text-right flex items-center justify-end gap-1">
                        14:33
                        <CheckCheck className="w-3 h-3 text-[var(--brand-500)]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-[var(--brand-500)] text-black rounded-2xl rounded-tr-md px-4 py-3">
                        <p className="text-sm font-medium">En 3 afspraken voor morgen ingepland! 🎯</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 mr-2 text-right flex items-center justify-end gap-1">
                        14:34
                        <CheckCheck className="w-3 h-3 text-[var(--brand-500)]" />
                      </div>
                    </div>
                  </div>

                  {/* Incoming response */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-400)] to-[var(--brand-600)] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      RA
                    </div>
                    <div className="flex-1">
                      <div className="bg-[#1a1a1a] text-white rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                        <p className="text-sm">Fantastisch! 🔥 Zo zien we dat graag!</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 ml-2">14:35</div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-[var(--brand-500)] text-black rounded-2xl rounded-tr-md px-4 py-3">
                        <p className="text-sm font-medium">Jullie systeem werkt echt perfect! 💪</p>
                      </div>
                      <div className="text-xs text-gray-500 mt-1 mr-2 text-right flex items-center justify-end gap-1">
                        14:35
                        <CheckCheck className="w-3 h-3 text-[var(--brand-500)]" />
                      </div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--brand-400)] to-[var(--brand-600)] flex items-center justify-center text-black font-bold text-sm flex-shrink-0">
                      RA
                    </div>
                    <div className="bg-[#1a1a1a] rounded-2xl rounded-tl-md px-4 py-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat input area */}
                <div className="bg-[#1a1a1a] px-4 py-3 border-t border-[#2a2a2a]">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2">
                      <span className="text-gray-500 text-sm">Typ een bericht...</span>
                    </div>
                    <div className="w-8 h-8 bg-[var(--brand-500)] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating success indicators */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold animate-pulse">
              +8
            </div>
            <div className="absolute top-1/3 -left-6 bg-[var(--brand-500)] text-black rounded-full px-3 py-1 text-xs font-bold shadow-lg">
              🎯 3 afspraken
            </div>
            <div className="absolute bottom-1/4 -right-8 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold shadow-lg">
              💰 ROI 6x
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 space-y-2">
          <p className="type-small text-[var(--color-text-secondary)]">
            Dit is hoe onze klanten reageren als hun agenda vol loopt met kwalitatieve afspraken
          </p>
          <p className="text-xs text-[var(--color-text-secondary)]/60 italic">
            — Gesprek met klant
          </p>
        </div>
      </div>
    </section>
  );
}
