import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { Processus } from "@/components/sections/Processus";
import { Secteurs } from "@/components/sections/Secteurs";
import { Garanties } from "@/components/sections/Garanties";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import pageData from "@/content/pages/installation.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Installation Rideau Métallique Paris 1er (${siteConfig.postalCode})`,
  description: `Installation rideau métallique à ${siteConfig.city}. Pose professionnelle pour commerces et locaux. Garantie 2 ans. Devis gratuit sous 24h. ${siteConfig.phone}`,
  alternates: {
    canonical: `${siteConfig.url}/installation`,
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
  name: "Installation Rideau Métallique",
  description: `Service d'installation de rideau métallique à ${siteConfig.city}. Pose professionnelle pour commerces et locaux.`,
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

export default function InstallationPage() {
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
          {/* Grid de fond */}
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
                  Installation professionnelle
                </span>

                <h1 className="mb-8">
                  <span className="block">Installation</span>
                  <span className="block text-outline">Rideau</span>
                  <span className="block">Métallique</span>
                </h1>

                <p className="text-lg text-neutral-500 max-w-md mb-10">
                  {content.hero.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a href={siteConfig.phoneLink} className="btn-call">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                    </span>
                    Devis gratuit
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Nous contacter
                  </Link>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-4">
                  {content.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-sm">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-700">{cert.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/installation-rideau-metallique-paris-1.webp" 
                    alt={`Installation rideau métallique ${siteConfig.city}`} 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white shadow-xl p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Garantie</p>
                  <p className="text-3xl font-black text-neutral-900">2 ans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de rideaux */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div>
                <span className="label mb-6">
                  <span className="label-number">01</span>
                  Types de rideaux
                </span>
                <h2>
                  Solutions<br />
                  <span className="text-neutral-400">adaptées</span>
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-lg text-neutral-500 max-w-md">
                  Nous installons tous types de rideaux pour commerces et locaux professionnels à {siteConfig.city}.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
              {content.prestations.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-8 hover:bg-neutral-900 transition-colors duration-300"
                >
                  <span className="block text-5xl font-black text-neutral-100 mb-6 group-hover:text-neutral-800 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processus d'installation */}
        <Processus 
          title={content.processus.title}
          subtitle={content.processus.subtitle}
          steps={content.processus.steps}
        />

        {/* Secteurs d'activité */}
        <Secteurs 
          title={content.secteurs.title}
          subtitle={content.secteurs.subtitle}
          items={content.secteurs.items}
        />

        {/* Garanties */}
        <Garanties 
          title={content.garanties.title}
          items={content.garanties.items}
        />

        {/* Marques */}
        <section className="section bg-white border-t border-neutral-200">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Partenaires
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="text-2xl md:text-3xl mb-4">Marques partenaires</h2>
              <p className="text-neutral-500">Nous travaillons avec les meilleures marques du marché.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {content.brands.map((brand) => (
                <div key={brand} className="p-5 text-center border border-neutral-200 hover:border-neutral-900 transition-colors">
                  <p className="font-semibold text-neutral-800 text-sm">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <Reviews 
          title="Avis clients - Installation" 
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
              <h2 className="mb-4">Installation - Zones d&apos;intervention</h2>
              <p className="text-neutral-500">
                Nous intervenons pour l&apos;installation de rideaux métalliques dans toutes ces zones.
              </p>
            </div>
            
            <div className="border-t border-l border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {zones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={`/installation/${zone.slug}`}
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
          title="Questions sur l'installation" 
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
