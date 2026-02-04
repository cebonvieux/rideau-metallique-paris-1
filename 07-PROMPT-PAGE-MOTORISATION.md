# ⚡ PROMPT - Page Motorisation + SubCity

> **Instructions complètes** pour créer la page motorisation principale ET les pages SubCity associées

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

**Page principale** : `/motorisation-rideau-metallique/`
- Mot-clé : `motorisation rideau métallique [VILLE]`

**Pages SubCity** : `/motorisation-rideau-metallique/[zone]/`
- Mot-clé : `motorisation rideau métallique [ZONE]`

---

# PARTIE 1 : PAGE PRINCIPALE MOTORISATION

## 📐 STRUCTURE HTML

```
H1: Motorisation Rideau Métallique [VILLE]
    │
    ├── H2: Avantages de la Motorisation à [VILLE]
    │   ├── H3: Confort au quotidien
    │   ├── H3: Gain de temps
    │   ├── H3: Sécurité renforcée
    │   └── H3: Longévité du rideau
    │
    ├── H2: Types de Moteurs pour Rideau Métallique
    │   ├── H3: Moteur tubulaire
    │   ├── H3: Moteur central
    │   └── H3: Moteur latéral
    │
    ├── H2: Accessoires de Motorisation
    │   ├── H3: Télécommande
    │   ├── H3: Clavier à code
    │   ├── H3: Détecteur d'obstacle
    │   ├── H3: Batterie de secours
    │   ├── H3: Module smartphone
    │   └── H3: Horloge programmable
    │
    ├── H2: Manuel vs Motorisé : Le Comparatif Complet
    │
    ├── H2: Retour sur Investissement de la Motorisation
    │
    ├── H2: Témoignages de Commerçants Motorisés à [VILLE]
    │
    ├── H2: Processus d'Installation Motorisation
    │   ├── H3: 1. Diagnostic
    │   ├── H3: 2. Choix du moteur
    │   ├── H3: 3. Installation
    │   └── H3: 4. Formation
    │
    ├── H2: Avis Clients - Motorisation [VILLE]
    │
    └── H2: Questions Fréquentes - Motorisation [VILLE]
        └── Q1: Qui appeler pour motoriser un rideau métallique à [VILLE] ?
```

---

## 🧱 SECTIONS PAGE PRINCIPALE

### HERO
- H1 : "Motorisation Rideau Métallique [VILLE]"
- Badge : "Automatisez Votre Commerce"
- Description : "Transformez votre rideau manuel en rideau motorisé"
- Avantages clés : Confort, Sécurité, Praticité
- CTA : Téléphone + Devis gratuit

---

### SECTION AVANTAGES

**4 avantages majeurs** :

1. **Confort au quotidien**
   - Ouverture/fermeture sans effort
   - Fini les manipulations pénibles
   - Idéal pour tous les âges

2. **Gain de temps**
   - Ouverture en 15 secondes vs 2 minutes
   - 15 min économisées/jour
   - 90h/an de productivité gagnée

3. **Sécurité renforcée**
   - Système anti-relevage
   - Détection d'obstacles
   - Verrouillage automatique

4. **Longévité du rideau**
   - Moins d'usure mécanique
   - Mouvements réguliers et contrôlés
   - +30% de durée de vie

---

### SECTION TYPES DE MOTEURS

**3 types de moteurs** :

| Type | Puissance | Usage | Prix indicatif |
|------|-----------|-------|----------------|
| **Moteur tubulaire** | 100-300 Nm | Rideaux légers/moyens (<50kg) | 350€-500€ |
| **Moteur central** | 200-600 Nm | Rideaux moyens/lourds (50-200kg) | 500€-900€ |
| **Moteur latéral** | 400-1500 Nm | Rideaux lourds/industriels (>200kg) | 900€-1800€ |

**Détail de chaque type** :

1. **Moteur tubulaire**
   - Installation dans l'axe
   - Discret et silencieux
   - Idéal commerces de proximité

