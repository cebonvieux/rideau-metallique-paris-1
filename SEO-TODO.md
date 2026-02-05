# ✅ TODO : Optimisation SEO Complète

> **Checklist détaillée** pour l'amélioration SEO du site DRM

---

## 📋 INFORMATIONS DU SITE

```
Ville : ___________________
Code Postal : ___________________
Département : ___________________
Téléphone : ___________________
Domaine : ___________________
```

---

## 🎯 PHASE 1 : AUDIT & PRÉPARATION

### 1.1 Lecture des Documents de Référence

- [ ] Lire `SEO-CONTEXTE-OPTIMISATION.md` en entier
- [ ] Lire `SEO-PROMPT-CURSOR.md`
- [ ] Comprendre les règles anti-duplicate content
- [ ] Noter les exemples de meta tags optimaux
- [ ] Noter les structures de données Schema.org requises

### 1.2 Audit de l'Existant

- [ ] Lister toutes les pages du site
- [ ] Noter les meta tags actuels de chaque page
- [ ] Identifier les contenus courts (<800 mots)
- [ ] Vérifier les données structurées existantes (Google Rich Results Test)
- [ ] Identifier les risques de duplicate content (pages SubCity)
- [ ] Lister les FAQ existantes et vérifier première question

**Fichiers à auditer :**
- [ ] `app/page.tsx` (homepage)
- [ ] `app/layout.tsx` (schema global)
- [ ] `app/installation/page.tsx`
- [ ] `app/motorisation/page.tsx`
- [ ] `app/entretien/page.tsx`
- [ ] `app/[service]/page.tsx`
- [ ] `app/[service]/[zone]/page.tsx`
- [ ] `content/pages/home.json`
- [ ] `content/pages/services/*.json`
- [ ] `content/faq.json`

---

## 📊 PHASE 2 : OPTIMISATION META TAGS

### 2.1 Homepage (`app/page.tsx`)

- [ ] **Title** : `Dépannage Rideau Métallique {VILLE} ({CODE_POSTAL}) | 24h/24 - {NOM}`
  - Longueur : 55-60 caractères ✓
  - Contient ville + code postal ✓
  - Contient mot-clé principal ✓
  
- [ ] **Description** : Mention intervention 30 min, 24/7, téléphone, avis
  - Longueur : 155-160 caractères ✓
  - Contient USP (30 min, 24/7) ✓
  - Contient téléphone ✓
  - Contient preuve sociale (avis) ✓
  
- [ ] **Keywords** : 7+ variations
  - dépannage rideau métallique {VILLE} ✓
  - rideau de fer {VILLE} ✓
  - grille métallique {CODE_POSTAL} ✓
  - déblocage rideau {DEPARTEMENT} ✓
  - réparation rideau métallique {VILLE} ✓
  - rideau métallique bloqué {VILLE} ✓
  - store métallique {VILLE} ✓
  
- [ ] **OpenGraph** : title, description, type, url, image
- [ ] **Canonical** : URL correcte

### 2.2 Page Installation (`app/installation/page.tsx`)

- [ ] **Title** : `Installation Rideau Métallique {VILLE} - Devis Gratuit | {NOM}`
- [ ] **Description** : Mention pose, garantie, devis gratuit, téléphone
- [ ] **Keywords** : 5+ variations avec "installation"
- [ ] **OpenGraph** : complet
- [ ] **Canonical** : URL correcte

### 2.3 Page Motorisation (`app/motorisation/page.tsx`)

- [ ] **Title** : `Motorisation Rideau Métallique {VILLE} - Tous Moteurs | {NOM}`
- [ ] **Description** : Mention automatisation, marques (Somfy, Nice), téléphone
- [ ] **Keywords** : 5+ variations avec "motorisation"
- [ ] **OpenGraph** : complet
- [ ] **Canonical** : URL correcte

### 2.4 Page Entretien (`app/entretien/page.tsx`)

- [ ] **Title** : `Entretien Rideau Métallique {VILLE} - Contrat Maintenance | {NOM}`
- [ ] **Description** : Mention préventif, contrats, éviter pannes, téléphone
- [ ] **Keywords** : 5+ variations avec "entretien"
- [ ] **OpenGraph** : complet
- [ ] **Canonical** : URL correcte

### 2.5 Pages Services Dynamiques (`app/[service]/page.tsx`)

