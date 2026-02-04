# 🏗️ ARCHITECTURE GLOBALE - Site DRM [VILLE]

> **Document de référence** pour la structure complète du site

---

## 📋 VARIABLES À REMPLACER

```
[VILLE] = Nom de la ville principale
[VILLE_SLUG] = nom-ville-en-slug (minuscules, tirets)
[CODE_POSTAL] = Code postal principal
[DEPARTEMENT] = Nom du département
[CODE_DEPARTEMENT] = Numéro du département
[REGION] = Nom de la région
[TELEPHONE] = Numéro de téléphone
[EMAIL] = Email de contact
[DOMAINE] = Nom de domaine complet
[ADRESSE] = Adresse complète
[LAT] = Latitude GPS
[LNG] = Longitude GPS
```

---

## 🗺️ STRUCTURE DES PAGES

### Pages Principales (Priorité SEO 0.9-1.0)

| URL | Titre H1 | Priorité |
|-----|----------|----------|
| `/` | Dépannage Rideau Métallique [VILLE] | 1.0 |
| `/depannage-rideau-metallique/` | Dépannage Rideau Métallique [VILLE] - Urgence 24h/24 | 0.9 |
| `/installation-rideau-metallique/` | Installation Rideau Métallique [VILLE] | 0.9 |
| `/fabrication-rideau-metallique/` | Fabrication Rideau Métallique [VILLE] | 0.9 |
| `/entretien-rideau-metallique/` | Entretien Rideau Métallique [VILLE] | 0.9 |
| `/motorisation-rideau-metallique/` | Motorisation Rideau Métallique [VILLE] | 0.9 |
| `/contact-rideau-metallique/` | Contact DRM [VILLE] - Devis Gratuit | 0.8 |

### Pages SubCity (Priorité SEO 0.7)

**Structure URL** : `/[service]-rideau-metallique/[zone-slug]/`

**Exemples** :
- `/depannage-rideau-metallique/centre-ville/`
- `/fabrication-rideau-metallique/nom-commune/`
- `/entretien-rideau-metallique/nom-quartier/`

**Total estimé** : 5 services × 15-20 zones = **75-100 pages SubCity**

### Pages Zones Génériques (Priorité SEO 0.6)

**Structure URL** : `/zones/[zone-slug]/`

### Pages Légales (Priorité SEO 0.3)

| URL | Page |
|-----|------|
| `/mentions-legales/` | Mentions légales |
| `/confidentialite/` | Politique de confidentialité |
| `/cookies/` | Politique cookies |

---

## 📁 STRUCTURE DES FICHIERS

