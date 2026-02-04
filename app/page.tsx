import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Deblocage } from "@/components/sections/Deblocage";
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
  title: `Dépannage Rideau Métallique Paris 1er (75001) | 24h/24 - ${siteConfig.name}`,
  description: `Dépannage rideau métallique à Paris 1er (75001). Intervention en 30 min, 24h/24. Déblocage, réparation, motorisation. ☎️ ${siteConfig.phone}. ${siteConfig.reviews.count} avis - Note ${siteConfig.reviews.rating}/5.`,
  alternates: {
    canonical: siteConfig.url,
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
