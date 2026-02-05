/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  
  // Redirections des anciennes URLs vers les nouvelles URLs subcity
  // Note: Ces redirections fonctionnent en dev mais pas en export statique.
  // Pour la production, configurer les redirects dans nginx ou le hosting.
  async redirects() {
    return [
      // Anciennes URLs /zones/{zone} → /depannage-rideau-metallique-{zone}
      {
        source: '/zones/:zone',
        destination: '/depannage-rideau-metallique-:zone',
        permanent: true,
      },
      // Anciennes URLs /{service}/paris-2 → /{service-base}-paris-2
      {
        source: '/installation-rideau-metallique-paris-1/:zone',
        destination: '/installation-rideau-metallique-:zone',
        permanent: true,
      },
      {
        source: '/motorisation-rideau-metallique-paris-1/:zone',
        destination: '/motorisation-rideau-metallique-:zone',
        permanent: true,
      },
      {
        source: '/entretien-rideau-metallique-paris-1/:zone',
        destination: '/entretien-rideau-metallique-:zone',
        permanent: true,
      },
      {
        source: '/deblocage-rideau-metallique-paris-1/:zone',
        destination: '/deblocage-rideau-metallique-:zone',
        permanent: true,
      },
      {
        source: '/reparation/:zone',
        destination: '/reparation-rideau-metallique-:zone',
        permanent: true,
      },
      {
        source: '/depannage/:zone',
        destination: '/depannage-rideau-metallique-:zone',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

