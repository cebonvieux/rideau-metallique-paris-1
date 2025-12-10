import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

const content = getPageContent(homeContent);

export function WhyUs() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/technicien-rideau.webp"
                alt={`Technicien rideau métallique ${siteConfig.city}`}
                fill
                className="object-cover"
              />
            </div>
            {/* Stats */}
            <div className="absolute -bottom-6 -right-6 bg-gray-900 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold text-primary-400">{content.stats.experience}</p>
              <p className="text-gray-400 text-sm">{content.stats.experienceLabel}</p>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2">
            <span className="badge-primary mb-4">🏆 Nos engagements</span>
            <h2 className="section-title">{content.whyUs.title}</h2>
            <p className="section-subtitle mb-8">{content.whyUs.subtitle}</p>

            <div className="space-y-4">
              {content.whyUs.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href={siteConfig.phoneLink} className="btn-primary">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

