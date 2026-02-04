import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones, services } from "@/config/site";
import { getPageContent, getZoneBySlug, getServiceBySlug } from "@/lib/content";
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
  params: { service: string; zone: string };
}

// Générer toutes les combinaisons service × zone
export function generateStaticParams() {
  const params: { service: string; zone: string }[] = [];

  for (const service of services) {
    if (!service.hasPage) continue;
    
    for (const zone of zones) {
      params.push({
        service: service.slug,
        zone: zone.slug,
      });
    }
  }

  return params;
}

// Générer les métadonnées
export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service);
  const zone = getZoneBySlug(params.zone);

  if (!service || !zone) {
    return { title: "Page non trouvée" };
  }

  const title = `${service.name} Rideau Métallique ${zone.name} - ${siteConfig.name}`;
  const description = `${service.name} rideau métallique à ${zone.name} (${zone.postalCode}). ${service.shortDesc}. Intervention rapide, devis gratuit. ${siteConfig.phone}`;

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

export default function ServiceZonePage({ params }: Props) {
  const service = getServiceBySlug(params.service);
  const zone = getZoneBySlug(params.zone);

  if (!service || !zone) {
    notFound();
  }

  // Récupérer le contenu du service
  const rawContent = serviceContents[service.slug];
  if (!rawContent) {
    notFound();
  }

  // Remplacer les variables avec le contexte de zone
  const content = getPageContent(rawContent, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
    service: service.name,
    serviceSlug: service.slug,
  });

  // FAQ adaptée à la zone - utilise la catégorie du service ou global
  const faqContent = getPageContent(faqData, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
  });
  const zoneFaq = (faqContent[service.slug as keyof typeof faqContent] || faqContent.global).slice(0, 4);

  // Autres zones pour le maillage interne
  const otherZones = zones.filter(z => z.slug !== zone.slug).slice(0, 6);
  
  // Autres services pour le maillage interne
  const otherServices = services.filter(s => s.slug !== service.slug && s.hasPage).slice(0, 4);

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li><Link href={`/${service.slug}`} className="hover:text-neutral-900">{service.name}</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{zone.name}</li>
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
                {service.name} · {zone.name}
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
                  alt={`${service.name} rideau métallique ${zone.name}`} 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
              {/* Badge zone */}
              <div className="absolute bottom-6 left-6 bg-neutral-900 text-white p-5">
                <p className="text-2xl font-black">{zone.postalCode}</p>
                <p className="text-sm text-neutral-400">{zone.name}</p>
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
                Intervention à {zone.name}
              </h3>
              <p className="text-neutral-400 mb-6">
                Notre équipe intervient rapidement à {zone.name} ({zone.postalCode}) et dans tout {siteConfig.department} pour vos rideaux métalliques.
              </p>
              <a href={siteConfig.phoneLink} className="btn-call">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage : Autres services dans cette zone */}
      <section className="section bg-white border-t border-neutral-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Nos autres services à {zone.name}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}/${zone.slug}`}
                className="group p-5 border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                <span className="block font-semibold text-neutral-900">{s.name}</span>
                <span className="block text-sm text-neutral-500 mt-1">{zone.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Maillage : Ce service dans d'autres zones */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2>{service.name} dans les zones voisines</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherZones.map((z) => (
              <Link
                key={z.slug}
                href={`/${service.slug}/${z.slug}`}
                className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-sm"
              >
                {service.name} {z.name}
              </Link>
            ))}
            <Link
              href={`/${service.slug}`}
              className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm"
            >
              Voir toutes les zones
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={zoneFaq}
        title={`Questions fréquentes - ${service.name} ${zone.name}`}
      />

      {/* CTA */}
      <CTA
        title={content.cta.title}
        subtitle={content.cta.subtitle}
      />
    </main>
  );
}
