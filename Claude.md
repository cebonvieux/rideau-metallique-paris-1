# 🤖 Guide pour Claude/IA

Ce document aide les assistants IA à comprendre et manipuler ce projet.

## 📋 Contexte

Ce projet est un **template Next.js** pour créer des sites de **dépannage rideau métallique** localisés. Chaque site cible une ville ou zone géographique spécifique.

### Objectif
Permettre de dupliquer ce template pour créer rapidement un nouveau site en modifiant uniquement :
1. La configuration (`config/site.ts`)
2. Le contenu textuel (`content/*.json`)
3. Les images (`public/images/`)
4. Le design si souhaité

## 🏗️ Architecture

### Stack technique
- **Framework** : Next.js 14 (App Router)
- **Export** : Statique (SSG) via `output: 'export'`
- **Styling** : Tailwind CSS
- **Typage** : TypeScript

### Principe de fonctionnement

1. **Configuration centralisée** : Toutes les infos métier sont dans `config/site.ts`
2. **Contenu externalisé** : Les textes des pages sont dans `content/pages/*.json`
3. **Variables dynamiques** : `{city}`, `{phone}`, `{name}` sont remplacés à la volée via `lib/content.ts`
4. **Composants réutilisables** : Header, Footer, Hero, Services, FAQ, etc.

## 📁 Fichiers clés

### Configuration principale : `config/site.ts`

```typescript
export const siteConfig = {
  name: "DRM Paris",           // Nom court
  fullName: "...",             // Nom complet
  domain: "...",               // Domaine du site
  phone: "...",                // Téléphone
  city: "Paris",               // Ville principale
  colors: { ... },             // Palette de couleurs
  // etc.
}

export const zones = [...]     // Zones d'intervention
export const services = [...]  // Liste des services
export const navigation = [...] // Menu de navigation
```

### Contenu des pages : `content/pages/*.json`

Exemple `content/pages/home.json` :
```json
{
  "hero": {
    "badge": "🔧 Intervention 24h/24",
    "title": "Dépannage Rideau Métallique {city}",
    "subtitle": "..."
  },
  "whyUs": { ... }
}
```

**Variables supportées** : `{city}`, `{name}`, `{phone}`, `{email}`, `{department}`, `{region}`, `{postalCode}`

### Helper de contenu : `lib/content.ts`

```typescript
// Remplace {city} par la vraie ville, etc.
export function replaceVariables(text: string): string
export function getPageContent<T>(content: T): T
```

## ✏️ Tâches courantes

### Créer un nouveau site à partir du template

1. Cloner le repo
2. Modifier `config/site.ts` avec les nouvelles infos
3. Adapter `content/*.json` si nécessaire
4. Remplacer les images dans `public/images/`
5. Configurer `deploy/deploy.sh`

### Ajouter une nouvelle page

1. Créer `app/nouvelle-page/page.tsx`
2. Créer `content/pages/nouvelle-page.json` pour le contenu
3. Ajouter dans `navigation` de `config/site.ts`

### Modifier le design (couleurs, boutons, typographie)

#### Couleurs

Les couleurs sont définies directement dans `tailwind.config.js` :

```javascript
colors: {
  primary: {
    50: '#fff7ed',
    // ...
    600: '#ea580c',  // ← Couleur principale à modifier
    // ...
  },
}
```

**⚠️ IMPORTANT : Utiliser des couleurs "locales" liées aux références régionales**

Pour renforcer l'identité locale et le SEO, choisir des couleurs qui évoquent la région :

| Ville | Couleur suggérée | Code hex | Inspiration |
|-------|------------------|----------|-------------|
| **Paris** | Bleu Nuit | `#1d3557` | Élégance parisienne |
| **Marseille** | Bleu Méditerranée | `#0077b6` | Mer, OM |
| **Lyon** | Rouge Garance | `#c1121f` | Couleur historique lyonnaise |
| **Bordeaux** | Bordeaux/Vin | `#722f37` | Vignobles |
| **Nice** | Bleu Azur | `#0096c7` | Côte d'Azur |
| **Toulouse** | Rose brique | `#c9184a` | Ville rose |
| **Strasbourg** | Bleu Alsace | `#1d3557` | Tradition alsacienne |
| **Nantes** | Vert Atlantique | `#2d6a4f` | Loire, nature |
| **Lille** | Rouge/Or | `#9d0208` | Blason de la ville |
| **Avignon** | Ocre Provence | `#e07a2b` | Couleurs provençales |
| **Créteil** | Orange moderne | `#ea580c` | Dynamisme urbain |

