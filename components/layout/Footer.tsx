import Link from "next/link";
import { siteConfig, navigation, services, zones } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* CTA avant footer */}
      <div className="border-b border-neutral-800">
        <div className="container py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                Besoin d&apos;une intervention ?
              </h3>
              <p className="text-neutral-400">
                Disponible 24h/24 pour tous vos besoins en rideau métallique.
              </p>
            </div>
            <a 
              href={siteConfig.phoneLink}
              className="group flex items-center gap-4 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo et infos */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-black">DRM</span>
              <span className="text-2xl font-light text-neutral-500 ml-1">Paris 1</span>
            </Link>
            <p className="text-neutral-400 text-sm mb-6 max-w-xs">
              Spécialiste du rideau métallique à {siteConfig.city}. 
              Dépannage, installation et motorisation.
            </p>
            <div className="text-sm text-neutral-500">
              <p>{siteConfig.address}</p>
              <p className="mt-1">{siteConfig.openingHours}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/${service.slug}`} 
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div className="col-span-2">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-4">
              Zones d&apos;intervention
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {zones.slice(0, 10).map((zone) => (
                <Link 
                  key={zone.slug}
                  href={`/zones/${zone.slug}`} 
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {zone.name}
                </Link>
              ))}
            </div>
            <Link 
              href="/zones" 
              className="inline-flex items-center gap-2 mt-4 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Voir toutes les zones
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-neutral-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-neutral-500">
              © {currentYear} {siteConfig.name}. Tous droits réservés.
            </p>
            <nav className="flex gap-6">
              <Link href="/mentions-legales" className="text-neutral-500 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-neutral-500 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
