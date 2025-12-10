import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import faqData from "@/content/faq.json";
import pageData from "@/content/pages/entretien.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Entretien Rideau Métallique`,
  description: `Entretien et maintenance rideau métallique à ${siteConfig.city}. Contrats adaptés pour commerces et professionnels. ☎️ ${siteConfig.phone}`,
};

export default function EntretienPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-gray-50">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
            {content.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.hero.title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">{content.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={siteConfig.phoneLink} className="btn-primary">📞 Nous contacter</a>
            <a href="#contrats" className="btn-secondary">Voir nos contrats</a>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Pourquoi entretenir votre rideau ?</h2>
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

      {/* Prestations */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Ce que comprend notre entretien</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.prestations.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrats */}
      <section id="contrats" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title">Nos contrats de maintenance</h2>
            <p className="section-subtitle mx-auto">Choisissez la formule adaptée à vos besoins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {content.contrats.map((contrat, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 border-2 ${contrat.isPopular ? 'border-primary-500 shadow-xl' : 'border-gray-100'}`}>
                {contrat.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Recommandé
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contrat.name}</h3>
                <p className="text-3xl font-bold text-primary-600 mb-6">{contrat.price}</p>
                <ul className="space-y-3">
                  {contrat.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={siteConfig.phoneLink} className={`w-full mt-6 ${contrat.isPopular ? 'btn-primary' : 'btn-secondary'} text-center block`}>
                  Choisir
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={getPageContent(faqData).filter(q => q.question.toLowerCase().includes('entretien') || q.question.toLowerCase().includes('contrat'))} title="Questions sur l'entretien" />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
    </main>
  );
}