**Outil recommandé** : [uicolors.app](https://uicolors.app/create) pour générer une palette complète à partir d'une couleur de base.

**Palettes génériques (si pas de référence locale évidente)** :
- 🟠 Orange industriel : `#ea580c` (défaut rideau métallique)
- 🔵 Bleu pro : `#1976d2`
- 🟢 Vert confiance : `#16a34a`
- 🔴 Rouge urgence : `#dc2626`
- ⚫ Gris acier : `#374151`

#### Typographie
Dans `app/globals.css` :
```css
:root {
  --font-sans: 'Poppins', sans-serif;  /* Changer la police */
}
```

#### Boutons et composants
Dans `app/globals.css`, section `@layer components` :
```css
.btn-primary {
  @apply rounded-lg ...;    /* Boutons carrés */
  @apply rounded-full ...;  /* Boutons arrondis */
}

.card {
  @apply rounded-2xl shadow-lg ...;   /* Cards avec ombre */
  @apply rounded-none border-2 ...;   /* Cards avec bordure */
}
```

#### Layout des sections
Modifier les composants dans `components/sections/` :
- `Hero.tsx` : Fond, position image, gradient
- `Services.tsx` : Nombre de colonnes, style des cards
- `WhyUs.tsx` : Layout image/texte

### Ajouter une zone d'intervention

Ajouter dans `zones` de `config/site.ts` :
```typescript
{ name: "Villeurbanne", slug: "villeurbanne", postalCode: "69100" }
```
Une page `/zones/villeurbanne` sera automatiquement générée.

### 📍 Pages Service × Zone (SEO Local)

Le template génère automatiquement des pages pour chaque combinaison **service × zone** :

| Route | Exemple | Description |
|-------|---------|-------------|
| `/[service]` | `/depannage` | Page service pour la ville principale |
| `/[service]/[zone]` | `/depannage/paris-11` | Page service localisée |

**Services disponibles** (définis dans `config/site.ts`) :
- `/depannage` - Dépannage urgence 24h/24
- `/installation` - Installation rideau métallique
- `/motorisation` - Motorisation et automatisation
- `/entretien` - Maintenance préventive
- `/reparation` - Réparation et remise en état
- `/deblocage` - Déblocage rideau bloqué

**Exemple pour Paris avec 20 arrondissements** :
- `/depannage/paris-11` → Dépannage Paris 11e
- `/installation/paris-15` → Installation Paris 15e
- `/motorisation/neuilly` → Motorisation Neuilly

**📊 Pages générées** : `6 services × N zones` = pages optimisées SEO local

**Contenu des pages** : Les textes sont dans `content/pages/services/[service].json` avec variables :
- `{zone}` → nom de la zone (ex: "Paris 11e")
- `{zonePostal}` → code postal (ex: "75011")
- `{service}` → nom du service

### Modifier un texte de page

1. Localiser le fichier JSON dans `content/pages/`
2. Modifier le texte souhaité
3. Utiliser `{city}`, `{phone}`, etc. pour les valeurs dynamiques

## ⚠️ Points d'attention

1. **Export statique** : Le site est généré en HTML statique. Pas de rendu serveur.
2. **Images** : Utiliser le format WebP pour les performances.
3. **Variables** : Toujours utiliser `{city}` plutôt que coder en dur une ville.
4. **SEO** : Les metadata sont générées dynamiquement dans chaque `page.tsx`.

## 🎨 Conseils SEO - Éviter les sites identiques

⚠️ **Pour éviter que Google détecte un réseau de sites similaires :**

- **RÉÉCRIRE les textes** : ne jamais copier-coller d'un site à l'autre
- **VARIER le design** : changer les couleurs, polices, formes des boutons
- **IMAGES UNIQUES** : utiliser des photos différentes par site
- **MODIFIER les layouts** : inverser image/texte, changer le nombre de colonnes
- **HÉBERGEMENT VARIÉ** : si possible, utiliser des serveurs/IPs différents

## 🔧 Commandes

```bash
npm run dev      # Développement local
npm run build    # Build statique (crée /out)
npm run lint     # Vérification ESLint
./deploy/deploy.sh  # Déploiement sur VPS
```

## 📝 Conventions

- **Composants** : PascalCase (`Hero.tsx`, `Services.tsx`)
- **Pages** : Dossiers avec `page.tsx` (App Router)
- **Contenu** : JSON dans `content/`
- **Styles** : Classes Tailwind CSS, variables CSS pour les couleurs