- [ ] Fonction `generateMetadata` optimisée
- [ ] Title dynamique unique par service
- [ ] Description dynamique avec USP du service
- [ ] Keywords dynamiques (5+ variations)
- [ ] OpenGraph dynamique

### 2.6 Pages SubCity (`app/[service]/[zone]/page.tsx`)

- [ ] Fonction `generateMetadata` optimisée
- [ ] Title : `{SERVICE} Rideau Métallique {ZONE} ({CODE_POSTAL_ZONE}) | {NOM}`
- [ ] Description mentionne zone + quartiers locaux
- [ ] Keywords avec zone (5+ variations)
- [ ] OpenGraph avec zone
- [ ] **CRITIQUE** : Vérifier que meta différent de homepage

---

## 🏗️ PHASE 3 : DONNÉES STRUCTURÉES SCHEMA.ORG

### 3.1 LocalBusiness Global (`app/layout.tsx`)

- [ ] `@context` et `@type` corrects
- [ ] `name` et `alternateName` renseignés
- [ ] `description` complète et engageante
- [ ] `url`, `telephone`, `email` corrects
- [ ] `image` et `logo` (URLs absolues)
- [ ] **address** complète :
  - [ ] streetAddress
  - [ ] addressLocality
  - [ ] postalCode
  - [ ] addressRegion
  - [ ] addressCountry (FR)
- [ ] **geo** coordinates :
  - [ ] latitude
  - [ ] longitude
- [ ] **openingHoursSpecification** (24/7) :
  - [ ] dayOfWeek : tous les jours
  - [ ] opens : 00:00
  - [ ] closes : 23:59
- [ ] **aggregateRating** :
  - [ ] ratingValue (4.9)
  - [ ] reviewCount (127)
  - [ ] bestRating (5)
  - [ ] worstRating (1)
- [ ] **areaServed** (ville + région)
- [ ] **hasOfferCatalog** avec liste services
- [ ] **sameAs** (réseaux sociaux)

### 3.2 FAQPage (Toutes Pages avec FAQ)

**Homepage** (`app/page.tsx`) :
- [ ] Schema FAQPage présent
- [ ] Toutes les questions/réponses incluses
- [ ] Texte HTML nettoyé (pas de balises)
- [ ] Première question = "Qui appeler pour dépannage à {VILLE} ?"

**Pages Services** :
- [ ] `app/installation/page.tsx` : Schema FAQPage
- [ ] `app/motorisation/page.tsx` : Schema FAQPage
- [ ] `app/entretien/page.tsx` : Schema FAQPage
- [ ] Première question de chaque = "Qui appeler pour {SERVICE} à {VILLE} ?"

**Pages SubCity** (`app/[service]/[zone]/page.tsx`) :
- [ ] Schema FAQPage présent
- [ ] Première question = "Qui appeler pour {SERVICE} à {ZONE} ?"

### 3.3 BreadcrumbList (Pages SubCity)

**`app/[service]/[zone]/page.tsx`** :
- [ ] Schema BreadcrumbList créé
- [ ] Position 1 : Accueil (avec URL)
- [ ] Position 2 : Service (avec URL)
- [ ] Position 3 : Zone (sans URL)
- [ ] Inséré dans la page avec `dangerouslySetInnerHTML`

### 3.4 Service (Pages Services Principales)

**`app/[service]/page.tsx`** :
- [ ] Schema Service créé
- [ ] `serviceType` : "{SERVICE} rideau métallique"
- [ ] `provider` : LocalBusiness avec nom et téléphone
- [ ] `areaServed` : Ville
- [ ] `description` : Description détaillée du service
- [ ] Inséré dans la page

### 3.5 Validation

- [ ] Tester tous les schemas avec Google Rich Results Test
- [ ] Corriger les erreurs détectées
- [ ] Vérifier que tous les schemas sont valides

---

## 📝 PHASE 4 : ENRICHISSEMENT CONTENU

### 4.1 Homepage (`content/pages/home.json` + `app/page.tsx`)

**Objectif : 1500+ mots (actuellement ~800)**

- [ ] **Section Introduction** (2-3 paragraphes) - À AJOUTER
  - Paragraphe 1 : Présentation générale + ville
  - Paragraphe 2 : Équipe + zones couvertes
  - Paragraphe 3 : Marques + expérience
  
