# 🗺️ GUIDE DE DUPLICATION - Architecture des URLs

> **Guide de référence** pour dupliquer l'architecture des URLs sur n'importe quelle ville

---

## 📋 PRINCIPE GÉNÉRAL

L'architecture des URLs repose sur **2 variables principales** :

1. **[VILLE_PRINCIPALE]** = La ville/arrondissement principal du site
2. **[VILLE_SECONDAIRE]** = Les villes/zones secondaires (quartiers, communes voisines)

---

## 🎯 STRUCTURE DES URLs - Vue d'ensemble

### Format général

```
/{SERVICE}-rideau-metallique-{VILLE}
```

**Où :**
- `{SERVICE}` = Type de prestation (dépannage, installation, fabrication, etc.)
- `{VILLE}` = Slug de la ville/zone géographique

---

## 📍 EXEMPLE ACTUEL : Paris 1er

### Configuration actuelle

```typescript
// config/site.ts
city: "Paris 1er"           // Nom affiché
citySlug: "paris-1"         // Slug URL
postalCode: "75001"         // Code postal
```

### URLs générées

| Type | URL | Description |
|------|-----|-------------|
| **Page principale** | `/` | Page d'accueil (Dépannage Paris 1er) |
| **Services principaux** | `/fabrication-rideau-metallique-paris-1` | Service pour Paris 1er |
| **Pages SubCity** | `/fabrication-rideau-metallique-paris-2` | Service pour zone secondaire |

---

## 🔄 DUPLICATION POUR UNE NOUVELLE VILLE

### Étape 1 : Identifier les variables

Prenons l'exemple de **Marseille 1er** :

| Variable | Paris 1er | Marseille 1er | Lyon 3ème |
|----------|-----------|---------------|-----------|
| `city` | Paris 1er | Marseille 1er | Lyon 3ème |
| `citySlug` | paris-1 | marseille-1 | lyon-3 |
| `postalCode` | 75001 | 13001 | 69003 |
| `department` | Paris | Bouches-du-Rhône | Rhône |
| `departmentCode` | 75 | 13 | 69 |
| `region` | Île-de-France | Provence-Alpes-Côte d'Azur | Auvergne-Rhône-Alpes |
| `domain` | depannage-rideaumetallique-paris-1.fr | depannage-rideaumetallique-marseille-1.fr | depannage-rideaumetallique-lyon-3.fr |

---

## 📝 EXEMPLE COMPLET : MARSEILLE 1ER

### 1. Configuration dans `config/site.ts`

```typescript
export const siteConfig = {
  // AVANT (Paris 1er)
  name: "DRM Paris 1",
  city: "Paris 1er",
  citySlug: "paris-1",
  postalCode: "75001",
  department: "Paris",
  departmentCode: "75",
  region: "Île-de-France",
  domain: "depannage-rideaumetallique-paris-1.fr",
  url: "https://depannage-rideaumetallique-paris-1.fr",

  // APRÈS (Marseille 1er)
  name: "DRM Marseille 1",
  city: "Marseille 1er",
  citySlug: "marseille-1",
  postalCode: "13001",
  department: "Bouches-du-Rhône",
  departmentCode: "13",
  region: "Provence-Alpes-Côte d'Azur",
  domain: "depannage-rideaumetallique-marseille-1.fr",
  url: "https://depannage-rideaumetallique-marseille-1.fr",
};
```

### 2. Configuration des zones dans `config/zones.ts`

