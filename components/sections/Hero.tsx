import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

const content = getPageContent(homeContent);

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
}

export function Hero({ badge, title, subtitle }: HeroProps) {
  const displayBadge = badge || content.hero.badge;
  const displayTitle = title || content.hero.title;
  const displaySubtitle = subtitle || content.hero.subtitle;

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold mb-6">
              {displayBadge}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {displayTitle}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              {displaySubtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={siteConfig.phoneLink} className="btn-phone text-lg">
                📞 {siteConfig.phone}
              </a>
              <a href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
                Devis gratuit
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {content.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-2xl">{badge.icon}</span>
                  <div>
                    <p className="font-semibold text-white">{badge.title}</p>
                    <p className="text-xs text-gray-400">{badge.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-rideau.webp"
                alt={`Dépannage rideau métallique ${siteConfig.city}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            {/* Badge flottant */}
            <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white rounded-xl p-4 shadow-xl animate-float">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm text-primary-100">Intervention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

