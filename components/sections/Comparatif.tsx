"use client";

interface ComparatifPoint {
  text: string;
  good: boolean;
}

interface ComparatifSide {
  label: string;
  points: ComparatifPoint[];
}

interface ComparatifProps {
  title?: string;
  subtitle?: string;
  manuel: ComparatifSide;
  motorise: ComparatifSide;
}

export function Comparatif({ 
  title = "Manuel vs Motorisé : le comparatif",
  subtitle = "Découvrez pourquoi 90% de nos clients choisissent la motorisation",
  manuel,
  motorise
}: ComparatifProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="label justify-center mb-6">
            <span className="w-8 h-px bg-neutral-900 mr-3" />
            Comparatif
            <span className="w-8 h-px bg-neutral-900 ml-3" />
          </span>
          <h2 className="mb-6">{title}</h2>
          <p className="text-lg text-neutral-500">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-200 max-w-4xl mx-auto">
          {/* Manuel */}
          <div className="bg-white p-8 md:p-10">
            <div className="mb-8 pb-6 border-b border-neutral-200">
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Option 1</span>
              <h3 className="text-2xl font-semibold text-neutral-900">{manuel.label}</h3>
            </div>

            <ul className="space-y-4">
              {manuel.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${
                    point.good ? 'text-emerald-600' : 'text-neutral-300'
                  }`}>
                    {point.good ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>
                  <span className={`text-sm ${point.good ? 'text-neutral-700' : 'text-neutral-400'}`}>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Motorisé */}
          <div className="bg-neutral-900 text-white p-8 md:p-10 relative">
            {/* Badge recommandé */}
            <div className="absolute top-4 right-4">
              <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider">
                Recommandé
              </span>
            </div>
            
            <div className="mb-8 pb-6 border-b border-neutral-700">
              <span className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Option 2</span>
              <h3 className="text-2xl font-semibold text-white">{motorise.label}</h3>
            </div>

            <ul className="space-y-4">
              {motorise.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center ${
                    point.good ? 'text-emerald-400' : 'text-neutral-600'
                  }`}>
                    {point.good ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </span>
                  <span className={`text-sm ${point.good ? 'text-neutral-200' : 'text-neutral-500'}`}>
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
