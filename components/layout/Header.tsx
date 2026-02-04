"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig, navigation } from "@/config/site";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-neutral-100' 
            : 'bg-transparent'
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo - Texte simple */}
            <Link href="/" className="relative z-10">
              <span className="text-lg font-black tracking-tight text-neutral-900">
                DRM
              </span>
              <span className="hidden sm:inline text-lg font-light tracking-tight text-neutral-400 ml-1">
                Paris 1
              </span>
            </Link>

            {/* Navigation Desktop - Centrée */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm transition-colors
                    ${isActive(item.href)
                      ? 'text-neutral-900 font-medium'
                      : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-neutral-900" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <a 
                href={siteConfig.phoneLink} 
                className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {siteConfig.phone}
              </a>

              {/* Menu burger */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                aria-label={isMenuOpen ? "Fermer" : "Menu"}
              >
                <div className="relative w-6 h-4 flex flex-col justify-between">
                  <span 
                    className={`block h-0.5 bg-neutral-900 transition-all duration-300 origin-center
                      ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                  />
                  <span 
                    className={`block h-0.5 bg-neutral-900 transition-all duration-300
                      ${isMenuOpen ? 'opacity-0' : ''}`}
                  />
                  <span 
                    className={`block h-0.5 bg-neutral-900 transition-all duration-300 origin-center
                      ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile - Plein écran */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-500
          ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-white" />
        
        <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
          {/* Navigation */}
          <nav className="flex-1 flex flex-col justify-center">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group py-4 border-b border-neutral-100 transition-all duration-300
                  ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 50 + 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-3xl font-light ${isActive(item.href) ? 'text-neutral-900' : 'text-neutral-400'}`}>
                    {item.label}
                  </span>
                  <span className="text-sm text-neutral-300 group-hover:text-neutral-900 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Footer du menu */}
          <div 
            className={`pt-8 border-t border-neutral-100 transition-all duration-300 delay-300
              ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <a 
              href={siteConfig.phoneLink}
              className="flex items-center justify-between p-4 bg-neutral-900 text-white"
            >
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">Urgence 24h/24</p>
                <p className="text-xl font-semibold">{siteConfig.phone}</p>
              </div>
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
