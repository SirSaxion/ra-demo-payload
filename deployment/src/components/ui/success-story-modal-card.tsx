"use client"

import React from "react"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Star, Quote, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SuccessStoryModalCardProps {
  avatar: string
  name: string
  role: string
  company: string
  rating: number
  story: string
  achievement: string
  metric: string
  onClose: () => void
  className?: string
}

export function SuccessStoryModalCard({
  avatar,
  name,
  role,
  company,
  rating,
  story,
  achievement,
  metric,
  onClose,
  className,
}: SuccessStoryModalCardProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader className="border-b border-[color-mix(in_oklab,var(--neutral-900)_10%,transparent)] pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full border-2 border-[color-mix(in_oklab,var(--neutral-900)_12%,transparent)] overflow-hidden">
              <Image
                src={avatar}
                alt={name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-600">{role}</p>
              <p className="text-sm font-medium text-gray-800">{company}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, idx) => (
              <Star key={idx} className="h-5 w-5 fill-[var(--brand-400)] text-[var(--brand-400)]" />
            ))}
          </div>

          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-6 h-6 text-[var(--brand-400)]/30" />
            <p className="text-base leading-relaxed pl-6 italic text-gray-700">{story}</p>
          </div>

          <div className="rounded-xl p-5 md:p-6 border bg-gray-50 text-gray-900 border-gray-200 shadow-sm">
            <h3 className="font-semibold mb-2 text-gray-700">Resultaat:</h3>
            <p className="text-base md:text-lg font-medium mb-2 text-gray-800">{achievement}</p>
            <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">{metric}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default SuccessStoryModalCard
