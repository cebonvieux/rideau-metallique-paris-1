import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tarifs } from "@/components/sections/Tarifs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getPageContent } from "@/lib/content";
import tarifsData from "@/content/tarifs.json";
import faqData from "@/content/faq.json";

export const metadata: Metadata = {
  title: `Tarifs Rideau Métallique`,
  description: `Tarifs dépannage et installation rideau métallique à ${siteConfig.city}. Prix transparents, devis gratuit. ☎️ ${siteConfig.phone}`,
};

export default function TarifsPage() {
  return (
    <main className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-gray-50">
        <div className="container text-center">
          <span className="badge-primary mb-4">💰 Prix transparents</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tarifs Rideau Métallique {siteConfig.city}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des prix clairs et transparents. Devis gratuit avant toute intervention.
          </p>
        </div>
      </section>

      <Tarifs items={tarifsData} />
      <FAQ items={getPageContent(faqData).filter(q => q.question.toLowerCase().includes('prix') || q.question.toLowerCase().includes('coût') || q.question.toLowerCase().includes('tarif'))} title="Questions sur nos tarifs" />
      <CTA />
    </main>
  );
}