```
[nom-projet]/
├── app/                              # Pages Next.js (App Router)
│   ├── page.tsx                      # Page d'accueil
│   ├── layout.tsx                    # Layout principal + Schema LocalBusiness
│   ├── not-found.tsx                 # Page 404
│   │
│   ├── depannage-rideau-metallique/
│   │   ├── page.tsx                  # Page principale dépannage
│   │   └── [zone]/
│   │       └── page.tsx              # Pages SubCity dépannage
│   │
│   ├── installation-rideau-metallique/
│   │   ├── page.tsx
│   │   └── [zone]/
│   │       └── page.tsx
│   │
│   ├── fabrication-rideau-metallique/
│   │   ├── page.tsx
│   │   └── [zone]/
│   │       └── page.tsx
│   │
│   ├── entretien-rideau-metallique/
│   │   ├── page.tsx
│   │   └── [zone]/
│   │       └── page.tsx
│   │
│   ├── motorisation-rideau-metallique/
│   │   ├── page.tsx
│   │   └── [zone]/
│   │       └── page.tsx
│   │
│   ├── contact-rideau-metallique/
│   │   └── page.tsx
│   │
│   ├── zones/
│   │   ├── page.tsx                  # Liste des zones
│   │   └── [slug]/
│   │       └── page.tsx              # Page zone individuelle
│   │
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── confidentialite/
│   │   └── page.tsx
│   └── cookies/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── home/                     # Sections page accueil
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── DeblocageSection.tsx
│   │   │   ├── PannesSection.tsx
│   │   │   └── UrgenceSection.tsx
│   │   │
│   │   ├── depannage/                # Sections page dépannage
│   │   ├── fabrication/              # Sections page fabrication
│   │   ├── entretien/                # Sections page entretien
│   │   ├── motorisation/             # Sections page motorisation
│   │   ├── installation/             # Sections page installation
│   │   ├── contact/                  # Sections page contact
│   │   │
│   │   └── subcity/                  # Sections pages SubCity
│   │       ├── WhyChooseUs.tsx
│   │       ├── TarifsSection.tsx
│   │       ├── SurMesureLocal.tsx
│   │       ├── NormesCertificationsLocal.tsx
│   │       ├── ContratEntretien.tsx
│   │       ├── SignesUsureLocal.tsx
│   │       ├── TypesRideaux.tsx
│   │       ├── ProcessusInstallationLocal.tsx
│   │       ├── AvantagesMotorisation.tsx
│   │       └── MarquesMoteurs.tsx
│   │
│   └── ui/                           # Composants UI réutilisables
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── FAQ.tsx
│       ├── Reviews.tsx
│       ├── CTA.tsx
│       ├── Breadcrumb.tsx
│       ├── ZoneCard.tsx
│       └── ZoneInterventionSection.tsx
│
├── config/
│   ├── site.ts                       # Configuration principale
│   └── zones.ts                      # Configuration zones
│
├── content/
│   ├── pages/                        # Contenu pages principales
│   │   ├── home.json
│   │   ├── depannage.json
│   │   ├── fabrication.json
│   │   ├── entretien.json
│   │   ├── motorisation.json
│   │   ├── installation.json
│   │   └── contact.json
│   │
│   ├── faq/                          # FAQ par page
│   │   ├── accueil.json
│   │   ├── depannage.json
│   │   ├── fabrication.json
│   │   ├── entretien.json
│   │   ├── motorisation.json
│   │   ├── installation.json
│   │   └── contact.json
│   │
│   └── sections/                     # Contenu sections spécifiques
│       ├── home/
│       ├── fabrication/
│       ├── entretien/
│       └── motorisation/
│
├── lib/
│   ├── content.ts                    # Helpers contenu
│   ├── utils.ts                      # Utilitaires
│   └── breadcrumb-schema.ts          # Schema breadcrumb
│
├── public/
│   ├── images/
│   │   └── visu/                     # Images des zones
│   ├── sitemap.xml
│   └── robots.txt
│
├── styles/
│   └── globals.css                   # Styles Tailwind
│
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## ⚙️ FICHIER config/site.ts

```typescript
export const siteConfig = {
  // Identité
  name: "DRM [VILLE]",
  fullName: "Dépannage Rideau Métallique [VILLE]",
  description: "Dépannage, réparation et installation de rideaux métalliques à [VILLE]. Intervention 24h/24, 7j/7. Techniciens certifiés.",
  
  // Domaine
  domain: "[DOMAINE]",
  url: "https://[DOMAINE]",
  
  // Contact
  phone: "[TELEPHONE]",
  phoneLink: "tel:+33[TELEPHONE_SANS_ESPACES]",
  email: "[EMAIL]",
  
  // Localisation
  address: {
    street: "[RUE]",
    city: "[VILLE]",
    postalCode: "[CODE_POSTAL]",
    department: "[DEPARTEMENT]",
    departmentCode: "[CODE_DEPARTEMENT]",
    region: "[REGION]",
    country: "France",
    full: "[ADRESSE_COMPLETE]"
  },
  
  // Coordonnées GPS
  geo: {
    lat: [LAT],
    lng: [LNG]
  },
  
  // Réputation
  reviews: {
    rating: 4.9,
    count: 127,
    googleUrl: "[URL_GOOGLE_BUSINESS]"
  },
  
  // Stats
  stats: {
    experience: "15+",
    interventions: "5000+",
    responseTime: "30 min",
    availability: "24h/24, 7j/7"
  },
  
  // Réseaux sociaux (optionnel)
  social: {
    facebook: "",
    instagram: "",
    linkedin: ""
  }
};
```

---

## ⚙️ FICHIER config/zones.ts

```typescript
export interface Zone {
  name: string;
  slug: string;
  postalCode: string;
  isQuartier: boolean;
  image?: string;
  description?: string;
}

// Ville principale
export const mainCity: Zone = {
  name: "[VILLE]",
  slug: "[VILLE_SLUG]",
  postalCode: "[CODE_POSTAL]",
  isQuartier: false,
  image: "/images/visu/[VILLE_SLUG].webp"
};

// Quartiers de [VILLE]
export const quartiers: Zone[] = [
  {
    name: "[VILLE] Centre",
    slug: "[VILLE_SLUG]-centre",
    postalCode: "[CODE_POSTAL]",
    isQuartier: true,
    image: "/images/visu/[VILLE_SLUG]-centre.webp"
  },
  // Ajouter les autres quartiers...
];

// Communes environnantes
export const communes: Zone[] = [
  {
    name: "[COMMUNE_1]",
    slug: "[COMMUNE_1_SLUG]",
    postalCode: "[CODE_POSTAL_1]",
    isQuartier: false,
    image: "/images/visu/[COMMUNE_1_SLUG].webp"
  },
  // Ajouter les autres communes...
];

