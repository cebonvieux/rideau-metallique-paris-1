/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONFIGURATION DU SITE - DRM PARIS 1er (75001)
 * Site : depannage-rideaumetallique-paris-1.fr
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────
  // INFORMATIONS ENTREPRISE
  // ─────────────────────────────────────────────────────────────────────────
  name: "DRM Paris 1",                       // Nom court / marque
  fullName: "Dépannage Rideau Métallique Paris 1er",
  domain: "depannage-rideaumetallique-paris-1.fr",
  url: "https://depannage-rideaumetallique-paris-1.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────────────────────────────────
  phone: "01 85 09 99 36",
  phoneLink: "tel:+33185099936",
  email: "contact@depannage-rideaumetallique-paris-1.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // LOCALISATION
  // ─────────────────────────────────────────────────────────────────────────
  city: "Paris 1er",
  citySlug: "paris-1",
  postalCode: "75001",
  department: "Paris",
  departmentCode: "75",
  region: "Île-de-France",
  address: "185 Rue Saint-Honoré, 75001 Paris",
  
  geo: {
    lat: 48.8636,
    lng: 2.3382,
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // HORAIRES
  // ─────────────────────────────────────────────────────────────────────────
  openingHours: "24h/24, 7j/7",
  openingHoursSchema: ["Mo-Su 00:00-23:59"],
  
  // ─────────────────────────────────────────────────────────────────────────
  // RÉSEAUX SOCIAUX
  // ─────────────────────────────────────────────────────────────────────────
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
  
  // ─────────────────────────────────────────────────────────────────────────
  // AVIS GOOGLE
  // ─────────────────────────────────────────────────────────────────────────
  reviews: {
    rating: 4.9,
    count: 127,
    googleUrl: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // STATISTIQUES / DONNÉES DE CONFIANCE
  // ─────────────────────────────────────────────────────────────────────────
  stats: {
    experience: "25+",           // années d'expérience
    interventions: "5000+",      // nombre d'interventions
    delaiIntervention: "30 min", // délai moyen d'intervention
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DESIGN - COULEURS
  // Palette Bleu Parisien avec accent Orange
  // ─────────────────────────────────────────────────────────────────────────
  colors: {
    primary: {
      light: '#48CAE4',    // Bleu clair
      DEFAULT: '#0077B6',  // Bleu principal
      dark: '#023E8A',     // Bleu foncé
    },
    accent: {
      orange: '#E07B39',   // Orange CTA
      ocre: '#E6A23C',     // Ocre
    },
    neutral: {
      sable: '#FAF8F0',    // Fond clair
      anthracite: '#1F2937',
      gris: '#6B7280',
      blanc: '#FFFFFF',
    }
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────
// ZONES D'INTERVENTION - Importé depuis config/zones.ts
// ─────────────────────────────────────────────────────────────────────────
export { zones, quartiers, arrondissementsLimitrophes, communesProches, allZones } from './zones';

// ─────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Fabrication", href: "/fabrication-rideau-metallique-paris-1" },
  { label: "Installation", href: "/installation-rideau-metallique-paris-1" },
  { label: "Motorisation", href: "/motorisation-rideau-metallique-paris-1" },
  { label: "Entretien", href: "/entretien-rideau-metallique-paris-1" },
  { label: "Contact", href: "/contact" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// SERVICES - Chaque service a sa propre page + pages localisées
// baseSlug = slug générique sans la ville (pour générer les URLs subcity)
// ─────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "depannage",
    slug: "depannage",
    baseSlug: "depannage-rideau-metallique",
    name: "Dépannage Urgence",
    shortDesc: "Intervention rapide 24h/24",
    longDesc: "Service de dépannage rideau métallique en urgence, disponible 24h/24 et 7j/7.",
    icon: "🔧",
    hasPage: false, // Géré par la page d'accueil
  },
  {
    id: "fabrication",
    slug: "fabrication-rideau-metallique-paris-1",
    baseSlug: "fabrication-rideau-metallique",
    name: "Fabrication",
    shortDesc: "Rideaux sur mesure",
    longDesc: "Fabrication de rideaux métalliques sur mesure dans nos ateliers français.",
    icon: "🏭",
    hasPage: true,
  },
  {
    id: "installation",
    slug: "installation-rideau-metallique-paris-1",
    baseSlug: "installation-rideau-metallique",
    name: "Installation",
    shortDesc: "Pose de rideaux métalliques",
    longDesc: "Installation complète de rideaux métalliques pour commerces et locaux professionnels.",
    icon: "🏗️",
    hasPage: true,
  },
  {
    id: "motorisation",
    slug: "motorisation-rideau-metallique-paris-1",
    baseSlug: "motorisation-rideau-metallique",
    name: "Motorisation",
    shortDesc: "Automatisation de votre rideau",
    longDesc: "Motorisation et automatisation de rideaux métalliques existants ou neufs.",
    icon: "⚡",
    hasPage: true,
  },
  {
    id: "entretien",
    slug: "entretien-rideau-metallique-paris-1",
    baseSlug: "entretien-rideau-metallique",
    name: "Entretien",
    shortDesc: "Maintenance préventive",
    longDesc: "Contrats d'entretien et maintenance préventive pour rideaux métalliques.",
    icon: "🛠️",
    hasPage: true,
  },
  {
    id: "reparation",
    slug: "reparation",
    baseSlug: "reparation-rideau-metallique",
    name: "Réparation",
    shortDesc: "Remise en état complète",
    longDesc: "Réparation et remise en état de rideaux métalliques endommagés ou usés.",
    icon: "🔩",
    hasPage: true,
  },
  {
    id: "deblocage",
    slug: "deblocage-rideau-metallique-paris-1",
    baseSlug: "deblocage-rideau-metallique",
    name: "Déblocage",
    shortDesc: "Rideau bloqué ou coincé",
    longDesc: "Déblocage en urgence de rideaux métalliques bloqués, coincés ou hors service.",
    icon: "🚪",
    hasPage: true,
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// TYPES DE RIDEAUX (pour personnalisation)
// ─────────────────────────────────────────────────────────────────────────
export const rideauTypes = [
  { name: "Rideau à lames pleines", slug: "lames-pleines" },
  { name: "Rideau à lames micro-perforées", slug: "micro-perfore" },
  { name: "Rideau à tubes ondulés", slug: "tubes-ondules" },
  { name: "Grille métallique", slug: "grille" },
  { name: "Rideau coupe-feu", slug: "coupe-feu" },
  { name: "Porte de garage", slug: "porte-garage" },
] as const;

// Type exports
export type SiteConfig = typeof siteConfig;
export type { Zone, ZoneType } from './zones';
export type NavItem = typeof navigation[number];
export type Service = typeof services[number];

