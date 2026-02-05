import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Deblocage } from "@/components/sections/Deblocage";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { PannesCourantes } from "@/components/sections/PannesCourantes";
import { Urgence } from "@/components/sections/Urgence";
import { WhyUs } from "@/components/sections/WhyUs";
import { Zones } from "@/components/sections/Zones";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getPageContent } from "@/lib/content";
import { siteConfig } from "@/config/site";
import faqData from "@/content/faq.json";
import homeContent from "@/content/pages/home.json";

export const metadata: Metadata = {
  title: `Dépannage Rideau Métallique Paris 1er - 24h/24`,
  description: `Dépannage rideau métallique à Paris 1er en 30 min. Intervention 24h/24 - 7j/7. ${siteConfig.reviews.count} avis ⭐ ${siteConfig.reviews.rating}/5. ☎️ ${siteConfig.phone}`,
  keywords: [
    "dépannage rideau métallique Paris 1er",
    "rideau de fer Paris 1er",
    "grille métallique 75001",
    "déblocage rideau Paris",
    "réparation rideau métallique Paris 1er",
    "rideau métallique bloqué Paris 1er",
    "store métallique Paris 1er",
    "fermeture métallique Paris 1er",
    "rideau métallique urgence 75001",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `Dépannage Rideau Métallique Paris 1er - Intervention 24h/24`,
    description: `Expert en dépannage rideau métallique à Paris 1er. Intervention rapide en moins de 30 minutes. Appelez-nous au ${siteConfig.phone}.`,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "fr_FR",
    images: [
      {
        url: `${siteConfig.url}/images/logos/depannage-rideau-metallique-paris-1.webp`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Dépannage Rideau Métallique Paris 1er`,
      },
    ],
  },
};

// Schema.org FAQPage pour la page d'accueil
const faqItems = getPageContent(faqData.global);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.slice(0, 5).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""), // Strip HTML tags for schema
    },
  })),
};

export default function HomePage() {
  const content = getPageContent(homeContent);
  const faq = getPageContent(faqData.global);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services */}
        <Services 
          title="Nos Services à Paris 1er" 
          subtitle={`${siteConfig.name} intervient pour tous vos besoins en rideau métallique : dépannage, installation, motorisation et entretien.`}
        />

        {/* Section Déblocage */}
        <Deblocage 
          title={content.deblocage.title}
          subtitle={content.deblocage.subtitle}
          description={content.deblocage.description}
          features={content.deblocage.features}
        />

        {/* Section Fabrication */}
        <ServiceHighlight 
          title="Fabrication sur mesure"
          subtitle="Fabrication artisanale"
          description="Nous concevons et fabriquons des rideaux métalliques sur mesure, parfaitement adaptés à vos besoins et aux dimensions de votre devanture. Chaque rideau est fabriqué dans notre atelier avec des matériaux de qualité professionnelle."
          features={[
            "Prise de mesures précise sur site",
            "Fabrication française en atelier",
            "Large choix de lames et de couleurs",
            "Garantie fabricant 5 ans"
          ]}
          imageSrc="/images/gallery/fabrication-rideau-metallique-paris-1.webp"
          imageAlt="Fabrication de rideau métallique sur mesure à Paris 1er"
          ctaLink="/fabrication-rideau-metallique-paris-1"
          ctaText="Découvrir nos modèles"
          imageOnRight={false}
          badge={{
            label: "Garantie",
            value: "5 ans"
          }}
        />

        {/* Section Motorisation */}
        <ServiceHighlight 
          title="Motorisation moderne"
          subtitle="Motorisation professionnelle"
          description="Transformez votre rideau métallique manuel en rideau motorisé pour plus de confort et de sécurité. Nous installons des moteurs de marques reconnues (Somfy, Nice, Came) avec télécommande et système de sécurité intégré."
          features={[
            "Moteurs Somfy, Nice et Came",
            "Télécommande et domotique",
            "Système anti-écrasement",
            "Installation en une demi-journée"
          ]}
          imageSrc="/images/gallery/motorisation-rideau-metallique-paris-1.webp"
          imageAlt="Motorisation de rideau métallique à Paris 1er"
          ctaLink="/motorisation-rideau-metallique-paris-1"
          ctaText="Motoriser mon rideau"
          imageOnRight={true}
          badge={{
            label: "Installation",
            value: "½ jour"
          }}
        />

        {/* Section Entretien */}
        <ServiceHighlight 
          title="Entretien préventif"
          subtitle="Contrat d'entretien"
          description="Un entretien régulier prolonge la durée de vie de votre rideau métallique et évite les pannes coûteuses. Nos contrats d'entretien incluent des visites programmées avec vérification complète, graissage et réglages."
          features={[
            "Visite d'entretien 2 fois par an",
            "Graissage et lubrification",
            "Vérification des points de sécurité",
            "Tarifs préférentiels sur les réparations"
          ]}
          imageSrc="/images/gallery/entretien-rideau-metallique-paris-1.webp"
          imageAlt="Entretien de rideau métallique à Paris 1er"
          ctaLink="/entretien-rideau-metallique-paris-1"
          ctaText="Souscrire à un contrat"
          imageOnRight={false}
          badge={{
            label: "Entretien",
            value: "2×/an"
          }}
        />

        {/* Types de rideaux métalliques */}
        <section className="section bg-white border-t border-neutral-200">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Types de rideaux
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="mb-4">{content.typesRideaux.title}</h2>
              <p className="text-neutral-500">{content.typesRideaux.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
              {content.typesRideaux.items.map((item, index) => (
                <div key={index} className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                  <span className="block text-4xl mb-4">{item.icon}</span>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pannes Courantes */}
        <PannesCourantes 
          title={content.pannesCourantes.title}
          subtitle={content.pannesCourantes.subtitle}
          items={content.pannesCourantes.items}
        />

        {/* Section Urgence 24/7 */}
        <Urgence 
          title={content.urgence.title}
          subtitle={content.urgence.subtitle}
          features={content.urgence.features}
        />

        {/* Pourquoi nous choisir */}
        <WhyUs />

        {/* Secteurs d'activité */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Secteurs d'activité
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="mb-4">{content.secteursActivite.title}</h2>
              <p className="text-neutral-500">{content.secteursActivite.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.secteursActivite.secteurs.map((secteur, index) => (
                <div key={index} className="bg-white p-6 text-center hover:shadow-lg transition-shadow">
                  <span className="block text-5xl mb-4">{secteur.icon}</span>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-3">{secteur.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{secteur.description}</p>
                  <p className="text-neutral-400 text-xs">{secteur.exemples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre expertise */}
        <section className="section bg-white border-t border-neutral-200">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="label justify-center mb-6">
                  <span className="w-8 h-px bg-neutral-900 mr-3" />
                  Expertise
                  <span className="w-8 h-px bg-neutral-900 ml-3" />
                </span>
                <h2 className="mb-4">{content.expertise.title}</h2>
                <p className="text-neutral-500">{content.expertise.subtitle}</p>
              </div>
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                <p>
                  Depuis plus de 25 ans, DRM Paris 1 intervient quotidiennement à Paris 1er (75001) et dans tout Paris. Notre connaissance du terrain nous permet d'arriver rapidement chez vous, même dans les zones difficiles d'accès comme les rues piétonnes des Halles, les passages couverts du Palais-Royal ou les artères commerçantes de la rue de Rivoli. Nous proposons également des services d'<Link href="/installation-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">installation de rideaux métalliques neufs</Link> pour les commerces en rénovation.
                </p>
                <p>
                  Notre équipe de techniciens qualifiés maîtrise toutes les marques de rideaux métalliques et de motorisations : Somfy, Nice, Came, Hörmann, Bubendorff, Simu. Nous utilisons exclusivement des pièces d'origine constructeur pour garantir la durabilité de nos interventions et la sécurité de vos installations. Chaque technicien dispose d'un véhicule équipé avec un stock complet de pièces détachées pour intervenir efficacement. Pour moderniser votre équipement, découvrez notre service de <Link href="/motorisation-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">motorisation de rideaux métalliques</Link>.
                </p>
                <p>
                  Avec plus de 5000 interventions par an et une note de 4.9/5 sur 127 avis Google, nous sommes la référence du dépannage de grilles métalliques à Paris 1er. Nous intervenons pour tous types de clients : commerçants des Halles, restaurateurs de Châtelet, bijoutiers de la Place Vendôme, boutiques du Louvre et établissements publics. Notre réactivité et notre expertise technique font notre réputation dans tout l'arrondissement. Nous recommandons également de souscrire à un <Link href="/entretien-rideau-metallique-paris-1" className="text-primary font-medium hover:underline">contrat d'entretien préventif</Link> pour éviter les pannes inopinées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <Zones 
          title="Zones d'intervention à Paris" 
          limit={12} 
        />

        {/* Avis clients */}
        <Reviews 
          title="Avis de nos clients à Paris 1er" 
          items={content.reviews} 
        />

        {/* FAQ */}
        <FAQ 
          title="Questions fréquentes" 
          items={faq.slice(0, 6)} 
        />

        {/* CTA final */}
        <CTA 
          title={content.cta.title}
          subtitle={content.cta.subtitle}
        />
      </main>
    </>
  );
}
