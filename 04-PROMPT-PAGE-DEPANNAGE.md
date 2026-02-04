# 🔧 PROMPT - Page Dépannage + SubCity

> **Instructions complètes** pour créer la page dépannage principale ET les pages SubCity associées

---

## 📋 INFORMATIONS REQUISES

```
VILLE = [À REMPLIR]
CODE_POSTAL = [À REMPLIR]
DEPARTEMENT = [À REMPLIR]
CODE_DEPARTEMENT = [À REMPLIR]
REGION = [À REMPLIR]
TELEPHONE = [À REMPLIR]
ZONES = [LISTE DES ZONES À GÉNÉRER]
```

---

## 🎯 OBJECTIF SEO

**Page principale** : `/depannage-rideau-metallique/`
- Mot-clé : `dépannage rideau métallique [VILLE]`

**Pages SubCity** : `/depannage-rideau-metallique/[zone]/`
- Mot-clé : `dépannage rideau métallique [ZONE]`

---

# PARTIE 1 : PAGE PRINCIPALE DÉPANNAGE

## 📐 STRUCTURE HTML

```
H1: Dépannage Rideau Métallique [VILLE] - Urgence 24h/24
    │
    ├── H2: Intervention d'Urgence à [VILLE] et dans le [DEPARTEMENT]
    │
    ├── H2: Types de Pannes que Nous Réparons à [VILLE]
    │   ├── H3: Rideau métallique bloqué
    │   ├── H3: Moteur défaillant
    │   ├── H3: Lames endommagées
    │   ├── H3: Problème de serrure
    │   └── H3: Télécommande défectueuse
    │
    ├── H2: Notre Processus d'Intervention
    │   ├── H3: 1. Appel et diagnostic
    │   ├── H3: 2. Intervention rapide
    │   ├── H3: 3. Réparation sur place
    │   └── H3: 4. Test et garantie
    │
    ├── H2: Zones d'Intervention Dépannage - [DEPARTEMENT]
    │
    ├── H2: Avis Clients - Dépannage Rideau Métallique [VILLE]
    │
    └── H2: Questions Fréquentes - Dépannage [VILLE]
        └── Q1: Qui appeler pour un dépannage de rideau métallique à [VILLE] ?
```

---

## 🧱 SECTIONS PAGE PRINCIPALE

### HERO
- H1 : "Dépannage Rideau Métallique [VILLE] - Urgence 24h/24"
- Badge : "Intervention en -30 min"
- Description : Services de dépannage dans le [CODE_DEPARTEMENT]
- CTA : Téléphone + Devis

### SECTION TYPES DE PANNES
- 5-6 types de pannes avec descriptions
- Pour chaque panne : symptôme + solution + délai

### SECTION PROCESSUS
- 4 étapes d'intervention
- Timeline visuelle
- Temps moyen : 30-45 min

### SECTION TARIFS (optionnel)
- Fourchette de prix indicative
- Devis gratuit
- Pas de frais cachés

### SECTION ZONES
- H2 : "Zones d'Intervention Dépannage - [DEPARTEMENT]"
- Liens vers toutes les pages SubCity dépannage

### SECTION AVIS
- 5 avis mentionnant "dépannage" + différentes zones

### SECTION FAQ
**Première question** :
> **Qui appeler pour un dépannage de rideau métallique à [VILLE] ?**
> Pour tout dépannage de rideau métallique à [VILLE] et dans le [DEPARTEMENT], contactez DRM [VILLE] au [TELEPHONE]. Intervention 24h/24, 7j/7.

---

# PARTIE 2 : PAGES SUBCITY DÉPANNAGE

## 📐 STRUCTURE HTML SUBCITY

```
H1: Dépannage Rideau Métallique [ZONE] ([CODE_POSTAL_ZONE])
    │
    ├── H2: Pourquoi Choisir DRM pour votre Dépannage à [ZONE]
    │
    ├── H2: Nos Interventions de Dépannage à [ZONE]
    │
    ├── H2: Tarifs Dépannage Rideau Métallique à [ZONE]
    │
    ├── H2: Avis Clients - Dépannage à [ZONE]
    │
    ├── H2: Autres Services à [ZONE]
    │
    └── H2: Questions Fréquentes - Dépannage [ZONE]
        └── Q1: Qui appeler pour un dépannage de rideau métallique à [ZONE] ?
```

---

## 🧱 SECTIONS SUBCITY DÉPANNAGE

### 1. HERO SUBCITY

**Contenu** :
```
H1: Dépannage Rideau Métallique [ZONE] ([CODE_POSTAL_ZONE])
Sous-titre: Intervention rapide 24h/24 à [ZONE] et environs
Badge: "Technicien proche de [ZONE]"
```

