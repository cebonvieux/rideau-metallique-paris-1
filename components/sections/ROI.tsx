"use client";

interface ROIItem {
  icon: string;
  value: string;
  label: string;
  description: string;
}

interface ROIProps {
  title?: string;
  subtitle?: string;
  items: ROIItem[];
}

export function ROI({ 
  title = "Retour sur investissement",
  subtitle = "La motorisation, un investissement rapidement rentabilisé",
  items 
}: ROIProps) {
  return (
    <section className="bg-emerald-900 text-white py-24 md:py-32">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mb-16">
          <span className="label text-emerald-400 mb-6">
            <span className="w-8 h-px bg-emerald-500 mr-3" />
            ROI
          </span>
          <h2 className="text-white mb-6">{title}</h2>
          <p className="text-lg text-emerald-200">{subtitle}</p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="text-center">
              <span className="block text-5xl md:text-6xl font-black text-white mb-2">
                {item.value}
              </span>
              <span className="block text-sm font-semibold text-emerald-300 uppercase tracking-wider mb-3">
                {item.label}
              </span>
              <p className="text-sm text-emerald-200/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
