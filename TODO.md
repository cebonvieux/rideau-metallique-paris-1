# ✅ TODO - Création Site DRM Paris 1er

> **Liste des tâches** pour créer depannage-rideaumetallique-paris-1.fr

---

## 📋 INFORMATIONS DU PROJET

```
Site : depannage-rideaumetallique-paris-1.fr
Téléphone : 01 85 09 99 36
Ville : Paris 1er (75001)
```

---

## 🚀 PHASE 1 : CONFIGURATION INITIALE ✅

### 1.1 Configuration du site
- [x] Mettre à jour `config/site.ts` avec les informations Paris 1er
  - Nom : DRM Paris 1
  - Téléphone : 01 85 09 99 36
  - Email : contact@depannage-rideaumetallique-paris-1.fr
  - Adresse : 1 Place du Châtelet, 75001 Paris
  - Coordonnées GPS : 48.8584, 2.3470

### 1.2 Configuration des zones
- [x] Créer/mettre à jour `config/zones.ts` avec :
  - **5 quartiers Paris 1er** : Les Halles, Louvre, Palais-Royal, Place Vendôme, Châtelet
  - **9 arrondissements limitrophes** : Paris 2, 3, 4, 5, 6, 7, 8, 9, 10
  - **7 communes proches** : Boulogne-Billancourt, Neuilly, Levallois, Clichy, Saint-Denis, Vincennes, Montreuil

### 1.3 Configuration Tailwind
- [x] Vérifier les couleurs dans `tailwind.config.js`
- [x] Vérifier les fonts (Plus Jakarta Sans, DM Sans)

---

## 📄 PHASE 2 : PAGES PRINCIPALES ✅

### 2.1 Layout principal
- [x] Mettre à jour `app/layout.tsx`
  - Schema LocalBusiness avec infos Paris 1er
  - Métadonnées globales
  - Google Fonts

### 2.2 Header & Footer
- [x] Mettre à jour `components/layout/Header.tsx`
  - Logo DRM Paris 1
  - Téléphone 01 85 09 99 36
  - Navigation vers services

- [x] Mettre à jour `components/layout/Footer.tsx`
  - Coordonnées complètes
  - Liens vers services
  - Zones d'intervention
  - Liens légaux

### 2.3 Page d'accueil (`/`)
- [x] Créer/mettre à jour `app/page.tsx`
  - Hero : "Dépannage Rideau Métallique Paris 1er (75001)"
  - Section Services (5 services)
  - Section Déblocage
  - Section Pannes courantes
  - Section Urgence 24/7
  - Section "Pourquoi nous choisir"
  - Section Zones d'intervention (carte Paris)
  - Section Avis clients (5 avis)
  - Section FAQ (première question = "Qui appeler...")
  - CTA final

### 2.4 Page Dépannage (`/depannage/`)
- [x] Créer/mettre à jour `app/depannage/page.tsx`
  - H1 : "Dépannage Rideau Métallique Paris 1 - Urgence 24h/24"
  - Types de pannes réparées
  - Processus d'intervention
  - Tarifs indicatifs
  - Zones dépannage
  - FAQ dépannage
  - Avis dépannage

### 2.5 Page Installation (`/installation/`)
- [x] Créer/mettre à jour `app/installation/page.tsx`
  - H1 : "Installation Rideau Métallique Paris 1er"
  - Processus d'installation
  - Types de rideaux installés
  - Secteurs d'activité
  - Garanties
  - FAQ installation
  - Avis installation

### 2.6 Page Entretien (`/entretien/`)
- [x] Créer/mettre à jour `app/entretien/page.tsx`
  - H1 : "Entretien Rideau Métallique Paris 1er"
  - Signes d'usure
  - Avantages de l'entretien
  - Prestations détaillées
  - Contrats (Essentiel, Pro, Premium)
  - Section économies
  - FAQ entretien
  - Avis entretien

### 2.7 Page Motorisation (`/motorisation/`)
- [x] Créer/mettre à jour `app/motorisation/page.tsx`
  - H1 : "Motorisation Rideau Métallique Paris 1er"
  - Avantages motorisation
  - Types de moteurs
  - Accessoires
  - Comparatif manuel vs motorisé
  - ROI
  - FAQ motorisation
  - Avis motorisation

