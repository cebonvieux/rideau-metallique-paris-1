import { siteConfig } from "@/config/site";

interface TarifItem {
  name: string;
  priceFrom: number;
  priceTo?: number;
  description?: string;
  isPopular?: boolean;
}

interface TarifsProps {
  title?: string;
  items: TarifItem[];
}

export function Tarifs({ title = "Nos Tarifs", items }: TarifsProps) {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-primary mb-4">💰 Transparence</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto">
            Tarifs indicatifs. Devis gratuit communiqué avant intervention.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <div key={index} className={`relative bg-white rounded-xl p-6 shadow-sm border-2 transition-all ${item.isPopular ? 'border-primary-500 shadow-lg' : 'border-gray-100 hover:border-primary-200'}`}>
              {item.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Le plus demandé
                </span>
              )}
              <h3 className="font-bold text-lg text-gray-900 mb-2">{item.name}</h3>
              {item.description && <p className="text-gray-600 text-sm mb-4">{item.description}</p>}
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-gray-500">À partir de</span>
                <span className="text-3xl font-bold text-primary-600">{item.priceFrom}€</span>
                {item.priceTo && (
                  <>
                    <span className="text-gray-400">-</span>
                    <span className="text-xl font-semibold text-gray-700">{item.priceTo}€</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Devis gratuit et sans engagement</h3>
              <p className="text-gray-600 text-sm">
                Les tarifs sont donnés à titre indicatif. Un devis précis vous sera communiqué par téléphone avant intervention.
              </p>
            </div>
            <a href={siteConfig.phoneLink} className="btn-primary whitespace-nowrap">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

