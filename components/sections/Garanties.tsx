"use client";

interface Garantie {
  icon: string;
  title: string;
  description: string;
}

interface GarantiesProps {
  title?: string;
  subtitle?: string;
  items: Garantie[];
}

export function Garanties({ 
  title = "Nos garanties",
  subtitle = "Nous nous engageons sur la qualité de nos interventions.",
  items 
}: GarantiesProps) {
  return (
    <section className="bg-neutral-900 text-white py-24 md:py-32">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label text-neutral-500 mb-6">
            <span className="w-8 h-px bg-neutral-700 mr-3" />
            Garanties
          </span>
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-lg text-neutral-400">{subtitle}</p>
        </div>

        {/* Grille des garanties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
          {items.map((garantie, index) => (
            <div 
              key={index} 
              className="group bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors"
            >
              {/* Numéro */}
              <span className="block text-5xl font-black text-neutral-800 mb-6 group-hover:text-neutral-700 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-semibold text-xl text-white mb-3">
                {garantie.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {garantie.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
