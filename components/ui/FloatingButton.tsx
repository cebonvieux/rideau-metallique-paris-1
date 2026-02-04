"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <a
        href={siteConfig.phoneLink}
        className="group flex items-center gap-3 bg-neutral-900 text-white px-5 py-4 shadow-2xl hover:bg-neutral-800 transition-colors"
        aria-label={`Appeler le ${siteConfig.phone}`}
      >
        {/* Indicateur de disponibilité */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        
        {/* Texte */}
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400">Urgence 24h/24</span>
          <span className="font-semibold">{siteConfig.phone}</span>
        </div>

        {/* Icône */}
        <div className="ml-2 w-10 h-10 flex items-center justify-center bg-emerald-600 group-hover:bg-emerald-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