```typescript
// ═══════════════════════════════════════════════════════════
// ZONE PRINCIPALE (Ville du site)
// ═══════════════════════════════════════════════════════════
export const zoneMain: Zone = {
  name: "Marseille 1er",              // REMPLACER
  slug: "marseille-1",                // REMPLACER
  postalCode: "13001",                // REMPLACER
  type: "arrondissement",
  isMain: true,
};

// ═══════════════════════════════════════════════════════════
// QUARTIERS DE LA VILLE PRINCIPALE
// ═══════════════════════════════════════════════════════════
export const quartiers: Zone[] = [
  {
    name: "Vieux-Port",               // REMPLACER
    slug: "vieux-port",               // REMPLACER
    postalCode: "13001",              // REMPLACER
    type: "quartier",
  },
  {
    name: "Opéra",                    // REMPLACER
    slug: "opera",                    // REMPLACER
    postalCode: "13001",              // REMPLACER
    type: "quartier",
  },
  {
    name: "Belsunce",                 // REMPLACER
    slug: "belsunce",                 // REMPLACER
    postalCode: "13001",              // REMPLACER
    type: "quartier",
  },
];

// ═══════════════════════════════════════════════════════════
// ARRONDISSEMENTS LIMITROPHES
// ═══════════════════════════════════════════════════════════
export const arrondissementsLimitrophes: Zone[] = [
  {
    name: "Marseille 2ème",           // REMPLACER
    slug: "marseille-2",              // REMPLACER
    postalCode: "13002",              // REMPLACER
    type: "arrondissement",
  },
  {
    name: "Marseille 3ème",           // REMPLACER
    slug: "marseille-3",              // REMPLACER
    postalCode: "13003",              // REMPLACER
    type: "arrondissement",
  },
  // ... autres arrondissements
];

// ═══════════════════════════════════════════════════════════
// COMMUNES PROCHES
// ═══════════════════════════════════════════════════════════
export const communesProches: Zone[] = [
  {
    name: "Aix-en-Provence",          // REMPLACER
    slug: "aix-en-provence",          // REMPLACER
    postalCode: "13100",              // REMPLACER
    type: "commune",
  },
  {
    name: "Aubagne",                  // REMPLACER
    slug: "aubagne",                  // REMPLACER
    postalCode: "13400",              // REMPLACER
    type: "commune",
  },
  // ... autres communes
];
```

### 3. URLs générées automatiquement

#### Services principaux (ville principale)

```
https://depannage-rideaumetallique-marseille-1.fr/
https://depannage-rideaumetallique-marseille-1.fr/fabrication-rideau-metallique-marseille-1
https://depannage-rideaumetallique-marseille-1.fr/installation-rideau-metallique-marseille-1
https://depannage-rideaumetallique-marseille-1.fr/motorisation-rideau-metallique-marseille-1
https://depannage-rideaumetallique-marseille-1.fr/entretien-rideau-metallique-marseille-1
```

#### Pages SubCity (zones secondaires)

**Quartiers :**
```
https://depannage-rideaumetallique-marseille-1.fr/depannage-rideau-metallique-vieux-port
https://depannage-rideaumetallique-marseille-1.fr/fabrication-rideau-metallique-opera
https://depannage-rideaumetallique-marseille-1.fr/installation-rideau-metallique-belsunce
```

**Arrondissements limitrophes :**
```
https://depannage-rideaumetallique-marseille-1.fr/depannage-rideau-metallique-marseille-2
https://depannage-rideaumetallique-marseille-1.fr/motorisation-rideau-metallique-marseille-3
```

**Communes proches :**
```
https://depannage-rideaumetallique-marseille-1.fr/depannage-rideau-metallique-aix-en-provence
https://depannage-rideaumetallique-marseille-1.fr/entretien-rideau-metallique-aubagne
```

---

## 🔍 RÈGLES DE GÉNÉRATION DES SLUGS

### Règle 1 : Ville principale

```
Format : {nom-ville}-{numero-arrondissement}

Exemples :
- Paris 1er → paris-1
- Marseille 3ème → marseille-3
- Lyon 7ème → lyon-7
- Bordeaux → bordeaux (pas de numéro si ville entière)
```

### Règle 2 : Quartiers

```
Format : {nom-quartier-en-minuscules}

Exemples :
- Les Halles → les-halles
- Vieux-Port → vieux-port
- Part-Dieu → part-dieu
- Bellecour → bellecour
```

### Règle 3 : Communes

```
Format : {nom-commune-en-minuscules}

Exemples :
- Neuilly-sur-Seine → neuilly-sur-seine
- Aix-en-Provence → aix-en-provence
- Villeurbanne → villeurbanne
```

---

## 📊 MATRICE DE GÉNÉRATION

