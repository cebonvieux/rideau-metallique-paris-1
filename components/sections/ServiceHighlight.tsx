"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface ServiceHighlightProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  ctaLink: string;
  ctaText: string;
  imageOnRight?: boolean;
  badge?: {
    label: string;
    value: string;
  };
}

export function ServiceHighlight({ 
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  ctaLink,
  ctaText,
  imageOnRight = false,
  badge
}: ServiceHighlightProps) {
  return (
    <section className="bg-white border-t border-neutral-200">
      <div className={`grid lg:grid-cols-2 ${imageOnRight ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Image */}
        <div className={`relative h-[50vh] lg:h-auto ${imageOnRight ? 'lg:col-start-2' : ''}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/20" />
          
          {/* Badge optionnel */}
          {badge && (
            <div className="absolute bottom-8 left-8 bg-white px-6 py-4">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">{badge.label}</span>
              <span className="block text-3xl font-black text-neutral-900">{badge.value}</span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <div className={`p-8 lg:p-16 xl:p-24 flex flex-col justify-center ${imageOnRight ? 'lg:col-start-1' : ''}`}>
          <span className="label mb-6">
            <span className="w-8 h-px bg-neutral-900 mr-3" />
            {subtitle}
          </span>

          <h2 className="mb-4">{title}</h2>
          <p className="text-neutral-500 mb-8">{description}</p>

          {/* Features */}
          <ul className="space-y-3 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="w-5 h-5 flex items-center justify-center bg-neutral-100 text-neutral-900">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link href={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
            <a href={siteConfig.phoneLink} className="btn-outline">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
