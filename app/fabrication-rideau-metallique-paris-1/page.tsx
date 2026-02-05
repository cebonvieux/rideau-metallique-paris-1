import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { getPageContent, getSubcityUrl } from "@/lib/content";
import { Processus } from "@/components/sections/Processus";
import { Secteurs } from "@/components/sections/Secteurs";
import { Garanties } from "@/components/sections/Garanties";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import pageData from "@/content/pages/fabrication.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Fabrication Rideau Métallique Paris 1er Sur Mesure`,
  description: `Fabrication rideau métallique sur mesure à Paris 1er. Atelier local, fabrication française. Devis gratuit ☎️ ${siteConfig.phone}.`,
  keywords: [
    "fabrication rideau métallique Paris 1er",
    "rideau métallique sur mesure 75001",
    "fabricant rideau métallique Paris",
    "fabrication grille métallique Paris 1er",
    "rideau métallique français Paris",
    "fabrication fermeture métallique Paris 1er",
    "atelier rideau métallique Paris",
    "fabrication store métallique Paris 1er",
  ],
  alternates: {
    canonical: `${siteConfig.url}/fabrication-rideau-metallique-paris-1`,
  },
  openGraph: {
    title: `Fabrication Rideau Métallique Paris 1er - ${siteConfig.name}`,
    description: `Fabrication de rideaux métalliques sur mesure à Paris 1er. Atelier local, fabrication française, devis gratuit.`,
    type: "website",
    url: `${siteConfig.url}/fabrication-rideau-metallique-paris-1`,
    siteName: siteConfig.fullName,
    images: [
      {
        url: `${siteConfig.url}/images/gallery/fabrication-rideau-metallique-paris-1.webp`,
        width: 1200,
        height: 630,
        alt: `Fabrication rideau métallique ${siteConfig.city}`,
      },
    ],
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
  name: "Fabrication Rideau Métallique",
  description: `Service de fabrication de rideau métallique sur mesure à ${siteConfig.city}. Atelier local, fabrication française.`,
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

export default function FabricationPage() {
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
                  Fabrication française
                </span>

                <h1 className="mb-8">
                  <span className="block">Fabrication</span>
                  <span className="block text-outline">Rideau</span>
                  <span className="block">Métallique Paris 1</span>
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
                    src="/images/gallery/fabrication-rideau-metallique-paris-1.webp" 
                    alt={`Fabrication rideau métallique ${siteConfig.city}`} 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
                
                {/* Badge flottant */}
                <div className="absolute bottom-6 left-6 bg-white shadow-xl p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">Expérience</p>
                  <p className="text-3xl font-black text-neutral-900">25+ ans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sur mesure */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image à gauche */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/fabrication-rideau-metallique-drm-sur-mesure-rideau-metallique.webp" 
                    alt="Rideau métallique sur mesure DRM Paris 1er" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>

              {/* Contenu à droite */}
              <div>
                <span className="label mb-6">
                  <span className="w-12 h-px bg-neutral-900 mr-4" />
                  Sur mesure
                </span>

                <h2 className="mb-6">
                  Rideau Métallique Sur-Mesure à Paris 1er : L&apos;Excellence Artisanale
                </h2>

                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Spécialiste de la fabrication de rideaux métalliques sur mesure à Paris 1er (75001), DRM Paris 1 conçoit et fabrique des fermetures métalliques de haute qualité dans ses ateliers. Chaque rideau est fabriqué selon vos dimensions exactes et vos besoins spécifiques : commerces des Halles, boutiques du Palais-Royal, restaurants de Châtelet ou locaux professionnels de la Place Vendôme.
                  </p>

                  <p>
                    Avec plus de 25 ans d&apos;expérience dans la fabrication de rideaux métalliques, nous maîtrisons toutes les techniques de production : lames pleines pour sécurité maximale, micro-perforées pour visibilité, grilles articulées, rideaux coupe-feu certifiés et solutions grande dimension pour industriels. Notre atelier local dans Paris garantit des délais courts et une qualité irréprochable.
                  </p>

                  <p>
                    De la prise de mesures à l&apos;installation finale, nous vous accompagnons à chaque étape. Nos artisans utilisent exclusivement des matériaux de première qualité : acier galvanisé, aluminium ou inoxydable. Chaque rideau fabriqué respecte les normes CE et bénéficie d&apos;une garantie constructeur. Fabrication 100% française pour une durabilité exceptionnelle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Atelier de Fabrication - Section SEO */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Contenu à gauche */}
              <div className="lg:order-1">
                <span className="label mb-6">
                  <span className="w-12 h-px bg-neutral-900 mr-4" />
                  Atelier local
                </span>

                <h2 className="mb-6">
                  Fabricant de Rideaux Métalliques à Paris 1er : Production Locale et Qualité Premium
                </h2>

                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Notre atelier de fabrication situé à Paris 1er est équipé des dernières technologies pour produire des rideaux métalliques de qualité supérieure. Fabricant professionnel depuis plus de deux décennies, nous réalisons la conception complète de vos fermetures métalliques : du découpage des lames à l&apos;assemblage final, en passant par le traitement anticorrosion et la peinture thermolaqueé.
                  </p>

                  <p>
                    Chaque rideau métallique fabriqué dans nos ateliers parisiens répond aux normes européennes les plus strictes (CE, NF). Nous proposons une large gamme de solutions : rideaux à lames pleines blindées pour banques et bijouteries, rideaux micro-perforés pour vitrines commerciales, grilles enroulables pour centres commerciaux, et rideaux coupe-feu pour établissements recevant du public (ERP). Production rapide garantie sous 5 à 10 jours ouvrés.
                  </p>

                  <p>
                    Notre service fabrication inclut la prise de mesures précise sur site, le conseil personnalisé sur le choix des matériaux (acier, aluminium, inox), la fabrication en atelier selon vos spécifications exactes, et l&apos;installation par nos équipes certifiées. Chaque rideau bénéficie d&apos;une garantie fabricant de 10 ans sur les pièces et d&apos;un suivi après-vente dédié. Devis gratuit et intervention 7j/7 dans tout Paris 1er.
                  </p>
                </div>
              </div>

              {/* Image à droite */}
              <div className="relative lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/installation-rideau-metallique-paris-1.webp" 
                    alt="Atelier de fabrication rideaux métalliques Paris 1er - Production locale qualité premium" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de rideaux */}
        <section className="section bg-white">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div>
                <span className="label mb-6">
                  <span className="label-number">01</span>
                  Types de rideaux
                </span>
                <h2>
                  Rideaux fabriqués<br />
                  <span className="text-neutral-400">sur mesure</span>
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-lg text-neutral-500 max-w-md">
                  Nous fabriquons tous types de rideaux métalliques pour commerces et locaux professionnels à {siteConfig.city}.
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

        {/* Processus de fabrication */}
        <Processus 
          title={content.processus.title}
          subtitle={content.processus.subtitle}
          steps={content.processus.steps}
        />

        {/* Matériaux et finitions */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label mb-6">
                <span className="label-number">03</span>
                Matériaux
              </span>
              <h2 className="mb-6">{content.materiaux.title}</h2>
              <p className="text-lg text-neutral-500">
                {content.materiaux.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.materiaux.items.map((item, index) => (
                <div key={index} className="bg-neutral-50 p-8">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-6">{item.description}</p>
                  
                  <ul className="space-y-2">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Normes et certifications */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Conformité
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="mb-4">{content.normes.title}</h2>
              <p className="text-neutral-500">
                {content.normes.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.normes.items.map((item, index) => (
                <div key={index} className="bg-white p-8 border border-neutral-200">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secteurs d'activité */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="text-center">
                <span className="label justify-center mb-6">
                  <span className="w-8 h-px bg-neutral-900 mr-3" />
                  Secteurs
                  <span className="w-8 h-px bg-neutral-900 ml-3" />
                </span>
                <h2 className="mb-6">{content.secteurs.title}</h2>
                <p className="text-lg text-neutral-500">
                  {content.secteurs.subtitle}
                </p>
              </div>
            </div>
            
            <Secteurs 
              items={content.secteurs.items}
            />
            
            <div className="mt-12 text-center">
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Après la fabrication et l&apos;installation de votre nouveau rideau métallique, nous vous recommandons de souscrire à un <Link href="/entretien-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">contrat d&apos;entretien préventif</Link> pour garantir son bon fonctionnement dans le temps. Si vous souhaitez automatiser votre rideau, découvrez notre service de <Link href="/motorisation-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">motorisation</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Marques */}
        <section className="section bg-neutral-50 border-t border-neutral-200">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Partenaires
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="text-2xl md:text-3xl mb-4">Marques partenaires motorisation</h2>
              <p className="text-neutral-500">Nous travaillons avec les meilleures marques de motorisation.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {content.brands.map((brand) => (
                <div key={brand} className="p-5 text-center border border-neutral-200 bg-white hover:border-neutral-900 transition-colors">
                  <p className="font-semibold text-neutral-800 text-sm">{brand}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <Reviews 
          title="Avis clients - Fabrication" 
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
              <h2 className="mb-4">Fabrication - Zones d&apos;intervention</h2>
              <p className="text-neutral-500">
                Nous intervenons pour la fabrication de rideaux métalliques dans toutes ces zones.
              </p>
            </div>
            
            <div className="border-t border-l border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {zones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={zone.isMain ? '/fabrication-rideau-metallique-paris-1' : getSubcityUrl('fabrication-rideau-metallique', zone.slug)}
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
          title="Questions sur la fabrication" 
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
