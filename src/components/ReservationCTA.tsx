import React from 'react';
import { Phone, Navigation, Calendar, Sparkles, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationCTAProps {
  onOpenReservationModal: () => void;
}

export const ReservationCTA: React.FC<ReservationCTAProps> = ({ onOpenReservationModal }) => {
  return (
    <section id="reserve" className="py-20 lg:py-28 relative overflow-hidden bg-[#0b0d10]">
      {/* Background Image with Warm Amber Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&fit=crop&q=80"
          alt="Sky Brew Table Setting"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d10] via-[#0b0d10]/90 to-[#0b0d10]/80" />
        <div className="absolute inset-0 bg-[#0b0d10]/60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171b23]/90 border border-[#d4af37]/40 mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Reserve Your Experience
          </span>
        </div>

        <h2
          id="cta-heading"
          className="font-serif-title text-3xl sm:text-5xl md:text-6xl font-bold text-[#fbf7f0] mb-5 tracking-tight"
        >
          Your Table Is Waiting.
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#d4ccc0] font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Planning a dinner, a casual meetup or a special evening? Come experience Sky Brew.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={RESTAURANT_INFO.phoneLink}
            id="cta-call-to-reserve-btn"
            className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:shadow-[#d4af37]/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Call To Reserve</span>
          </a>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-get-directions-btn"
            className="flex-1 min-w-[170px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#151921]/90 hover:bg-[#1f2532] text-[#eae5df] hover:text-[#d4af37] border border-[#2e3748] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md"
          >
            <Navigation className="w-4 h-4 text-[#d4af37]" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Table Reservation Assistant Button */}
        <div className="mt-6">
          <button
            onClick={onOpenReservationModal}
            id="cta-customize-reservation-btn"
            type="button"
            className="inline-flex items-center gap-2 text-xs text-[#a89f91] hover:text-[#d4af37] transition-colors underline underline-offset-4 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Select Table Preference & Party Size (Call-Assisted)</span>
          </button>
        </div>

        {/* Floating Quick Info Pill */}
        <div className="mt-12 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-xl bg-[#0f1217]/90 border border-[#242b38] backdrop-blur-md text-xs text-[#a89f91]">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>11:00 AM – 11:00 PM Daily</span>
          </div>
          <div className="hidden sm:inline w-1 h-1 rounded-full bg-[#2e3748]" />
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>4th Floor, Satya Raj Pride, Gwarighat</span>
          </div>
          <div className="hidden sm:inline w-1 h-1 rounded-full bg-[#2e3748]" />
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[#eae5df] font-medium">+91 99931 11959</span>
          </div>
        </div>

      </div>
    </section>
  );
};
