/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ZONES D'INTERVENTION - DRM PARIS 1er (75001)
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────
export type ZoneType = 'quartier' | 'arrondissement' | 'commune';

export interface Zone {
  name: string;
  slug: string;
  postalCode: string;
  type: ZoneType;
  isMain?: boolean;
  description?: string;
}

// ─────────────────────────────────────────────────────────────────────────
// QUARTIERS DU 1ER ARRONDISSEMENT (Zone principale)
// ─────────────────────────────────────────────────────────────────────────
export const quartiers: Zone[] = [
  {
    name: "Les Halles",
    slug: "les-halles",
    postalCode: "75001",
    type: "quartier",
    description: "Quartier commerçant au cœur de Paris, ancien marché central"
  },
  {
    name: "Louvre",
    slug: "louvre",
    postalCode: "75001",
    type: "quartier",
    description: "Quartier historique autour du célèbre musée"
  },
  {
    name: "Palais-Royal",
    slug: "palais-royal",
    postalCode: "75001",
    type: "quartier",
    description: "Quartier élégant avec jardins et galeries"
  },
  {
    name: "Place Vendôme",
    slug: "place-vendome",
    postalCode: "75001",
    type: "quartier",
    description: "Quartier du luxe et de la haute joaillerie"
  },
  {
    name: "Châtelet",
    slug: "chatelet",
    postalCode: "75001",
    type: "quartier",
    description: "Quartier central, nœud de transports parisien"
  },
];

// ─────────────────────────────────────────────────────────────────────────
// ARRONDISSEMENTS LIMITROPHES
// ─────────────────────────────────────────────────────────────────────────
export const arrondissementsLimitrophes: Zone[] = [
  {
    name: "Paris 2ème",
    slug: "paris-2",
    postalCode: "75002",
    type: "arrondissement",
    description: "Quartier de la Bourse et des passages couverts"
  },
  {
    name: "Paris 3ème",
    slug: "paris-3",
    postalCode: "75003",
    type: "arrondissement",
    description: "Haut-Marais, quartier des Arts et Métiers"
  },
  {
    name: "Paris 4ème",
    slug: "paris-4",
    postalCode: "75004",
    type: "arrondissement",
    description: "Marais, Île de la Cité, Notre-Dame"
  },
  {
    name: "Paris 5ème",
    slug: "paris-5",
    postalCode: "75005",
    type: "arrondissement",
    description: "Quartier Latin, Panthéon, Sorbonne"
  },
  {
    name: "Paris 6ème",
    slug: "paris-6",
    postalCode: "75006",
    type: "arrondissement",
    description: "Saint-Germain-des-Prés, Luxembourg"
  },
  {
    name: "Paris 7ème",
    slug: "paris-7",
    postalCode: "75007",
    type: "arrondissement",
    description: "Tour Eiffel, Invalides, ministères"
  },
  {
    name: "Paris 8ème",
    slug: "paris-8",
    postalCode: "75008",
    type: "arrondissement",
    description: "Champs-Élysées, Madeleine, Triangle d'Or"
  },
  {
    name: "Paris 9ème",
    slug: "paris-9",
    postalCode: "75009",
    type: "arrondissement",
    description: "Opéra, Grands Boulevards, Pigalle"
  },
  {
    name: "Paris 10ème",
    slug: "paris-10",
    postalCode: "75010",
    type: "arrondissement",
    description: "Gare du Nord, Gare de l'Est, Canal Saint-Martin"
  },
];

// ─────────────────────────────────────────────────────────────────────────
// COMMUNES PROCHES (Hors Paris)
// ─────────────────────────────────────────────────────────────────────────
export const communesProches: Zone[] = [
  {
    name: "Boulogne-Billancourt",
    slug: "boulogne-billancourt",
    postalCode: "92100",
    type: "commune",
    description: "Première commune des Hauts-de-Seine"
  },
  {
    name: "Neuilly-sur-Seine",
    slug: "neuilly-sur-seine",
    postalCode: "92200",
    type: "commune",
    description: "Ville résidentielle à l'ouest de Paris"
  },
  {
    name: "Levallois-Perret",
    slug: "levallois-perret",
    postalCode: "92300",
    type: "commune",
    description: "Ville dynamique aux portes de Paris"
  },
  {
    name: "Clichy",
    slug: "clichy",
    postalCode: "92110",
    type: "commune",
    description: "Commune limitrophe du 17ème arrondissement"
  },
  {
    name: "Saint-Denis",
    slug: "saint-denis",
    postalCode: "93200",
    type: "commune",
    description: "Ville historique, Stade de France"
  },
  {
    name: "Vincennes",
    slug: "vincennes",
    postalCode: "94300",
    type: "commune",
    description: "Ville du château et du bois de Vincennes"
  },
  {
    name: "Montreuil",
    slug: "montreuil",
    postalCode: "93100",
    type: "commune",
    description: "Grande ville de Seine-Saint-Denis"
  },
];

// ─────────────────────────────────────────────────────────────────────────
// ZONE PRINCIPALE (pour rétrocompatibilité)
// ─────────────────────────────────────────────────────────────────────────
export const zoneMain: Zone = {
  name: "Paris 1er",
  slug: "paris-1",
  postalCode: "75001",
  type: "arrondissement",
  isMain: true,
  description: "1er arrondissement de Paris, cœur historique de la capitale"
};

// ─────────────────────────────────────────────────────────────────────────
// TOUTES LES ZONES COMBINÉES
// ─────────────────────────────────────────────────────────────────────────
export const allZones: Zone[] = [
  zoneMain,
  ...quartiers,
  ...arrondissementsLimitrophes,
  ...communesProches,
];

// Export par défaut pour rétrocompatibilité
export const zones = allZones;

// ─────────────────────────────────────────────────────────────────────────
// FONCTIONS UTILITAIRES
// ─────────────────────────────────────────────────────────────────────────

/**
 * Récupère une zone par son slug
 */
export function getZoneBySlug(slug: string): Zone | undefined {
  return allZones.find(zone => zone.slug === slug);
}

/**
 * Récupère toutes les zones d'un type donné
 */
export function getZonesByType(type: ZoneType): Zone[] {
  return allZones.filter(zone => zone.type === type);
}

/**
 * Génère tous les slugs pour generateStaticParams
 */
export function getAllZoneSlugs(): string[] {
  return allZones.map(zone => zone.slug);
}
