# 🚀 INSTRUCTIONS CURSOR - Création Site DRM

> **Guide pratique** pour créer un site DRM complet avec Cursor

---

## 📋 ÉTAPE 1 : REMPLIR LES INFORMATIONS

Avant de commencer, remplir ce template avec les informations de la ville :

```
=== INFORMATIONS À COPIER/COLLER DANS CURSOR ===

VILLE = 
CODE_POSTAL = 
DEPARTEMENT = 
CODE_DEPARTEMENT = 
REGION = 
TELEPHONE = 
EMAIL = 
DOMAINE = depannage-rideau-metallique-[ville-slug].fr
ADRESSE = 
LAT = 
LNG = 

=== FIN DES INFORMATIONS ===
```

---

## 🎯 ÉTAPE 2 : PROMPT INITIAL POUR CURSOR

Copier ce prompt dans Cursor pour démarrer le projet :

```
Je souhaite créer un site Next.js pour une entreprise de dépannage de rideaux 
métalliques. Voici les informations :

VILLE = [VILLE]
CODE_POSTAL = [CODE_POSTAL]
DEPARTEMENT = [DEPARTEMENT]
CODE_DEPARTEMENT = [CODE_DEPARTEMENT]
REGION = [REGION]
TELEPHONE = [TELEPHONE]
EMAIL = [EMAIL]
DOMAINE = [DOMAINE]
ADRESSE = [ADRESSE]
COORDONNEES_GPS = [LAT], [LNG]

OBJECTIFS :
1. Créer un site SEO local pour "dépannage rideau métallique [VILLE]"
2. Structure Next.js 14 avec App Router
3. Export statique (output: 'export')
4. Tailwind CSS pour le styling
5. TypeScript

STRUCTURE DES PAGES :
- Page d'accueil (/)
- Page Dépannage (/depannage-rideau-metallique/)
- Page Installation (/installation-rideau-metallique/)
- Page Fabrication (/fabrication-rideau-metallique/)
- Page Entretien (/entretien-rideau-metallique/)
- Page Motorisation (/motorisation-rideau-metallique/)
- Page Contact (/contact-rideau-metallique/)
- Pages SubCity pour chaque service (ex: /depannage-rideau-metallique/[zone]/)

RÈGLES SEO IMPORTANTES :
1. Chaque H1 doit contenir le mot-clé principal + la ville
2. La première question de CHAQUE FAQ doit être "Qui appeler pour [service] à [ville]?"
3. Les avis clients doivent mentionner le service ET la zone
4. Éviter le contenu dupliqué entre les pages SubCity
5. Utiliser des variantes géographiques (ville, code postal, département, région)

Commence par créer la structure du projet et les fichiers de configuration 
(config/site.ts et config/zones.ts).

Pour les zones d'intervention, recherche les communes autour de [VILLE] 
dans un rayon de 30km et crée la liste des quartiers de [VILLE].
```

---

## 🔄 ÉTAPE 3 : PROMPTS SÉQUENTIELS

Après la création de la structure initiale, utiliser ces prompts dans l'ordre :

### 3.1 Configuration des zones

```
Maintenant, crée le fichier config/zones.ts avec :
1. Les quartiers de [VILLE] (3-5 quartiers principaux)
2. Les communes environnantes (10-15 communes dans un rayon de 30km)

Recherche sur internet les communes autour de [VILLE] pour être précis.

Pour chaque zone, inclure :
- name : Nom complet
- slug : URL slug (minuscules, tirets)
- postalCode : Code postal
- isQuartier : true/false
```

### 3.2 Page d'accueil

```
Crée la page d'accueil (app/page.tsx) en suivant ces instructions :

RÉFÉRENCE : Fichier 03-PROMPT-PAGE-ACCUEIL.md

La page doit inclure :
1. Hero avec H1 "Dépannage Rideau Métallique [VILLE]"
2. Section Services (5 services)
3. Section Déblocage
4. Section Pannes courantes
5. Section Urgence 24/7
6. Section "Pourquoi nous choisir"
7. Section Zones d'intervention
8. Section Avis clients (5 avis minimum)
9. Section FAQ (première question = "Qui appeler...")
10. CTA final

Utilise les composants existants si possible, sinon crée-les.
```

### 3.3 Page Dépannage + SubCity

```
Crée la page Dépannage (app/depannage-rideau-metallique/page.tsx) et 
les pages SubCity (app/depannage-rideau-metallique/[zone]/page.tsx).

RÉFÉRENCE : Fichier 04-PROMPT-PAGE-DEPANNAGE.md

IMPORTANT :
1. Génère les pages SubCity pour TOUTES les zones de config/zones.ts
2. Chaque SubCity a des avis UNIQUES mentionnant "dépannage" + "[zone]"
3. La première question FAQ = "Qui appeler pour un dépannage à [zone]?"
4. Sections spécifiques : WhyChooseUs et TarifsSection
```

### 3.4 Page Fabrication + SubCity

```
Crée la page Fabrication (app/fabrication-rideau-metallique/page.tsx) et 
les pages SubCity (app/fabrication-rideau-metallique/[zone]/page.tsx).

RÉFÉRENCE : Fichier 05-PROMPT-PAGE-FABRICATION.md

IMPORTANT :
1. Sections spécifiques : SurMesureLocal et NormesCertificationsLocal
2. Avis mentionnant "fabrication" + "[zone]"
3. Types de rideaux fabriqués
```

### 3.5 Page Entretien + SubCity