**Texte d'intro** (UNIQUE pour chaque zone) :
> Votre rideau métallique est bloqué à [ZONE] ? DRM [VILLE] intervient rapidement pour tout dépannage de rideau métallique dans votre secteur. Nos techniciens, basés à proximité de [ZONE], garantissent une intervention en moins de 30 minutes. Que vous soyez commerçant, artisan ou particulier à [ZONE], nous assurons le dépannage de votre fermeture métallique 24h/24.

---

### 2. SECTION "POURQUOI NOUS CHOISIR À [ZONE]"

**Composant** : `WhyChooseUs.tsx`

**Contenu** :
- H2 : "Pourquoi Choisir DRM pour votre Dépannage à [ZONE]"
- 4 avantages :
  1. **Proximité** - Technicien proche de [ZONE], intervention rapide
  2. **Disponibilité** - 24h/24, 7j/7, même les jours fériés
  3. **Expertise** - 15+ ans d'expérience dans le [DEPARTEMENT]
  4. **Garantie** - Pièces et main d'œuvre garanties

**Design** :
- 4 cards en grille
- Icônes distinctives
- Mention de [ZONE] dans au moins 2 avantages

---

### 3. SECTION TARIFS

**Composant** : `TarifsSection.tsx`

**Contenu** :
- H2 : "Tarifs Dépannage Rideau Métallique à [ZONE]"
- Tableau indicatif :

| Intervention | Tarif indicatif |
|--------------|-----------------|
| Diagnostic + déplacement | 49€ - 79€ |
| Déblocage simple | 80€ - 150€ |
| Remplacement moteur | 350€ - 600€ |
| Remplacement lames | 150€ - 300€ |
| Urgence nuit/week-end | +30% à +50% |

- Mention : "Devis gratuit et sans engagement à [ZONE]"
- CTA : "Demander un devis personnalisé"

**Design** :
- Tableau clair
- Badge "Devis gratuit"
- Note explicative sur les tarifs

---

### 4. SECTION AVIS LOCAUX

**5 avis UNIQUES mentionnant "dépannage" + "[ZONE]"**

**Template d'avis** :

```javascript
const reviews = [
  {
    name: "Laurent M.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Excellent service de dépannage rideau métallique à [ZONE]. Mon rideau de boutique était bloqué un samedi soir, le technicien DRM est intervenu en 45 minutes. Travail soigné, prix correct. Je recommande pour tout dépannage urgent à [ZONE] !",
    context: "Boutique de vêtements"
  },
  {
    name: "Sophie D.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Intervention rapide pour un dépannage de rideau métallique dans mon restaurant à [ZONE]. Le technicien a diagnostiqué le problème (moteur HS) et l'a remplacé en 2 heures. Très professionnel.",
    context: "Restaurant"
  },
  {
    name: "Marc T.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Mon rideau de garage était coincé à mi-hauteur à [ZONE]. Appel à DRM, technicien sur place en 30 minutes. Dépannage efficace et tarif raisonnable. Je garde le numéro !",
    context: "Garage automobile"
  },
  {
    name: "Isabelle R.",
    rating: 4,
    date: "Il y a 2 mois",
    text: "Bonne prestation de dépannage à [ZONE]. Le rideau de ma pharmacie ne descendait plus complètement. Réparation rapide, le technicien a aussi fait quelques réglages préventifs. Satisfaite.",
    context: "Pharmacie"
  },
  {
    name: "Philippe B.",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Suite à une tentative d'effraction sur mon commerce à [ZONE], j'ai appelé DRM pour un dépannage d'urgence. Intervention en moins d'1 heure, rideau sécurisé. Merci pour la réactivité !",
    context: "Commerce alimentaire"
  }
];
```

---

### 5. SECTION AUTRES SERVICES À [ZONE]

**Contenu** :
- H2 : "Nos Autres Services à [ZONE]"
- Liens vers les autres pages SubCity de [ZONE] :
  - Installation rideau métallique [ZONE]
  - Fabrication rideau métallique [ZONE]
  - Entretien rideau métallique [ZONE]
  - Motorisation rideau métallique [ZONE]

**Design** :
- 4 cards avec icônes
- Liens cliquables vers les autres services

---

### 6. SECTION FAQ SUBCITY

**H2** : "Questions Fréquentes - Dépannage Rideau Métallique [ZONE]"

**PREMIÈRE QUESTION OBLIGATOIRE** :
```
Q: Qui appeler pour un dépannage de rideau métallique à [ZONE] ?

R: Pour tout dépannage de rideau métallique à [ZONE] ([CODE_POSTAL_ZONE]), 
contactez DRM [VILLE] au [TELEPHONE]. Nos techniciens interviennent 24h/24 
et 7j/7 à [ZONE] et dans les communes voisines. Intervention rapide garantie 
en moins de 30 minutes. Devis gratuit et tarifs transparents.
```