### 2.8 Page Contact (`/contact/`)
- [x] Créer/mettre à jour `app/contact/page.tsx`
  - H1 : "Contact DRM Paris 1 - Devis Gratuit"
  - Coordonnées (tél, email, adresse)
  - Section confiance
  - Engagements qualité
  - Formulaire de contact
  - Google Maps (Place du Châtelet)
  - FAQ contact

---

## 🗺️ PHASE 3 : PAGES SUBCITY ✅

### 3.1 SubCity via Route Dynamique Générique
- [x] Route dynamique `app/[service]/[zone]/page.tsx` génère toutes les pages SubCity
- [x] 132+ pages SubCity générées automatiquement (6 services × 22 zones)

### 3.2 Contenu personnalisé par zone
- [x] H1 unique avec nom de zone : "Dépannage Rideau Métallique Les Halles"
- [x] Métadonnées SEO dynamiques (title, description, OG)
- [x] Variables dynamiques : {zone}, {zonePostal}, {name}, {phone}
- [x] Code postal correct pour chaque zone

### 3.3 FAQ dynamique
- [x] Première question : "Qui appeler pour [service] à [zone] ?"
- [x] Questions personnalisées avec zone et code postal
- [x] Réponses adaptées au contexte local

### 3.4 Maillage interne
- [x] Liens vers autres services dans la même zone
- [x] Liens vers le même service dans les zones voisines
- [x] Breadcrumb : Accueil > Service > Zone

---

## 🧩 PHASE 4 : COMPOSANTS ✅

### 4.1 Composants UI
- [x] `components/ui/FloatingButton.tsx` - Bouton téléphone flottant avec numéro visible
- [x] Vérifier tous les composants sections existants

### 4.2 Composants Sections
- [x] `components/sections/Hero.tsx` - Hero adaptable (variantes: default, service, zone)
- [x] `components/sections/Services.tsx` - Grille 5 services avec maillage interne
- [x] `components/sections/WhyUs.tsx` - Pourquoi nous choisir
- [x] `components/sections/Zones.tsx` - Zones d'intervention (catégorisées)
- [x] `components/sections/FAQ.tsx` - FAQ accordéon avec accessibilité + schéma
- [x] `components/sections/CTA.tsx` - Call to action (variantes: default, urgence, dark)
- [x] `components/sections/Tarifs.tsx` - Grille tarifaire (variantes: grid, list)

### 4.3 Autres composants vérifiés
- [x] `components/sections/Urgence.tsx` - Section urgence 24/7
- [x] `components/sections/Deblocage.tsx` - Section déblocage
- [x] `components/sections/PannesCourantes.tsx` - Grille pannes
- [x] `components/sections/Reviews.tsx` - Avis clients
- [x] `components/sections/Processus.tsx` - Étapes d'intervention
- [x] `components/sections/Secteurs.tsx` - Secteurs d'activité
- [x] `components/sections/Garanties.tsx` - Garanties
- [x] `components/sections/SignesUsure.tsx` - Signes d'usure
- [x] `components/sections/Contrats.tsx` - Contrats entretien
- [x] `components/sections/Economies.tsx` - Économies entretien
- [x] `components/sections/ROI.tsx` - Retour sur investissement
- [x] `components/sections/Comparatif.tsx` - Manuel vs Motorisé
- [x] `components/sections/Accessoires.tsx` - Accessoires motorisation

---

## 📝 PHASE 5 : CONTENU ✅

### 5.1 Contenu JSON
- [x] Mettre à jour `content/pages/home.json` (ajout section FAQ)
- [x] Mettre à jour `content/pages/depannage.json`
- [x] Créer `content/pages/installation.json`
- [x] Mettre à jour `content/pages/entretien.json`
- [x] Mettre à jour `content/pages/motorisation.json`
- [x] Créer `content/pages/contact.json`

### 5.2 FAQ
- [x] Mettre à jour `content/faq.json` avec toutes les FAQ (par service)
- [x] Vérifier que chaque FAQ commence par "Qui appeler..."
- [x] Ajouter FAQ aux fichiers services SubCity (depannage, installation, entretien, motorisation, deblocage, reparation)