2. **Moteur central**
   - Fixation au-dessus du rideau
   - Puissance intermédiaire
   - Bon rapport qualité/prix

3. **Moteur latéral**
   - Grande puissance
   - Solutions industrielles
   - Rideaux grandes dimensions

---

### SECTION ACCESSOIRES

**6 accessoires de motorisation** :

1. **Télécommande** - Commande à distance (portée 30m)
2. **Clavier à code** - Accès sécurisé sans clé
3. **Détecteur d'obstacle** - Sécurité anti-écrasement
4. **Batterie de secours** - Fonctionnement en cas de coupure
5. **Module smartphone** - Contrôle via application
6. **Horloge programmable** - Ouverture/fermeture automatique

---

### SECTION COMPARATIF MANUEL VS MOTORISÉ

**Composant** : `ComparatifSection.tsx`

| Critère | Manuel | Motorisé |
|---------|--------|----------|
| **Confort** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Rapidité** | 2 min | 15 sec |
| **Effort physique** | Important | Aucun |
| **Sécurité** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Durée de vie** | 15 ans | 20+ ans |
| **Coût initial** | + | +++ |
| **Coût sur 10 ans** | ++ | + |

**Verdict** :
- Manuel : Adapté aux budgets serrés, usage occasionnel
- Motorisé : Recommandé pour usage quotidien, commerces fréquentés

---

### SECTION ROI (RETOUR SUR INVESTISSEMENT)

**Composant** : `ROISection.tsx`

**Calcul du ROI** :

| Poste | Calcul | Économie/an |
|-------|--------|-------------|
| Temps gagné | 15 min/jour × 250 jours × 15€/h | **937€** |
| Réduction usure | -20% de réparations | **~100€** |
| Baisse sinistres | -30% de cambriolages | **Variable** |
| **Total économie** | | **~1000€/an** |

**Amortissement** : 800€ à 1500€ / 1000€ = **0.8 à 1.5 an**

---

### SECTION TÉMOIGNAGES COMMERÇANTS

**6 témoignages de commerçants motorisés** :

1. **Boulangerie [QUARTIER_1]** - "Gain de temps énorme le matin"
2. **Pharmacie [QUARTIER_2]** - "Plus de douleurs au dos"
3. **Garage [COMMUNE_1]** - "Indispensable pour les grandes portes"
4. **Boutique [CENTRE_VILLE]** - "Mes employés apprécient"
5. **Restaurant [QUARTIER_3]** - "Pratique avec la télécommande"
6. **Traiteur [COMMUNE_2]** - "Je ne reviendrais pas au manuel"

---

### SECTION PROCESSUS INSTALLATION

**4 étapes** :

1. **Diagnostic** - Évaluation du rideau existant
2. **Choix du moteur** - Recommandation adaptée
3. **Installation** - Pose en 2-4 heures
4. **Formation** - Utilisation et entretien

---

### SECTION FAQ

**Première question** :
> **Qui appeler pour motoriser un rideau métallique à [VILLE] ?**
> Pour la motorisation de votre rideau métallique à [VILLE] et dans le [DEPARTEMENT], contactez DRM [VILLE] au [TELEPHONE]. Nos techniciens installent tous types de moteurs (tubulaire, central, latéral) sur rideaux existants. Devis gratuit, installation rapide, garantie 2 ans.

---

# PARTIE 2 : PAGES SUBCITY MOTORISATION

## 📐 STRUCTURE HTML SUBCITY

```
H1: Motorisation Rideau Métallique [ZONE] ([CODE_POSTAL_ZONE])
    │
    ├── H2: Avantages de la Motorisation pour les Commerçants de [ZONE]
    │
    ├── H2: Marques de Moteurs Installées à [ZONE]
    │
    ├── H2: Avis Clients - Motorisation à [ZONE]
    │
    ├── H2: Autres Services à [ZONE]
    │
    └── H2: Questions Fréquentes - Motorisation [ZONE]
        └── Q1: Qui appeler pour motoriser un rideau métallique à [ZONE] ?
```