| Service | Zone principale | Zone secondaire | URL générée |
|---------|----------------|-----------------|-------------|
| Dépannage | Paris 1er | - | `/` (page accueil) |
| Fabrication | Paris 1er | - | `/fabrication-rideau-metallique-paris-1` |
| Installation | Paris 1er | - | `/installation-rideau-metallique-paris-1` |
| Dépannage | - | Louvre | `/depannage-rideau-metallique-louvre` |
| Fabrication | - | Paris 2ème | `/fabrication-rideau-metallique-paris-2` |
| Installation | - | Neuilly | `/installation-rideau-metallique-neuilly-sur-seine` |

---

## 🛠️ CHECKLIST DE DUPLICATION

### ✅ Étape 1 : Préparer les données

- [ ] Identifier la ville principale
- [ ] Lister 3-5 quartiers principaux
- [ ] Lister 5-10 arrondissements/communes voisines
- [ ] Obtenir tous les codes postaux
- [ ] Obtenir les coordonnées GPS de la ville principale

### ✅ Étape 2 : Modifier la configuration

- [ ] Modifier `config/site.ts` :
  - [ ] `name`
  - [ ] `city`
  - [ ] `citySlug`
  - [ ] `postalCode`
  - [ ] `department`
  - [ ] `departmentCode`
  - [ ] `region`
  - [ ] `domain`
  - [ ] `url`
  - [ ] `address`
  - [ ] `geo.lat` et `geo.lng`

- [ ] Modifier `config/zones.ts` :
  - [ ] `zoneMain`
  - [ ] `quartiers[]`
  - [ ] `arrondissementsLimitrophes[]`
  - [ ] `communesProches[]`

### ✅ Étape 3 : Vérifier la génération

- [ ] Lancer le build : `npm run build`
- [ ] Vérifier le nombre de pages générées
- [ ] Tester quelques URLs en local
- [ ] Vérifier le sitemap.xml

---

## 💡 EXEMPLES POUR DIFFÉRENTES VILLES

### Exemple 1 : Lyon 3ème

```typescript
// config/site.ts
{
  city: "Lyon 3ème",
  citySlug: "lyon-3",
  postalCode: "69003",
  department: "Rhône",
  departmentCode: "69",
  region: "Auvergne-Rhône-Alpes",
  domain: "depannage-rideaumetallique-lyon-3.fr",
}

// config/zones.ts
zoneMain: { name: "Lyon 3ème", slug: "lyon-3", postalCode: "69003" }

quartiers: [
  { name: "Part-Dieu", slug: "part-dieu", postalCode: "69003" },
  { name: "Préfecture", slug: "prefecture", postalCode: "69003" },
  { name: "Montchat", slug: "montchat", postalCode: "69003" },
]

arrondissementsLimitrophes: [
  { name: "Lyon 2ème", slug: "lyon-2", postalCode: "69002" },
  { name: "Lyon 6ème", slug: "lyon-6", postalCode: "69006" },
  { name: "Lyon 7ème", slug: "lyon-7", postalCode: "69007" },
]

communesProches: [
  { name: "Villeurbanne", slug: "villeurbanne", postalCode: "69100" },
  { name: "Bron", slug: "bron", postalCode: "69500" },
]
```

**URLs générées :**
- `/` → Lyon 3ème
- `/fabrication-rideau-metallique-lyon-3` → Service principal
- `/depannage-rideau-metallique-part-dieu` → Quartier
- `/installation-rideau-metallique-villeurbanne` → Commune proche

---

### Exemple 2 : Toulouse Centre

```typescript
// config/site.ts
{
  city: "Toulouse Centre",
  citySlug: "toulouse-centre",
  postalCode: "31000",
  department: "Haute-Garonne",
  departmentCode: "31",
  region: "Occitanie",
  domain: "depannage-rideaumetallique-toulouse-centre.fr",
}

// config/zones.ts
zoneMain: { name: "Toulouse Centre", slug: "toulouse-centre", postalCode: "31000" }

quartiers: [
  { name: "Capitole", slug: "capitole", postalCode: "31000" },
  { name: "Esquirol", slug: "esquirol", postalCode: "31000" },
  { name: "Saint-Étienne", slug: "saint-etienne", postalCode: "31000" },
]

communesProches: [
  { name: "Blagnac", slug: "blagnac", postalCode: "31700" },
  { name: "Colomiers", slug: "colomiers", postalCode: "31770" },
  { name: "Tournefeuille", slug: "tournefeuille", postalCode: "31170" },
]
```

