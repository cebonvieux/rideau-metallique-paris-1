"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface HeroProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  showImage?: boolean;
  variant?: "default" | "service" | "zone";
}

export function Hero({ 
  title,
  subtitle,
  imageSrc = "/images/gallery/rideau-métallique-paris-1.webp",
  imageAlt,
  showImage = true,
  variant = "default"
}: HeroProps) {
  const displayTitle = title || "Dépannage Rideau Métallique";
  const displaySubtitle = subtitle || "Votre rideau métallique est bloqué ? Notre équipe intervient en urgence 7j/7 à Paris 1er.";
  const displayImageAlt = imageAlt || `Dépannage rideau métallique ${siteConfig.city}`;

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Grid de fond subtil */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                          linear-gradient(to bottom, #000 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header spacer */}
        <div className="h-20 md:h-24" />

        {/* Main content */}
        <div className="flex-1 container flex flex-col lg:flex-row">
          {/* Colonne gauche - Texte */}
          <div className="flex-1 flex flex-col justify-center py-12 lg:py-20 lg:pr-16">
            {/* Label */}
            <div className="mb-8">
              <span className="label">
                <span className="w-12 h-px bg-neutral-900 mr-4" />
                Intervention 24h/24 · Paris 1er
              </span>
            </div>

            {/* Titre principal - Typography as design */}
            <h1 className="mb-8">
              <span className="block">Dépannage</span>
              <span className="block text-outline">Rideau</span>
              <span className="block">Métallique</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg md:text-xl text-neutral-500 max-w-md mb-12 leading-relaxed">
              {displaySubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <a href={siteConfig.phoneLink} className="btn-call group">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-outline">
                Demander un devis
              </Link>
            </div>

            {/* Stats en ligne */}
            <div className="flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-neutral-900">30</span>
                <span className="text-neutral-400 leading-tight">min<br/>d&apos;intervention</span>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-neutral-900">4.9</span>
                <span className="text-neutral-400 leading-tight">sur Google<br/>{siteConfig.reviews.count} avis</span>
              </div>
              <div className="w-px h-10 bg-neutral-200" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-neutral-900">15+</span>
                <span className="text-neutral-400 leading-tight">années<br/>d&apos;expérience</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Image */}
          {showImage && (
            <div className="lg:flex-1 relative">
              <div className="relative h-[50vh] lg:h-full lg:absolute lg:inset-0 lg:-right-16">
                {/* Image principale */}
                <div className="absolute inset-0 img-hover">
                  <Image
                    src={imageSrc}
                    alt={displayImageAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />

                {/* Badge flottant */}
                <div className="absolute bottom-8 left-8 lg:bottom-16 lg:-left-8 bg-white shadow-2xl p-6 max-w-[200px]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Disponibilité</p>
                  <p className="text-4xl font-black text-neutral-900 leading-none">24/7</p>
                  <p className="text-sm text-neutral-500 mt-2">Service d&apos;urgence</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Barre de scroll indicator */}
        <div className="container pb-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Scroll</span>
            <div className="flex-1 h-px bg-neutral-200 relative">
              <div className="absolute left-0 top-0 h-full w-16 bg-neutral-900 animate-line-expand" />
            </div>
          </div>
        </div>
      </div>

      {/* Numéro de téléphone vertical */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 writing-vertical-rl rotate-180">
        <a 
          href={siteConfig.phoneLink} 
          className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-300 hover:text-neutral-900 transition-colors"
        >
          Appeler · {siteConfig.phone}
        </a>
      </div>

      <style jsx>{`
        .writing-vertical-rl {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
}
