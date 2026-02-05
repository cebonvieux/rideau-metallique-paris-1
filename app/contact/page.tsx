import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import pageData from "@/content/pages/contact.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Contact Paris 1er - Devis Gratuit ${siteConfig.phone}`,
  description: `Contactez-nous à Paris 1er pour un devis gratuit. Disponible 24h/24 - Intervention en 30 min. ☎️ ${siteConfig.phone}`,
  alternates: {
    canonical: `${siteConfig.url}/contact`,
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

// Schema ContactPage
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact DRM Paris 1",
  description: `Page de contact de ${siteConfig.fullName}`,
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.split(",")[0],
      addressLocality: "Paris",
      postalCode: siteConfig.postalCode,
      addressCountry: "FR",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main>
        {/* Hero */}
        <section className="relative bg-white pt-32 pb-16">
          <div className="container">
            <div className="max-w-2xl">
              <span className="label mb-8">
                <span className="w-12 h-px bg-neutral-900 mr-4" />
                Contact
              </span>
              <h1 className="mb-6">{content.hero.title}</h1>
              <p className="text-lg text-neutral-500">
                {content.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Section Urgence */}
        <section className="bg-neutral-900 text-white">
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
                <div>
                  <h2 className="text-xl font-semibold">{content.urgence.title}</h2>
                  <p className="text-neutral-400">{content.urgence.subtitle}</p>
                </div>
              </div>
              <a 
                href={siteConfig.phoneLink} 
                className="flex items-center gap-3 bg-white text-neutral-900 px-8 py-4 font-semibold hover:bg-neutral-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Coordonnées et Formulaire */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Infos de contact */}
              <div>
                <span className="label mb-6">
                  <span className="label-number">01</span>
                  Coordonnées
                </span>
                <h2 className="mb-8">Nos coordonnées</h2>
                
                <div className="space-y-4 mb-10">
                  {/* Téléphone */}
                  <a href={siteConfig.phoneLink} className="group flex items-center gap-6 p-6 bg-white border border-neutral-200 hover:border-neutral-900 transition-colors">
                    <div className="w-14 h-14 bg-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-neutral-900">{siteConfig.phone}</p>
                      <p className="text-emerald-600 text-sm font-medium">Disponible 24h/24 - 7j/7</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-6 p-6 bg-white border border-neutral-200 hover:border-neutral-900 transition-colors">
                    <div className="w-14 h-14 bg-neutral-900 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{siteConfig.email}</p>
                      <p className="text-neutral-500 text-sm">Réponse sous 24h</p>
                    </div>
                  </a>

                  {/* Adresse */}
                  <div className="flex items-center gap-6 p-6 bg-white border border-neutral-200">
                    <div className="w-14 h-14 bg-neutral-200 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{siteConfig.address}</p>
                      <p className="text-neutral-500 text-sm">Zone : {siteConfig.city} et agglomération</p>
                    </div>
                  </div>
                </div>

                {/* Section confiance */}
                <div className="bg-neutral-900 text-white p-8">
                  <h3 className="font-semibold text-lg mb-6">{content.confiance.title}</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {content.confiance.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium text-white text-sm">{item.title}</p>
                        <p className="text-xs text-neutral-400">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div>
                <span className="label mb-6">
                  <span className="label-number">02</span>
                  Devis
                </span>
                <h2 className="mb-8">Demande de devis gratuit</h2>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="section bg-white border-t border-neutral-200">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Qualité
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2>{content.engagements.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {content.engagements.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 border border-neutral-200">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="bg-neutral-50">
          <div className="container py-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Notre zone d&apos;intervention</h2>
              <p className="text-neutral-500">Intervention rapide à {siteConfig.city} et dans toute l&apos;agglomération parisienne</p>
            </div>
            
            <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.7882737692396!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjIiTiAywrAyMCc0OS4yIkU!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Carte ${siteConfig.name}`}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ 
          items={content.faq} 
          title="Questions fréquentes" 
        />

        {/* CTA final */}
        <section className="bg-neutral-900 text-white py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.cta.title}</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">{content.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.phoneLink} className="btn-call">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-outline border-neutral-700 text-white hover:bg-neutral-800">
                Envoyer un email
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
