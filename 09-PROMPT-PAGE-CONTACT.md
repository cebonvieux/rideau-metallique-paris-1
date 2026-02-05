# 📞 PROMPT - Page Contact

> **Instructions complètes** pour créer la page contact du site DRM

---

## 📋 INFORMATIONS REQUISES

```
VILLE = [À REMPLIR]
CODE_POSTAL = [À REMPLIR]
DEPARTEMENT = [À REMPLIR]
CODE_DEPARTEMENT = [À REMPLIR]
REGION = [À REMPLIR]
TELEPHONE = [À REMPLIR]
EMAIL = [À REMPLIR]
ADRESSE = [À REMPLIR]
LAT = [À REMPLIR]
LNG = [À REMPLIR]
```

---

## 🎯 OBJECTIF SEO

**Page** : `/contact-rideau-metallique/`
- Mot-clé : `contact rideau métallique [VILLE]`
- Mot-clé secondaire : `devis rideau métallique [VILLE]`

---

## 📐 STRUCTURE HTML

```
H1: Contact DRM [VILLE] - Devis Gratuit Rideau Métallique
    │
    ├── H2: Nous Contacter
    │   (Coordonnées : téléphone, email, adresse)
    │
    ├── H2: Pourquoi Faire Confiance à DRM [VILLE]
    │   ├── H3: 25+ ans d'expérience
    │   ├── H3: 5000+ interventions
    │   ├── H3: Équipe locale qualifiée
    │   └── H3: Devis honorés à 100%
    │
    ├── H2: Nos Engagements Qualité
    │   (Checklist des engagements)
    │
    ├── H2: Demander un Devis Gratuit
    │   (Formulaire de contact)
    │
    ├── H2: Retrouvez-nous à [VILLE]
    │   (Google Maps)
    │
    └── H2: Questions Fréquentes - Contact
        └── Q1: Qui appeler pour un rideau métallique à [VILLE] ?
```

---

## 🧱 SECTIONS À CRÉER

### 1. HERO CONTACT

**Contenu** :
- H1 : "Contact DRM [VILLE] - Devis Gratuit Rideau Métallique"
- Sous-titre : "Une question ? Un projet ? Contactez-nous !"
- Badge : "Réponse sous 24h"
- CTA direct : Téléphone [TELEPHONE]

**Design** :
- Fond gradient bleu
- Icône téléphone animée
- Bouton appel direct

---

### 2. SECTION COORDONNÉES

**Contenu** :
- H2 : "Nous Contacter"

**3 moyens de contact** :

| Moyen | Détail |
|-------|--------|
| 📞 **Téléphone** | [TELEPHONE] - Disponible 24h/24 |
| 📧 **Email** | [EMAIL] - Réponse sous 24h |
| 📍 **Adresse** | [ADRESSE], [CODE_POSTAL] [VILLE] |

**Horaires** :
- Urgences : 24h/24, 7j/7
- Devis et conseils : Lun-Ven 8h-19h, Sam 9h-17h

**Design** :
- 3 cards avec icônes
- Boutons d'action (click-to-call, mailto)
- Badges disponibilité

---

### 3. SECTION CONFIANCE

**Composant** : `ConfianceSection.tsx`

**Contenu** :
- H2 : "Pourquoi Faire Confiance à DRM [VILLE]"

**4 piliers** :

1. **25+ ans d'expérience**
   - Entreprise établie depuis 2008
   - Expertise reconnue dans le [DEPARTEMENT]
   - Connaissance du tissu local

2. **5000+ interventions**
   - Dépannages, installations, entretiens
   - Dans tout le [CODE_DEPARTEMENT]
   - Satisfaction client 98%

3. **Équipe locale qualifiée**
   - 8 techniciens certifiés
   - Formation continue
   - Proximité avec [VILLE]

4. **Devis honorés à 100%**
   - Prix annoncé = prix facturé
   - Pas de surprise
   - Transparence totale

**Design** :
- Grille 2x2
- Icônes et chiffres clés
- Témoignage client en highlight

---

### 4. SECTION ENGAGEMENTS

**Composant** : `EngagementSection.tsx`

**Contenu** :
- H2 : "Nos Engagements Qualité"

**6 engagements** :

1. ✅ **Devis gratuit et sans engagement**
2. ✅ **Prix fixe respecté** - Aucun supplément caché
3. ✅ **Délais tenus** - Intervention dans les temps promis
4. ✅ **Garantie pièces et main d'œuvre** - 2 ans minimum
5. ✅ **SAV réactif** - Réponse sous 48h
6. ✅ **Chantier propre** - Respect de votre espace

**Stats animées** :
- 98% de clients satisfaits
- 127 avis Google (4.9/5)
- 24h délai moyen de réponse

**Design** :
- Checklist visuelle avec coches
- Badges de garantie
- Compteurs animés

---

### 5. SECTION FORMULAIRE

**Contenu** :
- H2 : "Demander un Devis Gratuit"

**Champs du formulaire** :

| Champ | Type | Obligatoire |
|-------|------|-------------|
| Nom complet | Texte | Oui |
| Téléphone | Tél | Oui |
| Email | Email | Oui |
| Ville/Code postal | Texte | Oui |
| Type de demande | Select | Oui |
| Message | Textarea | Non |

