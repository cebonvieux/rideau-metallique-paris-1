import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/motorisation.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Motorisation Rideau Métallique`,
  description: `Motorisation rideau métallique à ${siteConfig.city}. Automatisation, télécommande, clavier à code. Devis gratuit. ☎️ ${siteConfig.phone}`,
};

export default function MotorisationPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                {content.hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.hero.title}</h1>
              <p className="text-lg text-gray-600 mb-8">{content.hero.subtitle}</p>

              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-primary">📞 Devis gratuit</a>
                <a href="/tarifs" className="btn-secondary">Voir nos tarifs</a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/motorisation-rideau.webp" alt={`Motorisation rideau métallique ${siteConfig.city}`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Avantages de la motorisation</h2>
            <p className="section-subtitle mx-auto">Gagnez en confort et sécurité avec un rideau automatisé.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.avantages.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 mx-auto bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de moteurs */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Types de motorisation</h2>
            <p className="section-subtitle mx-auto">Nous installons tous types de moteurs selon vos besoins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.types.map((item, index) => (
              <div key={index} className="card border-2 border-gray-100 hover:border-primary-200">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <p className="text-primary-600 font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={getPageContent(faqData).slice(0, 4)} title="Questions sur la motorisation" />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
    </main>
  );
}