### 5.3 Tarifs
- [x] Mettre à jour `content/tarifs.json` (structure complète par catégorie)

---

## 📊 PHASE 6 : SEO & TECHNIQUE

### 6.1 Sitemap
- [ ] Créer `public/sitemap.xml` avec toutes les URLs
  - Pages principales (priorité 0.9-1.0)
  - Pages SubCity (priorité 0.7)
  - Pages légales (priorité 0.3)

### 6.2 Robots.txt
- [ ] Créer/vérifier `public/robots.txt`

### 6.3 Métadonnées
- [ ] Vérifier métadonnées de chaque page
- [ ] Vérifier Open Graph tags
- [ ] Vérifier Twitter cards

### 6.4 Schema.org
- [ ] LocalBusiness sur toutes les pages
- [ ] FAQPage sur pages avec FAQ
- [ ] BreadcrumbList sur pages SubCity

---

## 🖼️ PHASE 7 : ASSETS

### 7.1 Images
- [ ] Logo DRM Paris 1
- [ ] Images hero
- [ ] Images services
- [ ] Images zones (photos Paris)
- [ ] Favicons

### 7.2 Optimisation
- [ ] Conversion en WebP
- [ ] Compression images
- [ ] Lazy loading

---

## ✅ PHASE 8 : VÉRIFICATION FINALE

### 8.1 Checklist SEO
- [ ] Tous les H1 contiennent "Paris 1" ou zone
- [ ] Toutes les FAQ commencent par "Qui appeler..."
- [ ] Tous les avis mentionnent service + zone
- [ ] Téléphone visible 5+ fois par page
- [ ] Métadonnées uniques par page
- [ ] Schema.org valide

### 8.2 Checklist Technique
- [ ] Build sans erreur (`npm run build`)
- [ ] Export statique fonctionnel
- [ ] Toutes les pages accessibles
- [ ] Liens internes fonctionnels
- [ ] Mobile responsive
- [ ] Performance (Lighthouse > 90)

### 8.3 Checklist Contenu
- [ ] Numéro 01 85 09 99 36 correct partout
- [ ] Pas de contenu Lorem ipsum
- [ ] Pas de [PLACEHOLDER] oubliés
- [ ] Coordonnées GPS correctes

---

## 🚀 PHASE 9 : DÉPLOIEMENT

### 9.1 Préparation
- [ ] Vérifier `next.config.js` (output: 'export')
- [ ] Générer le build final
- [ ] Tester en local le dossier `out/`

### 9.2 Déploiement
- [ ] Configurer DNS pour depannage-rideaumetallique-paris-1.fr
- [ ] Configurer serveur (nginx)
- [ ] Déployer les fichiers
- [ ] Configurer HTTPS (Let's Encrypt)

### 9.3 Post-déploiement
- [ ] Tester toutes les pages en production
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier indexation

---

## 📈 ESTIMATION DU TEMPS

| Phase | Durée estimée |
|-------|---------------|
| Phase 1 : Configuration | 1h |
| Phase 2 : Pages principales | 4h |
| Phase 3 : Pages SubCity | 3h |
| Phase 4 : Composants | 2h |
| Phase 5 : Contenu | 2h |
| Phase 6 : SEO | 1h |
| Phase 7 : Assets | 1h |
| Phase 8 : Vérification | 1h |
| Phase 9 : Déploiement | 1h |
| **TOTAL** | **~16h** |

---

## 📝 NOTES

### Priorités
1. **Critique** : Configuration site + Page accueil + Page dépannage
2. **Important** : Autres pages principales + SubCity dépannage
3. **Normal** : SubCity autres services + SEO complet
4. **Bonus** : Optimisations performance

### Points d'attention
- Le téléphone `01 85 09 99 36` doit être présent partout
- Chaque page SubCity doit avoir du contenu unique
- Les FAQ doivent toutes commencer par "Qui appeler..."
- Les avis doivent mentionner service + zone

---

*TODO créé pour depannage-rideaumetallique-paris-1.fr*
