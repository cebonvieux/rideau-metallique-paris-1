# 🚀 PROMPT : Amélioration SEO Complète du Site DRM

> **Prompt à copier-coller dans Cursor** pour optimiser automatiquement le SEO de votre site

---

## 📋 INSTRUCTIONS PRÉLIMINAIRES

**Avant de copier ce prompt dans Cursor, remplissez ces informations :**

```
VILLE = [Nom de votre ville, ex: Montreuil, Paris 1er, Vincennes]
CODE_POSTAL = [Code postal principal, ex: 93100, 75001]
DEPARTEMENT = [Nom du département, ex: Seine-Saint-Denis, Paris]
CODE_DEPT = [Code département, ex: 93, 75]
REGION = [Nom de la région, ex: Île-de-France]
TELEPHONE = [Numéro de téléphone, ex: 01 85 09 99 36]
NOM_COURT = [Nom court, ex: DRM Montreuil]
NOM_COMPLET = [Nom complet, ex: Dépannage Rideau Métallique Montreuil]
DOMAINE = [Domaine du site, ex: depannage-rideaumetallique-montreuil.fr]
```

**Ensuite, remplacez ces variables dans le prompt ci-dessous et copiez-le dans Cursor.**

---

## 🎯 PROMPT À COPIER-COLLER

