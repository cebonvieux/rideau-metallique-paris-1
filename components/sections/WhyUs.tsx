"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { getPageContent } from "@/lib/content";
import homeContent from "@/content/pages/home.json";

const content = getPageContent(homeContent);

export function WhyUs() {
  return (
    <section className="section bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full">
              <Image
                src="/images/gallery/fabrication-rideau-metallique-paris-1.webp"
                alt={`Technicien rideau métallique ${siteConfig.city}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-0 right-0 bg-neutral-900 text-white p-8 max-w-[280px]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="block text-3xl font-black">{content.stats.experience}</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">ans d&apos;exp.</span>
                </div>
                <div>
                  <span className="block text-3xl font-black">{content.stats.interventions}</span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">interventions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <span className="label mb-6">
              <span className="label-number">03</span>
              Pourquoi nous
            </span>
            
            <h2 className="mb-6">
              {content.whyUs.title.split(' ').slice(0, 3).join(' ')}<br />
              <span className="text-neutral-400">{content.whyUs.title.split(' ').slice(3).join(' ')}</span>
            </h2>
            
            <p className="text-lg text-neutral-500 mb-12 max-w-lg">
              {content.whyUs.subtitle}
            </p>

            {/* Avantages - Style liste numérotée */}
            <div className="space-y-6">
              {content.whyUs.advantages.map((advantage, index) => (
                <div key={index} className="group flex gap-6 p-6 border-l-2 border-neutral-200 hover:border-neutral-900 transition-colors">
                  <span className="flex-shrink-0 text-4xl font-black text-neutral-200 group-hover:text-neutral-900 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12">
              <a href={siteConfig.phoneLink} className="btn-dark">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
