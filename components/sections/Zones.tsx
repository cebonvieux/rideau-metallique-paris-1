"use client";

import Link from "next/link";
import { siteConfig, services } from "@/config/site";
import { zones, Zone } from "@/config/zones";
import { getSubcityUrl } from "@/lib/content";

interface ZonesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  /** baseSlug du service (ex: "depannage-rideau-metallique"). Par défaut: dépannage */
  serviceBaseSlug?: string;
  /** URL de la page principale du service (pour la zone principale) */
  mainServiceUrl?: string;
  showCategories?: boolean;
}

export function Zones({ 
  title = "Zones d'intervention", 
  subtitle,
  limit = 18,
  serviceBaseSlug = "depannage-rideau-metallique",
  mainServiceUrl = "/",
  showCategories = false
}: ZonesProps) {
  const displayedZones = zones.slice(0, limit);

  const getZoneUrl = (zone: Zone) => {
    // Pour la zone principale (paris-1), on renvoie vers la page service principale
    if (zone.isMain) {
      return mainServiceUrl;
    }
    // Pour les autres zones, on génère l'URL subcity
    return getSubcityUrl(serviceBaseSlug, zone.slug);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <span className="label mb-6">
              <span className="label-number">06</span>
              Zones
            </span>
            <h2>
              {title}
            </h2>
          </div>
          <p className="text-neutral-500 max-w-md lg:text-right">
            {subtitle || `Intervention rapide sur ${siteConfig.city} et toute l'agglomération parisienne.`}
          </p>
        </div>

        {/* Grille de zones - Style minimal */}
        <div className="border-t border-l border-neutral-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {displayedZones.map((zone) => (
              <Link
                key={zone.slug}
                href={getZoneUrl(zone)}
                className={`group relative flex flex-col items-center justify-center p-6 border-r border-b border-neutral-200 transition-colors
                  ${zone.isMain 
                    ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                    : 'hover:bg-neutral-50'
                  }`}
              >
                <span className={`font-medium text-center transition-colors
                  ${zone.isMain ? 'text-white' : 'text-neutral-900 group-hover:text-neutral-600'}`}>
                  {zone.name}
                </span>
                <span className={`text-xs mt-1
                  ${zone.isMain ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  {zone.postalCode}
                </span>

                {/* Flèche au survol */}
                <span className={`absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity
                  ${zone.isMain ? 'text-white' : 'text-neutral-400'}`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Voir plus */}
        {zones.length > limit && (
          <div className="mt-8 text-center">
            <Link 
              href="/zones" 
              className="btn-outline"
            >
              Voir toutes les zones ({zones.length})
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
