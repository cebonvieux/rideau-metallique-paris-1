# 📘 Guide d'Utilisation : Fichiers SEO Génériques

> **Comment utiliser ces fichiers pour optimiser le SEO de n'importe quel site DRM**

---

## 🎯 Vue d'Ensemble

Ce dossier contient **3 fichiers génériques** pour améliorer le SEO de vos sites de dépannage rideau métallique :

1. **`SEO-CONTEXTE-OPTIMISATION.md`** 📚
   - Document de référence complet
   - Toutes les règles et bonnes pratiques
   - Exemples concrets
   - Stratégie SEO Google + LLMs

2. **`SEO-PROMPT-CURSOR.md`** 🚀
   - Prompt clé-en-main à copier-coller dans Cursor
   - Instructions ultra-précises étape par étape
   - Prêt à utiliser après remplacement des variables

3. **`SEO-TODO.md`** ✅
   - Checklist détaillée de toutes les tâches
   - Organisation par phases
   - Critères de validation

---

## 🚀 Utilisation Rapide (3 Étapes)

### Étape 1 : Remplir les Variables

Dans `SEO-PROMPT-CURSOR.md`, section "INSTRUCTIONS PRÉLIMINAIRES", remplissez :

```
VILLE = Montreuil                           (ou Paris 1er, Vincennes, etc.)
CODE_POSTAL = 93100                          (ou 75001, 94300, etc.)
DEPARTEMENT = Seine-Saint-Denis              (ou Paris, Val-de-Marne, etc.)
CODE_DEPT = 93                               (ou 75, 94, etc.)
REGION = Île-de-France
TELEPHONE = 01 48 70 50 30                   (numéro de votre site)
NOM_COURT = DRM Montreuil
NOM_COMPLET = Dépannage Rideau Métallique Montreuil
DOMAINE = depannage-rideaumetallique-montreuil.fr
```

### Étape 2 : Remplacer les Variables dans le Prompt

Dans la section "PROMPT À COPIER-COLLER" du fichier `SEO-PROMPT-CURSOR.md`, faites un rechercher-remplacer :

```
{VILLE}         → Montreuil
{CODE_POSTAL}   → 93100
{DEPARTEMENT}   → Seine-Saint-Denis
{CODE_DEPT}     → 93
{REGION}        → Île-de-France
{TELEPHONE}     → 01 48 70 50 30
{NOM_COURT}     → DRM Montreuil
{NOM_COMPLET}   → Dépannage Rideau Métallique Montreuil
{DOMAINE}       → depannage-rideaumetallique-montreuil.fr
```

### Étape 3 : Copier-Coller dans Cursor

1. Copiez **tout le prompt** (section markdown entre les ````markdown` et `````)
2. Ouvrez Cursor dans le projet du site
3. Collez le prompt dans le chat Cursor
4. Laissez Cursor travailler !

---

## 📚 Détail des Fichiers

### 1. SEO-CONTEXTE-OPTIMISATION.md

