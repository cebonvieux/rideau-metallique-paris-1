import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones, services } from "@/config/site";
import { getPageContent, getServiceBySlug } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import faqData from "@/content/faq.json";

// Map des images par service
const serviceImages: Record<string, string> = {
  "depannage": "/images/gallery/dépannage-rideau-metallique-paris-1.webp",
  "installation": "/images/gallery/installation-rideau-metallique-paris-1.webp",
  "motorisation": "/images/gallery/motorisation-rideau-metallique-paris-1.webp",
  "entretien": "/images/gallery/entretien-rideau-metallique-paris-1.webp",
  "reparation": "/images/gallery/dépannage-rideau-metallique-paris-1.webp",
  "deblocage": "/images/gallery/dépannage-rideau-metallique-paris-1.webp",
};

// Import des contenus de chaque service
import depannageContent from "@/content/pages/services/depannage.json";
import installationContent from "@/content/pages/services/installation.json";
import motorisationContent from "@/content/pages/services/motorisation.json";
import entretienContent from "@/content/pages/services/entretien.json";
import reparationContent from "@/content/pages/services/reparation.json";
import deblocageContent from "@/content/pages/services/deblocage.json";

// Map des contenus par slug de service
const serviceContents: Record<string, typeof depannageContent> = {
  "depannage": depannageContent,
  "installation": installationContent,
  "motorisation": motorisationContent,
  "entretien": entretienContent,
  "reparation": reparationContent,
  "deblocage": deblocageContent,
};

interface Props {
  params: { service: string };
}

// Générer les pages statiques pour chaque service
export function generateStaticParams() {
  return services
    .filter(service => service.hasPage)
    .map((service) => ({
      service: service.slug,
    }));
}

// Générer les métadonnées
export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return { title: "Service non trouvé" };
  }

  const title = `${service.name} Rideau Métallique ${siteConfig.city} - ${siteConfig.name}`;
  const description = `${service.name} rideau métallique à ${siteConfig.city} et environs. ${service.longDesc} Intervention rapide 24h/24. ${siteConfig.phone}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    notFound();
  }

  // Récupérer le contenu du service
  const rawContent = serviceContents[service.slug];
  if (!rawContent) {
    notFound();
  }

  // Remplacer les variables avec la ville principale comme zone
  const content = getPageContent(rawContent, {
    zone: siteConfig.city,
    zoneSlug: siteConfig.city.toLowerCase(),
    zonePostal: siteConfig.postalCode,
    service: service.name,
    serviceSlug: service.slug,
  });

  // FAQ spécifique au service ou générale
  const faqCategory = (faqData as Record<string, typeof faqData.global>)[service.slug] || faqData.global;
  const faq = getPageContent(faqCategory).slice(0, 5);

  // Autres services pour le maillage
  const otherServices = services.filter(s => s.slug !== service.slug && s.hasPage);

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{service.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-white pt-16 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-8">
                <span className="w-12 h-px bg-neutral-900 mr-4" />
                {service.name}
              </span>

              <h1 className="mb-8">
                {content.hero.title}
              </h1>

              <p className="text-lg text-neutral-500 mb-10 max-w-lg">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={siteConfig.phoneLink} className="btn-call">
                  <span className="relative flex h-3 w-3 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  {siteConfig.phone}
                </a>
                <Link href="/contact" className="btn-outline">
                  Demander un devis
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <Image 
                  src={serviceImages[service.slug] || "/images/gallery/rideau-métallique-paris-1.webp"} 
                  alt={`${service.name} rideau métallique ${siteConfig.city}`} 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="max-w-3xl">
            <span className="label mb-6">
              <span className="label-number">01</span>
              À propos
            </span>
            <h2 className="mb-8">{content.intro.title}</h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              {content.intro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations / Types d'intervention */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <span className="label mb-6">
              <span className="label-number">02</span>
              Interventions
            </span>
            <h2>{content.situations.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
            {content.situations.items.map((item, index) => (
              <div key={index} className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                <span className="block text-4xl font-black text-neutral-100 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section bg-neutral-900 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label text-neutral-500 mb-6">
                <span className="label-number">03</span>
                Avantages
              </span>
              <h2 className="text-white mb-8">{content.advantages.title}</h2>
              <ul className="space-y-4">
                {content.advantages.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white/5 p-8">
              <h3 className="font-semibold text-xl text-white mb-4">
                Contactez-nous
              </h3>
              <p className="text-neutral-400 mb-6">
                Notre équipe est disponible 24h/24 et 7j/7 pour intervenir à {siteConfig.city} et dans tout {siteConfig.department}.
              </p>
              <a href={siteConfig.phoneLink} className="btn-call">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention pour ce service */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label justify-center mb-6">
              <span className="w-8 h-px bg-neutral-900 mr-3" />
              Zones
              <span className="w-8 h-px bg-neutral-900 ml-3" />
            </span>
            <h2 className="mb-4">{service.name} - Zones d&apos;intervention</h2>
            <p className="text-neutral-500">
              Nous intervenons pour {service.name.toLowerCase()} dans toutes ces zones.
            </p>
          </div>
          
          <div className="border-t border-l border-neutral-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {zones.map((zone) => (
                <Link
                  key={zone.slug}
                  href={`/${service.slug}/${zone.slug}`}
                  className={`p-4 border-r border-b border-neutral-200 hover:bg-neutral-900 hover:text-white transition-colors text-center
                    ${zone.isMain ? 'bg-neutral-900 text-white' : ''}`}
                >
                  <span className="block font-medium">{zone.name}</span>
                  <span className="block text-xs mt-1 opacity-60">{zone.postalCode}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Autres services */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Nos autres services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                className="group bg-white p-6 border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                <span className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Service</span>
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">
                  {s.name}
                </h3>
                <p className="text-neutral-500 text-sm">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faq}
        title={`Questions sur ${service.name.toLowerCase()}`}
      />

      {/* CTA */}
      <CTA
        title={content.cta.title}
        subtitle={content.cta.subtitle}
      />
    </main>
  );
}