**URLs générées :**
- `/` → Toulouse Centre
- `/motorisation-rideau-metallique-toulouse-centre` → Service principal
- `/depannage-rideau-metallique-capitole` → Quartier
- `/entretien-rideau-metallique-blagnac` → Commune proche

---

## 🎯 FORMULE UNIVERSELLE

```
URL = /{SERVICE}-rideau-metallique-{VILLE_SLUG}

Où :
- SERVICE = depannage | fabrication | installation | motorisation | entretien | reparation | deblocage
- VILLE_SLUG = slug de la zone (quartier | arrondissement | commune)
```

### Exceptions :

1. **Page d'accueil** : `/` = toujours dépannage de la ville principale
2. **Zone principale** : 
   - Dans navigation : `/fabrication-rideau-metallique-{citySlug}`
   - `isMain: true` → N'apparaît pas dans les pages SubCity

---

## 📈 NOMBRE DE PAGES GÉNÉRÉES

### Calcul automatique

```
TOTAL = Services × (Zones - 1)
      = 7 services × (Zones totales - zone principale)
```

### Exemples

| Ville | Quartiers | Arrond. | Communes | Total zones | Pages générées |
|-------|-----------|---------|----------|-------------|----------------|
| Paris 1er | 5 | 9 | 7 | 22 | 7 × 21 = **147** |
| Lyon 3ème | 3 | 8 | 5 | 17 | 7 × 16 = **112** |
| Marseille 1er | 3 | 7 | 4 | 15 | 7 × 14 = **98** |

---

## ⚠️ POINTS D'ATTENTION

### 1. Cohérence des slugs

✅ **BON :**
```
Paris 2ème → paris-2
Saint-Denis → saint-denis
Aix-en-Provence → aix-en-provence
```

❌ **MAUVAIS :**
```
Paris 2ème → paris-2eme (accent)
Saint-Denis → saint_denis (underscore)
Aix-en-Provence → aix-provence (incomplet)
```

### 2. Unicité des slugs

Chaque zone doit avoir un `slug` unique :

```typescript
// ❌ ERREUR : Deux zones avec le même slug
{ name: "Centre", slug: "centre", postalCode: "31000" }
{ name: "Centre", slug: "centre", postalCode: "31100" }

// ✅ CORRECT : Slugs différenciés
{ name: "Toulouse Centre", slug: "toulouse-centre", postalCode: "31000" }
{ name: "Balma Centre", slug: "balma-centre", postalCode: "31130" }
```

### 3. Codes postaux

Utiliser le code postal principal de chaque zone.

---

## 🚀 COMMANDE DE VÉRIFICATION

Après duplication, vérifier que tout fonctionne :

```bash
# 1. Build du site
npm run build

# 2. Vérifier les pages générées
# Dans le terminal, chercher : "Compiled successfully"
# Et le nombre de pages statiques générées

# 3. Lancer en local
npm run dev

# 4. Tester quelques URLs
# http://localhost:3000/
# http://localhost:3000/fabrication-rideau-metallique-{citySlug}
# http://localhost:3000/depannage-rideau-metallique-{zone-slug}
```

---

## 📝 RÉSUMÉ EN 3 ÉTAPES

1. **Modifier `config/site.ts`** : Remplacer toutes les infos de la ville principale
2. **Modifier `config/zones.ts`** : Remplacer la zone principale + quartiers + communes voisines
3. **Build** : Les URLs sont générées automatiquement

**C'est tout !** Le système génère automatiquement toutes les combinaisons d'URLs. 🎉

---

*Guide créé pour faciliter la duplication de l'architecture sur différentes villes*
