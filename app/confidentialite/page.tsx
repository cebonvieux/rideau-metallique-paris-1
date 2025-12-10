import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Politique de Confidentialité" };

export default function ConfidentialitePage() {
  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1>Politique de Confidentialité</h1>
            <p><strong>{siteConfig.fullName}</strong> s&apos;engage à protéger votre vie privée.</p>
            <h2>Collecte des données</h2>
            <p>Nous collectons : nom, téléphone, email lors de l&apos;utilisation du formulaire de contact.</p>
            <h2>Utilisation</h2>
            <p>Les données servent uniquement à répondre à vos demandes de devis.</p>
            <h2>Vos droits</h2>
            <p>Accès, rectification, effacement : {siteConfig.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