**Autres questions** :
```
Q: Quel est le délai d'intervention pour un dépannage à [ZONE] ?

R: Nos techniciens interviennent en moyenne en 20 à 30 minutes à [ZONE]. 
Grâce à notre présence locale dans le [DEPARTEMENT], nous garantissons 
une réponse rapide pour tout dépannage urgent de rideau métallique.
```

```
Q: Combien coûte un dépannage de rideau métallique à [ZONE] ?

R: Le tarif d'un dépannage à [ZONE] dépend de la nature de la panne. 
Comptez entre 80€ et 150€ pour un déblocage simple, et de 350€ à 600€ 
pour un remplacement de moteur. Nous établissons toujours un devis gratuit 
avant intervention.
```

```
Q: Intervenez-vous en urgence la nuit à [ZONE] ?

R: Oui, DRM [VILLE] assure les dépannages d'urgence 24h/24 à [ZONE], 
y compris la nuit, le week-end et les jours fériés. Un supplément peut 
s'appliquer pour les interventions nocturnes.
```

```
Q: Quelles zones couvrez-vous autour de [ZONE] ?

R: En plus de [ZONE], nous intervenons dans toutes les communes du 
[DEPARTEMENT] : [LISTE 3-4 COMMUNES VOISINES]. Notre rayon d'action 
couvre environ 30 km autour de [VILLE].
```

---

## 📊 MÉTADONNÉES SUBCITY

```typescript
// Pour chaque page SubCity
export const metadata = {
  title: `Dépannage Rideau Métallique ${zoneName} (${postalCode}) | 24h/24 | DRM`,
  description: `Dépannage rideau métallique à ${zoneName} ✓ Intervention rapide 24h/24 ✓ Technicien proche de ${zoneName} ✓ Devis gratuit. Appelez le ${phone} !`,
  keywords: `dépannage rideau métallique ${zoneName}, réparation rideau métallique ${postalCode}, rideau bloqué ${zoneName}`,
};
```

---

## 📝 GÉNÉRATION DYNAMIQUE DES SUBCITY

### Fichier `app/depannage-rideau-metallique/[zone]/page.tsx`

```typescript
import { allZones } from '@/config/zones';

// Génération statique des pages
export async function generateStaticParams() {
  return allZones.map((zone) => ({
    zone: zone.slug,
  }));
}

// Récupération des données de la zone
function getZoneData(slug: string) {
  return allZones.find((zone) => zone.slug === slug);
}

// Page SubCity
export default function DepannageSubCityPage({ params }: { params: { zone: string } }) {
  const zone = getZoneData(params.zone);
  
  if (!zone) {
    notFound();
  }

  return (
    <>
      <HeroSubCity 
        service="Dépannage"
        zoneName={zone.name}
        postalCode={zone.postalCode}
      />
      <WhyChooseUs 
        zoneName={zone.name}
        serviceName="dépannage"
      />
      <TarifsSection 
        zoneName={zone.name}
      />
      <Reviews 
        reviews={getLocalReviews(zone.name, "dépannage")}
      />
      <OtherServices 
        zoneName={zone.name}
        zoneSlug={zone.slug}
        currentService="depannage"
      />
      <FAQ 
        questions={getLocalFAQ(zone.name, "dépannage")}
      />
      <CTA />
    </>
  );
}
```

---

## ✅ CHECKLIST PAGE DÉPANNAGE

### Page Principale
- [ ] H1 contient "Dépannage Rideau Métallique [VILLE]"
- [ ] Section types de pannes complète
- [ ] Section processus d'intervention
- [ ] Liens vers toutes les SubCity
- [ ] FAQ avec première question "Qui appeler..."
- [ ] Avis clients mentionnant "dépannage"

### Pages SubCity (pour CHAQUE zone)
- [ ] H1 : "Dépannage Rideau Métallique [ZONE]"
- [ ] Section "Pourquoi nous choisir à [ZONE]"
- [ ] Section tarifs locale
- [ ] 5 avis mentionnant "dépannage" + "[ZONE]"
- [ ] Liens vers autres services à [ZONE]
- [ ] FAQ avec première question "Qui appeler à [ZONE]..."
- [ ] Métadonnées uniques

---

## 🚫 ANTI-DUPLICATE CONTENT

Pour éviter les pénalités Google :

1. **Varier les formulations** : Ne pas copier le même paragraphe entre les zones
2. **Personnaliser les avis** : Chaque zone a des avis différents
3. **Adapter les exemples** : Mentionner des types de commerces différents
4. **Changer la structure** : Alterner l'ordre des sections si possible
5. **Contenu unique** : Minimum 30% de contenu différent entre chaque SubCity

---

*Prompt créé pour les pages dépannage DRM*
