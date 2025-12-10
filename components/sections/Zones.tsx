import Link from "next/link";
import { siteConfig, zones } from "@/config/site";

interface ZonesProps {
  title?: string;
  limit?: number;
}

export function Zones({ title = "Zones d'intervention", limit = 12 }: ZonesProps) {
  const displayedZones = zones.slice(0, limit);

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            Intervention rapide à {siteConfig.city} et dans toute l&apos;agglomération.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayedZones.map((zone) => (
            <Link
              key={zone.slug}
              href={`/zones/${zone.slug}`}
              className={`flex flex-col items-center p-4 rounded-xl text-center transition-all hover:scale-105 ${
                zone.isMain
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-100'
              }`}
            >
              <svg className={`w-6 h-6 mb-2 ${zone.isMain ? 'text-white' : 'text-primary-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className={`font-medium text-sm ${zone.isMain ? 'text-white' : 'text-gray-900'}`}>{zone.name}</span>
              <span className={`text-xs ${zone.isMain ? 'text-white/80' : 'text-gray-500'}`}>{zone.postalCode}</span>
            </Link>
          ))}
        </div>

        {zones.length > limit && (
          <div className="text-center mt-8">
            <Link href="/zones" className="btn-secondary">
              Voir toutes les zones ({zones.length})
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