```
Crée la page Entretien (app/entretien-rideau-metallique/page.tsx) et 
les pages SubCity (app/entretien-rideau-metallique/[zone]/page.tsx).

RÉFÉRENCE : Fichier 06-PROMPT-PAGE-ENTRETIEN.md

IMPORTANT :
1. Sections spécifiques : ContratEntretien et SignesUsureLocal
2. Tableau des contrats (Essentiel, Pro, Premium)
3. Section économies avec comparatif
```

### 3.6 Page Motorisation + SubCity

```
Crée la page Motorisation (app/motorisation-rideau-metallique/page.tsx) et 
les pages SubCity (app/motorisation-rideau-metallique/[zone]/page.tsx).

RÉFÉRENCE : Fichier 07-PROMPT-PAGE-MOTORISATION.md

IMPORTANT :
1. Sections spécifiques : AvantagesMotorisation et MarquesMoteurs
2. Comparatif Manuel vs Motorisé
3. Section ROI
```

### 3.7 Page Installation + SubCity

```
Crée la page Installation (app/installation-rideau-metallique/page.tsx) et 
les pages SubCity (app/installation-rideau-metallique/[zone]/page.tsx).

RÉFÉRENCE : Fichier 08-PROMPT-PAGE-INSTALLATION.md

IMPORTANT :
1. Sections spécifiques : TypesRideaux et ProcessusInstallationLocal
2. 6 types de rideaux installés
3. 6 secteurs d'activité
```

### 3.8 Page Contact

```
Crée la page Contact (app/contact-rideau-metallique/page.tsx).

RÉFÉRENCE : Fichier 09-PROMPT-PAGE-CONTACT.md

IMPORTANT :
1. Formulaire de contact fonctionnel
2. Google Maps avec les bonnes coordonnées
3. Section Confiance et Section Engagements
```

### 3.9 Sitemap et finalisation

```
Crée le fichier public/sitemap.xml avec toutes les URLs du site :
- Pages principales (priorité 0.9-1.0)
- Pages SubCity (priorité 0.7)
- Pages légales (priorité 0.3)

Crée aussi public/robots.txt.

Vérifie que :
1. Tous les H1 contiennent la ville
2. Toutes les FAQ commencent par "Qui appeler..."
3. Les métadonnées sont uniques pour chaque page
4. Les données structurées (Schema.org) sont en place
```

---

## ✅ CHECKLIST FINALE

### Configuration
- [ ] config/site.ts avec toutes les infos
- [ ] config/zones.ts avec quartiers et communes
- [ ] tailwind.config.ts configuré

### Pages Principales
- [ ] Page d'accueil
- [ ] Page Dépannage
- [ ] Page Installation
- [ ] Page Fabrication
- [ ] Page Entretien
- [ ] Page Motorisation
- [ ] Page Contact

### Pages SubCity (pour chaque service × chaque zone)
- [ ] SubCity Dépannage (toutes zones)
- [ ] SubCity Installation (toutes zones)
- [ ] SubCity Fabrication (toutes zones)
- [ ] SubCity Entretien (toutes zones)
- [ ] SubCity Motorisation (toutes zones)

### SEO
- [ ] sitemap.xml
- [ ] robots.txt
- [ ] Métadonnées uniques
- [ ] Schema.org LocalBusiness
- [ ] Schema.org FAQPage

### Vérifications
- [ ] Build sans erreur (npm run build)
- [ ] Toutes les pages accessibles
- [ ] Liens internes fonctionnels
- [ ] Mobile responsive
- [ ] Numéro de téléphone correct partout

---

## 📚 FICHIERS DE RÉFÉRENCE

| Fichier | Contenu |
|---------|---------|
| `01-CONTEXTE-GLOBAL.md` | Informations générales, identité visuelle, règles SEO |
| `02-ARCHITECTURE-GLOBALE.md` | Structure des fichiers, configuration, sitemap |
| `03-PROMPT-PAGE-ACCUEIL.md` | Instructions page d'accueil |
| `04-PROMPT-PAGE-DEPANNAGE.md` | Instructions page dépannage + SubCity |
| `05-PROMPT-PAGE-FABRICATION.md` | Instructions page fabrication + SubCity |
| `06-PROMPT-PAGE-ENTRETIEN.md` | Instructions page entretien + SubCity |
| `07-PROMPT-PAGE-MOTORISATION.md` | Instructions page motorisation + SubCity |
| `08-PROMPT-PAGE-INSTALLATION.md` | Instructions page installation + SubCity |
| `09-PROMPT-PAGE-CONTACT.md` | Instructions page contact |

---

## ⚠️ POINTS D'ATTENTION

1. **Anti-duplicate content** : Chaque page SubCity doit avoir du contenu unique
2. **FAQ obligatoire** : Première question = "Qui appeler pour [service] à [ville/zone]?"
3. **Avis locaux** : Mentionner le service ET la zone dans chaque avis
4. **Variantes géographiques** : Alterner ville, code postal, département, région
5. **Téléphone** : Doit apparaître 5+ fois sur chaque page
6. **Design cohérent** : Utiliser la même palette de couleurs et typographie

---

## 🎨 COULEURS À UTILISER

```css
/* Couleurs primaires */
--bleu-principal: #0077B6;
--bleu-fonce: #023E8A;
--bleu-clair: #48CAE4;

/* Couleurs secondaires */
--orange-cta: #E07B39;
--ocre: #E6A23C;
--sable: #FAF8F0;

/* Couleurs neutres */
--anthracite: #1F2937;
--gris: #6B7280;
--blanc: #FFFFFF;
```

---

## 📝 TYPOGRAPHIE

```css
/* Titres */
font-family: 'Plus Jakarta Sans', sans-serif;

/* Corps */
font-family: 'DM Sans', sans-serif;
```

---

*Instructions créées pour la duplication de sites DRM avec Cursor*
