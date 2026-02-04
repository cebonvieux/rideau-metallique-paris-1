"use client";

interface Accessoire {
  icon: string;
  name: string;
  description: string;
}

interface AccessoiresProps {
  title?: string;
  subtitle?: string;
  items: Accessoire[];
}

export function Accessoires({ 
  title = "Accessoires et options",
  subtitle = "Personnalisez votre installation avec nos accessoires",
  items 
}: AccessoiresProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label mb-6">
            <span className="w-8 h-px bg-neutral-900 mr-3" />
            Accessoires
          </span>
          <h2 className="mb-6">{title}</h2>
          <p className="text-lg text-neutral-500">{subtitle}</p>
        </div>

        {/* Grille des accessoires */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((accessoire, index) => (
            <div 
              key={index} 
              className="group p-6 text-center border border-neutral-200 hover:border-neutral-900 transition-colors"
            >
              {/* Numéro */}
              <span className="block text-3xl font-black text-neutral-100 mb-4 group-hover:text-neutral-200 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <h3 className="font-semibold text-sm text-neutral-900 mb-1">
                {accessoire.name}
              </h3>
              <p className="text-xs text-neutral-500">
                {accessoire.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
