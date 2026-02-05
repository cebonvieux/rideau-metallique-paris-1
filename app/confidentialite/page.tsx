import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { 
  title: `Politique de Confidentialité - RGPD`,
  description: `Politique de confidentialité et protection des données personnelles (RGPD). Vos droits et nos engagements.`
};

export default function ConfidentialitePage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">Confidentialité</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-white pt-16 pb-8">
        <div className="container">
          <div className="max-w-2xl">
            <span className="label mb-6">
              <span className="w-12 h-px bg-neutral-900 mr-4" />
              Protection des données
            </span>
            <h1>Politique de Confidentialité</h1>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section bg-white pt-8">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-lg text-neutral-600 mb-12">
              <strong className="text-neutral-900">{siteConfig.fullName}</strong> s&apos;engage à protéger votre vie privée et vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Collecte des données</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Nous collectons les informations suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="space-y-2">
                  {["Nom et prénom", "Numéro de téléphone", "Adresse email", "Adresse du local (optionnel)", "Description de votre demande"].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Utilisation des données</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Les données collectées sont utilisées exclusivement pour :
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Répondre à vos demandes de devis et d'information",
                    "Vous contacter pour le suivi de votre intervention",
                    "Améliorer la qualité de nos services"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-600">
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Vos données ne sont jamais vendues, louées ou partagées avec des tiers à des fins commerciales.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Conservation des données</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de notre dernier contact, conformément aux obligations légales et aux besoins de notre activité.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Vos droits</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Droit d'accès", desc: "Obtenir une copie de vos données" },
                    { title: "Droit de rectification", desc: "Corriger vos informations" },
                    { title: "Droit d'effacement", desc: "Demander la suppression de vos données" },
                    { title: "Droit d'opposition", desc: "Refuser certains traitements" }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-neutral-50">
                      <p className="font-medium text-neutral-900">{item.title}</p>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Contact</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Pour exercer vos droits ou pour toute question concernant vos données personnelles, contactez-nous :
                </p>
                <div className="mt-4 p-6 bg-neutral-900 text-white">
                  <p className="font-semibold mb-2">{siteConfig.fullName}</p>
                  <p className="text-neutral-400">
                    Email : <a href={`mailto:${siteConfig.email}`} className="text-white">{siteConfig.email}</a>
                  </p>
                  <p className="text-neutral-400">
                    Téléphone : <a href={siteConfig.phoneLink} className="text-white">{siteConfig.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
