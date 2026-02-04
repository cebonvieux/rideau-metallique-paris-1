"use client";

interface Secteur {
  icon: string;
  name: string;
  examples: string;
}

interface SecteursProps {
  title?: string;
  subtitle?: string;
  items: Secteur[];
}

export function Secteurs({ 
  title = "Secteurs d'activité",
  subtitle = "Nous intervenons pour tous types de commerces et locaux professionnels.",
  items 
}: SecteursProps) {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label mb-6">
            <span className="w-8 h-px bg-neutral-900 mr-3" />
            Secteurs
          </span>
          <h2 className="mb-6">{title}</h2>
          <p className="text-lg text-neutral-500">{subtitle}</p>
        </div>

        {/* Grille des secteurs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((secteur, index) => (
            <div 
              key={index} 
              className="group bg-white p-6 text-center border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 transition-all duration-300"
            >
              {/* Numéro discret */}
              <span className="block text-xs text-neutral-300 mb-4 group-hover:text-neutral-600 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-white transition-colors">
                {secteur.name}
              </h3>
              <p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">
                {secteur.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
