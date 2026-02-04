import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButton } from "@/components/ui/FloatingButton";

// Google Fonts
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} - Dépannage Rideau Métallique ${siteConfig.city} (${siteConfig.postalCode}) | 24h/24`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Dépannage rideau métallique à ${siteConfig.city} (${siteConfig.postalCode}). Intervention rapide 24h/24 et 7j/7 : déblocage, réparation, motorisation. ☎️ ${siteConfig.phone}. ${siteConfig.stats.experience} ans d'expérience.`,
  keywords: [
    `dépannage rideau métallique ${siteConfig.city}`,
    `réparation rideau métallique ${siteConfig.postalCode}`,
    `rideau métallique bloqué ${siteConfig.city}`,
    `installation rideau métallique Paris`,
    `motorisation rideau métallique`,
    `entretien rideau métallique`,
    "rideau de fer",
    "grille métallique",
    "store métallique",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} - Intervention 24h/24`,
    description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention rapide en moins de ${siteConfig.stats.delaiIntervention}.`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Dépannage Rideau Métallique`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} - Intervention 24h/24`,
    description: `Dépannage rideau métallique à ${siteConfig.city}. Intervention rapide en moins de ${siteConfig.stats.delaiIntervention}.`,
  },
  verification: {
    google: "", // À remplir avec le code de vérification Google Search Console
  },
};

// Schema.org LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  description: `Dépannage, réparation et installation de rideaux métalliques à ${siteConfig.city}. Intervention 24h/24, 7j/7.`,
  url: siteConfig.url,
  telephone: siteConfig.phoneLink.replace("tel:", ""),
  email: siteConfig.email,
  image: `${siteConfig.url}/images/logo.webp`,
  logo: `${siteConfig.url}/images/logo.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.split(",")[0],
    addressLocality: "Paris",
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.region,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.reviews.rating,
    reviewCount: siteConfig.reviews.count,
    bestRating: "5",
    worstRating: "1",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Paris 1er",
    },
    {
      "@type": "City", 
      name: "Paris",
    },
    {
      "@type": "State",
      name: "Île-de-France",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services rideau métallique",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dépannage rideau métallique",
          description: "Intervention urgente 24h/24 pour rideau bloqué, coincé ou en panne",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installation rideau métallique",
          description: "Pose de rideaux métalliques neufs pour commerces et locaux professionnels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motorisation rideau métallique",
          description: "Automatisation et motorisation de rideaux métalliques manuels",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Entretien rideau métallique",
          description: "Contrats de maintenance préventive pour rideaux métalliques",
        },
      },
    ],
  },
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.google,
  ].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}

