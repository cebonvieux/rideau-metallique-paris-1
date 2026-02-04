# 🎯 CONTEXTE GLOBAL - Duplication Site DRM

> **Document de référence** pour la création d'un site DRM (Dépannage Rideau Métallique) adapté à une nouvelle ville

---

## 📋 INFORMATIONS À RENSEIGNER

Avant de commencer, remplir ces informations :

```
VILLE = [NOM_VILLE]
CODE_POSTAL = [CODE_POSTAL_PRINCIPAL]
DEPARTEMENT = [NOM_DEPARTEMENT]
CODE_DEPARTEMENT = [CODE_DEPT]
REGION = [NOM_REGION]
ADRESSE = [ADRESSE_COMPLETE]
TELEPHONE = [NUMERO_TEL]
EMAIL = [EMAIL]
DOMAINE = depannage-rideau-metallique-[ville-slug].fr
COORDONNEES_GPS = [LAT], [LNG]
```

---

## 🏢 PRÉSENTATION DU PROJET

### Concept
Site vitrine SEO local pour une entreprise de dépannage de rideaux métalliques. L'objectif est de se positionner #1 sur Google pour la requête `dépannage rideau métallique [VILLE]`.

### Identité de marque
- **Nom commercial** : DRM [VILLE]
- **Nom complet** : Dépannage Rideau Métallique [VILLE]
- **Positionnement** : Expert local, intervention rapide 24h/24, techniciens qualifiés
- **Promesse** : Intervention en moins de 30 minutes

### Données de confiance (à adapter selon la réalité)
- Note Google : 4.9/5 ⭐
- Nombre d'avis : 127 avis
- Expérience : 15+ ans d'activité
- Interventions : 5000+ réalisées

---

## 🎨 IDENTITÉ VISUELLE

### Palette de Couleurs

**Couleurs Primaires** (inspiration locale à adapter)
| Nom | Code HEX | Usage |
|-----|----------|-------|
| Bleu Principal | `#0077B6` | Couleur principale, confiance |
| Bleu Foncé | `#023E8A` | Headers, accents profonds |
| Bleu Clair | `#48CAE4` | Highlights, badges |

**Couleurs Secondaires**
| Nom | Code HEX | Usage |
|-----|----------|-------|
| Terracotta/Orange | `#E07B39` | CTA urgence, boutons action |
| Ocre/Doré | `#E6A23C` | Accents chaleureux |
| Sable/Crème | `#FAF8F0` | Backgrounds clairs |

**Couleurs Neutres**
| Nom | Code HEX | Usage |
|-----|----------|-------|
| Anthracite | `#1F2937` | Textes principaux |
| Gris | `#6B7280` | Textes secondaires |
| Blanc | `#FFFFFF` | Backgrounds |

### Typographie

- **Titres (H1, H2, H3)** : Plus Jakarta Sans (font-heading)
  - H1 : Bold, 40-56px
  - H2 : Bold, 32-40px
  - H3 : Semibold, 24-28px
  
- **Corps de texte** : DM Sans (font-sans)
  - Paragraphes : Regular, 16-18px
  - Sous-titres : Medium, 18-20px

### Style Design

