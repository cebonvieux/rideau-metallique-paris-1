"use client";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessusProps {
  title?: string;
  subtitle?: string;
  steps: Step[];
}

export function Processus({ 
  title = "Comment se déroule notre intervention ?",
  subtitle = "Un processus simple et efficace pour une intervention rapide",
  steps 
}: ProcessusProps) {
  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div>
            <span className="label mb-6">
              <span className="w-8 h-px bg-neutral-900 mr-3" />
              Processus
            </span>
            <h2>{title}</h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-neutral-500 max-w-md">{subtitle}</p>
          </div>
        </div>

        {/* Timeline horizontale */}
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="absolute top-16 left-0 right-0 h-px bg-neutral-200 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Numéro */}
                <div className="relative z-10 mb-8">
                  <div className="w-16 h-16 bg-neutral-900 text-white flex items-center justify-center text-2xl font-bold group-hover:bg-emerald-600 transition-colors">
                    {step.number}
                  </div>
                  {/* Point de connexion */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-1/2 left-full w-full h-px bg-neutral-200 hidden lg:block" />
                  )}
                </div>

                {/* Contenu */}
                <h3 className="font-semibold text-lg text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
