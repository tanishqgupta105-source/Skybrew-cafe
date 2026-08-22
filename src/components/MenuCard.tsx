import React from 'react';
import { Sparkles, Flame, Leaf } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onSelect }) => {
  return (
    <div
      id={`menu-item-${item.id}`}
      onClick={() => onSelect && onSelect(item)}
      className="group relative rounded-xl bg-[#12151b] border border-[#212733] hover:border-[#d4af37]/60 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between cursor-pointer"
    >
      {/* Top Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-[#181c24]">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#151921] text-[#6b6255]">
            <span>Sky Brew Specialty</span>
          </div>
        )}

        {/* Ambient Dark Gradient on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent opacity-80" />

        {/* Badges Container */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {/* Veg / Non-Veg Indicator */}
          <div
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border backdrop-blur-md ${
              item.isVeg
                ? 'bg-emerald-950/85 text-emerald-300 border-emerald-500/50'
                : 'bg-rose-950/85 text-rose-300 border-rose-500/50'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                item.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
              }`}
            />
            <span>{item.isVeg ? 'Veg' : 'Non-Veg'}</span>
          </div>

          {item.isChefSpecial && (
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#d4af37]/90 text-[#0b0d10] backdrop-blur-md shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Chef's Choice</span>
            </div>
          )}
        </div>

        {/* Category Pill on Right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-[#0b0d10]/80 text-[#c8bfb4] border border-[#2b3340] backdrop-blur-md">
            {item.categoryLabel}
          </span>
        </div>

        {/* Demo Price Tag if available */}
        {item.price && (
          <div className="absolute bottom-2.5 right-3 z-10">
            <span className="text-xs font-semibold text-[#f5f0eb] bg-[#0b0d10]/90 px-2 py-0.5 rounded border border-[#d4af37]/30 text-[#d4af37]">
              {item.price}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-serif-title text-lg font-bold text-[#f5f0eb] group-hover:text-[#d4af37] transition-colors mb-2">
            {item.name}
          </h4>
          <p className="text-xs text-[#9d9385] leading-relaxed line-clamp-3 mb-4 font-light">
            {item.description}
          </p>
        </div>

        {/* Tags / Dietary Highlights */}
        {item.tags && item.tags.length > 0 && (
          <div className="pt-3 border-t border-[#1d222c] flex flex-wrap gap-1.5 items-center">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-normal text-[#8c8273] bg-[#171b23] px-2 py-0.5 rounded border border-[#252b37]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
