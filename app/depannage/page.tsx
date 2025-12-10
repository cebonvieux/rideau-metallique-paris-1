import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/depannage.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Dépannage Rideau Métallique 24h/24`,
  description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention en 1h pour déblocage, réparation, panne moteur. 24h/24 et 7j/7. ☎️ ${siteConfig.phone}`,
};

export default function DepannagePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-red-900 via-gray-900 to-gray-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold mb-6">
                {content.hero.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.hero.title}</h1>
              <p className="text-lg text-gray-300 mb-8">{content.hero.subtitle}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href={siteConfig.phoneLink} className="btn-phone text-lg">📞 {siteConfig.phone}</a>
                <a href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">Devis gratuit</a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {content.stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/10 backdrop-blur rounded-xl">
                    <p className="text-3xl font-bold text-primary-400">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/depannage-rideau.webp" alt={`Dépannage rideau métallique ${siteConfig.city}`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Nos interventions d&apos;urgence</h2>
            <p className="section-subtitle mx-auto">Nous intervenons rapidement pour tous types de pannes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.interventions.map((item, index) => (
              <div key={index} className="card">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={getPageContent(faqData).slice(0, 4)} title="Questions sur le dépannage" />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
    </main>
  );
}

