import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: `Zones d'intervention - ${siteConfig.name}`,
  description: `Dépannage rideau métallique à ${siteConfig.city} et environs. Intervention rapide 24h/24. ${siteConfig.phone}`,
};

export default function ZonesPage() {
  const mainCity = zones.find(z => z.isMain);
  const otherZones = zones.filter(z => !z.isMain);

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-16">
        <div className="container">
          <div className="max-w-2xl">
            <span className="label mb-8">
              <span className="w-12 h-px bg-neutral-900 mr-4" />
              Zones d&apos;intervention
            </span>
            <h1>
              Rideau Métallique<br />
              <span className="text-neutral-400">{siteConfig.city}</span>
            </h1>
            <p className="text-lg text-neutral-500 mt-6">
              Intervention rapide sur {siteConfig.city} et toute l&apos;agglomération parisienne.
            </p>
          </div>
        </div>
      </section>

      {/* Zone principale */}
      {mainCity && (
        <section className="bg-neutral-900 text-white">
          <div className="container py-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{mainCity.name}</h2>
                <p className="text-neutral-400 text-lg max-w-xl">
                  Basés à {mainCity.name}, nous intervenons en moins d&apos;une heure pour tous vos besoins en rideau métallique.
                </p>
              </div>
              <a href={siteConfig.phoneLink} className="btn-call whitespace-nowrap">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Toutes les zones */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-12">
            <span className="label mb-6">
              <span className="label-number">{zones.length}</span>
              zones couvertes
            </span>
            <h2>Toutes nos zones d&apos;intervention</h2>
          </div>
          
          <div className="border-t border-l border-neutral-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {otherZones.map((zone) => (
                <Link 
                  key={zone.slug} 
                  href={`/zones/${zone.slug}`} 
                  className="p-5 border-r border-b border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors text-center group"
                >
                  <span className="block font-medium text-neutral-900 group-hover:text-white transition-colors">
                    {zone.name}
                  </span>
                  <span className="block text-xs text-neutral-400 mt-1">
                    {zone.postalCode}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
