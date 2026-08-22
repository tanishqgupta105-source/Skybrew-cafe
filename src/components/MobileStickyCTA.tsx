import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileStickyCTAProps {
  onOpenReservation: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenReservation }) => {
  return (
    <div
      id="mobile-sticky-cta-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e1117]/95 backdrop-blur-lg border-t border-[#252c3b] p-2.5 shadow-2xl safe-area-pb"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={RESTAURANT_INFO.phoneLink}
          id="mobile-sticky-call-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#161a24] border border-[#2b3344] text-[#eae5df] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[11px] font-semibold">Call Now</span>
        </a>

        {/* Get Directions */}
        <a
          href={RESTAURANT_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-directions-btn"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#161a24] border border-[#2b3344] text-[#eae5df] active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-[#d4af37] mb-0.5" />
          <span className="text-[11px] font-semibold">Directions</span>
        </a>

        {/* Reserve Table */}
        <button
          onClick={onOpenReservation}
          id="mobile-sticky-reserve-btn"
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#d4af37] text-[#0b0d10] active:scale-95 transition-transform font-bold cursor-pointer shadow-md"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[11px]">Reserve</span>
        </button>
      </div>
    </div>
  );
};
