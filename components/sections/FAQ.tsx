"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  variant?: "default" | "compact";
  showContact?: boolean;
}

export function FAQ({ 
  title = "Questions fréquentes", 
  subtitle,
  items,
  variant = "default",
  showContact = true
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="label mb-6">
                <span className="label-number">05</span>
                FAQ
              </span>
              <h2 className="mb-6">
                {title}
              </h2>
              <p className="text-neutral-500 mb-8">
                {subtitle || "Retrouvez les réponses aux questions les plus courantes."}
              </p>

              {showContact && (
                <div className="p-6 bg-neutral-900 text-white">
                  <p className="text-sm text-neutral-400 mb-4">
                    Vous avez une autre question ?
                  </p>
                  <a 
                    href={siteConfig.phoneLink}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-semibold">{siteConfig.phone}</span>
                    <span className="w-10 h-10 flex items-center justify-center bg-white/10 group-hover:bg-white group-hover:text-neutral-900 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Questions */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-neutral-200">
              {items.map((item, index) => (
                <div key={index} className="py-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between text-left group"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-start gap-4 pr-8">
                      <span className="flex-shrink-0 text-sm font-medium text-neutral-400 mt-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-lg font-medium transition-colors
                        ${openIndex === index ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-900'}`}>
                        {item.question}
                      </span>
                    </div>
                    <span 
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all
                        ${openIndex === index 
                          ? 'border-neutral-900 bg-neutral-900 text-white rotate-45' 
                          : 'border-neutral-200 text-neutral-400 group-hover:border-neutral-400'
                        }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-out
                      ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="pl-10 pr-12">
                      <p 
                        className="text-neutral-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/<[^>]*>/g, '')
      }
    }))
  };
}