---

## 🧱 SECTIONS SUBCITY MOTORISATION

### 1. HERO SUBCITY

```
H1: Motorisation Rideau Métallique [ZONE] ([CODE_POSTAL_ZONE])
Sous-titre: Automatisez votre rideau à [ZONE]
Badge: "Installation sur rideau existant"
```

**Texte d'intro** :
> Vous souhaitez motoriser votre rideau métallique à [ZONE] ? DRM [VILLE] installe des systèmes de motorisation sur vos rideaux manuels existants. Que vous soyez commerçant, artisan ou professionnel à [ZONE], transformez votre quotidien avec un rideau automatisé. Installation rapide, moteurs de qualité, garantie 2 ans dans le [CODE_DEPARTEMENT].

---

### 2. SECTION AVANTAGES LOCAL

**Composant** : `AvantagesMotorisation.tsx`

**Contenu** :
- H2 : "Avantages de la Motorisation pour les Commerçants de [ZONE]"
- 4 avantages adaptés au contexte local
- Exemples de commerces de [ZONE] équipés
- Témoignage local

**Texte adapté** :
> Les commerçants de [ZONE] qui ont choisi la motorisation ne reviendraient pas en arrière. Gain de temps à l'ouverture et à la fermeture, confort d'utilisation, sécurité renforcée... La motorisation transforme le quotidien des professionnels de [ZONE]. Nos clients apprécient particulièrement la télécommande et le module smartphone.

---

### 3. SECTION MARQUES DE MOTEURS

**Composant** : `MarquesMoteurs.tsx`

**Contenu** :
- H2 : "Marques de Moteurs Installées à [ZONE]"
- Présentation des marques partenaires :
  - **Somfy** - Leader français, fiabilité
  - **Nice** - Italien, rapport qualité/prix
  - **Came** - Innovation, connectivité
  - **Simu** - Robustesse, garantie
- Garantie constructeur : 2 à 5 ans

**Design** :
- Logos des marques
- Caractéristiques clés
- Gamme de prix

---

### 4. SECTION AVIS LOCAUX

**5 avis UNIQUES mentionnant "motorisation" + "[ZONE]"**

```javascript
const reviews = [
  {
    name: "Éric H.",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Motorisation de mon rideau de boulangerie à [ZONE]. Installation en une matinée, moteur Somfy silencieux et fiable. Plus besoin de forcer le matin à 5h ! Excellent service de motorisation à [ZONE].",
    context: "Boulangerie"
  },
  {
    name: "Valérie T.",
    rating: 5,
    date: "Il y a 1 mois",
    text: "J'ai fait motoriser le rideau de ma boutique à [ZONE]. Le technicien DRM a été très professionnel. Télécommande pratique, je gagne un temps fou. Je recommande pour toute motorisation dans le [CODE_DEPARTEMENT].",
    context: "Boutique de prêt-à-porter"
  },
  {
    name: "Karim B.",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Motorisation + batterie de secours pour mon garage à [ZONE]. Même en cas de coupure, le rideau fonctionne. Installation propre, équipe sérieuse. Très satisfait de la motorisation.",
    context: "Garage automobile"
  },
  {
    name: "Anne-Marie D.",
    rating: 4,
    date: "Il y a 6 semaines",
    text: "Bonne prestation de motorisation à [ZONE]. Le moteur est un peu plus bruyant que prévu, mais il fait le travail. Installation rapide (3 heures). Service correct.",
    context: "Pharmacie"
  },
  {
    name: "Patrick L.",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Après 20 ans de rideau manuel, j'ai enfin sauté le pas de la motorisation pour mon commerce à [ZONE]. Je me demande pourquoi j'ai attendu si longtemps ! Confort incroyable, merci DRM.",
    context: "Tabac-presse"
  }
];
```

---

### 5. SECTION AUTRES SERVICES