- [ ] **Section "Types de Rideaux"** - À AJOUTER
  - [ ] Créer section dans `home.json`
  - [ ] 4 types : lames pleines, micro-perforées, tubes ondulés, grille
  - [ ] Description + icon pour chaque
  - [ ] Créer/adapter composant React
  
- [ ] **Section "Secteurs d'Activité"** - À AJOUTER
  - [ ] Créer section dans `home.json`
  - [ ] 4 secteurs : Commerces, Entrepôts, Garages, Établissements publics
  - [ ] Exemples concrets pour chaque
  - [ ] Créer composant `Secteurs.tsx` (déjà existe, vérifier)
  
- [ ] **Section "Notre Expertise à {VILLE}"** - À AJOUTER
  - [ ] 3 paragraphes sur l'expertise locale
  - [ ] Mention : années d'expérience, zones, marques, avis
  - [ ] Variété sémantique (grilles métalliques, fermetures, etc.)
  
- [ ] **Enrichir sections existantes** :
  - [ ] Services : Ajouter descriptions plus détaillées
  - [ ] Pannes courantes : Ajouter 2 pannes supplémentaires
  - [ ] WhyUs : Enrichir les descriptions
  
- [ ] **Variété sémantique** : 5+ variations présentes
  - [ ] Rideau métallique ✓
  - [ ] Rideau de fer ✓
  - [ ] Grille métallique ✓
  - [ ] Store métallique ✓
  - [ ] Fermeture métallique ✓

### 4.2 Page Installation (`content/pages/services/installation.json`)

**Objectif : 1200+ mots**

- [ ] **Introduction** : 3-4 paragraphes détaillés
  - Paragraphe 1 : Service d'installation
  - Paragraphe 2 : Types de rideaux installés
  - Paragraphe 3 : Processus et garanties
  - Paragraphe 4 : Pourquoi nous choisir
  
- [ ] **Section "Processus d'Intervention"** - À AJOUTER
  - [ ] 4 étapes détaillées (Appel, Devis, Intervention, Tests)
  - [ ] Créer dans JSON
  - [ ] Utiliser composant `Processus.tsx`
  
- [ ] **Section "Tarifs Indicatifs"** - À AJOUTER
  - [ ] Créer tableau tarifs dans JSON
  - [ ] Mention : devis gratuit, forfait, garantie
  - [ ] Créer/adapter composant tarifs
  
- [ ] **Enrichir sections existantes** :
  - [ ] Situations : Ajouter exemples concrets
  - [ ] Avantages : Détailler chaque point
  
- [ ] **Variété sémantique** : 5+ variations

### 4.3 Page Motorisation (`content/pages/services/motorisation.json`)

**Objectif : 1200+ mots**

- [ ] **Introduction** : 3-4 paragraphes
- [ ] **Section "Processus"** - À AJOUTER
- [ ] **Section "Tarifs"** - À AJOUTER
- [ ] **Enrichir sections existantes**
- [ ] **Variété sémantique** : 5+ variations

### 4.4 Page Entretien (`content/pages/services/entretien.json`)

**Objectif : 1200+ mots**

- [ ] **Introduction** : 3-4 paragraphes
- [ ] **Section "Processus"** - À AJOUTER
- [ ] **Section "Tarifs"** - À AJOUTER
- [ ] **Enrichir sections existantes**
- [ ] **Variété sémantique** : 5+ variations

### 4.5 Pages SubCity (`content/pages/services/{service}.json`)

**Objectif : 800+ mots par page**

**CRITIQUE : Contenu UNIQUE pour éviter duplicate content**

Pour CHAQUE service (depannage, installation, motorisation, entretien, reparation, deblocage) :

- [ ] **Introduction locale** : 2-3 paragraphes ancrés à {zone}
  - Paragraphe 1 : Mention zone + code postal + quartiers
  - Paragraphe 2 : Contexte local (commerces, types de bâtiments)
  - Paragraphe 3 : Expérience dans la zone
  
- [ ] **Variété sémantique** : 3+ synonymes différents
  - Utiliser : grilles métalliques, fermetures, stores, rideaux de fer
  
- [ ] **Mentions locales** : 2-3 par page
  - Quartiers spécifiques
  - Rues connues
  - Points d'intérêt (centre-ville, zone d'activité, etc.)
  
- [ ] **Test de similarité** :
  - [ ] Copier 2 paragraphes de la page SubCity
  - [ ] Comparer avec homepage
  - [ ] Si >70% similaire → REWRITE obligatoire

