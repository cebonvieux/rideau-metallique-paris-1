import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} - Dépannage Rideau Métallique ${siteConfig.city} | 24h/24`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention rapide 24h/24 : déblocage, réparation, motorisation. ☎️ ${siteConfig.phone}`,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.fullName,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}

