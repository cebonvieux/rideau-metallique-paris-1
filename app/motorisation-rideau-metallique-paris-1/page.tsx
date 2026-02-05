import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { getPageContent, getSubcityUrl } from "@/lib/content";
import { Accessoires } from "@/components/sections/Accessoires";
import { Comparatif } from "@/components/sections/Comparatif";
import { ROI } from "@/components/sections/ROI";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { ContentBlock } from "@/components/sections/ContentBlock";
import pageData from "@/content/pages/motorisation.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Motorisation Rideau Métallique Paris 1er - Somfy`,
  description: `Motorisation rideau métallique à Paris 1er. Installation Somfy, Nice, Came. Automatisation complète. Devis gratuit ☎️ ${siteConfig.phone}`,
  keywords: [
    "motorisation rideau métallique Paris 1er",
    "automatisation rideau 75001",
    "moteur rideau métallique Paris",
    "motorisation grille métallique Paris 1er",
    "rideau automatique Paris",
    "motorisation store métallique Paris 1er",
    "moteur fermeture métallique Paris",
    "automatisation rideau de fer Paris 1er",
  ],
  alternates: {
    canonical: `${siteConfig.url}/motorisation-rideau-metallique-paris-1`,
  },
  openGraph: {
    title: `Motorisation Rideau Métallique Paris 1er - ${siteConfig.name}`,
    description: `Automatisation de rideaux métalliques à Paris 1er. Installation de moteurs Somfy, Nice, Came. Devis gratuit.`,
    type: "website",
    url: `${siteConfig.url}/motorisation-rideau-metallique-paris-1`,
    siteName: siteConfig.fullName,
    images: [
      {
        url: `${siteConfig.url}/images/gallery/motorisation-rideau-metallique-paris-1.webp`,
        width: 1200,
        height: 630,
        alt: `Motorisation rideau métallique ${siteConfig.city}`,
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
  name: "Motorisation Rideau Métallique",
  description: `Service de motorisation de rideau métallique à ${siteConfig.city}. Automatisation de rideaux manuels existants ou neufs.`,
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

export default function MotorisationPage() {
  const motorImages = [
    "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
    "/images/gallery/Axe-central-motorise-rideau-metallique.webp",
    "/images/gallery/moteur-externe-rideau-metallique-drm.webp"
  ];

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
                  Automatisation
                </span>

                <h1 className="mb-8">
                  <span className="block">Motorisation</span>
                  <span className="block text-outline">Rideau</span>
                  <span className="block">Métallique Paris 1</span>
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
                    Devis gratuit
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Nous contacter
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/motorisation-rideau-metallique-paris-1.webp" 
                    alt={`Motorisation rideau métallique ${siteConfig.city}`} 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section enrichie SEO 1 - Image à gauche */}
        <ContentBlock 
          title="Motorisation de rideau métallique à Paris 1er : confort et sécurité"
          subtitle="Automatisation complète"
          content="<p>La <strong>motorisation de rideau métallique à Paris 1er</strong> transforme votre fermeture manuelle en un système automatisé moderne et pratique. Notre entreprise spécialisée installe des moteurs pour rideaux métalliques adaptés à toutes les configurations : boutiques, commerces, restaurants et locaux professionnels du 1er arrondissement.</p><p>Nous proposons trois types de motorisation : le moteur tubulaire (intégré dans l'axe d'enroulement), le moteur central (pour les rideaux lourds) et le moteur externe latéral. Chaque solution est choisie en fonction du poids du tablier, de l'espace disponible et de vos contraintes techniques.</p><p>L'installation comprend le moteur, le système de commande (interrupteur à clé, télécommande ou smartphone), les fins de course automatiques et tous les dispositifs de sécurité obligatoires. Un test complet est réalisé après la pose pour garantir un fonctionnement optimal et conforme aux normes.</p>"
          imageSrc="/images/gallery/motorisation-rideau-metallique-paris-1.webp"
          imageAlt="Motorisation rideau métallique Paris 1er - Installation moteur tubulaire"
          imagePosition="left"
        />

        {/* Section enrichie SEO 2 - Image à droite */}
        <ContentBlock 
          title="Installation de moteurs Somfy, Nice et Came à Paris 1er"
          subtitle="Marques premium"
          content="<p>Nous travaillons exclusivement avec les <strong>meilleurs fabricants de moteurs pour rideaux métalliques</strong> : Somfy, Nice, Came, Simu et BFT. Ces marques reconnues garantissent une fiabilité exceptionnelle et une durée de vie prolongée de votre installation.</p><p>Pour les <strong>commerces du centre de Paris</strong>, nous recommandons les moteurs Somfy Orea ou Nice Spinbus, particulièrement adaptés aux rideaux de devanture. Ces moteurs silencieux intègrent une technologie anti-écrasement et un débrayage automatique en cas d'obstacle. La télécommande permet d'ouvrir votre rideau à distance, idéal pour les matins pluvieux ou chargés.</p><p>Notre service inclut la programmation complète du moteur, l'installation des commandes, la mise en sécurité et une formation à l'utilisation. En cas de rideau ancien, nous réalisons d'abord un diagnostic pour vérifier la compatibilité avec une motorisation. Une <strong>garantie de 2 ans</strong> couvre le moteur et l'installation.</p>"
          imageSrc="/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp"
          imageAlt="Installation moteur Somfy pour rideau métallique à Paris 1er"
          imagePosition="right"
        />

        {/* Avantages */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div>
                <span className="label mb-6">
                  <span className="label-number">01</span>
                  Avantages
                </span>
                <h2>
                  Pourquoi<br />
                  <span className="text-neutral-400">motoriser ?</span>
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-lg text-neutral-500 max-w-md">
                  Gagnez en confort, en sécurité et en tranquillité au quotidien.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
              {content.avantages.map((item, index) => (
                <div key={index} className="group bg-white p-8 hover:bg-neutral-900 transition-colors duration-300">
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

        {/* Types de moteurs */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label mb-6">
                <span className="label-number">02</span>
                Types de moteurs
              </span>
              <h2 className="mb-6">Quel moteur pour votre rideau ?</h2>
              <p className="text-lg text-neutral-500">
                Nous installons le moteur adapté à votre configuration et vos besoins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {content.types.map((item, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 img-hover">
                    <Image 
                      src={motorImages[index]} 
                      alt={item.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{item.description}</p>
                  
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

        {/* Accessoires */}
        <Accessoires 
          title={content.accessoires.title}
          subtitle={content.accessoires.subtitle}
          items={content.accessoires.items}
        />

        {/* Comparatif */}
        <Comparatif 
          title={content.comparatif.title}
          subtitle={content.comparatif.subtitle}
          manuel={content.comparatif.manuel}
          motorise={content.comparatif.motorise}
        />

        {/* ROI */}
        <section className="section bg-white">
          <div className="container">
            <ROI 
              title={content.roi.title}
              subtitle={content.roi.subtitle}
              items={content.roi.items}
            />
            
            <div className="mt-12 text-center">
              <p className="text-neutral-600 max-w-2xl mx-auto">
                La motorisation de votre rideau métallique est un investissement rentable sur le long terme. Pour préserver la durée de vie de votre moteur, pensez à souscrire à un <Link href="/entretien-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">contrat d&apos;entretien annuel</Link>. En cas de panne urgente, notre service de <Link href="/" className="text-primary font-medium hover:underline">dépannage 24h/24</Link> est à votre disposition. Si vous souhaitez remplacer complètement votre rideau, consultez notre service d&apos;<Link href="/installation-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">installation de rideaux neufs</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Avis clients */}
        <Reviews 
          title="Avis clients - Motorisation" 
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
              <h2 className="mb-4">Motorisation - Zones d&apos;intervention</h2>
              <p className="text-neutral-500">
                Nous intervenons pour la motorisation de rideaux métalliques dans toutes ces zones.
              </p>
            </div>
            
            <div className="border-t border-l border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {zones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={zone.isMain ? '/motorisation-rideau-metallique-paris-1' : getSubcityUrl('motorisation-rideau-metallique', zone.slug)}
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
          title="Questions sur la motorisation" 
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