### 4.6 Vérification Finale Contenu

- [ ] Homepage : ≥1500 mots ✓
- [ ] Installation : ≥1200 mots ✓
- [ ] Motorisation : ≥1200 mots ✓
- [ ] Entretien : ≥1200 mots ✓
- [ ] Pages SubCity : ≥800 mots chacune ✓
- [ ] Aucune page SubCity >70% similaire à homepage ✓

---

## ❓ PHASE 5 : OPTIMISATION FAQ

### 5.1 FAQ Homepage (`content/faq.json` - section "global")

**Objectif : 5-8 questions**

- [ ] **Question 1** (OBLIGATOIRE) : "Qui appeler pour un dépannage de rideau métallique à {VILLE} ?"
  - [ ] Réponse mentionne : ville, code postal, nom complet, téléphone, disponibilité 24/7
  - [ ] 2-4 phrases complètes
  
- [ ] **Question 2** : "Quel est le délai d'intervention à {VILLE} ?"
- [ ] **Question 3** : "Quels services proposez-vous pour les rideaux métalliques à {VILLE} ?"
- [ ] **Question 4** : "Comment obtenir un devis pour mon rideau métallique à {VILLE} ?"
- [ ] **Question 5** : "Intervenez-vous sur toutes les marques de rideaux métalliques ?"
- [ ] **Question 6** : "Travaillez-vous les week-ends et jours fériés ?"
- [ ] **Question 7** (optionnelle) : "Quelle garantie sur vos interventions ?"
- [ ] **Question 8** (optionnelle) : "Quels sont vos tarifs à {VILLE} ?"

### 5.2 FAQ Installation (`content/faq.json` - section "installation")

**Objectif : 4-6 questions**

- [ ] **Question 1** (OBLIGATOIRE) : "Qui appeler pour une installation de rideau métallique à {VILLE} ?"
- [ ] **Question 2** : "Combien coûte l'installation d'un rideau métallique à {VILLE} ?"
- [ ] **Question 3** : "Quel délai pour installer un rideau métallique ?"
- [ ] **Question 4** : "Quelle garantie sur l'installation ?"
- [ ] **Question 5** : "Quels types de rideaux métalliques installez-vous ?"
- [ ] **Question 6** (optionnelle) : "Proposez-vous un devis gratuit pour l'installation ?"

### 5.3 FAQ Motorisation (`content/faq.json` - section "motorisation")

**Objectif : 4-6 questions**

- [ ] **Question 1** (OBLIGATOIRE) : "Qui appeler pour une motorisation de rideau métallique à {VILLE} ?"
- [ ] **Question 2** : "Combien coûte la motorisation d'un rideau métallique ?"
- [ ] **Question 3** : "Quelles marques de moteurs installez-vous ?"
- [ ] **Question 4** : "Peut-on motoriser un rideau métallique existant ?"
- [ ] **Question 5** : "Quel est le délai d'installation d'un moteur ?"
- [ ] **Question 6** (optionnelle) : "Quelle garantie sur la motorisation ?"

### 5.4 FAQ Entretien (`content/faq.json` - section "entretien")

**Objectif : 4-6 questions**

- [ ] **Question 1** (OBLIGATOIRE) : "Qui appeler pour l'entretien de rideau métallique à {VILLE} ?"
- [ ] **Question 2** : "Pourquoi entretenir son rideau métallique ?"
- [ ] **Question 3** : "À quelle fréquence faire l'entretien ?"
- [ ] **Question 4** : "Que comprend un contrat d'entretien ?"
- [ ] **Question 5** : "Combien coûte un contrat d'entretien ?"
- [ ] **Question 6** (optionnelle) : "L'entretien est-il obligatoire ?"

### 5.5 FAQ SubCity (dans `content/pages/services/{service}.json`)

**Objectif : 3-5 questions PAR service**

Pour CHAQUE service :

- [ ] **Dépannage** :
  - [ ] Question 1 : "Qui appeler pour un dépannage de rideau métallique à {zone} ?"
  - [ ] Question 2 : "Quel est le délai d'intervention à {zone} ?"
  - [ ] Question 3 : "Comment obtenir un devis pour un dépannage à {zone} ?"
  - [ ] Question 4 : "Mon rideau est bloqué à {zone}, que faire ?"
  
