"use client";

import { siteConfig } from "@/config/site";

interface Panne {
  icon: string;
  title: string;
  description: string;
}

interface PannesCourantesProps {
  title?: string;
  subtitle?: string;
  items: Panne[];
}

export function PannesCourantes({ 
  title = "Pannes courantes",
  subtitle = `Nos techniciens interviennent pour tous types de dysfonctionnements à ${siteConfig.city}.`,
  items 
}: PannesCourantesProps) {
  return (
    <section className="section bg-neutral-900 text-white">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label text-neutral-500 mb-6">
            <span className="w-8 h-px bg-neutral-700 mr-3" />
            Dépannage
          </span>
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-lg text-neutral-400">{subtitle}</p>
        </div>

        {/* Grille des pannes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
          {items.map((panne, index) => (
            <div 
              key={index} 
              className="group bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors"
            >
              {/* Numéro */}
              <span className="block text-5xl font-black text-neutral-800 mb-6 group-hover:text-neutral-700 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {panne.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {panne.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-800">
          <p className="text-neutral-400">
            Votre panne n&apos;est pas listée ? Nous intervenons sur <strong className="text-white">tous types de problèmes</strong>.
          </p>
          <a href={siteConfig.phoneLink} className="btn-call whitespace-nowrap">
            Appeler le {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
