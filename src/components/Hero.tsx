import React from 'react';
import { MapPin, ArrowDown, Utensils, Phone, Clock, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&auto=format&fit=crop&q=85"
          alt="Sky Brew Rooftop Dining Ambiance Jabalpur"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-10000"
          loading="eager"
        />
        {/* Deep Charcoal Gradients for readability & warm lighting aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/75 to-[#0b0d10]/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0b0d10]/40 to-[#0b0d10]/95" />
      </div>

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Location & Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171b22]/90 border border-[#d4af37]/30 backdrop-blur-md mb-6 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#f0e7db] font-semibold">
            Gwarighat • Jabalpur
          </span>
          <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
          <span className="text-xs text-[#a89f91] hidden sm:inline">4th Floor Rooftop</span>
        </div>

        {/* Primary Title */}
        <h1
          id="hero-main-title"
          className="font-serif-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#fbf7f0] leading-[1.08] mb-4 drop-shadow-md"
        >
          SKY BREW
        </h1>

        {/* Sub-headline */}
        <p className="font-serif-title italic text-xl sm:text-2xl md:text-3xl text-[#d4af37] tracking-wide mb-5 max-w-2xl">
          Where Great Food Meets The Sky
        </p>

        {/* Supporting Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#c3bbb0] max-w-2xl font-light leading-relaxed mb-8">
          {RESTAURANT_INFO.subtitle} Savor authentic North Indian curries, stone-baked pizzas, aromatic biryanis, and crafted cold brews with breathtaking rooftop vistas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            href="#menu"
            id="hero-explore-menu-btn"
            className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Menu</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-get-directions-btn"
            className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#151921]/90 hover:bg-[#1f2530] text-[#f2ede6] hover:text-[#d4af37] border border-[#2d3545] hover:border-[#d4af37]/60 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 pt-8 border-t border-[#222731]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#a89f91] mb-1">Cuisine</span>
            <span className="text-xs sm:text-sm font-medium text-[#eae5df]">Multi-Cuisine & Cafe</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#a89f91] mb-1">Setting</span>
            <span className="text-xs sm:text-sm font-medium text-[#eae5df]">Rooftop & Lounge</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#a89f91] mb-1">Hours</span>
            <span className="text-xs sm:text-sm font-medium text-[#eae5df]">11:00 AM – 11:00 PM</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-[#a89f91] mb-1">Cost For Two</span>
            <span className="text-xs sm:text-sm font-medium text-[#eae5df]">₹1,500 – ₹1,600</span>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <a
          href="#about"
          id="hero-scroll-indicator"
          className="mt-10 inline-flex flex-col items-center gap-1.5 text-[#a89f91] hover:text-[#d4af37] transition-colors focus:outline-none group"
          aria-label="Scroll down to about section"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll to Discover</span>
          <div className="w-6 h-10 rounded-full border border-[#2d3442] group-hover:border-[#d4af37] flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1.5 h-2.5 rounded-full bg-[#d4af37] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
