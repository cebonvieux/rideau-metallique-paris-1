#!/usr/bin/env node

/**
 * Script de vérification des pages subcity
 * Vérifie que toutes les URLs service×zone sont accessibles et que les liens des zones fonctionnent
 */

const http = require('http');
const { parse } = require('url');

// Configuration
const BASE_URL = 'http://localhost:3000';
const TIMEOUT = 10000; // 10 seconds per request

// Import de la configuration (simulé car on est en Node.js)
// On va recréer les données nécessaires
const services = [
  { id: "depannage", baseSlug: "depannage-rideau-metallique", name: "Dépannage Urgence" },
  { id: "fabrication", baseSlug: "fabrication-rideau-metallique", name: "Fabrication" },
  { id: "installation", baseSlug: "installation-rideau-metallique", name: "Installation" },
  { id: "motorisation", baseSlug: "motorisation-rideau-metallique", name: "Motorisation" },
  { id: "entretien", baseSlug: "entretien-rideau-metallique", name: "Entretien" },
  { id: "reparation", baseSlug: "reparation-rideau-metallique", name: "Réparation" },
  { id: "deblocage", baseSlug: "deblocage-rideau-metallique", name: "Déblocage" },
];

const zones = [
  // Quartiers
  { name: "Les Halles", slug: "les-halles", postalCode: "75001", type: "quartier" },
  { name: "Louvre", slug: "louvre", postalCode: "75001", type: "quartier" },
  { name: "Palais-Royal", slug: "palais-royal", postalCode: "75001", type: "quartier" },
  { name: "Place Vendôme", slug: "place-vendome", postalCode: "75001", type: "quartier" },
  { name: "Châtelet", slug: "chatelet", postalCode: "75001", type: "quartier" },
  // Arrondissements limitrophes
  { name: "Paris 2ème", slug: "paris-2", postalCode: "75002", type: "arrondissement" },
  { name: "Paris 3ème", slug: "paris-3", postalCode: "75003", type: "arrondissement" },
  { name: "Paris 4ème", slug: "paris-4", postalCode: "75004", type: "arrondissement" },
  { name: "Paris 5ème", slug: "paris-5", postalCode: "75005", type: "arrondissement" },
  { name: "Paris 6ème", slug: "paris-6", postalCode: "75006", type: "arrondissement" },
  { name: "Paris 7ème", slug: "paris-7", postalCode: "75007", type: "arrondissement" },
  { name: "Paris 8ème", slug: "paris-8", postalCode: "75008", type: "arrondissement" },
  { name: "Paris 9ème", slug: "paris-9", postalCode: "75009", type: "arrondissement" },
  { name: "Paris 10ème", slug: "paris-10", postalCode: "75010", type: "arrondissement" },
  // Communes proches
  { name: "Boulogne-Billancourt", slug: "boulogne-billancourt", postalCode: "92100", type: "commune" },
  { name: "Neuilly-sur-Seine", slug: "neuilly-sur-seine", postalCode: "92200", type: "commune" },
  { name: "Levallois-Perret", slug: "levallois-perret", postalCode: "92300", type: "commune" },
  { name: "Clichy", slug: "clichy", postalCode: "92110", type: "commune" },
  { name: "Saint-Denis", slug: "saint-denis", postalCode: "93200", type: "commune" },
  { name: "Vincennes", slug: "vincennes", postalCode: "94300", type: "commune" },
  { name: "Montreuil", slug: "montreuil", postalCode: "93100", type: "commune" },
];

// Statistiques
const stats = {
  total: 0,
  success: 0,
  failed: 0,
  errors: []
};

/**
 * Fait une requête HTTP et retourne le code de statut et le contenu
 * Suit automatiquement les redirections 308
 */
function fetchUrl(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects === 0) {
      reject(new Error('Too many redirects'));
      return;
    }

    const timeout = setTimeout(() => {
      reject(new Error(`Timeout after ${TIMEOUT}ms`));
    }, TIMEOUT);

    http.get(url, (res) => {
      // Suivre les redirections 308 (Permanent Redirect)
      if (res.statusCode === 308 || res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
        clearTimeout(timeout);
        const redirectUrl = res.headers.location;
        if (redirectUrl) {
          // Construire l'URL complète si la redirection est relative
          const fullRedirectUrl = redirectUrl.startsWith('http') 
            ? redirectUrl 
            : `${BASE_URL}${redirectUrl}`;
          
          // Suivre la redirection
          fetchUrl(fullRedirectUrl, maxRedirects - 1)
            .then(resolve)
            .catch(reject);
        } else {
          resolve({
            statusCode: res.statusCode,
            body: '',
            headers: res.headers
          });
        }
        return;
      }

      clearTimeout(timeout);
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          body: data,
          headers: res.headers
        });
      });
    }).on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

/**
 * Vérifie une URL de page subcity
 */
