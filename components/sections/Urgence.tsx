"use client";

import { siteConfig } from "@/config/site";

interface UrgenceProps {
  title?: string;
  subtitle?: string;
  features?: string[];
}

export function Urgence({ 
  title = "Urgence 24h/24",
  subtitle = "Rideau bloqué en pleine nuit ? Notre équipe d'astreinte intervient immédiatement.",
  features = [
    "Technicien disponible 24h/24",
    "Intervention en 30 minutes",
    "Tous types de pannes",
    "Devis gratuit par téléphone"
  ]
}: UrgenceProps) {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      {/* Texte géant en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-black text-neutral-800/50 whitespace-nowrap">24/7</span>
      </div>

      <div className="container relative py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="label text-red-400 mb-8">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Service d&apos;urgence
          </span>

          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8">
            {title}
          </h2>

          <p className="text-xl text-neutral-400 mb-12 max-w-xl">
            {subtitle}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-neutral-300">
                <span className="w-5 h-5 flex items-center justify-center bg-white/10">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a 
            href={siteConfig.phoneLink}
            className="group inline-flex items-center gap-6"
          >
            <span className="flex items-center justify-center w-16 h-16 bg-red-600 group-hover:bg-red-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <span className="block text-sm text-neutral-500">Appeler maintenant</span>
              <span className="block text-2xl font-semibold">{siteConfig.phone}</span>
            </div>
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 right-12 hidden xl:grid grid-cols-3 gap-8">
          {[
            { value: siteConfig.stats.delaiIntervention, label: "Délai max" },
            { value: siteConfig.stats.interventions, label: "Interventions" },
            { value: `${siteConfig.reviews.rating}/5`, label: "Note Google" },
          ].map((stat, index) => (
            <div key={index} className="text-right">
              <span className="block text-3xl font-black text-white">{stat.value}</span>
              <span className="text-xs uppercase tracking-wider text-neutral-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