- [ ] **Installation** :
  - [ ] Question 1 : "Qui appeler pour une installation à {zone} ?"
  - [ ] Question 2 : "Combien coûte l'installation à {zone} ?"
  - [ ] Question 3 : "Quel délai pour installer à {zone} ?"
  
- [ ] **Motorisation** :
  - [ ] Question 1 : "Qui appeler pour une motorisation à {zone} ?"
  - [ ] Question 2 : "Combien coûte la motorisation à {zone} ?"
  - [ ] Question 3 : "Dans quels quartiers de {zone} intervenez-vous ?"
  
- [ ] **Entretien** :
  - [ ] Question 1 : "Qui appeler pour l'entretien à {zone} ?"
  - [ ] Question 2 : "Proposez-vous des contrats d'entretien à {zone} ?"
  - [ ] Question 3 : "À quelle fréquence entretenir à {zone} ?"
  
- [ ] **Réparation** :
  - [ ] Question 1 : "Qui appeler pour une réparation à {zone} ?"
  - [ ] Question 2 : "Quel délai de réparation à {zone} ?"
  - [ ] Question 3 : "Quelle garantie sur les réparations à {zone} ?"
  
- [ ] **Déblocage** :
  - [ ] Question 1 : "Qui appeler pour un déblocage à {zone} ?"
  - [ ] Question 2 : "Intervention d'urgence possible à {zone} ?"
  - [ ] Question 3 : "Combien coûte un déblocage à {zone} ?"

### 5.6 Vérification Finale FAQ

- [ ] TOUTES les pages ont première question "Qui appeler..." ✓
- [ ] Toutes les réponses font 2-4 phrases minimum ✓
- [ ] Toutes les réponses mentionnent le téléphone ✓
- [ ] FAQ SubCity mentionnent {zone} et {zonePostal} ✓
- [ ] Toutes les questions sont pertinentes au contexte ✓

---

## 🔗 PHASE 6 : MAILLAGE INTERNE

### 6.1 Homepage (`app/page.tsx`)

**Objectif : 5-10 liens contextuels**

- [ ] **Lien vers Installation** dans section services ou texte
  - Ancre : "installation de rideaux métalliques à {VILLE}"
  
- [ ] **Lien vers Motorisation** dans texte
  - Ancre : "motorisation de rideau métallique"
  
- [ ] **Lien vers Entretien** dans texte
  - Ancre : "contrat d'entretien préventif"
  
- [ ] **Liens vers 3-5 zones SubCity** dans section Zones
  - Ancres : "{SERVICE} à {ZONE}"
  
- [ ] **Liens contextuels dans paragraphes** (pas en footer)
- [ ] Total : ≥5 liens ✓

### 6.2 Page Installation

**Objectif : 5-10 liens**

- [ ] Lien vers Homepage (dépannage)
  - Ancre : "dépannage d'urgence"
  
- [ ] Lien vers Motorisation
  - Ancre : "motorisation de votre rideau"
  
- [ ] Lien vers Entretien
  - Ancre : "contrat d'entretien à {VILLE}"
  
- [ ] Liens vers 3-5 zones pour installation
  - Ancres : "installation à {ZONE}"
  
- [ ] Total : ≥5 liens ✓

### 6.3 Page Motorisation

**Objectif : 5-10 liens**

- [ ] Lien vers Homepage
- [ ] Lien vers Installation
- [ ] Lien vers Entretien
- [ ] Liens vers zones
- [ ] Total : ≥5 liens ✓

### 6.4 Page Entretien

**Objectif : 5-10 liens**

- [ ] Lien vers Homepage
- [ ] Lien vers Installation
- [ ] Lien vers Motorisation
- [ ] Liens vers zones
- [ ] Total : ≥5 liens ✓

### 6.5 Pages SubCity (`app/[service]/[zone]/page.tsx`)

**Objectif : 5-10 liens PAR page**

**Section "Nos autres services à {ZONE}"** (déjà existante) :
- [ ] Liens vers 3-4 autres services dans cette zone
  - Ex: Si on est sur `/installation/vincennes`
    - Lien vers `/depannage/vincennes`
    - Lien vers `/motorisation/vincennes`
    - Lien vers `/entretien/vincennes`

**Section "Ce service dans les zones voisines"** (déjà existante) :
- [ ] Liens vers 4-6 zones proches pour le même service
  - Ex: Si on est sur `/installation/vincennes`
    - Lien vers `/installation/montreuil`
    - Lien vers `/installation/saint-mande`
    - Lien vers `/installation/fontenay-sous-bois`

