"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/config/site";
import { getSubcityUrl } from "@/lib/content";

interface ServicesProps {
  title?: string;
  subtitle?: string;
  /** Slug de la zone pour générer les URLs subcity */
  zoneSlug?: string;
}

const serviceImages: Record<string, string> = {
  depannage: "/images/gallery/dépannage-rideau-metallique-paris-1.webp",
  "fabrication-rideau-metallique-paris-1": "/images/gallery/fabrication-rideau-metallique-paris-1.webp",
  "installation-rideau-metallique-paris-1": "/images/gallery/installation-rideau-metallique-paris-1.webp",
  "motorisation-rideau-metallique-paris-1": "/images/gallery/motorisation-rideau-metallique-paris-1.webp",
  "entretien-rideau-metallique-paris-1": "/images/gallery/entretien-rideau-metallique-paris-1.webp",
  reparation: "/images/gallery/fabrication-rideau-metallique-paris-1.webp",
  "deblocage-rideau-metallique-paris-1": "/images/gallery/dépannage-rideau-metallique-paris-1.webp",
};

export function Services({ title, subtitle, zoneSlug }: ServicesProps) {
  const getServiceUrl = (service: typeof services[number]) => {
    // Si on a une zone, générer l'URL subcity avec le baseSlug du service
    if (zoneSlug) {
      return getSubcityUrl(service.baseSlug, zoneSlug);
    }
    // Sinon, lien vers la page service principale
    return `/${service.slug}`;
  };

  // Sélectionner les 4 services principaux
  const mainServices = services.slice(0, 4);

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* En-tête */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div>
            <span className="label mb-6">
              <span className="label-number">02</span>
              Nos services
            </span>
            <h2>
              Une expertise<br />
              <span className="text-neutral-400">complète</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-neutral-500 max-w-md">
              {subtitle || `De l'installation au dépannage d'urgence, nous couvrons tous vos besoins en rideau métallique à ${siteConfig.city}.`}
            </p>
          </div>
        </div>

        {/* Grille de services - Images en fond */}
        <div className="grid md:grid-cols-2 gap-px bg-neutral-200">
          {mainServices.map((service, index) => (
            <Link
              key={service.id}
              href={getServiceUrl(service)}
              className="group relative h-[400px] md:h-[500px] overflow-hidden"
            >
              {/* Image de fond */}
              <Image
                src={serviceImages[service.slug] || serviceImages.depannage}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay sombre */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

              {/* Numéro */}
              <span className="absolute top-6 right-6 text-[100px] font-black text-white/10 leading-none select-none">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Contenu */}
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {service.name}
                </h3>

                <p className="text-white/70 mb-6 max-w-sm">
                  {service.longDesc}
                </p>

                {/* Lien avec flèche */}
                <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  <span>En savoir plus</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Autres services - Liste simple */}
        {services.length > 4 && (
          <div className="mt-16 pt-16 border-t border-neutral-200">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-sm text-neutral-400 mr-4">Autres services :</span>
              {services.slice(4).map((service) => (
                <Link
                  key={service.id}
                  href={getServiceUrl(service)}
                  className="link-underline text-sm font-medium text-neutral-600 hover:text-neutral-900"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