```markdown
# MISSION : Optimisation SEO Complète du Site {NOM_COMPLET}

## CONTEXTE DU PROJET

Tu travailles sur le site **{DOMAINE}** pour l'entreprise **{NOM_COMPLET}**.

**Informations clés :**
- Ville principale : {VILLE}
- Code postal : {CODE_POSTAL}
- Département : {DEPARTEMENT} ({CODE_DEPT})
- Région : {REGION}
- Téléphone : {TELEPHONE}
- Nom court : {NOM_COURT}
- Nom complet : {NOM_COMPLET}

**Architecture du site :**
- Framework : Next.js 14+ avec App Router
- Configuration : `config/site.ts` et `config/zones.ts`
- Contenu : Fichiers JSON dans `content/pages/`
- Pages dynamiques : `app/[service]/[zone]/page.tsx` pour pages SubCity

**Objectif SEO :**
Ranker #1 sur Google ET optimiser pour les LLMs (ChatGPT, Claude) sur :
- "dépannage rideau métallique {VILLE}"
- "installation rideau métallique {VILLE}"
- "motorisation rideau métallique {VILLE}"
- "{service} rideau métallique {zone}" (pour toutes les zones SubCity)

---

## 🎯 TA MISSION

Améliore le SEO COMPLET de toutes les pages prioritaires du site :
1. **Homepage** (dépannage principal)
2. **Pages services** (installation, motorisation, entretien)
3. **Pages SubCity** (service + zone) - CRITIQUE pour éviter duplicate content

Tu dois optimiser :
- ✅ Meta tags (title, description, keywords, OG)
- ✅ Données structurées Schema.org (LocalBusiness, FAQPage, BreadcrumbList, Service)
- ✅ Contenu textuel (enrichir de +30% minimum avec variété sémantique)
- ✅ Maillage interne (5-10 liens contextuels par page)
- ✅ FAQ (première question obligatoire + 4-6 autres)
- ✅ H1/H2/H3 optimisés

---

## 📚 DOCUMENTS DE RÉFÉRENCE

Avant de commencer, **LIS ATTENTIVEMENT** ces documents :

1. **`SEO-CONTEXTE-OPTIMISATION.md`** : Document complet avec toutes les règles, exemples et bonnes pratiques
2. **`SEO-TODO.md`** : Checklist détaillée des tâches à réaliser

**⚠️ IMPORTANT : Applique TOUTES les règles du document contexte, notamment :**
- Variété sémantique (5+ variations par page : rideau métallique, rideau de fer, grille métallique, store métallique, fermeture métallique)
- Anti-duplicate content pour pages SubCity (contenu unique avec mentions locales)
- Première question FAQ OBLIGATOIRE : "Qui appeler pour {service} à {ville/zone} ?"

---

## 🔥 ÉTAPES PRÉCISES À SUIVRE

### ÉTAPE 1 : Audit de l'Existant

**Action :**
```
1. Lis tous les fichiers de pages prioritaires
2. Note les meta tags actuels
3. Identifie les contenus à enrichir
4. Vérifie les données structurées existantes
```

**Fichiers à auditer :**
- `app/page.tsx` (homepage)
- `app/layout.tsx` (schema LocalBusiness global)
- `app/installation/page.tsx`
- `app/motorisation/page.tsx`
- `app/entretien/page.tsx`
- `app/[service]/page.tsx` (template service)
- `app/[service]/[zone]/page.tsx` (template SubCity - CRITIQUE)
- `content/pages/home.json`
- `content/pages/services/*.json`
- `content/faq.json`

**Output attendu :**
Dis-moi :
- Quels meta tags doivent être améliorés
- Quelles données structurées manquent
- Quels contenus sont trop courts
- Où il y a risque de duplicate content

---

### ÉTAPE 2 : Optimisation des Meta Tags

**Pour chaque page, applique ces structures :**

#### Homepage (`app/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Dépannage Rideau Métallique {VILLE} ({CODE_POSTAL}) | 24h/24 - {NOM_COURT}",
  description: "Dépannage rideau métallique à {VILLE} ({CODE_POSTAL}). Intervention en 30 min, 24h/24. Déblocage, réparation, motorisation. ☎️ {TELEPHONE}. 127 avis - Note 4.9/5.",
  keywords: [
    "dépannage rideau métallique {VILLE}",
    "rideau de fer {VILLE}",
    "grille métallique {CODE_POSTAL}",
    "déblocage rideau {DEPARTEMENT}",
    "réparation rideau métallique {VILLE}",
    "rideau métallique bloqué {VILLE}",
    "store métallique {VILLE}",
  ],
  alternates: {
    canonical: "https://{DOMAINE}/",
  },
  openGraph: {
    title: "Dépannage Rideau Métallique {VILLE} - Intervention 24h/24",
    description: "Expert en dépannage rideau métallique à {VILLE}. Intervention rapide en moins de 30 minutes. Appelez-nous au {TELEPHONE}.",
    type: "website",
    url: "https://{DOMAINE}/",
  },
};
```

#### Pages Services (ex: `app/installation/page.tsx`)
```typescript
export const metadata: Metadata = {
  title: "Installation Rideau Métallique {VILLE} - Devis Gratuit | {NOM_COURT}",
  description: "Installation rideau métallique à {VILLE} et {DEPARTEMENT}. Pose de rideaux neufs pour commerces. Devis gratuit, garantie incluse. ☎️ {TELEPHONE}.",
  keywords: [
    "installation rideau métallique {VILLE}",
    "pose rideau métallique {CODE_POSTAL}",
    "installation grille métallique {DEPARTEMENT}",
  ],
  // ... etc
};
```

#### Pages SubCity (dans `app/[service]/[zone]/page.tsx`)
```typescript
export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service);
  const zone = getZoneBySlug(params.zone);

  const title = `${service.name} Rideau Métallique ${zone.name} (${zone.postalCode}) - ${siteConfig.name}`;
  const description = `${service.name} rideau métallique à ${zone.name} (${zone.postalCode}). Spécialiste local, intervention en 30 min. Service ${service.name.toLowerCase()} dans tout ${zone.name}. ☎️ ${siteConfig.phone}`;

  return {
    title,
    description,
    keywords: [
      `${service.slug} rideau métallique ${zone.name}`,
      `${service.slug} rideau de fer ${zone.postalCode}`,
      `${service.slug} grille métallique ${zone.name}`,
    ],
    // ... etc
  };
}
```

**Action :**
```
Mets à jour TOUS les meta tags selon ces structures.
Assure-toi que chaque page a un title et description UNIQUES.
```

---

### ÉTAPE 3 : Optimisation des Données Structurées

**Vérifie et améliore ces schemas :**

#### 1. LocalBusiness (dans `app/layout.tsx`)

Doit contenir :
- ✅ name, alternateName, description
- ✅ telephone, email, url
- ✅ address complète avec postalCode
- ✅ geo coordinates (lat/lng)
- ✅ openingHoursSpecification (24/7)
- ✅ aggregateRating (4.9/5, 127 avis)
- ✅ areaServed (ville + région)
- ✅ hasOfferCatalog (liste des services)
- ✅ sameAs (réseaux sociaux)

#### 2. FAQPage (dans chaque page avec FAQ)

Exemple :
```typescript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.replace(/<[^>]*>/g, ""),
    },
  })),
};
```

#### 3. BreadcrumbList (dans pages SubCity)

**AJOUTE ce schema dans `app/[service]/[zone]/page.tsx` :**
```typescript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: service.name,
      item: `${siteConfig.url}/${service.slug}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: zone.name,
    },
  ],
};
```

#### 4. Service (dans pages services)

**AJOUTE ce schema dans `app/[service]/page.tsx` :**
```typescript
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: `${service.name} rideau métallique`,
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.fullName,
    telephone: siteConfig.phone,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.city,
  },
  description: service.longDesc,
};
```

**Action :**
```
1. Vérifie tous les schemas existants
2. Ajoute les schemas manquants (BreadcrumbList, Service)
3. Assure-toi que tous les schemas sont valides (test avec Google Rich Results Test)
```

---

### ÉTAPE 4 : Enrichissement du Contenu Textuel

**Objectifs de longueur :**
- Homepage : 1500+ mots (actuellement ~800)
- Pages services : 1200+ mots (actuellement ~600)
- Pages SubCity : 800+ mots (actuellement ~400)

**Variété sémantique OBLIGATOIRE (5+ variations par page) :**
- Rideau métallique
- Rideau de fer
- Grille métallique
- Store métallique
- Fermeture métallique

#### A. Enrichir la Homepage (`content/pages/home.json`)

**Ajoute ces sections dans le JSON :**

1. **Section "Types de Rideaux"** (après services)
```json
"typesRideaux": {
  "title": "Types de rideaux métalliques à {VILLE}",
  "subtitle": "Nous intervenons sur tous les types de fermetures métalliques",
  "items": [
    {
      "icon": "🔲",
      "title": "Rideau à lames pleines",
      "description": "Sécurité maximale pour commerces et entrepôts. Isolation thermique et phonique optimale."
    },
    {
      "icon": "⚪",
      "title": "Rideau à lames micro-perforées",
      "description": "Visibilité de la vitrine tout en assurant la sécurité. Idéal pour boutiques."
    },
    {
      "icon": "〰️",
      "title": "Rideau à tubes ondulés",
      "description": "Transparence maximale, visibilité totale. Parfait pour centres commerciaux."
    },
    {
      "icon": "🔳",
      "title": "Grille métallique",
      "description": "Protection tout en laissant voir l'intérieur. Solution classique et robuste."
    }
  ]
}
```

2. **Section "Secteurs d'Activité"**
```json
"secteursActivite": {
  "title": "Nous équipons tous les secteurs d'activité à {VILLE}",
  "subtitle": "Plus de 25 ans d'expérience au service des professionnels",
  "secteurs": [
    {
      "icon": "🏪",
      "title": "Commerces",
      "description": "Boutiques, boulangeries, pharmacies, restaurants",
      "exemples": "Magasins de prêt-à-porter, épiceries, cavistes"
    },
    {
      "icon": "🏭",
      "title": "Entrepôts et Locaux Industriels",
      "description": "Zones logistiques, ateliers, locaux de stockage",
      "exemples": "Entrepôts, usines, centres de distribution"
    },
    {
      "icon": "🚗",
      "title": "Garages et Parkings",
      "description": "Garages automobiles, parkings privés et publics",
      "exemples": "Garages particuliers, parkings souterrains"
    },
    {
      "icon": "🏛️",
      "title": "Établissements Publics",
      "description": "Mairies, écoles, centres administratifs",
      "exemples": "Bibliothèques, salles polyvalentes, locaux associatifs"
    }
  ]
}
```

3. **Section "Notre Expertise"**
```json
"expertise": {
  "title": "Notre expertise à {VILLE}",
  "paragraphes": [
    "Depuis plus de 25 ans, {NOM_COMPLET} intervient quotidiennement à {VILLE} ({CODE_POSTAL}) et dans tout {DEPARTEMENT}. Notre connaissance du terrain nous permet d'arriver rapidement chez vous, même dans les zones difficiles d'accès.",
    "Notre équipe de techniciens qualifiés maîtrise toutes les marques : Somfy, Nice, Came, Hörmann, Bubendorff, Simu. Nous utilisons exclusivement des pièces d'origine constructeur pour garantir la durabilité de nos interventions.",
    "Avec plus de 5000 interventions par an et une note de 4.9/5 sur 127 avis Google, nous sommes la référence du dépannage de grilles métalliques à {VILLE}."
  ]
}
```

**Action :**
```
1. Ajoute ces 3 sections au fichier content/pages/home.json
2. Mets à jour app/page.tsx pour afficher ces nouvelles sections
3. Crée les composants React nécessaires dans components/sections/
```

#### B. Enrichir les Pages Services

Pour CHAQUE service (installation, motorisation, entretien), ajoute dans `content/pages/services/{service}.json` :

1. **Processus d'Intervention** (si manquant)
```json
"processus": {
  "title": "Notre processus d'{SERVICE_SLUG} à {VILLE}",
  "etapes": [
    {
      "numero": "01",
      "titre": "Appel et Diagnostic",
      "description": "Vous nous contactez au {TELEPHONE}. Nous évaluons vos besoins par téléphone."
    },
    {
      "numero": "02",
      "titre": "Devis Gratuit",
      "description": "Nous vous envoyons un devis détaillé et transparent. Aucune surprise."
    },
    {
      "numero": "03",
      "titre": "Intervention",
      "description": "Notre technicien arrive avec tout le matériel nécessaire et réalise les travaux."
    },
    {
      "numero": "04",
      "titre": "Tests et Garantie",
      "description": "Nous testons le rideau et vous remettons une garantie sur notre intervention."
    }
  ]
}
```

2. **Tarifs Indicatifs**
```json
"tarifs": {
  "title": "Tarifs {SERVICE} à {VILLE}",
  "intro": "Nous pratiquons des tarifs transparents et compétitifs pour {SERVICE_SLUG} à {VILLE}.",
  "items": [
    {
      "titre": "Devis gratuit",
      "prix": "Gratuit",
      "description": "Évaluation et estimation sans engagement"
    },
    {
      "titre": "Forfait intervention",
      "prix": "Sur devis",
      "description": "Variable selon type et taille du rideau"
    },
    {
      "titre": "Garantie",
      "prix": "Incluse",
      "description": "1 an pièces et main d'œuvre"
    }
  ]
}
```

**Action :**
```
1. Ajoute ces sections dans tous les fichiers content/pages/services/*.json
2. Mets à jour les pages pour afficher ces sections
3. Utilise les composants existants (Processus, Tarifs) ou crée-les si nécessaire
```

#### C. Enrichir les Pages SubCity (CRITIQUE)

**Fichier concerné : `content/pages/services/{service}.json`**

Dans la section `intro`, rends-la **dynamique et locale** :

❌ **Mauvais** (générique) :
```json
"intro": {
  "paragraphs": [
    "Nous intervenons à {zone} pour tous vos besoins."
  ]
}
```

✅ **Bon** (ancré localement) :
```json
"intro": {
  "paragraphs": [
    "Spécialiste du {service_slug} de grilles métalliques à {zone} ({zonePostal}), notre équipe intervient rapidement dans tous les quartiers de la zone. Notre connaissance approfondie de {zone} nous permet d'optimiser nos délais d'intervention.",
    "Que vous soyez commerçant dans le centre-ville de {zone}, artisan en zone d'activité ou particulier, nous adaptons nos services à vos besoins spécifiques. Avec plus de 25 ans d'expérience dans {department}, nous maîtrisons toutes les problématiques de fermetures métalliques.",
    "Notre équipe connaît parfaitement les spécificités de {zone} : accessibilité, types de bâtiments, réglementations locales. Nous utilisons exclusivement des pièces d'origine pour garantir la durabilité de nos interventions sur votre rideau de fer."
  ]
}
```

**⚠️ Note importante :** Ces paragraphes contiennent :
- Variété sémantique (grilles métalliques, fermetures métalliques, rideau de fer)
- Mentions locales multiples ({zone}, centre-ville, zone d'activité)
- Contexte adapté (commerçant, artisan, particulier)

**Action :**
```
1. Révise TOUS les contenus de pages SubCity pour ajouter ancrages locaux
2. Utilise 3+ synonymes différents par page SubCity
3. Adapte les exemples au contexte de chaque zone
4. Vérifie qu'aucune page SubCity n'a >70% de similarité avec la homepage
```

---

### ÉTAPE 5 : Optimisation des FAQ

**Règle ABSOLUE : Première question OBLIGATOIRE**

Sur TOUTES les pages, la première FAQ doit être :
```
"Qui appeler pour {service} à {ville/zone} ?"
```

#### Homepage (`content/faq.json`)
```json
{
  "global": [
    {
      "question": "Qui appeler pour un dépannage de rideau métallique à {VILLE} ?",
      "answer": "Pour tout dépannage de rideau métallique à <strong>{VILLE} ({CODE_POSTAL})</strong>, contactez <strong>{NOM_COMPLET} au {TELEPHONE}</strong>. Notre équipe intervient 24h/24 et 7j/7 dans tous les quartiers de {VILLE} et dans tout {DEPARTEMENT}. Devis gratuit avant intervention."
    },
    {
      "question": "Quel est le délai d'intervention à {VILLE} ?",
      "answer": "Nos techniciens interviennent en <strong>30 minutes maximum</strong> à {VILLE} pour les urgences. Nous sommes disponibles 24h/24, 7j/7, y compris les jours fériés et week-ends."
    },
    {
      "question": "Quels services proposez-vous pour les rideaux métalliques à {VILLE} ?",
      "answer": "{NOM_COURT} propose une gamme complète : <strong>dépannage d'urgence</strong> 24h/24, installation de rideaux neufs, motorisation de rideaux manuels, contrats d'entretien préventif, et réparation de tous composants (moteur, lames, axe, serrure)."
    },
    {
      "question": "Comment obtenir un devis pour mon rideau métallique à {VILLE} ?",
      "answer": "Contactez-nous au <strong>{TELEPHONE}</strong> pour obtenir un <strong>devis gratuit et personnalisé</strong>. Notre technicien évalue votre situation et vous remet un devis détaillé avant toute intervention. Aucune surprise, engagement transparent."
    },
    {
      "question": "Intervenez-vous sur toutes les marques de rideaux métalliques ?",
      "answer": "Oui, nos techniciens sont formés sur <strong>toutes les marques</strong> : Somfy, Nice, Came, Hörmann, Bubendorff, Simu, Profalux, France Fermetures. Nous utilisons exclusivement des pièces d'origine constructeur pour garantir la qualité et la durabilité."
    },
    {
      "question": "Travaillez-vous les week-ends et jours fériés ?",
      "answer": "Oui, nous sommes disponibles <strong>7 jours sur 7</strong>, y compris les week-ends et jours fériés. Notre équipe d'astreinte est joignable 24h/24 au {TELEPHONE} pour toute urgence à {VILLE}."
    }
  ]
}
```

#### Pages Services
```json
{
  "installation": [
    {
      "question": "Qui appeler pour une installation de rideau métallique à {VILLE} ?",
      "answer": "Pour toute installation de rideau métallique à <strong>{VILLE} ({CODE_POSTAL})</strong>, contactez <strong>{NOM_COMPLET} au {TELEPHONE}</strong>. Nous proposons des devis gratuits et une garantie sur toutes nos installations. Intervention rapide dans tout {DEPARTEMENT}."
    },
    // ... 4-5 autres questions spécifiques à l'installation
  ],
  "motorisation": [
    {
      "question": "Qui appeler pour une motorisation de rideau métallique à {VILLE} ?",
      "answer": "Pour motoriser votre rideau métallique à <strong>{VILLE} ({CODE_POSTAL})</strong>, appelez <strong>{NOM_COMPLET} au {TELEPHONE}</strong>. Nous installons tous types de moteurs : Somfy, Nice, Came. Devis gratuit, installation en une journée."
    },
    // ... 4-5 autres questions spécifiques à la motorisation
  ]
}
```

#### Pages SubCity
Dans `content/pages/services/{service}.json`, la FAQ doit utiliser {zone} :
```json
"faq": [
  {
    "question": "Qui appeler pour un {service_slug} de rideau métallique à {zone} ?",
    "answer": "Pour un {service_slug} de rideau métallique à <strong>{zone} ({zonePostal})</strong>, appelez <strong>{name} au {phone}</strong>. Notre équipe intervient rapidement dans tous les quartiers de {zone}. Devis gratuit, intervention 24h/24."
  }
  // ... 3-4 autres questions avec {zone}
]
```

**Action :**
```
1. Révise TOUTES les FAQ pour que la première question suive le format obligatoire
2. Ajoute 2-3 questions supplémentaires pertinentes par page
3. Assure-toi que les réponses sont complètes (2-4 phrases minimum)
4. Vérifie que les FAQ des pages SubCity mentionnent bien {zone} et {zonePostal}
```

---

### ÉTAPE 6 : Amélioration du Maillage Interne

**Objectif : 5-10 liens contextuels par page**

#### Principes
- Liens intégrés DANS le texte (pas en footer)
- Ancres avec mots-clés (pas "cliquez ici")
- Pertinence : lier services connexes et zones proches

#### Exemples de Maillage

**Dans Homepage :**
```tsx
<p>
  Notre équipe intervient pour tous types de pannes : rideau bloqué, 
  moteur défaillant, lames endommagées. Si votre rideau nécessite une 
  <Link href="/motorisation" className="text-primary font-medium hover:underline">
    motorisation à {siteConfig.city}
  </Link>, nous proposons également ce service avec garantie constructeur.
</p>

<p>
  Nous intervenons aussi pour 
  <Link href="/installation" className="text-primary font-medium hover:underline">
    l'installation de rideaux métalliques neufs
  </Link> et proposons des 
  <Link href="/entretien" className="text-primary font-medium hover:underline">
    contrats d'entretien préventif
  </Link> pour éviter les pannes.
</p>
```

**Dans Pages Services :**
```tsx
<p>
  Après l'installation de votre nouveau rideau métallique, nous vous recommandons 
  de souscrire à un 
  <Link href="/entretien" className="text-primary font-medium hover:underline">
    contrat d'entretien à {siteConfig.city}
  </Link> pour garantir son bon fonctionnement dans le temps et éviter tout 
  <Link href="/" className="text-primary font-medium hover:underline">
    dépannage d'urgence
  </Link>.
</p>
```

**Dans Pages SubCity :**
```tsx
<p>
  Nous intervenons également pour 
  <Link href={`/installation/${zone.slug}`} className="text-primary font-medium hover:underline">
    l'installation de rideaux métalliques à {zone.name}
  </Link> si vous souhaitez remplacer votre ancien équipement.
</p>

<p>
  Notre équipe couvre aussi les zones voisines : 
  <Link href={`/${service.slug}/${zoneProche1.slug}`} className="text-primary font-medium hover:underline">
    {service.name} à {zoneProche1.name}
  </Link>,
  <Link href={`/${service.slug}/${zoneProche2.slug}`} className="text-primary font-medium hover:underline">
    {service.name} à {zoneProche2.name}
  </Link>.
</p>
```

**Action :**
```
1. Identifie dans chaque page les endroits où ajouter des liens contextuels
2. Ajoute 5-10 liens par page avec ancres optimisées
3. Vérifie que les liens sont pertinents (services connexes, zones proches)
4. Teste que tous les liens fonctionnent
```

---

## ✅ CHECKLIST FINALE

Avant de considérer la mission terminée, vérifie :

### Meta Tags
- [ ] Toutes les pages ont un title unique (55-60 caractères)
- [ ] Toutes les pages ont une description unique (155-160 caractères)
- [ ] Les keywords incluent 5+ variations (rideau métallique, rideau de fer, grille, store)
- [ ] Les OG tags sont présents (title, description, image, url)

### Données Structurées
- [ ] LocalBusiness présent dans layout.tsx
- [ ] FAQPage présent sur toutes les pages avec FAQ
- [ ] BreadcrumbList présent sur toutes les pages SubCity
- [ ] Service présent sur toutes les pages services principales
- [ ] Tous les schemas sont valides (test avec Google Rich Results Test)

### Contenu
- [ ] Homepage : 1500+ mots
- [ ] Pages services : 1200+ mots
- [ ] Pages SubCity : 800+ mots
- [ ] Variété sémantique : 5+ variations par page
- [ ] Aucune page SubCity n'a >70% de similarité avec homepage
- [ ] Mentions locales dans toutes les pages SubCity (quartiers, rues)

### FAQ
- [ ] Première question = "Qui appeler pour {service} à {ville/zone} ?" sur TOUTES les pages
- [ ] 5-8 questions sur homepage
- [ ] 4-6 questions sur pages services
- [ ] 3-5 questions sur pages SubCity
- [ ] Toutes les réponses font 2-4 phrases minimum

### Maillage Interne
- [ ] 5-10 liens contextuels par page
- [ ] Ancres optimisées (mots-clés, pas "cliquez ici")
- [ ] Liens pertinents (services connexes, zones proches)
- [ ] Tous les liens fonctionnent

### Tests
- [ ] Google Rich Results Test : Tous les schemas valides
- [ ] Test mobile : Site responsive
- [ ] Test de similarité : Aucun duplicate content >70%
- [ ] Test des liens : Tous fonctionnels

---

## 🚀 C'EST PARTI !

**Maintenant que tu as lu tout le prompt, commence par l'ÉTAPE 1 : Audit de l'Existant.**

Dis-moi ce que tu trouves et propose-moi un plan d'action détaillé avant de faire les modifications.

**N'oublie pas : Applique TOUTES les règles du document `SEO-CONTEXTE-OPTIMISATION.md` !**
```

---

## 📝 NOTES IMPORTANTES

### Variables à Remplacer Avant Utilisation

Remplace TOUTES les occurrences de :
- `{VILLE}` → Votre ville (ex: Montreuil)
- `{CODE_POSTAL}` → Votre code postal (ex: 93100)
- `{DEPARTEMENT}` → Votre département (ex: Seine-Saint-Denis)
- `{CODE_DEPT}` → Code département (ex: 93)
- `{REGION}` → Votre région (ex: Île-de-France)
- `{TELEPHONE}` → Votre téléphone (ex: 01 85 09 99 36)
- `{NOM_COURT}` → Nom court (ex: DRM Montreuil)
- `{NOM_COMPLET}` → Nom complet (ex: Dépannage Rideau Métallique Montreuil)
- `{DOMAINE}` → Domaine (ex: depannage-rideaumetallique-montreuil.fr)

### Utilisation

1. **Remplis** les variables en haut du prompt
2. **Copie** tout le prompt dans Cursor
3. **Lance** l'exécution
4. **Valide** chaque étape avant de passer à la suivante

### Durée Estimée

- Audit : 30 min
- Meta tags : 1h
- Données structurées : 1h30
- Contenu textuel : 3h
- FAQ : 1h
- Maillage : 1h
- **Total : ~8h de travail Cursor**

---

*Prompt créé pour l'optimisation SEO multi-villes des sites DRM*
