import React from 'react';
import { Sunset, UtensilsCrossed, Users, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';
import { ABOUT_FEATURES, RESTAURANT_INFO } from '../data/restaurantData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sunset':
        return <Sunset className="w-6 h-6 text-[#d4af37]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#d4af37]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#0e1116] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#161a24] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171b22] border border-[#2c3340] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Elevated Dining in Jabalpur
            </span>
          </div>
          <h2
            id="about-heading"
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-5 tracking-tight"
          >
            An Experience Above The Ordinary
          </h2>
          <p className="text-[#b3aaa0] text-base sm:text-lg leading-relaxed font-light">
            Situated on the 4th floor of Satya Raj Pride on Gwarighat Main Road, <strong className="text-[#f5f0eb] font-normal">Sky Brew</strong> brings together authentic multi-cuisine flavors, refreshing open-air breezes, and a welcoming atmosphere where every evening feels special.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ABOUT_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              id={`about-card-${index + 1}`}
              className="group p-7 rounded-xl bg-[#13161d]/90 border border-[#222731] hover:border-[#d4af37]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#000000]/60 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1a1f29] border border-[#2c3340] flex items-center justify-center mb-6 group-hover:border-[#d4af37] group-hover:bg-[#1f2533] transition-colors">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="font-serif-title text-lg font-bold text-[#f5f0eb] tracking-wide mb-3 group-hover:text-[#d4af37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#a89f91] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1c212b] flex items-center text-xs text-[#d4af37] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Discover Experience</span>
                <span className="ml-1">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Story & Visual Atmosphere Showcase */}
        <div className="rounded-2xl bg-gradient-to-r from-[#141820] to-[#101318] border border-[#222732] p-8 md:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                Why Diners Love Sky Brew
              </span>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#f5f0eb]">
                From Afternoon Lunches to Starlit Rooftop Dinners
              </h3>
              <p className="text-sm sm:text-base text-[#b3aaa0] leading-relaxed">
                Whether you're stopping by for a comforting hand-tossed pizza and cold coffee during the afternoon, or gathering with loved ones over rich butter paneer, dum biryani, and sizzlers under the Jabalpur evening sky, our dedicated kitchen and rooftop setting make every dining moment memorable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#dcd5cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>Open-air 4th-floor terrace seating</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#dcd5cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>Comfortable AC indoor dining hall</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#dcd5cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>Fresh multi-cuisine recipes prepared to order</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#dcd5cc]">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                  <span>Warm, hospitable service for every group</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-[#2b3342] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop&q=80"
                  alt="Sky Brew Dining Ambience"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0e1218]/90 backdrop-blur-md p-3.5 rounded-lg border border-[#2b3342]/70">
                  <p className="text-xs font-semibold text-[#f5f0eb]">Satya Raj Pride, Gwarighat</p>
                  <p className="text-[11px] text-[#a89f91]">Opposite Guru Govind Singh Khalsa School</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
