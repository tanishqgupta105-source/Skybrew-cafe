import React, { useState, useMemo } from 'react';
import { 
  Utensils, 
  Flame, 
  CookingPot, 
  Sparkles, 
  Pizza, 
  Sandwich, 
  Soup, 
  Salad, 
  Coffee, 
  Search, 
  X, 
  ChevronRight, 
  SlidersHorizontal,
  Phone,
  Calendar
} from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';
import { MenuCard } from './MenuCard';

interface SignatureMenuProps {
  onOpenReservation: () => void;
}

export const SignatureMenu: React.FC<SignatureMenuProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [isFullMenuModalOpen, setIsFullMenuModalOpen] = useState<boolean>(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-4 h-4" />;
      case 'CookingPot': return <CookingPot className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Pizza': return <Pizza className="w-4 h-4" />;
      case 'Sandwich': return <Sandwich className="w-4 h-4" />;
      case 'Soup': return <Soup className="w-4 h-4" />;
      case 'Salad': return <Salad className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      default: return <Utensils className="w-4 h-4" />;
    }
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      
      // Search check
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

      // Dietary check
      const matchesDiet =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);

      return matchesCategory && matchesSearch && matchesDiet;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#0b0d10] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161a22] border border-[#262d3a] mb-4">
            <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Crafted Culinary Offerings
            </span>
          </div>
          <h2
            id="menu-heading"
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-4 tracking-tight"
          >
            Our Signature Menu
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light max-w-2xl mx-auto">
            From clay-oven tandoori grills to hand-stretched pizzas, royal biryanis, and rich North Indian curries—each dish is freshly prepared with quality ingredients.
          </p>
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="mb-8 space-y-4">
          
          {/* Category Tabs (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-category-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d4af37] text-[#0b0d10] font-semibold shadow-md shadow-[#d4af37]/20 scale-105'
                      : 'bg-[#141820] text-[#a89f91] hover:text-[#f5f0eb] hover:bg-[#1a202c] border border-[#222834]'
                  }`}
                >
                  <span className={isActive ? 'text-[#0b0d10]' : 'text-[#d4af37]'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search & Dietary Preferences Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7e7467]" />
              <input
                type="text"
                id="menu-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Paneer, Pizza, Biryani)..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#13161c] border border-[#242a37] rounded-lg text-[#eae5df] placeholder-[#6f6759] focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#7e7467] hover:text-[#d4af37]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Quick Switcher */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-[#8c8273] hidden md:inline">Dietary:</span>
              <div className="inline-flex rounded-lg bg-[#141820] border border-[#222834] p-0.5">
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                    dietaryFilter === 'all'
                      ? 'bg-[#222835] text-[#f5f0eb]'
                      : 'text-[#8c8273] hover:text-[#dcd5cc]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-3 py-1 text-xs rounded-md font-medium flex items-center gap-1 transition-colors ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'
                      : 'text-[#8c8273] hover:text-emerald-400'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Veg Only</span>
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-3 py-1 text-xs rounded-md font-medium flex items-center gap-1 transition-colors ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-500/30'
                      : 'text-[#8c8273] hover:text-rose-400'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span>Non-Veg</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                onSelect={(selected) => setSelectedMenuItem(selected)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 rounded-xl bg-[#13161c] border border-[#222731]">
            <Utensils className="w-10 h-10 text-[#71685a] mx-auto mb-3" />
            <h4 className="text-base font-semibold text-[#f5f0eb] mb-1">No matching dishes found</h4>
            <p className="text-xs text-[#a89f91] mb-4">Try adjusting your search terms or dietary filter</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b0d10] bg-[#d4af37] rounded-lg hover:bg-[#e5c158]"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom CTA & Full Menu Catalog Trigger */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141820] via-[#161a22] to-[#12151b] border border-[#252c3a] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-serif-title text-xl font-bold text-[#f5f0eb] mb-1">
              Want to see our comprehensive seasonal menu?
            </h4>
            <p className="text-xs sm:text-sm text-[#a89f91] font-light">
              Explore our full list of regional specialties, sizzlers, breads, beverages and desserts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsFullMenuModalOpen(true)}
              id="view-full-menu-btn"
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs uppercase font-bold tracking-wider text-[#0b0d10] bg-[#d4af37] hover:bg-[#e5c158] transition-all shadow-md cursor-pointer"
            >
              <Utensils className="w-4 h-4" />
              <span>View Full Menu</span>
            </button>

            <button
              onClick={onOpenReservation}
              id="menu-cta-reserve-btn"
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs uppercase font-semibold tracking-wider text-[#f5f0eb] hover:text-[#d4af37] bg-[#1a1f29] border border-[#2c3444] hover:border-[#d4af37] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>Book A Table</span>
            </button>
          </div>
        </div>

      </div>

      {/* Item Detail Modal */}
      {selectedMenuItem && (
        <div
          id="menu-item-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/85 backdrop-blur-sm"
          onClick={() => setSelectedMenuItem(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#12161d] border border-[#2d3545] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMenuItem(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#0b0d10]/80 text-[#eae5df] hover:text-[#d4af37] flex items-center justify-center border border-[#2a313e]"
            >
              <X className="w-4 h-4" />
            </button>

            {selectedMenuItem.image && (
              <div className="h-56 w-full relative overflow-hidden">
                <img
                  src={selectedMenuItem.image}
                  alt={selectedMenuItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161d] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider border backdrop-blur-md ${
                      selectedMenuItem.isVeg
                        ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/50'
                        : 'bg-rose-950/90 text-rose-300 border-rose-500/50'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${selectedMenuItem.isVeg ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                    {selectedMenuItem.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-serif-title text-2xl font-bold text-[#f5f0eb]">
                  {selectedMenuItem.name}
                </h3>
                {selectedMenuItem.price && (
                  <span className="font-serif-title text-xl font-bold text-[#d4af37]">
                    {selectedMenuItem.price}
                  </span>
                )}
              </div>

              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-medium mb-3">
                {selectedMenuItem.categoryLabel}
              </p>

              <p className="text-sm text-[#b3aaa0] leading-relaxed mb-6 font-light">
                {selectedMenuItem.description}
              </p>

              {selectedMenuItem.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedMenuItem.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-[#191e28] text-[#8c8273] px-2.5 py-1 rounded border border-[#282f3d]">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="pt-4 border-t border-[#1e2430] flex items-center justify-between gap-3">
                <a
                  href={RESTAURANT_INFO.phoneLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs uppercase font-bold tracking-wider bg-[#d4af37] text-[#0b0d10] hover:bg-[#e5c158]"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Order via Call</span>
                </a>
                <button
                  onClick={() => {
                    setSelectedMenuItem(null);
                    onOpenReservation();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs uppercase font-semibold tracking-wider text-[#eae5df] bg-[#191e28] border border-[#2d3546] hover:border-[#d4af37]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Menu Modal Catalog */}
      {isFullMenuModalOpen && (
        <div
          id="full-menu-catalog-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#000000]/90 backdrop-blur-md overflow-y-auto"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#0f1217] border border-[#2d3545] flex flex-col shadow-2xl my-auto">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-[#212733] flex items-center justify-between bg-[#13161e]">
              <div>
                <div className="flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Sky Brew Jabalpur</span>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-[#f5f0eb]">
                  Full Restaurant Menu Preview
                </h3>
              </div>

              <button
                onClick={() => setIsFullMenuModalOpen(false)}
                className="w-9 h-9 rounded-full bg-[#1b202a] text-[#c8bfb4] hover:text-[#d4af37] flex items-center justify-center border border-[#2a3240] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Categorized Full Menu */}
            <div className="p-6 overflow-y-auto space-y-8 flex-1">
              <div className="p-4 rounded-xl bg-[#161a22] border border-[#262e3d] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a89f91]">
                <span>✨ All dishes are prepared fresh to order on the 4th Floor Rooftop Kitchen.</span>
                <span className="text-[#d4af37]">Approx. ₹1,500 for two</span>
              </div>

              {MENU_CATEGORIES.filter(c => c.id !== 'all').map((category) => {
                const itemsInCat = MENU_ITEMS.filter(i => i.category === category.id);
                if (itemsInCat.length === 0) return null;

                return (
                  <div key={category.id} className="space-y-4">
                    <div className="flex items-center gap-3 border-b border-[#222834] pb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#181d26] text-[#d4af37] flex items-center justify-center border border-[#2a3240]">
                        {getCategoryIcon(category.iconName)}
                      </div>
                      <h4 className="font-serif-title text-xl font-bold text-[#f5f0eb]">
                        {category.label}
                      </h4>
                      <span className="text-xs text-[#786e60] ml-auto">({itemsInCat.length} items)</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {itemsInCat.map((dish) => (
                        <div
                          key={dish.id}
                          className="p-4 rounded-xl bg-[#13161d] border border-[#202530] hover:border-[#d4af37]/40 transition-colors flex justify-between gap-4"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  dish.isVeg ? 'bg-emerald-400' : 'bg-rose-500'
                                }`}
                              />
                              <h5 className="font-serif-title text-sm font-bold text-[#f5f0eb]">
                                {dish.name}
                              </h5>
                              {dish.isChefSpecial && (
                                <span className="text-[9px] uppercase font-bold text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded border border-[#d4af37]/30">
                                  Chef Special
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#8e8577] line-clamp-2 leading-relaxed">
                              {dish.description}
                            </p>
                          </div>
                          {dish.price && (
                            <span className="text-xs font-bold text-[#d4af37] whitespace-nowrap self-start">
                              {dish.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-[#212733] bg-[#13161e] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-[#8f8577]">
                For party orders, custom catering or table reservations, call +91 99931 11959
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={RESTAURANT_INFO.phoneLink}
                  className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0b0d10] bg-[#d4af37] rounded-lg hover:bg-[#e5c158] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <button
                  onClick={() => setIsFullMenuModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-[#c8bfb4] bg-[#1a1f29] rounded-lg border border-[#2b3342] hover:text-[#fff]"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