**Contenu :**
- Stratégie SEO Google + LLMs (ChatGPT, Claude)
- Règles anti-duplicate content (CRITIQUE pour pages SubCity)
- Structure meta tags optimale (title, description, keywords, OG)
- Données structurées Schema.org (LocalBusiness, FAQPage, BreadcrumbList, Service)
- Variété sémantique (rideau métallique, rideau de fer, grille, store)
- Enrichissement contenu textuel (longueur, sections à ajouter)
- Maillage interne intelligent
- FAQ (règle #1 : "Qui appeler pour...")
- Exemples concrets avec bonnes/mauvaises pratiques

**Utilisation :**
- Lecture OBLIGATOIRE avant de commencer
- Référence pendant toute l'optimisation
- Cursor peut aussi le lire automatiquement

### 2. SEO-PROMPT-CURSOR.md

**Contenu :**
- Prompt complet en 6 étapes :
  1. Audit de l'existant
  2. Optimisation meta tags
  3. Optimisation données structurées
  4. Enrichissement contenu
  5. Optimisation FAQ
  6. Maillage interne
- Instructions ultra-précises avec exemples de code
- Checklist finale de validation

**Utilisation :**
- Remplir les variables en haut
- Copier tout le prompt dans Cursor
- Cursor suivra les étapes automatiquement

### 3. SEO-TODO.md

**Contenu :**
- 8 phases détaillées :
  1. Audit & Préparation
  2. Optimisation Meta Tags
  3. Données Structurées
  4. Enrichissement Contenu
  5. Optimisation FAQ
  6. Maillage Interne
  7. Tests & Validation
  8. Déploiement & Monitoring
- Checklist avec cases à cocher
- Critères de validation par phase
- Estimation temps (8-13h total)

**Utilisation :**
- Suivre la checklist au fur et à mesure
- Cocher les cases complétées
- Vérifier que tous les critères sont respectés

---

## 🎯 Cas d'Usage Typiques

### Cas 1 : Nouveau Site à Créer

1. Créer le site avec structure standard
2. Configurer `config/site.ts` avec infos ville
3. Utiliser le prompt SEO pour optimiser dès le départ
4. Vérifier avec la TODO checklist

### Cas 2 : Site Existant à Améliorer

1. Lire `SEO-CONTEXTE-OPTIMISATION.md`
2. Faire un audit rapide (Phase 1 de la TODO)
3. Utiliser le prompt Cursor
4. Suivre la TODO pour validation

### Cas 3 : Dupliquer un Site pour Nouvelle Ville

1. Copier le projet du site source
2. Mettre à jour `config/site.ts` (nouvelle ville)
3. Mettre à jour `config/zones.ts` (nouvelles zones)
4. Utiliser le prompt SEO adapté à la nouvelle ville
5. Vérifier anti-duplicate content (pages SubCity)

---

## ⚠️ Points Critiques à Surveiller

### 1. Duplicate Content (Pages SubCity)

**Problème :**
Si toutes les pages SubCity ont le même contenu avec juste le nom de ville changé, Google pénalise.

**Solution :**
- Contenu unique par zone (2-3 paragraphes ancrés localement)
- Variété sémantique (utiliser différents synonymes)
- Mentions locales (quartiers, rues, caractéristiques)
- Test : <70% de similarité avec homepage

**Fichiers concernés :**
- `app/[service]/[zone]/page.tsx`
- `content/pages/services/*.json` (section intro)

### 2. Première Question FAQ

**Règle ABSOLUE :**
Sur TOUTES les pages, la première FAQ doit être :
```
"Qui appeler pour {service} à {ville/zone} ?"
```

**Fichiers concernés :**
- `content/faq.json` (toutes les sections)
- Réponse doit mentionner : ville, code postal, téléphone, disponibilité

### 3. Variété Sémantique

**Objectif :**
Minimum 5 variations du mot-clé principal par page.

**Synonymes à utiliser :**
- Rideau métallique
- Rideau de fer
- Grille métallique
- Store métallique
- Fermeture métallique
- Rideau de magasin
- Volet roulant métallique

### 4. Longueur de Contenu

**Minimums :**
- Homepage : 1500+ mots
- Pages services : 1200+ mots
- Pages SubCity : 800+ mots

**Comment augmenter :**
- Ajouter sections (Types de rideaux, Secteurs, Expertise)
- Détailler les processus
- Enrichir les descriptions

---

## 📊 Résultats Attendus

### Après Optimisation

**SEO Google :**
- Top 3 sur "dépannage rideau métallique {VILLE}"
- Top 5 sur "{service} rideau métallique {VILLE}"
- Top 10 sur "{service} rideau métallique {ZONE}"
- +50% trafic organique en 3 mois

**SEO LLM :**
- Site cité dans réponses ChatGPT/Claude
- Featured snippets sur FAQ
- Rich results dans Google

**Conversion :**
- +40% appels téléphoniques
- +30% demandes de devis
- Taux de conversion >3%

### Délais

- **Optimisation initiale** : 8-13h de travail
- **Indexation Google** : 2-4 semaines
- **Résultats visibles** : 1-3 mois
- **Plein effet** : 3-6 mois

---

## 🛠️ Outils Recommandés

### Tests & Validation

- **Google Rich Results Test** : https://search.google.com/test/rich-results
  → Valider données structurées Schema.org

- **Google Search Console** : https://search.google.com/search-console
  → Soumettre sitemap, suivre indexation, positions

- **Google PageSpeed Insights** : https://pagespeed.web.dev/
  → Tester performance (>80 mobile, >90 desktop)

- **Siteliner** : https://www.siteliner.com/
  → Détecter duplicate content entre pages

### Monitoring

- **Google Analytics** : Trafic organique, pages vues, taux de rebond
- **Google Search Console** : Positions, impressions, CTR
- **ChatGPT/Claude** : Tester si site est cité dans réponses

---

## 📝 Exemples Concrets

### Exemple : Montreuil

**Variables :**
```
VILLE = Montreuil
CODE_POSTAL = 93100
DEPARTEMENT = Seine-Saint-Denis
CODE_DEPT = 93
TELEPHONE = 01 48 70 50 30
NOM_COURT = DRM Montreuil
NOM_COMPLET = Dépannage Rideau Métallique Montreuil
DOMAINE = depannage-rideaumetallique-montreuil.fr
```

**Meta Title Homepage :**
```
Dépannage Rideau Métallique Montreuil (93100) | 24h/24 - DRM Montreuil
```

**Meta Description Homepage :**
```
Dépannage rideau métallique à Montreuil (93100). Intervention en 30 min, 24h/24. 
Déblocage, réparation, motorisation. ☎️ 01 48 70 50 30. 127 avis - Note 4.9/5.
```

**Première Question FAQ :**
```
Q: Qui appeler pour un dépannage de rideau métallique à Montreuil ?
R: Pour tout dépannage de rideau métallique à Montreuil (93100), contactez 
Dépannage Rideau Métallique Montreuil au 01 48 70 50 30. Notre équipe intervient 
24h/24 et 7j/7 dans tout Seine-Saint-Denis.
```

### Exemple : Paris 1er (Site Actuel)

**Variables :**
```
VILLE = Paris 1er
CODE_POSTAL = 75001
DEPARTEMENT = Paris
CODE_DEPT = 75
TELEPHONE = 01 85 09 99 36
NOM_COURT = DRM Paris 1
NOM_COMPLET = Dépannage Rideau Métallique Paris 1er
DOMAINE = depannage-rideaumetallique-paris-1.fr
```

**Meta Title Homepage :**
```
Dépannage Rideau Métallique Paris 1er (75001) | 24h/24 - DRM Paris 1
```

---

## ✅ Checklist Avant de Commencer

- [ ] J'ai lu `SEO-CONTEXTE-OPTIMISATION.md` en entier
- [ ] J'ai rempli toutes les variables dans `SEO-PROMPT-CURSOR.md`
- [ ] J'ai remplacé toutes les occurrences de {VILLE}, {CODE_POSTAL}, etc.
- [ ] J'ai la TODO checklist imprimée ou ouverte à côté
- [ ] Le site est configuré dans `config/site.ts` avec les bonnes infos
- [ ] Les zones sont configurées dans `config/zones.ts`

**→ C'est bon, je peux copier le prompt dans Cursor !**

---

## 🆘 Résolution de Problèmes

### Problème 1 : Cursor ne suit pas le prompt

**Solution :**
- Vérifier que toutes les variables sont remplacées
- Relire la section du prompt où Cursor bloque
- Demander à Cursor de lire `SEO-CONTEXTE-OPTIMISATION.md`

### Problème 2 : Pages SubCity trop similaires

**Solution :**
- Ajouter 2-3 paragraphes uniques par zone
- Utiliser synonymes différents (grille, store, fermeture)
- Mentionner quartiers locaux, rues spécifiques
- Tester avec Siteliner (doit être <70% similaire)

### Problème 3 : Schemas Schema.org invalides

**Solution :**
- Tester avec Google Rich Results Test
- Vérifier syntaxe JSON (virgules, guillemets)
- Vérifier que toutes les propriétés requises sont présentes
- Comparer avec exemples du document contexte

### Problème 4 : Contenu trop court

**Solution :**
- Ajouter sections : Types de rideaux, Secteurs, Expertise, Processus, Tarifs
- Détailler chaque avantage (2-3 phrases)
- Enrichir FAQ (6-8 questions homepage, 4-6 services)
- Ajouter paragraphes d'introduction (3-4 par page service)

---

## 📞 Support

Pour toute question sur l'utilisation de ces fichiers :

1. Relire `SEO-CONTEXTE-OPTIMISATION.md` (réponse probablement dedans)
2. Consulter la section "Exemples Concrets" ci-dessus
3. Vérifier la TODO checklist (critères de validation)

---

## 🎓 Pour Aller Plus Loin

### Après l'Optimisation Initiale

1. **Monitoring hebdomadaire** (Phase 8 de la TODO)
   - Positions Google Search Console
   - Trafic Google Analytics
   - Test LLM (ChatGPT, Claude)

2. **Optimisations continues**
   - Ajouter nouveaux avis clients
   - Enrichir FAQ (nouvelles questions)
   - Créer contenu blog (optionnel)
   - Optimiser images (WebP, lazy loading)

3. **SEO Local avancé**
   - Google My Business optimisé
   - Avis Google réguliers
   - Citations NAP (Name, Address, Phone)
   - Backlinks locaux

---

*Guide créé pour faciliter l'utilisation des fichiers SEO génériques DRM*
