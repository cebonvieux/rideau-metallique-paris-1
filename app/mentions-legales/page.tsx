import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Mentions Légales" };

export default function MentionsLegalesPage() {
  return (
    <main className="pt-20">
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h1>Mentions Légales</h1>
            <h2>Éditeur du site</h2>
            <p>
              <strong>{siteConfig.fullName}</strong><br />
              {siteConfig.address}<br />
              Téléphone : {siteConfig.phone}<br />
              Email : {siteConfig.email}
            </p>
            <h2>Hébergement</h2>
            <p>[À compléter]</p>
            <h2>Propriété intellectuelle</h2>
            <p>L&apos;ensemble de ce site relève de la législation française sur le droit d&apos;auteur.</p>
            <h2>Données personnelles</h2>
            <p>Conformément au RGPD, vous pouvez exercer vos droits en contactant : {siteConfig.email}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

