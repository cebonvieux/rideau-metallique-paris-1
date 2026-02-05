import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, zones, services } from "@/config/site";
import { getPageContent, getServiceBySlug, getSubcityUrl, parseServiceZoneSlug } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import faqData from "@/content/faq.json";

// Types pour le contenu
interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

interface Zone {
  slug: string;
  name: string;
}

interface Service {
  id: string;
  name: string;
  slug: string;
}

// Map des images par service (par id de service)
const serviceImages: Record<string, string> = {
  "depannage": "/images/gallery/depannage-rideau-metallique-paris-1-drm.webp",
  "installation": "/images/gallery/installation-rideau-metallique-paris-1.webp",
  "motorisation": "/images/gallery/motorisation-rideau-metallique-paris-1.webp",
  "entretien": "/images/gallery/entretien-rideau-metallique-paris-1.webp",
  "reparation": "/images/gallery/depannage-rideau-metallique-paris-1-drm.webp",
  "deblocage": "/images/gallery/depannage-rideau-metallique-paris-1-drm.webp",
};

// Import des contenus de chaque service
import depannageContent from "@/content/pages/services/depannage.json";
import fabricationContent from "@/content/pages/services/fabrication.json";
import installationContent from "@/content/pages/services/installation.json";
import motorisationContent from "@/content/pages/services/motorisation.json";
import entretienContent from "@/content/pages/services/entretien.json";
import reparationContent from "@/content/pages/services/reparation.json";
import deblocageContent from "@/content/pages/services/deblocage.json";

// Map des contenus par id de service
const serviceContents: Record<string, any> = {
  "depannage": depannageContent,
  "fabrication": fabricationContent,
  "installation": installationContent,
  "motorisation": motorisationContent,
  "entretien": entretienContent,
  "reparation": reparationContent,
  "deblocage": deblocageContent,
};

interface Props {
  params: { service: string };
}

/**
 * Détermine le type de page à partir du paramètre
 * - Si c'est un slug de service connu → page service principale
 * - Si c'est un slug service+zone → page subcity
 */
function getPageType(slug: string) {
  // Vérifier d'abord si c'est un slug de service principal
  const mainService = getServiceBySlug(slug);
  if (mainService) {
    return { type: 'service' as const, service: mainService, zone: null };
  }
  
  // Sinon, essayer de parser comme slug service+zone
  const parsed = parseServiceZoneSlug(slug);
  if (parsed) {
    return { type: 'subcity' as const, service: parsed.service, zone: parsed.zone };
  }
  
  return null;
}

// Générer les pages statiques pour chaque service ET chaque combinaison service×zone
export function generateStaticParams() {
  const params: { service: string }[] = [];

  // Pages services principales (avec hasPage)
  for (const service of services) {
    if (service.hasPage) {
      params.push({ service: service.slug });
    }
  }

  // Pages subcity (service × zone, excluant zone principale)
  for (const service of services) {
    for (const zone of zones) {
      if (zone.isMain) continue; // Exclure la zone principale
      params.push({ service: `${service.baseSlug}-${zone.slug}` });
    }
  }

  return params;
}

