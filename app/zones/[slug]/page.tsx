import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig, zones, services } from "@/config/site";
import { Services } from "@/components/sections/Services";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getPageContent } from "@/lib/content";
import faqData from "@/content/faq.json";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return zones.filter(zone => !zone.isMain).map((zone) => ({ slug: zone.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) return { title: "Zone non trouvée" };

  return {
    title: `Rideau Métallique ${zone.name} - ${siteConfig.name}`,
    description: `Dépannage rideau métallique à ${zone.name} (${zone.postalCode}). Intervention rapide 24h/24. ${siteConfig.phone}`,
  };
}

export default function ZonePage({ params }: Props) {
  const zone = zones.find((z) => z.slug === params.slug);
  if (!zone) notFound();

  const zoneFaq = getPageContent(faqData.global).map(item => ({
    ...item,
    answer: item.answer.replace(new RegExp(siteConfig.city, 'g'), zone.name),
  }));

  // Autres zones pour le maillage
  const otherZones = zones.filter(z => z.slug !== zone.slug).slice(0, 8);

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/zones" className="hover:text-neutral-900">Zones</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{zone.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-white pt-16 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-8">
                <span className="w-12 h-px bg-neutral-900 mr-4" />
                {zone.postalCode}
              </span>

              <h1 className="mb-8">
                Rideau Métallique<br />
                <span className="text-outline">{zone.name}</span>
              </h1>

              <p className="text-lg text-neutral-500 mb-10 max-w-lg">
                Intervention rapide en moins d&apos;une heure à {zone.name} ({zone.postalCode}). 
                Dépannage, installation, motorisation. Disponible 24h/24.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-call">
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
            </div>

            <div className="grid grid-cols-2 gap-4">
              {services.filter(s => s.hasPage).slice(0, 4).map((service, index) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}/${zone.slug}`}
                  className="group bg-neutral-50 p-6 hover:bg-neutral-900 transition-colors"
                >
                  <span className="block text-3xl font-black text-neutral-200 mb-4 group-hover:text-neutral-700 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-white transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors mt-1">
                    à {zone.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services title={`Nos services à ${zone.name}`} zoneSlug={zone.slug} />
      
      {/* Contenu SEO */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <span className="label mb-6">
              <span className="label-number">02</span>
              À propos
            </span>
            <h2 className="mb-8">Rideau métallique à {zone.name}</h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                Vous recherchez un spécialiste du <strong>rideau métallique à {zone.name}</strong> ? 
                {siteConfig.name} intervient rapidement sur {zone.name} ({zone.postalCode}) pour tous vos besoins : 
                dépannage, installation, motorisation et entretien.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                `Intervention en 1 heure sur ${zone.name}`,
                "Disponible 24h/24, 7j/7",
                "Devis gratuit avant intervention",
                "Techniciens qualifiés toutes marques"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-neutral-50">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones voisines */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Zones voisines</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherZones.map((z) => (
              <Link
                key={z.slug}
                href={`/zones/${z.slug}`}
                className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-sm"
              >
                {z.name}
              </Link>
            ))}
            <Link
              href="/zones"
              className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm"
            >
              Toutes les zones
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={zoneFaq.slice(0, 5)} title={`FAQ - Rideau Métallique ${zone.name}`} />
      <CTA title={`Besoin d'un dépannage à ${zone.name} ?`} />
    </main>
  );
}