// Toutes les zones
export const allZones: Zone[] = [mainCity, ...quartiers, ...communes];

// Services
export const services = [
  { name: "Dépannage", slug: "depannage-rideau-metallique" },
  { name: "Installation", slug: "installation-rideau-metallique" },
  { name: "Fabrication", slug: "fabrication-rideau-metallique" },
  { name: "Entretien", slug: "entretien-rideau-metallique" },
  { name: "Motorisation", slug: "motorisation-rideau-metallique" }
];
```

---

## 🗺️ IDENTIFICATION DES ZONES

### Comment trouver les zones autour de [VILLE]

1. **Rechercher sur Google Maps** : "[VILLE] communes limitrophes"
2. **Consulter Wikipedia** : Page de l'agglomération/métropole
3. **Utiliser data.gouv.fr** : Liste des communes par département

### Critères de sélection des zones

- **Distance** : Maximum 30km du centre-ville
- **Population** : Privilégier les communes > 5000 habitants
- **Activité commerciale** : Zones avec commerces et entreprises
- **Accessibilité** : Facilement atteignables

### Structure recommandée

| Type | Nombre | Exemples |
|------|--------|----------|
| **Quartiers** | 3-5 | Centre-ville, Quartier commercial, Zone industrielle |
| **Communes proches** | 10-15 | Communes limitrophes principales |
| **TOTAL** | 15-20 zones | |

---

## 📊 HIÉRARCHIE SEO

### Architecture en Silo

```
NIVEAU 1 : Page Accueil (Priorité 1.0)
    │
    ├── NIVEAU 2 : Pages Services (Priorité 0.9)
    │   ├── Dépannage
    │   ├── Installation
    │   ├── Fabrication
    │   ├── Entretien
    │   └── Motorisation
    │       │
    │       └── NIVEAU 3 : Pages SubCity (Priorité 0.7)
    │           ├── [Service] + Zone 1
    │           ├── [Service] + Zone 2
    │           └── [Service] + Zone N
    │
    └── NIVEAU 2 : Page Contact (Priorité 0.8)
```

### Maillage Interne

**Sur chaque page service** :
- Liens vers les autres services
- Liens vers les pages SubCity de ce service
- Lien vers Contact

**Sur chaque page SubCity** :
- Liens vers les autres services dans la MÊME zone
- Lien vers la page service parente
- Lien vers Contact

---

## 📄 SITEMAP.XML

### Structure recommandée

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Page d'accueil -->
  <url>
    <loc>https://[DOMAINE]/</loc>
    <lastmod>[DATE]</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Pages services -->
  <url>
    <loc>https://[DOMAINE]/depannage-rideau-metallique/</loc>
    <lastmod>[DATE]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... autres services ... -->
  
  <!-- Pages SubCity -->
  <url>
    <loc>https://[DOMAINE]/depannage-rideau-metallique/[zone-1]/</loc>
    <lastmod>[DATE]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- ... autres SubCity ... -->
  
  <!-- Page contact -->
  <url>
    <loc>https://[DOMAINE]/contact-rideau-metallique/</loc>
    <lastmod>[DATE]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Pages légales -->
  <url>
    <loc>https://[DOMAINE]/mentions-legales/</loc>
    <lastmod>[DATE]</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
</urlset>
```

---

## 🤖 ROBOTS.TXT

```
User-agent: *
Allow: /

Sitemap: https://[DOMAINE]/sitemap.xml

# Bloquer les pages admin si existantes
Disallow: /admin/
Disallow: /api/
```

---

## ✅ CHECKLIST CRÉATION DU SITE

### Phase 1 : Configuration
- [ ] Créer `config/site.ts` avec les bonnes informations
- [ ] Créer `config/zones.ts` avec les zones identifiées
- [ ] Configurer les couleurs dans `tailwind.config.ts`

### Phase 2 : Pages principales
- [ ] Page d'accueil
- [ ] Page Dépannage
- [ ] Page Installation
- [ ] Page Fabrication
- [ ] Page Entretien
- [ ] Page Motorisation
- [ ] Page Contact

### Phase 3 : Pages SubCity
- [ ] SubCity Dépannage (toutes zones)
- [ ] SubCity Installation (toutes zones)
- [ ] SubCity Fabrication (toutes zones)
- [ ] SubCity Entretien (toutes zones)
- [ ] SubCity Motorisation (toutes zones)

### Phase 4 : SEO & Finalisation
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré
- [ ] Métadonnées vérifiées
- [ ] Schema.org validé
- [ ] Test mobile responsive

---

*Document créé pour la duplication de sites DRM*
