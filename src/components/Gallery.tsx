import React, { useState, useEffect } from 'react';
import { 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Sparkles, 
  Maximize2 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooftop', label: 'Rooftop Vibe' },
    { id: 'food', label: 'Culinary Delights' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'drinks', label: 'Brews & Beverages' }
  ];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null || prev === 0 ? filteredGallery.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) =>
      prev === null || prev === filteredGallery.length - 1 ? 0 : prev + 1
    );
  };

  const currentLightboxItem: GalleryItem | undefined =
    activeLightboxIndex !== null ? filteredGallery[activeLightboxIndex] : undefined;

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0b0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161a22] border border-[#262d3a] mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Visual Journey
            </span>
          </div>
          <h2
            id="gallery-heading"
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-4 tracking-tight"
          >
            Atmosphere & Culinary Gallery
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light max-w-2xl mx-auto">
            Take a visual tour of our 4th-floor open-air terrace, cozy indoor dining lounge, and handcrafted culinary preparations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`gallery-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#d4af37] text-[#0b0d10] font-semibold shadow-md'
                    : 'bg-[#141820] text-[#a89f91] hover:text-[#f5f0eb] hover:bg-[#1a202c] border border-[#222834]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#141820] border border-[#212734] hover:border-[#d4af37]/60 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 aspect-[4/3]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-[#0b0d10]/80 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37] bg-[#0b0d10]/90 px-2 py-0.5 rounded border border-[#d4af37]/30 inline-block mb-1.5">
                    {item.category}
                  </span>
                  <h4 className="font-serif-title text-lg font-bold text-[#f5f0eb] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#b8afa3] line-clamp-2 font-light">
                    {item.caption}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#000000]/95 backdrop-blur-md"
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-[#171b23] border border-[#2b3342] text-[#e2dad0] hover:text-[#d4af37] flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#12161e]/90 border border-[#2a3242] text-[#eae5df] hover:text-[#d4af37] flex items-center justify-center hover:scale-105 transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-[#12161e]/90 border border-[#2a3242] text-[#eae5df] hover:text-[#d4af37] flex items-center justify-center hover:scale-105 transition-all"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#2b3342] shadow-2xl bg-[#0e1117] max-h-[70vh] flex items-center justify-center">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[68vh] max-w-full object-contain"
              />
            </div>

            {/* Caption & Counter info */}
            <div className="mt-4 text-center max-w-xl">
              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                Photo {(activeLightboxIndex ?? 0) + 1} of {filteredGallery.length}
              </p>
              <h3 className="font-serif-title text-xl font-bold text-[#f5f0eb] mb-1">
                {currentLightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a89f91] font-light">
                {currentLightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
