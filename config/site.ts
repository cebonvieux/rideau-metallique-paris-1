/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CONFIGURATION DU SITE - PERSONNALISER POUR CHAQUE NOUVEAU SITE
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  // ─────────────────────────────────────────────────────────────────────────
  // INFORMATIONS ENTREPRISE
  // ─────────────────────────────────────────────────────────────────────────
  name: "DRM Paris",                         // Nom court / marque
  fullName: "Dépannage Rideau Métallique Paris",
  domain: "rideau-metallique-paris.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // CONTACT
  // ─────────────────────────────────────────────────────────────────────────
  phone: "01 23 45 67 89",
  phoneLink: "tel:+33123456789",
  email: "contact@rideau-metallique-paris.fr",
  
  // ─────────────────────────────────────────────────────────────────────────
  // LOCALISATION
  // ─────────────────────────────────────────────────────────────────────────
  city: "Paris",
  postalCode: "75000",
  department: "Paris",
  departmentCode: "75",
  region: "Île-de-France",
  address: "75000 Paris, France",
  
  geo: {
    lat: 48.8566,
    lng: 2.3522,
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
    rating: 4.8,
    count: 95,
    googleUrl: "",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // DESIGN - COULEURS
  // Palette orange/gris industriel par défaut - À PERSONNALISER
  // ─────────────────────────────────────────────────────────────────────────
  colors: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',  // Couleur principale - Orange industriel
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    }
  },
} as const;

// ─────────────────────────────────────────────────────────────────────────
// ZONES D'INTERVENTION
// ─────────────────────────────────────────────────────────────────────────
export const zones = [
  { name: "Paris", slug: "paris", postalCode: "75000", isMain: true },
  { name: "Paris 1er", slug: "paris-1", postalCode: "75001", arrondissement: 1 },
  { name: "Paris 2e", slug: "paris-2", postalCode: "75002", arrondissement: 2 },
  { name: "Paris 3e", slug: "paris-3", postalCode: "75003", arrondissement: 3 },
  { name: "Paris 4e", slug: "paris-4", postalCode: "75004", arrondissement: 4 },
  { name: "Paris 5e", slug: "paris-5", postalCode: "75005", arrondissement: 5 },
  { name: "Paris 6e", slug: "paris-6", postalCode: "75006", arrondissement: 6 },
  { name: "Paris 7e", slug: "paris-7", postalCode: "75007", arrondissement: 7 },
  { name: "Paris 8e", slug: "paris-8", postalCode: "75008", arrondissement: 8 },
  { name: "Paris 9e", slug: "paris-9", postalCode: "75009", arrondissement: 9 },
  { name: "Paris 10e", slug: "paris-10", postalCode: "75010", arrondissement: 10 },
  { name: "Paris 11e", slug: "paris-11", postalCode: "75011", arrondissement: 11 },
  { name: "Paris 12e", slug: "paris-12", postalCode: "75012", arrondissement: 12 },
  { name: "Paris 13e", slug: "paris-13", postalCode: "75013", arrondissement: 13 },
  { name: "Paris 14e", slug: "paris-14", postalCode: "75014", arrondissement: 14 },
  { name: "Paris 15e", slug: "paris-15", postalCode: "75015", arrondissement: 15 },
  { name: "Paris 16e", slug: "paris-16", postalCode: "75016", arrondissement: 16 },
  { name: "Paris 17e", slug: "paris-17", postalCode: "75017", arrondissement: 17 },
  { name: "Paris 18e", slug: "paris-18", postalCode: "75018", arrondissement: 18 },
  { name: "Paris 19e", slug: "paris-19", postalCode: "75019", arrondissement: 19 },
  { name: "Paris 20e", slug: "paris-20", postalCode: "75020", arrondissement: 20 },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Dépannage", href: "/depannage" },
  { label: "Installation", href: "/installation" },
  { label: "Motorisation", href: "/motorisation" },
  { label: "Entretien", href: "/entretien" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
] as const;

// ─────────────────────────────────────────────────────────────────────────
// SERVICES - Chaque service a sa propre page + pages localisées
// ─────────────────────────────────────────────────────────────────────────
export const services = [
  {
    id: "depannage",
    slug: "depannage",
    name: "Dépannage Urgence",
    shortDesc: "Intervention rapide 24h/24",
    longDesc: "Service de dépannage rideau métallique en urgence, disponible 24h/24 et 7j/7.",
    icon: "🔧",
    hasPage: true,
  },
  {
    id: "installation",
    slug: "installation",
    name: "Installation",
    shortDesc: "Pose de rideaux métalliques",
    longDesc: "Installation complète de rideaux métalliques pour commerces et locaux professionnels.",
    icon: "🏗️",
    hasPage: true,
  },
  {
    id: "motorisation",
    slug: "motorisation",
    name: "Motorisation",
    shortDesc: "Automatisation de votre rideau",
    longDesc: "Motorisation et automatisation de rideaux métalliques existants ou neufs.",
    icon: "⚡",
    hasPage: true,
  },
  {
    id: "entretien",
    slug: "entretien",
    name: "Entretien",
    shortDesc: "Maintenance préventive",
    longDesc: "Contrats d'entretien et maintenance préventive pour rideaux métalliques.",
    icon: "🛠️",
    hasPage: true,
  },
  {
    id: "reparation",
    slug: "reparation",
    name: "Réparation",
    shortDesc: "Remise en état complète",
    longDesc: "Réparation et remise en état de rideaux métalliques endommagés ou usés.",
    icon: "🔩",
    hasPage: true,
  },
  {
    id: "deblocage",
    slug: "deblocage",
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
export type Zone = typeof zones[number];
export type NavItem = typeof navigation[number];
export type Service = typeof services[number];