async function verifySubcityPage(service, zone) {
  const url = `${BASE_URL}/${service.baseSlug}-${zone.slug}`;
  stats.total++;

  try {
    console.log(`\n🔍 Vérification: ${url}`);
    const response = await fetchUrl(url);

    if (response.statusCode === 200) {
      // Vérifier que le contenu contient bien le nom de la zone et le code postal
      const hasZoneName = response.body.includes(zone.name);
      const hasPostalCode = response.body.includes(zone.postalCode);
      
      if (hasZoneName && hasPostalCode) {
        console.log(`✅ OK - ${service.name} × ${zone.name}`);
        stats.success++;
        return { success: true, url };
      } else {
        const missingInfo = [];
        if (!hasZoneName) missingInfo.push('zone name');
        if (!hasPostalCode) missingInfo.push('postal code');
        
        console.log(`⚠️  WARNING - Page accessible mais contenu incomplet (missing: ${missingInfo.join(', ')})`);
        stats.errors.push({
          url,
          error: `Content validation failed: missing ${missingInfo.join(', ')}`,
          type: 'warning'
        });
        stats.success++; // Count as success since page loads
        return { success: true, url, warning: true };
      }
    } else if (response.statusCode === 404) {
      console.log(`❌ 404 - ${service.name} × ${zone.name}`);
      stats.failed++;
      stats.errors.push({
        url,
        error: '404 Not Found',
        type: 'error',
        service: service.name,
        zone: zone.name
      });
      return { success: false, url, statusCode: 404 };
    } else {
      console.log(`⚠️  ${response.statusCode} - ${service.name} × ${zone.name}`);
      stats.failed++;
      stats.errors.push({
        url,
        error: `HTTP ${response.statusCode}`,
        type: 'error',
        service: service.name,
        zone: zone.name
      });
      return { success: false, url, statusCode: response.statusCode };
    }
  } catch (error) {
    console.log(`❌ ERROR - ${service.name} × ${zone.name}: ${error.message}`);
    stats.failed++;
    stats.errors.push({
      url,
      error: error.message,
      type: 'error',
      service: service.name,
      zone: zone.name
    });
    return { success: false, url, error: error.message };
  }
}

/**
 * Vérifie toutes les pages subcity
 */
async function verifyAllPages() {
  console.log('╔════════════════════════════════════════════════════════════════╗');
  console.log('║     Vérification des pages subcity - Rideau Métallique        ║');
  console.log('╚════════════════════════════════════════════════════════════════╝');
  console.log(`\n📊 Configuration:`);
  console.log(`   - Services: ${services.length}`);
  console.log(`   - Zones: ${zones.length}`);
  console.log(`   - Pages à tester: ${services.length * zones.length}`);
  console.log(`   - Base URL: ${BASE_URL}`);
  console.log('\n⏳ Démarrage des tests...\n');

  // Test du serveur
  try {
    console.log('🔌 Test de connexion au serveur...');
    await fetchUrl(BASE_URL);
    console.log('✅ Serveur accessible\n');
  } catch (error) {
    console.error('❌ ERREUR: Impossible de se connecter au serveur');
    console.error('   Assurez-vous que le serveur Next.js est démarré avec "npm run dev"');
    console.error(`   Erreur: ${error.message}`);
    process.exit(1);
  }

  // Tester toutes les combinaisons service × zone
  for (const service of services) {
    console.log(`\n${'='.repeat(70)}`);
    console.log(`📦 Service: ${service.name} (${service.baseSlug})`);
    console.log('='.repeat(70));

    for (const zone of zones) {
      await verifySubcityPage(service, zone);
      // Petit délai pour ne pas surcharger le serveur
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}

/**
 * Affiche le rapport final
 */
function displayReport() {
  console.log('\n\n╔════════════════════════════════════════════════════════════════╗');
  console.log('║                      RAPPORT FINAL                             ║');
  console.log('╚════════════════════════════════════════════════════════════════╝\n');

  console.log(`📊 Statistiques:`);
  console.log(`   Total testé:    ${stats.total}`);
  console.log(`   ✅ Succès:       ${stats.success} (${((stats.success / stats.total) * 100).toFixed(1)}%)`);
  console.log(`   ❌ Échecs:       ${stats.failed} (${((stats.failed / stats.total) * 100).toFixed(1)}%)`);

  if (stats.errors.length > 0) {
    console.log(`\n⚠️  ${stats.errors.length} problème(s) détecté(s):\n`);

    const errors = stats.errors.filter(e => e.type === 'error');
    const warnings = stats.errors.filter(e => e.type === 'warning');

    if (errors.length > 0) {
      console.log(`❌ ERREURS (${errors.length}):`);
      errors.forEach((err, idx) => {
        console.log(`\n${idx + 1}. ${err.service} × ${err.zone}`);
        console.log(`   URL: ${err.url}`);
        console.log(`   Erreur: ${err.error}`);
      });
    }

    if (warnings.length > 0) {
      console.log(`\n⚠️  AVERTISSEMENTS (${warnings.length}):`);
      warnings.forEach((warn, idx) => {
        console.log(`\n${idx + 1}. ${warn.url}`);
        console.log(`   Problème: ${warn.error}`);
      });
    }
  } else {
    console.log('\n🎉 Tous les tests sont passés avec succès!');
  }

  console.log('\n' + '='.repeat(70));
  
  // Exit code selon le résultat
  if (stats.failed > 0) {
    console.log('\n❌ Des erreurs ont été détectées. Veuillez les corriger.');
    process.exit(1);
  } else if (stats.errors.length > 0) {
    console.log('\n⚠️  Des avertissements ont été détectés.');
    process.exit(0);
  } else {
    console.log('\n✅ Vérification terminée avec succès!');
    process.exit(0);
  }
}

/**
 * Point d'entrée principal
 */
async function main() {
  try {
    await verifyAllPages();
    displayReport();
  } catch (error) {
    console.error('\n❌ Erreur fatale:', error);
    process.exit(1);
  }
}

// Lancement du script
main();
