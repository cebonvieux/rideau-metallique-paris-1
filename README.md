# 🚪 Template Rideau Métallique

Template Next.js pour créer rapidement un site de **dépannage rideau métallique** localisé.

## ✨ Fonctionnalités

- ⚡ **Next.js 14** avec App Router
- 📦 **Export statique** (SSG) pour performances optimales
- 🎨 **Tailwind CSS** avec design industriel
- 📱 **100% responsive** (mobile-first)
- 🔍 **SEO optimisé** (meta tags, schema.org)
- 🏙️ **Multi-zones** (pages par arrondissement/ville)
- 📄 **Contenu externalisé** (JSON facile à modifier)
- 🚀 **Scripts de déploiement** (Nginx + bash)

## 🚀 Démarrage rapide

### 1. Cloner le template

```bash
git clone https://github.com/votre-repo/rideau-metallique-template.git mon-nouveau-site
cd mon-nouveau-site
rm -rf .git
git init
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Personnaliser la configuration

Éditer `config/site.ts` avec vos informations :

```typescript
export const siteConfig = {
  name: "DRM Lyon",
  fullName: "Dépannage Rideau Métallique Lyon",
  domain: "rideau-metallique-lyon.fr",
  phone: "04 XX XX XX XX",
  city: "Lyon",
  // ... autres paramètres
}
```

### 4. Lancer en développement

```bash
npm run dev
```

### 5. Build et déploiement

```bash
npm run build
./deploy/deploy.sh
```

## 📁 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── depannage/         # Page dépannage
│   ├── installation/      # Page installation
│   ├── motorisation/      # Page motorisation
│   ├── entretien/         # Page entretien
│   ├── tarifs/            # Page tarifs
│   ├── contact/           # Page contact
│   └── zones/             # Pages par zone géographique
│
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, Services, FAQ, etc.
│   └── ui/                # Boutons, badges, etc.
│
├── config/
│   └── site.ts            # ⭐ CONFIGURATION PRINCIPALE
│
├── content/
│   ├── pages/             # Contenu des pages (JSON)
│   ├── faq.json           # Questions fréquentes
│   └── tarifs.json        # Grille tarifaire
│
├── deploy/
│   ├── nginx.conf         # Configuration serveur
│   └── deploy.sh          # Script de déploiement
│
├── lib/
│   └── content.ts         # Helpers (remplacement variables)
│
└── public/
    └── images/            # Images du site
```

## 🎨 Personnalisation

### Modifier les informations du site

Tout se fait dans `config/site.ts` :
- Nom et contact de l'entreprise
- Ville et zones d'intervention
- Couleurs du thème
- Navigation et services

### Modifier le contenu des pages

Les textes sont dans `content/pages/*.json` :
- Utilisez `{city}`, `{phone}`, `{name}` pour les variables dynamiques
- Exemple : `"Dépannage rideau à {city}"` devient `"Dépannage rideau à Lyon"`

### Modifier le design

#### Couleurs
Dans `app/globals.css`, modifier les variables CSS :
```css
:root {
  --color-primary-600: #ea580c;  /* Couleur principale */
}
```

**Palettes suggérées** : 🔵 `#1976d2` | 🟠 `#ea580c` | 🟢 `#16a34a` | 🔴 `#dc2626`

#### Boutons
Dans `app/globals.css`, changer la forme :
```css
.btn-primary {
  @apply rounded-lg ...;    /* Carrés */
  @apply rounded-full ...;  /* Arrondis */
}
```

#### Typographie
```css
:root {
  --font-sans: 'Poppins', sans-serif;
}
```

#### Layout
Modifier les composants dans `components/sections/` pour changer les layouts

### Ajouter des zones

Dans `config/site.ts`, modifier le tableau `zones` :

```typescript
export const zones = [
  { name: "Lyon", slug: "lyon", postalCode: "69000", isMain: true },
  { name: "Lyon 1er", slug: "lyon-1", postalCode: "69001" },
  // ... ajouter vos zones
];
```

## 🖼️ Images à remplacer

Placez vos images dans `public/images/` :

| Fichier | Usage | Dimensions recommandées |
|---------|-------|------------------------|
| `logo.webp` | Logo header/footer | 200x200px |
| `hero-rideau.webp` | Hero page d'accueil | 800x600px |
| `technicien-rideau.webp` | Section "Pourquoi nous" | 800x600px |
| `depannage-rideau.webp` | Page dépannage | 800x600px |
| `installation-rideau.webp` | Page installation | 800x600px |
| `motorisation-rideau.webp` | Page motorisation | 800x600px |

## 🚀 Déploiement

Voir [deploy/README.md](deploy/README.md) pour les instructions complètes.

### En résumé :

1. Configurer `deploy/deploy.sh` avec vos infos VPS
2. Lancer `./deploy/deploy.sh`
3. Configurer le certificat SSL avec Certbot

## 📄 Licence

MIT - Libre d'utilisation et de modification.

