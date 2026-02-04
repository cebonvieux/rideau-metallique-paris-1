"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

interface CTAProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "urgence" | "minimal" | "dark";
}

export function CTA({ 
  title, 
  subtitle,
  variant = "default"
}: CTAProps) {
  // Variante urgence - Bandeau dramatique
  if (variant === "urgence") {
    return (
      <section className="relative bg-neutral-900 text-white overflow-hidden">
        {/* Texte géant en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[30vw] font-black tracking-tighter whitespace-nowrap">URGENCE</span>
        </div>

        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <span className="label text-neutral-500 mb-6">
              <span className="w-12 h-px bg-red-500 mr-4" />
              Service d&apos;urgence 24h/24
            </span>

            <h2 className="text-white mb-8">
              {title || "Rideau bloqué ?"}
              <br />
              <span className="text-neutral-500">Nous intervenons</span>
              <br />
              en 30 minutes.
            </h2>

            <p className="text-lg text-neutral-400 mb-12 max-w-lg">
              {subtitle || "Notre équipe d'astreinte est disponible 24h/24 et 7j/7 pour débloquer votre commerce en urgence."}
            </p>

            <a 
              href={siteConfig.phoneLink}
              className="group inline-flex items-center gap-6"
            >
              <span className="flex items-center justify-center w-16 h-16 bg-red-600 text-white group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <span className="block text-sm text-neutral-500 mb-1">Appeler maintenant</span>
                <span className="block text-2xl font-semibold text-white">{siteConfig.phone}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Stats flottants */}
        <div className="absolute bottom-0 right-0 hidden lg:block p-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <span className="block text-4xl font-black text-white">{siteConfig.stats.delaiIntervention}</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Intervention</span>
            </div>
            <div>
              <span className="block text-4xl font-black text-white">24/7</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Disponible</span>
            </div>
            <div>
              <span className="block text-4xl font-black text-white">{siteConfig.stats.interventions}</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">Interventions</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante minimal - Juste une ligne
  if (variant === "minimal") {
    return (
      <section className="py-8 border-y border-neutral-200">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-600">
              {title || "Une question ? Un projet ?"}
            </p>
            <div className="flex items-center gap-4">
              <a href={siteConfig.phoneLink} className="btn-dark text-xs">
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-ghost text-xs">
                Nous contacter →
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante dark
  if (variant === "dark") {
    return (
      <section className="bg-neutral-900 text-white py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white mb-6">
                {title || `Besoin d'un expert à ${siteConfig.city} ?`}
              </h2>
              <p className="text-lg text-neutral-400 mb-10">
                {subtitle || "Notre équipe intervient rapidement pour tous vos besoins en rideau métallique."}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-call">
                  {siteConfig.phone}
                </a>
                <Link href="/contact" className="btn-outline border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600">
                  Demander un devis
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Délai", value: "30 min" },
                { label: "Disponibilité", value: "24h/24" },
                { label: "Garantie", value: "1 an" },
                { label: "Devis", value: "Gratuit" },
              ].map((item, index) => (
                <div key={index} className="p-6 border border-neutral-800">
                  <span className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">{item.label}</span>
                  <span className="block text-2xl font-bold text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variante par défaut - Style éditorial
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ligne horizontale décorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-neutral-200" />
      
      <div className="container py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <span className="label justify-center mb-8">
            <span className="w-8 h-px bg-neutral-900 mr-3" />
            Contactez-nous
            <span className="w-8 h-px bg-neutral-900 ml-3" />
          </span>

          <h2 className="mb-8">
            {title || `Besoin d'une intervention à ${siteConfig.city} ?`}
          </h2>

          <p className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto">
            {subtitle || "Devis gratuit et intervention rapide. Notre équipe est disponible 24h/24."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={siteConfig.phoneLink} className="btn-dark">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link href="/contact" className="btn-outline">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
