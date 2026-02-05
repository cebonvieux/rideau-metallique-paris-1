import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, zones } from "@/config/site";
import { getPageContent, getSubcityUrl } from "@/lib/content";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import pageData from "@/content/pages/services/deblocage.json";

const content = getPageContent(pageData);

export const metadata: Metadata = {
  title: `Déblocage Rideau Métallique Paris 1er - Urgent`,
  description: `Déblocage rideau métallique à Paris 1er. Rideau coincé ou bloqué ? Intervention urgente 24h/24 - 7j/7. ☎️ ${siteConfig.phone}`,
  keywords: [
    "déblocage rideau métallique Paris 1er",
    "rideau métallique coincé Paris 1",
    "rideau bloqué Paris 75001",
    "déblocage urgence rideau métallique",
    "rideau métallique bloqué en haut",
    "rideau métallique bloqué en bas",
    "déblocage rideau de fer Paris 1er",
    "rideau grippé Paris 1",
  ],
  alternates: {
    canonical: `${siteConfig.url}/deblocage-rideau-metallique-paris-1`,
  },
  openGraph: {
    title: `Déblocage Rideau Métallique Paris 1er - ${siteConfig.name}`,
    description: `Déblocage en urgence de rideaux métalliques à Paris 1er. Intervention rapide 24h/24 et 7j/7.`,
    type: "website",
    url: `${siteConfig.url}/deblocage-rideau-metallique-paris-1`,
    siteName: siteConfig.fullName,
    images: [
      {
        url: `${siteConfig.url}/images/gallery/dépannage-rideau-metallique-paris-1.webp`,
        width: 1200,
        height: 630,
        alt: `Déblocage rideau métallique ${siteConfig.city}`,
      },
    ],
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

// Schema Service
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Déblocage Rideau Métallique",
  description: `Service de déblocage en urgence de rideau métallique à ${siteConfig.city}. Intervention 24h/24 et 7j/7.`,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteConfig.url}/deblocage-rideau-metallique-paris-1`,
    servicePhone: siteConfig.phone,
  },
};

export default function DeblocagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        {/* Breadcrumb */}
        <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
          <div className="container">
            <ol className="flex items-center gap-2 text-sm text-neutral-500">
              <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
              <li>/</li>
              <li className="text-neutral-900 font-medium">Déblocage Rideau Métallique</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-[80vh] bg-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                              linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container relative z-10">
            <div className="h-24" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-24">
              <div>
                <span className="label mb-8">
                  <span className="w-12 h-px bg-neutral-900 mr-4" />
                  🚨 Urgence déblocage
                </span>

                <h1 className="mb-8">
                  <span className="block">Déblocage</span>
                  <span className="block text-outline">Rideau</span>
                  <span className="block">Métallique Paris 1</span>
                </h1>

                <p className="text-lg text-neutral-500 max-w-md mb-10">
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
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src="/images/gallery/dépannage-rideau-metallique-paris-1.webp" 
                    alt={`Déblocage rideau métallique ${siteConfig.city}`} 
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

        {/* Situations de déblocage */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label mb-6">
                <span className="label-number">02</span>
                Situations
              </span>
              <h2 className="mb-4">{content.situations.title}</h2>
              <p className="text-neutral-500 text-lg">
                Nous intervenons pour tous les types de blocages de rideaux métalliques dans le {siteConfig.department}.
              </p>
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

        {/* Nouvelle section: Causes fréquentes de blocage */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label mb-6">
                <span className="label-number">03</span>
                Diagnostic
              </span>
              <h2 className="mb-4">Causes fréquentes de blocage de rideau métallique à Paris 1er</h2>
              <p className="text-neutral-500 text-lg">
                Un rideau métallique peut se bloquer pour diverses raisons. Notre équipe identifie rapidement la cause du problème pour un déblocage efficace et durable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                  Problèmes mécaniques
                </h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Lames tordues ou endommagées</strong> qui empêchent la remontée ou la descente du rideau</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Axe d&apos;enroulement défectueux</strong> ou désaxé provoquant un enroulement irrégulier</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Coulisses obstruées</strong> par des débris, poussière ou rouille</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span><strong>Ressort de torsion cassé</strong> ne permettant plus de compenser le poids du rideau</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                  Problèmes électriques
                </h3>
                <ul className="space-y-3 text-neutral-600">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Moteur défaillant</strong> qui ne répond plus aux commandes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Télécommande hors service</strong> ou piles déchargées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Fins de course mal réglées</strong> empêchant le rideau de monter ou descendre complètement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span><strong>Coupure électrique</strong> ou disjoncteur qui a sauté suite à une surtension</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
                Quelle que soit la cause du blocage, notre équipe d&apos;experts intervient rapidement à Paris 1er pour diagnostiquer et résoudre le problème. Nous disposons de tout le matériel nécessaire pour un déblocage immédiat et une remise en état de votre rideau métallique.
              </p>
              <a href={siteConfig.phoneLink} className="btn-outline">
                Appeler pour un diagnostic gratuit
              </a>
            </div>
          </div>
        </section>

        {/* Nouvelle section: Procédure de déblocage */}
        <section className="section bg-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label mb-6">
                <span className="label-number">04</span>
                Procédure
              </span>
              <h2 className="mb-4">Notre méthode de déblocage professionnelle à Paris 1er</h2>
              <p className="text-neutral-500 text-lg">
                Nous suivons une procédure éprouvée pour débloquer votre rideau métallique rapidement et en toute sécurité, sans endommager le mécanisme.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-black text-2xl">
                    01
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    Intervention rapide et sécurisation
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Dès votre appel, nous nous rendons sur place en moins de 30 minutes. Notre premier objectif est de <strong>sécuriser votre local</strong> en cas de rideau bloqué en position ouverte. Nous évaluons immédiatement la situation et établissons un diagnostic précis du type de blocage.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Intervention en 30 minutes maximum</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-black text-2xl">
                    02
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    Diagnostic approfondi
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Notre technicien expert examine minutieusement le <strong>système d&apos;enroulement</strong>, les <strong>lames</strong>, les <strong>coulisses</strong>, le <strong>moteur</strong> (pour les rideaux motorisés) et tous les éléments mécaniques. Nous identifions précisément la cause du blocage : lame coincée, axe désaxé, moteur défaillant, fin de course mal réglée, etc.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diagnostic gratuit et détaillé</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-black text-2xl">
                    03
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    Déblocage technique
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Une fois la cause identifiée, nous procédons au <strong>déblocage professionnel</strong> en utilisant les techniques et outils adaptés. Pour un rideau bloqué en position haute ou basse, nous manipulons avec précaution le mécanisme pour éviter toute détérioration. En cas de panne électrique, nous effectuons un déblocage manuel pour permettre l&apos;ouverture ou la fermeture.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Déblocage sans dommage au mécanisme</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-black text-2xl">
                    04
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    Réparation et réglages
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Après le déblocage, nous effectuons les <strong>réparations nécessaires</strong> sur place si possible : remplacement de lames endommagées, réalignement de l&apos;axe, réglage des fins de course, lubrification du mécanisme. Si une intervention plus importante est requise, nous vous proposons un <strong>devis détaillé</strong> et planifions les travaux au plus vite.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Réparation immédiate dans la plupart des cas</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 text-white font-black text-2xl">
                    05
                  </span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="font-semibold text-xl text-neutral-900 mb-3">
                    Tests et conseils préventifs
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    Nous testons minutieusement le <strong>bon fonctionnement</strong> du rideau métallique après l&apos;intervention : montée et descente complètes, arrêts aux fins de course, fluidité du mouvement. Nous vous donnons également des <strong>conseils d&apos;entretien</strong> pour éviter les futurs blocages et prolonger la durée de vie de votre installation.
                  </p>
                  <div className="flex items-start gap-2 text-sm text-neutral-500">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tests complets avant notre départ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-neutral-50 p-8 border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-neutral-900 mb-2">
                    Garantie de notre intervention
                  </h4>
                  <p className="text-neutral-600">
                    Tous nos déblocages sont garantis. Si le problème persiste ou réapparaît dans les 48 heures suivant notre intervention, nous revenons gratuitement pour rectifier la situation. Votre satisfaction et la sécurité de votre local sont nos priorités absolues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nouvelle section: Conseils et prévention */}
        <section className="section bg-neutral-900 text-white">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <span className="label text-neutral-500 mb-6">
                <span className="label-number">05</span>
                Prévention
              </span>
              <h2 className="text-white mb-4">Comment éviter le blocage de votre rideau métallique à Paris 1er</h2>
              <p className="text-neutral-400 text-lg">
                Un entretien régulier et quelques bonnes pratiques permettent de réduire considérablement les risques de blocage de votre rideau métallique.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Entretien régulier
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Faites contrôler votre rideau métallique <strong>au moins une fois par an</strong> par un professionnel. Un <Link href="/entretien-rideau-metallique-paris-1" className="text-emerald-400 hover:underline">contrat d&apos;entretien</Link> préventif permet de détecter les problèmes avant qu&apos;ils ne provoquent un blocage.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Lubrification
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Lubrifiez les <strong>coulisses</strong>, l&apos;<strong>axe d&apos;enroulement</strong> et les <strong>articulations</strong> tous les 6 mois avec un produit adapté. Cela réduit les frottements et prévient le grippage du mécanisme.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Nettoyage des coulisses
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Nettoyez régulièrement les <strong>coulisses latérales</strong> pour éliminer la poussière, les feuilles mortes et les débris qui peuvent obstruer le passage des lames et provoquer un blocage.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Utilisation prudente
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  N&apos;essayez jamais de <strong>forcer</strong> un rideau qui résiste. Si vous constatez une résistance anormale, arrêtez immédiatement la manœuvre et <strong>contactez un professionnel</strong>.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Inspection visuelle
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Inspectez visuellement votre rideau chaque semaine : vérifiez l&apos;état des <strong>lames</strong>, des <strong>coulisses</strong> et écoutez les bruits inhabituels lors de l&apos;ouverture et la fermeture.
                </p>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h3 className="font-semibold text-lg text-white">
                    Motorisation adaptée
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm">
                  Si votre rideau est manuel et lourd, envisagez une <Link href="/motorisation-rideau-metallique-paris-1" className="text-emerald-400 hover:underline">motorisation</Link>. Elle facilite l&apos;utilisation et réduit l&apos;usure liée aux manipulations.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-semibold text-xl text-white mb-2">
                    Besoin d&apos;un entretien préventif ?
                  </h3>
                  <p className="text-neutral-400">
                    Nos contrats de maintenance à Paris 1er incluent le nettoyage, la lubrification, les réglages et le contrôle complet de votre rideau métallique.
                  </p>
                </div>
                <Link href="/entretien-rideau-metallique-paris-1" className="btn-call flex-shrink-0">
                  Découvrir nos contrats
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="section bg-neutral-50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="label mb-6">
                  <span className="label-number">06</span>
                  Avantages
                </span>
                <h2 className="mb-8">{content.advantages.title}</h2>
                <ul className="space-y-4">
                  {content.advantages.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="font-semibold text-xl text-neutral-900 mb-4">
                  Contactez-nous
                </h3>
                <p className="text-neutral-600 mb-6">
                  Notre équipe est disponible 24h/24 et 7j/7 pour intervenir à {siteConfig.city} et dans tout {siteConfig.department}.
                </p>
                <a href={siteConfig.phoneLink} className="btn-call">
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="section bg-white">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="label justify-center mb-6">
                <span className="w-8 h-px bg-neutral-900 mr-3" />
                Zones
                <span className="w-8 h-px bg-neutral-900 ml-3" />
              </span>
              <h2 className="mb-4">Déblocage - Zones d&apos;intervention</h2>
              <p className="text-neutral-500">
                Nous intervenons pour le déblocage de rideaux métalliques dans toutes ces zones.
              </p>
            </div>
            
            <div className="border-t border-l border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {zones.map((zone) => (
                  <Link
                    key={zone.slug}
                    href={zone.isMain ? '/deblocage-rideau-metallique-paris-1' : getSubcityUrl('deblocage-rideau-metallique', zone.slug)}
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

        {/* FAQ */}
        <FAQ
          items={content.faq}
          title="Questions sur le déblocage"
        />

        {/* CTA */}
        <CTA
          title={content.cta.title}
          subtitle={content.cta.subtitle}
        />
      </main>
    </>
  );
}