// Générer les métadonnées
export function generateMetadata({ params }: Props): Metadata {
  const pageType = getPageType(params.service);

  if (!pageType) {
    return { title: "Page non trouvée" };
  }

  if (pageType.type === 'service') {
    const { service } = pageType;
    const title = `${service.name} Rideau Métallique ${siteConfig.city}`;
    const description = `${service.name} rideau métallique à ${siteConfig.city}. ${service.longDesc} Intervention 24h/24 ☎️ ${siteConfig.phone}`;

    return {
      title,
      description,
      alternates: {
        canonical: `${siteConfig.url}/${service.slug}`,
      },
      openGraph: {
        title,
        description,
        type: "website",
        url: `${siteConfig.url}/${service.slug}`,
        siteName: siteConfig.fullName,
        images: [
          {
            url: serviceImages[service.id] || "/images/gallery/rideau-métallique-paris-1.webp",
            width: 1200,
            height: 630,
            alt: `${service.name} rideau métallique ${siteConfig.city}`,
          },
        ],
      },
    };
  }

  // Page subcity
  const { service, zone } = pageType;
  if (!zone) return { title: "Page non trouvée" };
  
  const serviceLabel = service.id === "depannage" ? "Dépannage" : service.name;
  const title = `${serviceLabel} Rideau Métallique ${zone.name} (${zone.postalCode})`;
  const description = `${serviceLabel} rideau métallique à ${zone.name} (${zone.postalCode}). Intervention rapide 24h/24 - 7j/7. ☎️ ${siteConfig.phone}`;
  const canonicalUrl = `${siteConfig.url}/${service.baseSlug}-${zone.slug}`;

  return {
    title,
    description,
    keywords: [
      `${serviceLabel.toLowerCase()} rideau métallique ${zone.name}`,
      `${serviceLabel.toLowerCase()} rideau de fer ${zone.postalCode}`,
      `${serviceLabel.toLowerCase()} grille métallique ${zone.name}`,
      `${serviceLabel.toLowerCase()} store métallique ${zone.name}`,
      `${serviceLabel.toLowerCase()} fermeture métallique ${zone.postalCode}`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: siteConfig.fullName,
      images: [
        {
          url: serviceImages[service.id] || "/images/gallery/rideau-métallique-paris-1.webp",
          width: 1200,
          height: 630,
          alt: `${serviceLabel} rideau métallique ${zone.name}`,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const pageType = getPageType(params.service);

  if (!pageType) {
    notFound();
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE SERVICE PRINCIPALE
  // ═══════════════════════════════════════════════════════════════════════════
  if (pageType.type === 'service') {
    const { service } = pageType;

    const rawContent = serviceContents[service.id];
    if (!rawContent) {
      notFound();
    }

    const content = getPageContent(rawContent, {
      zone: siteConfig.city,
      zoneSlug: siteConfig.citySlug,
      zonePostal: siteConfig.postalCode,
      service: service.name,
      serviceSlug: service.slug,
    });

    const faqCategory = (faqData as Record<string, typeof faqData.global>)[service.id] || faqData.global;
    const faq = getPageContent(faqCategory).slice(0, 5);

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
                  <span className="block">{service.name}</span>
                  <span className="block text-outline">Rideau Métallique</span>
                  <span className="block">{siteConfig.city}</span>
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
                    src={serviceImages[service.id] || "/images/gallery/rideau-métallique-paris-1.webp"} 
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
                {content.intro.paragraphs.map((p: string, i: number) => (
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
              {content.situations.items.map((item: ServiceItem, index: number) => (
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
                  {content.advantages.items.map((item: ServiceItem, index: number) => (
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
                {zones.map((zone: Zone) => (
                  <Link
                    key={zone.slug}
                    href={zone.isMain ? `/${service.slug}` : getSubcityUrl(service.baseSlug, zone.slug)}
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
              {otherServices.map((s: Service) => (
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

        <FAQ items={faq} title={`Questions sur ${service.name.toLowerCase()}`} />
        <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
      </main>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE SUBCITY (service × zone)
  // ═══════════════════════════════════════════════════════════════════════════
  const { service, zone } = pageType;
  if (!zone) {
    notFound();
  }

  const rawContent = serviceContents[service.id];
  if (!rawContent) {
    notFound();
  }

  const serviceLabel = service.id === "depannage" ? "Dépannage" : service.name;

  const content = getPageContent(rawContent, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
    service: serviceLabel,
    serviceSlug: service.id,
  });

  const faqContent = getPageContent(faqData, {
    zone: zone.name,
    zoneSlug: zone.slug,
    zonePostal: zone.postalCode,
  });
  const zoneFaq = (faqContent[service.id as keyof typeof faqContent] || faqContent.global).slice(0, 4);

  const otherZones = zones.filter(z => z.slug !== zone.slug && !z.isMain).slice(0, 6);
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 4);

  const mainServiceLink = service.id === "depannage" ? "/" : `/${service.slug}`;
  const pageUrl = `${siteConfig.url}/${service.baseSlug}-${zone.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: serviceLabel, item: service.id === "depannage" ? siteConfig.url : `${siteConfig.url}/${service.slug}` },
      { "@type": "ListItem", position: 3, name: zone.name, item: pageUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: zoneFaq.map((item: any) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer.replace(/<[^>]*>/g, "") },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li><Link href={mainServiceLink} className="hover:text-neutral-900">{serviceLabel}</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">{zone.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero avec H1 optimisé SEO */}
      <section className="relative bg-white pt-16 pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label mb-8">
                <span className="w-12 h-px bg-neutral-900 mr-4" />
                {serviceLabel} · {zone.name}
              </span>

              <h1 className="mb-8">
                <span className="block">{serviceLabel}</span>
                <span className="block text-outline">Rideau Métallique</span>
                <span className="block">{zone.name}</span>
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
                  src={serviceImages[service.id] || "/images/gallery/rideau-métallique-paris-1.webp"} 
                  alt={`${serviceLabel} rideau métallique ${zone.name}`} 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
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
              {content.intro.paragraphs.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
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
                <h3 className="font-semibold text-lg text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-500 text-sm">{item.description}</p>
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
              <a href={siteConfig.phoneLink} className="btn-call">{siteConfig.phone}</a>
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
                href={getSubcityUrl(s.baseSlug, zone.slug)}
                className="group p-5 border border-neutral-200 hover:border-neutral-900 transition-colors"
              >
                <span className="block font-semibold text-neutral-900">
                  {s.id === "depannage" ? "Dépannage" : s.name}
                </span>
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
            <h2>{serviceLabel} dans les zones voisines</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {otherZones.map((z: Zone) => (
              <Link
                key={z.slug}
                href={getSubcityUrl(service.baseSlug, z.slug)}
                className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-sm"
              >
                {serviceLabel} {z.name}
              </Link>
            ))}
            <Link
              href={mainServiceLink}
              className="px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-sm"
            >
              Voir toutes les zones
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={zoneFaq} title={`Questions fréquentes - ${serviceLabel} ${zone.name}`} />
      <CTA title={content.cta.title} subtitle={content.cta.subtitle} />
    </main>
  );
}