- Moderne et professionnel
- Coins arrondis : `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- Ombres douces : `shadow-lg`, `shadow-xl`
- Gradients subtils bleu vers azur
- Animations : fade-in, float, pulse pour les CTAs urgence

---

## 🔍 STRATÉGIE SEO

### Mots-clés Principaux par Page

| Page | Mot-Clé Principal |
|------|-------------------|
| Accueil | dépannage rideau métallique [VILLE] |
| Dépannage | dépannage rideau métallique [VILLE] |
| Fabrication | fabrication rideau métallique [VILLE] |
| Entretien | entretien rideau métallique [VILLE] |
| Motorisation | motorisation rideau métallique [VILLE] |
| Installation | installation rideau métallique [VILLE] |
| Contact | contact rideau métallique [VILLE] |

### Variantes Géographiques à Utiliser

Dans chaque page, alterner entre :
- [VILLE] (ex: Toulouse)
- [VILLE] Centre
- [CODE_POSTAL] (ex: 31000)
- [DEPARTEMENT] (ex: Haute-Garonne)
- [CODE_DEPARTEMENT] (ex: 31)
- [REGION] (ex: Occitanie)
- Agglomération de [VILLE]
- Métropole de [VILLE]
- [VILLE] et ses environs
- Dans le [CODE_DEPARTEMENT]

### Structure des FAQ

**RÈGLE ABSOLUE** : La première question de CHAQUE FAQ doit être :

> **"Qui appeler pour [SERVICE] à [VILLE] ?"**
> 
> Pour tout [SERVICE] à [VILLE] et dans le [DEPARTEMENT] ([CODE_DEPARTEMENT]), contactez DRM [VILLE] au [TELEPHONE]. Nos techniciens certifiés interviennent 24h/24 et 7j/7 dans toute l'agglomération de [VILLE]. Devis gratuit et intervention rapide garantie.

### Structure des Avis Clients

**RÈGLE ABSOLUE** : Chaque avis DOIT mentionner :
1. Le **service** concerné (dépannage, fabrication, entretien, etc.)
2. La **ville/zone** de l'intervention
3. Un **contexte réaliste** (type de commerce, situation)

Exemple :
> "Excellent service de **dépannage rideau métallique** à **[ZONE]**. Mon rideau de boutique était bloqué un samedi soir, le technicien DRM est intervenu en 45 minutes. Travail soigné, prix correct. Je recommande pour tout **dépannage urgent** à **[ZONE]** !"

---

## 📊 DONNÉES STRUCTURÉES (Schema.org)

### LocalBusiness (sur toutes les pages)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "DRM [VILLE]",
  "description": "Dépannage, réparation et installation de rideaux métalliques à [VILLE] et dans le [DEPARTEMENT]. Intervention 24h/24.",
  "url": "https://[DOMAINE]/",
  "telephone": "[TELEPHONE]",
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[RUE]",
    "addressLocality": "[VILLE]",
    "postalCode": "[CODE_POSTAL]",
    "addressRegion": "[REGION]",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [LAT],
    "longitude": [LNG]
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": [LAT],
      "longitude": [LNG]
    },
    "geoRadius": "30000"
  }
}
```

### FAQPage (sur chaque page avec FAQ)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qui appeler pour [SERVICE] à [VILLE] ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pour tout [SERVICE] à [VILLE], contactez DRM [VILLE] au [TELEPHONE]..."
      }
    }
  ]
}
```

---

## 🚫 RÈGLES ANTI-DUPLICATE CONTENT

### Ce qu'il faut éviter
- ❌ Copier/coller le même texte entre les pages
- ❌ Changer uniquement le nom de ville sans adapter le contenu
- ❌ Avoir des paragraphes identiques sur plusieurs pages SubCity
- ❌ Utiliser des templates génériques sans personnalisation

### Ce qu'il faut faire
- ✅ Réécrire chaque paragraphe avec des formulations différentes
- ✅ Adapter le vocabulaire et les exemples à chaque zone
- ✅ Varier la structure des phrases
- ✅ Mentionner des points d'intérêt locaux spécifiques
- ✅ Créer des avis uniques pour chaque page
- ✅ Personnaliser les FAQ avec des questions locales

---

## 📱 ÉLÉMENTS DE CONVERSION

### CTAs Prioritaires
1. **Bouton téléphone** : Toujours visible, style urgent (pulsing)
2. **Numéro dans header** : Format `04 XX XX XX XX` ou `05 XX XX XX XX`
3. **CTA après chaque section** : "Appelez-nous" + "Demander un devis"

### Trust Signals à Afficher
- ⭐ Note Google 4.9/5
- ✅ Intervention 24h/24
- 🚀 Intervention en -30 min
- 🛡️ Garantie pièces et main d'œuvre
- 📍 Entreprise locale [VILLE]
- 🏆 15+ ans d'expérience
- 📊 5000+ interventions réalisées

---

## 🗂️ FICHIERS DE CONFIGURATION À CRÉER

### 1. `config/site.ts`
Configuration principale du site avec toutes les informations de l'entreprise.

### 2. `config/zones.ts`
Liste des zones d'intervention (quartiers + communes environnantes).

### 3. `content/pages/*.json`
Contenu de chaque page service.

### 4. `content/faq/*.json`
Questions fréquentes par page.

### 5. `content/sections/**/*.json`
Contenu des sections spécifiques.

### 6. `public/sitemap.xml`
Sitemap avec toutes les URLs.

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] Toutes les mentions de ville sont correctes
- [ ] Le numéro de téléphone est partout le même
- [ ] Les coordonnées GPS sont correctes (Google Maps)
- [ ] Chaque page a un H1 unique avec la ville
- [ ] Chaque FAQ commence par "Qui appeler..."
- [ ] Les avis mentionnent service + ville
- [ ] Les métadonnées sont uniques par page
- [ ] Le sitemap est complet
- [ ] Les données structurées sont valides

---

*Document créé pour la duplication de sites DRM*