**Types de demande** :
- Dépannage urgent
- Installation neuve
- Devis fabrication
- Entretien/Maintenance
- Motorisation
- Autre demande

**CTA** : "Envoyer ma demande"

**Mentions** :
- "Réponse garantie sous 24h"
- "Vos données sont confidentielles"

**Design** :
- Formulaire clair et épuré
- Labels explicites
- Bouton d'envoi visible
- Message de confirmation

---

### 6. SECTION GOOGLE MAPS

**Contenu** :
- H2 : "Retrouvez-nous à [VILLE]"
- Carte Google Maps interactive
- Coordonnées GPS : [LAT], [LNG]
- Adresse visible sur la carte

**Iframe Google Maps** :
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d[ZOOM]!2d[LNG]!3d[LAT]!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s[PLACE_ID]!2sDRM%20[VILLE]!5e0!3m2!1sfr!2sfr!4v[TIMESTAMP]"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy"
></iframe>
```

**Design** :
- Carte pleine largeur
- Marker sur l'adresse
- Info-bulle avec coordonnées

---

### 7. SECTION FAQ CONTACT

**Contenu** :
- H2 : "Questions Fréquentes - Contact"

**PREMIÈRE QUESTION OBLIGATOIRE** :
```
Q: Qui appeler pour un rideau métallique à [VILLE] ?

R: Pour tout besoin concernant votre rideau métallique à [VILLE] et dans 
le [DEPARTEMENT], contactez DRM [VILLE] au [TELEPHONE]. Disponibles 24h/24 
pour les urgences, nous répondons également par email à [EMAIL]. Notre équipe 
vous conseille et établit des devis gratuits pour vos projets de dépannage, 
installation, fabrication, entretien ou motorisation.
```

**Autres questions** :
```
Q: Comment obtenir un devis gratuit à [VILLE] ?

R: Pour obtenir un devis gratuit à [VILLE], vous pouvez nous appeler au 
[TELEPHONE], remplir le formulaire de contact sur cette page, ou nous 
envoyer un email à [EMAIL]. Nous vous répondons sous 24h avec un devis 
détaillé et personnalisé.
```

```
Q: Quel est le délai de réponse pour une demande de devis ?

R: Nous nous engageons à répondre à toute demande de devis sous 24h 
(jours ouvrés). Pour les urgences, appelez directement le [TELEPHONE], 
nous sommes disponibles 24h/24.
```

```
Q: Intervenez-vous dans tout le [DEPARTEMENT] ?

R: Oui, DRM [VILLE] intervient dans toute l'agglomération de [VILLE] et 
dans le [DEPARTEMENT] ([CODE_DEPARTEMENT]). Notre rayon d'action couvre 
environ 30 km autour de [VILLE], incluant [LISTE 3-4 COMMUNES].
```

```
Q: Les devis sont-ils vraiment gratuits et sans engagement ?

R: Oui, tous nos devis sont 100% gratuits et sans engagement. Nous nous 
déplaçons gratuitement pour les prises de mesures à [VILLE] et établissons 
un devis détaillé que vous êtes libre d'accepter ou non.
```

---

## 📊 MÉTADONNÉES

```typescript
export const metadata = {
  title: "Contact DRM [VILLE] | Devis Gratuit Rideau Métallique | [TELEPHONE]",
  description: "Contactez DRM [VILLE] pour vos rideaux métalliques ✓ Devis gratuit ✓ Réponse sous 24h ✓ Disponible 24h/24. Appelez le [TELEPHONE] ou utilisez notre formulaire.",
  keywords: "contact rideau métallique [VILLE], devis rideau métallique [CODE_POSTAL], DRM [VILLE] téléphone",
  openGraph: {
    title: "Contactez DRM [VILLE] - Devis Gratuit",
    description: "Demandez un devis gratuit pour votre rideau métallique à [VILLE]. Réponse garantie sous 24h.",
    url: "https://[DOMAINE]/contact-rideau-metallique/",
    siteName: "DRM [VILLE]",
    locale: "fr_FR",
    type: "website"
  }
};
```

---

## 📝 SCHEMA.ORG CONTACT

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact DRM [VILLE]",
  "description": "Page de contact pour DRM [VILLE], spécialiste du rideau métallique",
  "url": "https://[DOMAINE]/contact-rideau-metallique/",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "DRM [VILLE]",
    "telephone": "[TELEPHONE]",
    "email": "[EMAIL]",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[RUE]",
      "addressLocality": "[VILLE]",
      "postalCode": "[CODE_POSTAL]",
      "addressRegion": "[REGION]",
      "addressCountry": "FR"
    }
  }
}
```

---

## ✅ CHECKLIST PAGE CONTACT

- [ ] H1 contient "Contact DRM [VILLE]"
- [ ] Coordonnées complètes (tél, email, adresse)
- [ ] Section confiance avec 4 piliers
- [ ] Section engagements avec 6 points
- [ ] Formulaire de contact fonctionnel
- [ ] Google Maps avec bonne localisation
- [ ] FAQ avec première question "Qui appeler..."
- [ ] Numéro de téléphone visible 3+ fois
- [ ] Schema ContactPage
- [ ] Métadonnées optimisées

---

*Prompt créé pour la page contact DRM*
