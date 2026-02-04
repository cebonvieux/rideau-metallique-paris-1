"use client";

import { siteConfig } from "@/config/site";

interface Signe {
  icon: string;
  title: string;
  description: string;
}

interface SignesUsureProps {
  title?: string;
  subtitle?: string;
  items: Signe[];
}

export function SignesUsure({ 
  title = "Signes qu'il est temps d'entretenir votre rideau",
  subtitle = "Ne laissez pas ces symptômes s'aggraver. Un entretien préventif évite les pannes coûteuses.",
  items 
}: SignesUsureProps) {
  return (
    <section className="section bg-amber-50">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label text-amber-700 mb-6">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Attention
          </span>
          <h2 className="mb-6">{title}</h2>
          <p className="text-lg text-neutral-600">{subtitle}</p>
        </div>

        {/* Grille des signes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((signe, index) => (
            <div 
              key={index} 
              className="bg-white p-6 border-l-4 border-amber-400"
            >
              {/* Numéro */}
              <span className="block text-4xl font-black text-amber-200 mb-4">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                {signe.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {signe.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-amber-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-amber-900 font-medium">
            Vous reconnaissez un ou plusieurs de ces signes ?
          </p>
          <a href={siteConfig.phoneLink} className="btn-dark bg-amber-700 hover:bg-amber-800">
            Demander un diagnostic gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