**Liens contextuels dans le texte** :
- [ ] Ajouter 2-3 liens dans les paragraphes d'introduction
  - Lien vers service principal ({SERVICE} à {VILLE})
  - Lien vers autre service dans la zone
  
- [ ] Total : ≥5 liens par page SubCity ✓

### 6.6 Vérification Finale Maillage

- [ ] Toutes les pages principales ont ≥5 liens ✓
- [ ] Toutes les pages SubCity ont ≥5 liens ✓
- [ ] Toutes les ancres utilisent des mots-clés (pas "cliquez ici") ✓
- [ ] Tous les liens sont pertinents (services connexes, zones proches) ✓
- [ ] Tous les liens sont fonctionnels (test manuel) ✓

---

## 🧪 PHASE 7 : TESTS & VALIDATION

### 7.1 Tests Techniques

- [ ] **Google Rich Results Test** : https://search.google.com/test/rich-results
  - [ ] Tester homepage
  - [ ] Tester une page service
  - [ ] Tester une page SubCity
  - [ ] Corriger toutes les erreurs détectées
  
- [ ] **Google Mobile-Friendly Test** : https://search.google.com/test/mobile-friendly
  - [ ] Tester 3-5 pages
  - [ ] Score >90/100
  
- [ ] **Google PageSpeed Insights** : https://pagespeed.web.dev/
  - [ ] Tester homepage
  - [ ] Score mobile >80
  - [ ] Score desktop >90
  
- [ ] **Validation HTML** : https://validator.w3.org/
  - [ ] Tester homepage
  - [ ] Corriger erreurs critiques

### 7.2 Tests SEO

- [ ] **Test Duplicate Content** :
  - [ ] Utiliser Siteliner.com ou Screaming Frog
  - [ ] Vérifier que pages SubCity <70% similaires à homepage
  - [ ] Corriger si nécessaire
  
- [ ] **Test Variété Sémantique** :
  - [ ] Compter occurrences mots-clés par page
  - [ ] Vérifier 5+ variations présentes
  - [ ] Densité 1-2% (naturel)
  
- [ ] **Test Longueur Contenu** :
  - [ ] Homepage : ≥1500 mots
  - [ ] Pages services : ≥1200 mots
  - [ ] Pages SubCity : ≥800 mots

### 7.3 Tests Fonctionnels

- [ ] **Test Liens Internes** :
  - [ ] Cliquer sur tous les liens d'une page
  - [ ] Vérifier qu'aucun lien n'est cassé (404)
  - [ ] Vérifier que tous les liens s'ouvrent correctement
  
- [ ] **Test Téléphone** :
  - [ ] Vérifier numéro correct sur toutes les pages
  - [ ] Vérifier format `tel:` pour liens cliquables
  - [ ] Tester sur mobile (appel direct)
  
- [ ] **Test Navigation** :
  - [ ] Parcourir 5-10 pages au hasard
  - [ ] Vérifier breadcrumb (pages SubCity)
  - [ ] Vérifier menu navigation

### 7.4 Tests LLM

- [ ] **ChatGPT** : Poser la question "Qui appeler pour dépannage rideau métallique à {VILLE} ?"
  - [ ] Vérifier si le site est cité
  - [ ] Noter la réponse
  
- [ ] **Claude** : Même question
  - [ ] Vérifier si le site est cité
  
- [ ] **Perplexity** : Même question
  - [ ] Vérifier si le site est cité

### 7.5 Checklist Finale Validation

- [ ] Tous les meta tags sont uniques ✓
- [ ] Tous les schemas Schema.org sont valides ✓
- [ ] Aucune page avec duplicate content >70% ✓
- [ ] Toutes les FAQ commencent par "Qui appeler..." ✓
- [ ] Variété sémantique présente (5+ variations par page) ✓
- [ ] Maillage interne complet (5+ liens par page) ✓
- [ ] Tous les liens fonctionnent ✓
- [ ] Performance >80 mobile, >90 desktop ✓

---

## 🚀 PHASE 8 : DÉPLOIEMENT & MONITORING

### 8.1 Préparation Déploiement

- [ ] Build sans erreur : `npm run build`
- [ ] Tester build en local : `npm start`
- [ ] Vérifier toutes les pages accessibles
- [ ] Vérifier aucune erreur console

