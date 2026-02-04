import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { 
  title: `Mentions Légales - ${siteConfig.name}`,
  description: `Mentions légales du site ${siteConfig.name}. Informations sur l'éditeur, l'hébergement et la propriété intellectuelle.`
};

export default function MentionsLegalesPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="bg-neutral-50 py-3 border-b border-neutral-200">
        <div className="container">
          <ol className="flex items-center gap-2 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-neutral-900">Accueil</Link></li>
            <li>/</li>
            <li className="text-neutral-900 font-medium">Mentions légales</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-white pt-16 pb-8">
        <div className="container">
          <div className="max-w-2xl">
            <span className="label mb-6">
              <span className="w-12 h-px bg-neutral-900 mr-4" />
              Informations légales
            </span>
            <h1>Mentions Légales</h1>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section bg-white pt-8">
        <div className="container">
          <div className="max-w-3xl">
            <div className="space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Éditeur du site</h2>
                <div className="p-6 bg-neutral-50 text-neutral-700 leading-relaxed">
                  <p className="font-semibold text-neutral-900 mb-2">{siteConfig.fullName}</p>
                  <p>{siteConfig.address}</p>
                  <p className="mt-2">Téléphone : <a href={siteConfig.phoneLink} className="text-neutral-900 font-medium">{siteConfig.phone}</a></p>
                  <p>Email : <a href={`mailto:${siteConfig.email}`} className="text-neutral-900 font-medium">{siteConfig.email}</a></p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Hébergement</h2>
                <p className="text-neutral-600 leading-relaxed">
                  [À compléter avec les informations de l&apos;hébergeur]
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Propriété intellectuelle</h2>
                <p className="text-neutral-600 leading-relaxed">
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Données personnelles</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à : <a href={`mailto:${siteConfig.email}`} className="text-neutral-900 font-medium">{siteConfig.email}</a>
                </p>
                <p className="text-neutral-600 leading-relaxed mt-4">
                  Pour plus d&apos;informations, consultez notre <Link href="/confidentialite" className="text-neutral-900 font-medium underline">politique de confidentialité</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
