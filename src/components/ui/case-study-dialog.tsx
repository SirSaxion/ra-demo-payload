"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X, TrendingUp, Users, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  websiteUrl: string;
  category: string;
  tags: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  images: {
    hero: string;
    gallery: string[];
  };
  details: {
    projectDuration: string;
    location: string;
    teamSize: string;
    technologies: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

interface CaseStudyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData | null;
}

export function CaseStudyDialog({ isOpen, onClose, caseStudy }: CaseStudyDialogProps) {
  if (!caseStudy) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] w-full h-full p-0 overflow-hidden bg-[#1A1A1A]">
        {/* Header */}
        <DialogHeader className="relative p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="bg-[var(--brand-100)] text-[var(--brand-700)]">
                  {caseStudy.category}
                </Badge>
                <div className="flex gap-1">
                  {caseStudy.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-2">
                {caseStudy.title}
              </DialogTitle>
              <p className="text-lg text-gray-300 mb-4">{caseStudy.subtitle}</p>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open(caseStudy.websiteUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Bezoek website
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="shrink-0 ml-4"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800">
                <Image
                  src={caseStudy.images.hero}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Over het project</h3>
                <p className="text-gray-300 leading-relaxed">{caseStudy.description}</p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Resultaten</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-neutral-800 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-[var(--brand-400)]" />
                        <span className="font-medium text-white">{result.metric}</span>
                      </div>
                      <div className="text-2xl font-bold text-[var(--brand-400)] mb-1">
                        {result.value}
                      </div>
                      <p className="text-sm text-gray-400">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {caseStudy.images.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Galerij</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {caseStudy.images.gallery.map((image, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden bg-neutral-800">
                        <Image
                          src={image}
                          alt={`${caseStudy.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-neutral-800 rounded-xl p-6">
                  <blockquote className="text-lg text-gray-300 mb-4 italic">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-600)] flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{caseStudy.testimonial.author}</div>
                      <div className="text-sm text-gray-400">{caseStudy.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <div className="bg-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Project details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Duur</div>
                      <div className="font-medium text-white">{caseStudy.details.projectDuration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Locatie</div>
                      <div className="font-medium text-white">{caseStudy.details.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-400">Team grootte</div>
                      <div className="font-medium text-white">{caseStudy.details.teamSize}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-neutral-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Technologieën</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.details.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-neutral-700 text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[var(--brand-600)] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Interesse in een vergelijkbaar project?</h3>
                <p className="text-[var(--brand-100)] mb-4 text-sm">
                  Laten we bespreken hoe we jouw makelaarskantoor kunnen helpen groeien.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Plan een gesprek
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