### 8.2 Soumission Google

- [ ] Créer/Mettre à jour `public/sitemap.xml`
  - [ ] Inclure toutes les pages (homepage, services, SubCity)
  - [ ] Priority correcte (homepage 1.0, services 0.9, SubCity 0.7)
  - [ ] lastmod avec date actuelle
  
- [ ] Soumettre sitemap dans Google Search Console
- [ ] Demander indexation pour 5-10 pages clés
- [ ] Vérifier robots.txt (autoriser crawl)

### 8.3 Monitoring Hebdomadaire

- [ ] **Semaine 1** :
  - [ ] Google Search Console : Vérifier indexation
  - [ ] Positions sur mots-clés principaux
  - [ ] Erreurs d'exploration
  
- [ ] **Semaine 2** :
  - [ ] Trafic organique Google Analytics
  - [ ] Pages les plus visitées
  - [ ] Taux de rebond
  
- [ ] **Semaine 3** :
  - [ ] Test LLM (ChatGPT, Claude)
  - [ ] Rich Results (featured snippets)
  
- [ ] **Semaine 4** :
  - [ ] Bilan mensuel
  - [ ] Ajustements si nécessaire

### 8.4 KPIs à Suivre

**SEO Google** :
- [ ] Positions Top 3 sur "{service} rideau métallique {ville}"
- [ ] Trafic organique : +50% en 3 mois
- [ ] Taux de rebond : <40%
- [ ] Pages indexées : 100%

**SEO LLM** :
- [ ] Citations dans ChatGPT/Claude : ≥1 par semaine
- [ ] Rich Results : Featured snippets sur FAQ

**Conversion** :
- [ ] Taux de conversion : >3%
- [ ] Appels téléphoniques : +40% vs avant
- [ ] Devis demandés : +30%

---

## 📊 RÉCAPITULATIF PAR TYPE DE PAGE

### Homepage

- ✅ Meta : Title, Description (155-160 char), Keywords (7+), OG
- ✅ Schema : LocalBusiness, FAQPage
- ✅ Contenu : 1500+ mots, 5+ variations, 3 nouvelles sections
- ✅ FAQ : 5-8 questions, première = "Qui appeler..."
- ✅ Maillage : 5-10 liens contextuels

### Pages Services (Installation, Motorisation, Entretien)

- ✅ Meta : Title unique, Description unique, Keywords (5+), OG
- ✅ Schema : Service, FAQPage
- ✅ Contenu : 1200+ mots, 5+ variations, 2 nouvelles sections (Processus, Tarifs)
- ✅ FAQ : 4-6 questions, première = "Qui appeler pour {service}..."
- ✅ Maillage : 5-10 liens

### Pages SubCity (Service + Zone)

- ✅ Meta : Title unique avec zone, Description locale, Keywords avec zone
- ✅ Schema : BreadcrumbList, FAQPage
- ✅ Contenu : 800+ mots, 3+ variations, intro locale (2-3 paragraphes)
- ✅ FAQ : 3-5 questions, première = "Qui appeler pour {service} à {zone}..."
- ✅ Maillage : 5-10 liens (autres services + zones proches)
- ✅ **CRITIQUE** : <70% similarité avec homepage

---

## ⏱️ ESTIMATION TEMPS

| Phase | Durée Estimée |
|-------|---------------|
| Phase 1 : Audit | 30-60 min |
| Phase 2 : Meta Tags | 1-2h |
| Phase 3 : Données Structurées | 1-2h |
| Phase 4 : Contenu | 3-4h |
| Phase 5 : FAQ | 1-2h |
| Phase 6 : Maillage | 1h |
| Phase 7 : Tests | 1h |
| Phase 8 : Déploiement | 30 min |
| **TOTAL** | **8-13h** |

---

## 🎯 PRIORITÉS

### Priorité 1 (Critique)

- Meta tags homepage + 3 services principaux
- Schema LocalBusiness + FAQPage
- Première question FAQ sur toutes les pages
- Contenu SubCity unique (anti-duplicate)

### Priorité 2 (Important)

- Enrichissement contenu (longueur + variété)
- Schema BreadcrumbList + Service
- Maillage interne complet
- Tests validation

### Priorité 3 (Bonus)

- Optimisations performance
- Tests LLM
- Monitoring continu
- Ajustements fins

---

*TODO créé pour l'optimisation SEO multi-villes des sites DRM*
