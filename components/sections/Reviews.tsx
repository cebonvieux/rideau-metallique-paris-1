"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

interface Review {
  author: string;
  rating: number;
  date: string;
  location: string;
  service: string;
  text: string;
}

interface ReviewsProps {
  title?: string;
  items: Review[];
}

// Composant Google Logo SVG
function GoogleLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

// Composant étoiles
function Stars({ rating, size = "normal" }: { rating: number; size?: "small" | "normal" }) {
  const starClass = size === "small" ? "w-3.5 h-3.5" : "w-5 h-5";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg 
          key={star} 
          className={`${starClass} ${star <= rating ? 'text-amber-400' : 'text-neutral-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// Composant carte Google Review
function GoogleReviewCard({ 
  review, 
  isActive = false,
  onClick
}: { 
  review: Review; 
  isActive?: boolean;
  onClick?: () => void;
}) {
  // Obtenir les initiales
  const initials = review.author.split(' ').map(n => n[0]).join('').toUpperCase();
  
  // Couleurs d'avatar basées sur les initiales
  const avatarColors = [
    'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 
    'bg-pink-600', 'bg-teal-600', 'bg-red-600', 'bg-indigo-600'
  ];
  const colorIndex = initials.charCodeAt(0) % avatarColors.length;

  return (
    <div 
      className={`bg-neutral-900 rounded-lg p-5 cursor-pointer transition-all duration-300 ${
        isActive ? 'ring-2 ring-white/30' : 'hover:bg-neutral-800'
      } ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {/* Header avec avatar et infos */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div className={`w-10 h-10 rounded-full ${avatarColors[colorIndex]} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white font-semibold text-sm">{initials[0]}</span>
        </div>
        
        {/* Nom et Google */}
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-sm truncate">{review.author}</h4>
          <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
            <span>Avis de</span>
            <GoogleLogo className="w-3.5 h-3.5" />
            <span>Google</span>
          </div>
        </div>
      </div>

      {/* Note et date */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-white font-medium text-sm">{review.rating}/5</span>
        <Stars rating={review.rating} size="small" />
        <span className="text-neutral-500 text-xs">· {review.date}</span>
      </div>

      {/* Texte de l'avis */}
      <p className="text-neutral-300 text-sm leading-relaxed">
        {review.text}
      </p>
    </div>
  );
}

export function Reviews({ title, items }: ReviewsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section bg-white">
      <div className="container">
        {/* En-tête */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="label mb-6">
              <span className="label-number">04</span>
              Témoignages
            </span>
            <h2>
              {title ? (
                <>{title}</>
              ) : (
                <>Ce que disent<br /><span className="text-neutral-400">nos clients</span></>
              )}
            </h2>
          </div>

          {/* Badge Google global */}
          <div className="flex items-center gap-4 p-5 bg-neutral-50 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm">
              <GoogleLogo className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-neutral-900">{siteConfig.reviews.rating}</span>
                <Stars rating={5} />
              </div>
              <p className="text-sm text-neutral-500">{siteConfig.reviews.count} avis vérifiés</p>
            </div>
          </div>
        </div>

        {/* Grille d'avis - Style Google Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((review, index) => (
            <GoogleReviewCard 
              key={index} 
              review={review}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href={`https://www.google.com/maps/place/${encodeURIComponent(siteConfig.fullName)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <GoogleLogo className="w-4 h-4" />
            Voir tous les avis sur Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
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