**Liens vers les autres pages SubCity de [ZONE]** :
- Dépannage rideau métallique [ZONE]
- Installation rideau métallique [ZONE]
- Fabrication rideau métallique [ZONE]
- Entretien rideau métallique [ZONE]

---

### 6. SECTION FAQ SUBCITY

**PREMIÈRE QUESTION OBLIGATOIRE** :
```
Q: Qui appeler pour motoriser un rideau métallique à [ZONE] ?

R: Pour la motorisation de votre rideau métallique à [ZONE] ([CODE_POSTAL_ZONE]), 
contactez DRM [VILLE] au [TELEPHONE]. Nos techniciens installent des moteurs 
Somfy, Nice, Came et Simu sur vos rideaux manuels existants. Intervention rapide, 
garantie 2 ans, devis gratuit pour toute motorisation à [ZONE].
```

**Autres questions** :
```
Q: Peut-on motoriser un rideau manuel existant à [ZONE] ?

R: Oui, la plupart des rideaux manuels peuvent être motorisés à [ZONE]. Notre 
technicien évalue votre installation et recommande le moteur adapté. L'opération 
prend généralement 2 à 4 heures, sans modification majeure du rideau existant.
```

```
Q: Combien coûte la motorisation d'un rideau métallique à [ZONE] ?

R: La motorisation d'un rideau métallique à [ZONE] coûte entre 600€ et 1500€, 
selon le type de moteur et les accessoires choisis. Ce tarif comprend le 
matériel, l'installation et la mise en service. Devis gratuit sur demande.
```

```
Q: Quelle est la durée de vie d'un moteur de rideau métallique ?

R: Un moteur de rideau métallique dure en moyenne 10 à 15 ans avec un entretien 
régulier. Les moteurs que nous installons à [ZONE] sont garantis 2 ans pièces 
et main d'œuvre. Nous proposons aussi des contrats d'entretien pour prolonger 
leur durée de vie.
```

```
Q: Quels accessoires recommandez-vous pour une motorisation à [ZONE] ?

R: Pour une motorisation à [ZONE], nous recommandons au minimum une télécommande 
et un détecteur d'obstacles pour la sécurité. La batterie de secours est utile 
en cas de coupure de courant, et le module smartphone permet de contrôler le 
rideau à distance.
```

---

## 📊 MÉTADONNÉES SUBCITY MOTORISATION

```typescript
export const metadata = {
  title: `Motorisation Rideau Métallique ${zoneName} (${postalCode}) | Automatisation | DRM`,
  description: `Motorisation rideau métallique à ${zoneName} ✓ Installation sur rideau existant ✓ Moteurs Somfy, Nice, Came ✓ Garantie 2 ans. Appelez le ${phone} !`,
  keywords: `motorisation rideau métallique ${zoneName}, automatisation rideau ${postalCode}, moteur rideau ${zoneName}`,
};
```

---

## ✅ CHECKLIST PAGE MOTORISATION

### Page Principale
- [ ] H1 contient "Motorisation Rideau Métallique [VILLE]"
- [ ] Section avantages (4 points)
- [ ] Section types de moteurs (3 types)
- [ ] Section accessoires (6 accessoires)
- [ ] Section comparatif manuel vs motorisé
- [ ] Section ROI
- [ ] Section témoignages commerçants locaux
- [ ] Section processus installation
- [ ] FAQ avec première question "Qui appeler..."
- [ ] Avis clients mentionnant "motorisation"

### Pages SubCity (pour CHAQUE zone)
- [ ] H1 : "Motorisation Rideau Métallique [ZONE]"
- [ ] Section avantages adaptée à [ZONE]
- [ ] Section marques de moteurs
- [ ] 5 avis mentionnant "motorisation" + "[ZONE]"
- [ ] Liens vers autres services à [ZONE]
- [ ] FAQ locale avec "Qui appeler à [ZONE]..."
- [ ] Métadonnées uniques

---

*Prompt créé pour les pages motorisation DRM*
