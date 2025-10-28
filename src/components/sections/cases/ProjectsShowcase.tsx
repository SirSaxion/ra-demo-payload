"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CaseStudyDialog, CaseStudyData } from "@/components/ui/case-study-dialog";
import { getCaseStudyById } from "@/data/case-studies";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export interface ProjectsShowcaseProps {
  badge?: string
  title?: string
  subtitle?: string
  // Note: projects are hardcoded for now as they link to case study dialogs
  // Future: make projects array editable when case studies are also CMS-ready
}

export default function ProjectsShowcase({
  badge = "Onze Projecten",
  title = "Websites die écht converteren",
  subtitle = "Bekijk enkele van onze recentste projecten voor ambitieuze makelaars. Van concept tot conversie."
}: ProjectsShowcaseProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = (caseStudyId: string) => {
    const caseStudy = getCaseStudyById(caseStudyId);
    if (caseStudy) {
      setSelectedCaseStudy(caseStudy);
      setIsDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24 pt-[84px] md:pt-[120px] pb-[96px] md:pb-[132px] bg-[radial-gradient(60%_70%_at_15%_15%,color-mix(in_oklab,var(--brand-400)_14%,transparent),transparent_70%),radial-gradient(60%_70%_at_85%_85%,color-mix(in_oklab,var(--brand-600)_12%,transparent),transparent_70%),linear-gradient(180deg,var(--brand-300-soft)_0%,var(--brand-400-soft)_100%)]">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [mask-image:radial-gradient(70%_70%_at_50%_40%,var(--neutral-900),transparent)]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projects-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid)" className="text-[var(--neutral-900)]" />
        </svg>
      </div>
      
      {/* Top wave */}
      <div className="pointer-events-none absolute inset-x-0 top-0">
        <svg className="block h-[84px] w-full md:h-[120px] rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>
      
      {/* Bottom wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0">
        <svg className="block h-[84px] w-full md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0 C300,60 900,20 1200,60 L1200,120 L0,120 Z" fill="var(--bg-section)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-sm md:text-base font-mono tracking-wider uppercase text-black mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-black" />
            {badge}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.01em] text-black mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-16">

          {/* Project 2 - Brabant Makelaar */}
          <div 
            className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => handleCardClick("brabant-makelaar")}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg">
              {/* MacOS Browser Mock */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-600 border border-gray-200">
                      debrabantmakelaar.nl
                    </div>
                  </div>
                </div>
                {/* Website Preview */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 overflow-hidden">
                  <Image
                    src="/images/brabantmakelaar-website.png"
                    alt="De Brabant Makelaar website"
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      200% Groei
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black mb-2">De Brabant Makelaar</h3>
                <p className="text-sm text-black/70 mb-3">Moderne website met geautomatiseerde leadnurturing en CRM integratie</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Website</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Automatisering</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">CRM</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-black hover:text-black hover:bg-black/5 font-semibold group/btn transition-all duration-300 py-3 rounded-xl border border-black/10 hover:border-black/20 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick("brabant-makelaar");
                  }}
                >
                  Lees dit verhaal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Project 3 - Paul Thijssen */}
          <div 
            className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => handleCardClick("paul-thijssen")}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg">
              {/* MacOS Browser Mock */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-600 border border-gray-200">
                      paulthijssen.nl
                    </div>
                  </div>
                </div>
                {/* Website Preview */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 overflow-hidden">
                  <Image
                    src="/images/paulthijssen-website.png"
                    alt="Paul Thijssen Makelaardij website"
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      €2M+ Sales
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black mb-2">Paul Thijssen Makelaardij</h3>
                <p className="text-sm text-black/70 mb-3">Premium website met focus op luxe woningen en persoonlijke benadering</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Luxe</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Premium</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">€2M+ Sales</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-black hover:text-black hover:bg-black/5 font-semibold group/btn transition-all duration-300 py-3 rounded-xl border border-black/10 hover:border-black/20 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick("paul-thijssen");
                  }}
                >
                  Lees dit verhaal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Project 1 - Makelaars van Amsterdam */}
          <div 
            className="group relative cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            onClick={() => handleCardClick("makelaars-amsterdam")}
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-lg">
              {/* MacOS Browser Mock */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-600 border border-gray-200">
                      makelaarsvanamsterdam.nl
                    </div>
                  </div>
                </div>
                {/* Website Preview */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-700 overflow-hidden">
                  <Image
                    src="/images/makelaarsvanamsterdam-website.png"
                    alt="Makelaars van Amsterdam website"
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      +320% Traffic
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="mt-4">
                <h3 className="text-lg font-bold text-black mb-2">Makelaars van Amsterdam</h3>
                <p className="text-sm text-black/70 mb-3">Hypermoderne website voor de Amsterdamse vastgoedmarkt</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Amsterdam</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">Modern Design</span>
                  <span className="px-2 py-1 bg-black/10 rounded-full text-xs font-medium text-black">+320% Traffic</span>
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-black hover:text-black hover:bg-black/5 font-semibold group/btn transition-all duration-300 py-3 rounded-xl border border-black/10 hover:border-black/20 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick("makelaars-amsterdam");
                  }}
                >
                  Lees dit verhaal
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Case Study Dialog */}
      <CaseStudyDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        caseStudy={selectedCaseStudy}
      />
    </section>
  );
}
