import React from 'react';
import { Sparkles, Sunset, Coffee, Compass, Users, Clock, Music } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ExperienceProps {
  onOpenReservation: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenReservation }) => {
  const highlights = [
    { label: 'ROOFTOP', sub: 'Elevated 4th Floor open-air breezes' },
    { label: 'DINING', sub: 'Handcrafted multi-cuisine gourmet dishes' },
    { label: 'EVENINGS', sub: 'Warm golden lighting & city views' },
    { label: 'FLAVOURS', sub: 'Authentic Indian, Chinese & Continental' }
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#090b0e] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Cinematic Hero Card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#242b38] bg-[#11141b] shadow-2xl">
          
          {/* Main Visual Image with Gradient Overlay */}
          <div className="relative h-[380px] sm:h-[480px] lg:h-[550px] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=85"
              alt="Sky Brew Rooftop Evening Atmosphere"
              className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000"
            />
            {/* Cinematic Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/60 to-[#0b0d10]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10]/80 via-transparent to-[#0b0d10]/80" />

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0d10]/80 border border-[#d4af37]/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#f5f0eb] font-semibold">
                  Rooftop Night Ambiance
                </span>
              </div>
            </div>

            {/* Main Center-Bottom Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-3xl">
              <h2
                id="experience-heading"
                className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#fbf7f0] leading-tight mb-4 drop-shadow-lg"
              >
                Come For The Food. <br />
                <span className="text-[#d4af37] italic font-normal">Stay For The Atmosphere.</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-[#d8d0c5] font-light leading-relaxed mb-6 max-w-2xl">
                There is something magical about dining high above the bustling streets of Jabalpur. At Sky Brew, we believe every meal should be a relaxed celebration of good company, heartfelt conversations, and carefully prepared dishes.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenReservation}
                  id="experience-reserve-btn"
                  type="button"
                  className="px-6 py-3 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#d4af37]/30 cursor-pointer"
                >
                  Reserve an Evening Table
                </button>
                <a
                  href={RESTAURANT_INFO.phoneLink}
                  id="experience-call-btn"
                  className="px-5 py-3 rounded-lg bg-[#141820]/90 hover:bg-[#1f2532] text-[#f5f0eb] hover:text-[#d4af37] border border-[#2e3748] text-xs uppercase font-semibold tracking-wider transition-all"
                >
                  Call +91 99931 11959
                </a>
              </div>
            </div>

          </div>

          {/* 4 Feature Label Pillars Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#1f2532] bg-[#12161e] border-t border-[#202735]">
            {highlights.map((item, idx) => (
              <div key={idx} className="p-6 text-center group hover:bg-[#161a24] transition-colors">
                <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-bold mb-1.5 group-hover:scale-105 transition-transform">
                  {item.label}
                </p>
                <p className="text-xs text-[#a89f91] font-light">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* 3 Atmosphere Highlights Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#11141b] border border-[#1f2532] hover:border-[#d4af37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#171c26] text-[#d4af37] flex items-center justify-center mb-4 border border-[#283040]">
              <Sunset className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title text-lg font-bold text-[#f5f0eb] mb-2">
              Golden Hour & Evening Sunset
            </h4>
            <p className="text-xs sm:text-sm text-[#9f9486] leading-relaxed font-light">
              Catch the soft evening golden glow as day transitions to twilight over Polipather and Gwarighat, accompanied by refreshing coolers and warm starters.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141b] border border-[#1f2532] hover:border-[#d4af37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#171c26] text-[#d4af37] flex items-center justify-center mb-4 border border-[#283040]">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title text-lg font-bold text-[#f5f0eb] mb-2">
              Family & Friend Gatherings
            </h4>
            <p className="text-xs sm:text-sm text-[#9f9486] leading-relaxed font-light">
              Spacious seating arrangements accommodate couples, small friendly meetups, and large family birthday dinners with equal warmth and comfort.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11141b] border border-[#1f2532] hover:border-[#d4af37]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#171c26] text-[#d4af37] flex items-center justify-center mb-4 border border-[#283040]">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="font-serif-title text-lg font-bold text-[#f5f0eb] mb-2">
              Freshly Brewed & Prepared
            </h4>
            <p className="text-xs sm:text-sm text-[#9f9486] leading-relaxed font-light">
              Every sizzler, biryani pot, pizza, and artisan cold coffee is crafted fresh to order with care and authentic culinary technique.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
