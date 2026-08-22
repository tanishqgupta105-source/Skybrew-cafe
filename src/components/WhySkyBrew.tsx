import React from 'react';
import { Clock, Building2, MapPin, Sparkles } from 'lucide-react';
import { WHY_SKY_BREW_STATS } from '../data/restaurantData';

export const WhySkyBrew: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Clock className="w-5 h-5 text-[#d4af37]" />;
      case 1:
        return <Building2 className="w-5 h-5 text-[#d4af37]" />;
      case 2:
        return <MapPin className="w-5 h-5 text-[#d4af37]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section id="why-us" className="py-12 bg-[#090b0e] border-y border-[#1c222c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#1e2430]">
          {WHY_SKY_BREW_STATS.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-box-${idx + 1}`}
              className={`flex flex-col items-center text-center px-4 ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}
            >
              <div className="w-10 h-10 rounded-full bg-[#141820] border border-[#262e3d] flex items-center justify-center mb-3 text-[#d4af37]">
                {getIcon(idx)}
              </div>
              <p className="font-serif-title text-2xl sm:text-3xl font-bold text-[#f7f3ed] mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-[#8f8576] font-light">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
