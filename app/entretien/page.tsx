import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { SignesUsure } from "@/components/sections/SignesUsure";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import pageData from "@/content/pages/entretien.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Entretien Rideau Métallique Paris 1er (${siteConfig.postalCode})`,
  description: `Entretien et maintenance rideau métallique à ${siteConfig.city}. Contrats adaptés à vos besoins. Devis gratuit. ${siteConfig.phone}`,
  alternates: {
    canonical: `${siteConfig.url}/entretien`,
  },
};

// Schema FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: content.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};

// Schema Service
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Entretien Rideau Métallique",
  description: `Service d'entretien et maintenance de rideau métallique à ${siteConfig.city}. Contrats annuels pour commerces et professionnels.`,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
};

export default function EntretienPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative min-h-[80vh] bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                              linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative z-10">
            <div className="h-24" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
              <div>
                <span className="label mb-8">
                  <span className="w-12 h-px bg-neutral-900 mr-4" />
                  Maintenance préventive
                </span>

                <h1 className="mb-8">
                  <span className="block">Entretien</span>
                  <span className="block text-outline">Rideau</span>
                  <span className="block">Métallique</span>
                </h1>

                <p className="text-lg text-neutral-500 max-w-md mb-10">
                  {content.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href={siteConfig.phoneLink} className="btn-call">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Nous contacter
                  </a>
                  <Link href="#contrats" className="btn-outline">
                    Voir nos contrats
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/entretien-rideau-metallique-paris-1.webp" 
                    alt={`Entretien rideau métallique ${siteConfig.city}`} 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signes d'usure */}
        <SignesUsure 
          title={content.signesUsure.title}
          subtitle={content.signesUsure.subtitle}
          items={content.signesUsure.items}
        />

        {/* Avantages */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div>
                <span className="label mb-6">
                  <span className="label-number">02</span>
                  Avantages
                </span>
                <h2>
                  Pourquoi<br />
                  <span className="text-neutral-400">entretenir ?</span>
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-lg text-neutral-500 max-w-md">
                  Un entretien régulier vous fait économiser de l&apos;argent et vous évite les pannes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.avantages.map((item, index) => (
                <div key={index} className="text-center">
                  <span className="block text-5xl font-black text-neutral-100 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prestations */}
        <section id="contrats" className="section bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label text-neutral-500 mb-6">
                <span className="label-number">03</span>
                Prestations
              </span>
              <h2 className="text-white mb-6">Ce que comprend notre entretien</h2>
              <p className="text-lg text-neutral-400">
                Un entretien complet pour garantir le bon fonctionnement de votre rideau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800">
              {content.prestations.map((item, index) => (
                <div key={index} className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors">
                  <span className="block text-4xl font-black text-neutral-800 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <Reviews 
          title="Avis clients - Entretien" 
          items={content.reviews} 
        />

        {/* Zones d'intervention */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Zones
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="mb-4">Entretien - Zones d&apos;intervention</h2>
              <p className="text-neutral-500">
                Nous intervenons pour l&apos;entretien de rideaux métalliques dans toutes ces zones.
              </p>
            </div>
            
            <div className="border-t border-l border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {zones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={`/entretien/${zone.slug}`}
                    className={`p-4 border-r border-b border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors text-center
                      ${zone.isMain ? 'bg-neutral-900 text-white' : ''}`}
                  >
                    <span className="block font-medium">{zone.name}</span>
                    <span className="block text-xs mt-1 opacity-60">{zone.postalCode}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={content.faq} 
          title="Questions sur l'entretien" 
        />

        {/* CTA */}
        <CTA 
          title={content.cta.title} 
          subtitle={content.cta.subtitle} 
        />
      </main>
    </>
  );
}
