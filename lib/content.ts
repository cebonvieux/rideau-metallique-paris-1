import { siteConfig, zones, services } from "@/config/site";

/**
 * Context pour les remplacements dynamiques (zone, service)
 */
interface ReplaceContext {
  zone?: string;      // Nom de la zone (ex: "Paris 11e")
  zoneSlug?: string;  // Slug de la zone (ex: "paris-11")
  zonePostal?: string; // Code postal de la zone
  service?: string;   // Nom du service (ex: "Dépannage Urgence")
  serviceSlug?: string; // Slug du service (ex: "depannage")
}

/**
 * Remplace les variables dans le contenu
 * Variables supportées : {city}, {name}, {phone}, {email}, {department}, {region}, {zone}, {zonePostal}, {service}
 */
export function replaceVariables(text: string, context?: ReplaceContext): string {
  // Variables de zone avec fallback sur la ville principale
  const zone = context?.zone || siteConfig.city;
  const zonePostal = context?.zonePostal || siteConfig.postalCode;
  
  let result = text
    .replace(/{city}/g, siteConfig.city)
    .replace(/{name}/g, siteConfig.name)
    .replace(/{fullName}/g, siteConfig.fullName)
    .replace(/{phone}/g, siteConfig.phone)
    .replace(/{email}/g, siteConfig.email)
    .replace(/{department}/g, siteConfig.department)
    .replace(/{region}/g, siteConfig.region)
    .replace(/{postalCode}/g, siteConfig.postalCode)
    // Variables de zone (avec fallback)
    .replace(/{zone}/g, zone)
    .replace(/{zonePostal}/g, zonePostal);

  // Variable service (optionnelle)
  if (context?.service) {
    result = result.replace(/{service}/g, context.service);
  }

  return result;
}

/**
 * Récupère une zone par son slug
 */
export function getZoneBySlug(slug: string) {
  return zones.find(z => z.slug === slug);
}

/**
 * Récupère un service par son slug
 */
export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}

/**
 * Récupère un service par son baseSlug
 */
export function getServiceByBaseSlug(baseSlug: string) {
  return services.find(s => s.baseSlug === baseSlug);
}

/**
 * Parse un slug combiné service+zone (ex: "depannage-rideau-metallique-paris-3")
 * Retourne { service, zone } ou null si non trouvé
 */
export function parseServiceZoneSlug(slug: string): { service: typeof services[number]; zone: ReturnType<typeof getZoneBySlug> } | null {
  // On essaie chaque service pour voir si le slug commence par son baseSlug
  for (const service of services) {
    const prefix = service.baseSlug + "-";
    if (slug.startsWith(prefix)) {
      const zoneSlug = slug.slice(prefix.length);
      const zone = getZoneBySlug(zoneSlug);
      if (zone) {
        return { service, zone };
      }
    }
  }
  return null;
}

/**
 * Génère le slug combiné service+zone pour une URL
 */
export function buildServiceZoneSlug(serviceBaseSlug: string, zoneSlug: string): string {
  return `${serviceBaseSlug}-${zoneSlug}`;
}

/**
 * Génère l'URL complète pour une page subcity
 */
export function getSubcityUrl(serviceBaseSlug: string, zoneSlug: string): string {
  return `/${buildServiceZoneSlug(serviceBaseSlug, zoneSlug)}`;
}

/**
 * Remplace les variables dans un objet (récursif)
 */
export function replaceVariablesInObject<T>(obj: T, context?: ReplaceContext): T {
  if (typeof obj === "string") {
    return replaceVariables(obj, context) as T;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => replaceVariablesInObject(item, context)) as T;
  }
  
  if (typeof obj === "object" && obj !== null) {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = replaceVariablesInObject(value, context);
    }
    return result as T;
  }
  
  return obj;
}

/**
 * Charge et parse le contenu d'une page avec remplacement des variables
 */
export function getPageContent<T>(content: T, context?: ReplaceContext): T {
  return replaceVariablesInObject(content, context);
}

// Export du type pour utilisation dans les pages
export type { ReplaceContext };
