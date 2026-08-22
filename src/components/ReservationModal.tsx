import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Sunset,
  Building
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [partySize, setPartySize] = useState<string>('2 Guests');
  const [seatingArea, setSeatingArea] = useState<'rooftop' | 'indoor'>('rooftop');
  const [preferredTime, setPreferredTime] = useState<string>('07:30 PM');
  const [reservationDate, setReservationDate] = useState<string>('Today');
  const [occasion, setOccasion] = useState<string>('Casual Dining');

  if (!isOpen) return null;

  const partyOptions = ['2 Guests', '3-4 Guests', '5-8 Guests', '9+ (Large Group / Party)'];
  const timeOptions = ['01:00 PM', '02:30 PM', '06:00 PM', '07:30 PM', '08:30 PM', '09:30 PM', '10:00 PM'];
  const occasionOptions = ['Casual Dining', 'Birthday Celebration', 'Family Dinner', 'Romantic Evening', 'Business Meet'];

  const inquirySummary = `Hi Sky Brew! I would like to reserve a table for ${partySize} (${seatingArea === 'rooftop' ? 'Rooftop Terrace' : 'Indoor Lounge'}) on ${reservationDate} around ${preferredTime} for ${occasion}.`;

  const handleWhatsApp = () => {
    const encoded = encodeURIComponent(inquirySummary);
    window.open(`https://wa.me/919993111959?text=${encoded}`, '_blank');
  };

  return (
    <div
      id="reservation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#000000]/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#11141b] border border-[#2d3545] p-6 sm:p-8 shadow-2xl my-auto text-[#eae5df]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-reservation-modal-btn"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#181d27] border border-[#2b3342] text-[#a89f91] hover:text-[#d4af37] flex items-center justify-center transition-colors"
          aria-label="Close Reservation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#181d26] border border-[#d4af37]/40 text-[#d4af37] text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Table Reservation</span>
          </div>
          <h3 className="font-serif-title text-2xl font-bold text-[#f5f0eb]">
            Reserve Your Table at Sky Brew
          </h3>
          <p className="text-xs text-[#a89f91] mt-1">
            4th Floor, Satya Raj Pride, Gwarighat • Direct Phone Reservation
          </p>
        </div>

        {/* Seating Preference Selector */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#8f8576] block mb-2">
              1. Seating Atmosphere
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setSeatingArea('rooftop')}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                  seatingArea === 'rooftop'
                    ? 'bg-[#181d27] border-[#d4af37] text-[#f5f0eb] shadow-md shadow-[#d4af37]/10'
                    : 'bg-[#13161e] border-[#222834] text-[#8e8577] hover:border-[#2d3545]'
                }`}
              >
                <Sunset className={`w-5 h-5 flex-shrink-0 ${seatingArea === 'rooftop' ? 'text-[#d4af37]' : 'text-[#6d6457]'}`} />
                <div>
                  <p className="text-xs font-bold text-[#eae5df]">Rooftop Terrace</p>
                  <p className="text-[10px] text-[#8e8577]">Open-air city breeze</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSeatingArea('indoor')}
                className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                  seatingArea === 'indoor'
                    ? 'bg-[#181d27] border-[#d4af37] text-[#f5f0eb] shadow-md shadow-[#d4af37]/10'
                    : 'bg-[#13161e] border-[#222834] text-[#8e8577] hover:border-[#2d3545]'
                }`}
              >
                <Building className={`w-5 h-5 flex-shrink-0 ${seatingArea === 'indoor' ? 'text-[#d4af37]' : 'text-[#6d6457]'}`} />
                <div>
                  <p className="text-xs font-bold text-[#eae5df]">Indoor Lounge</p>
                  <p className="text-[10px] text-[#8e8577]">Air-conditioned comfort</p>
                </div>
              </button>
            </div>
          </div>

          {/* Party Size */}
          <div>
            <label className="text-xs uppercase tracking-wider font-semibold text-[#8f8576] block mb-2">
              2. Party Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {partyOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPartySize(opt)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                    partySize === opt
                      ? 'bg-[#d4af37] text-[#0b0d10] font-bold border-[#d4af37]'
                      : 'bg-[#141820] text-[#a89f91] border-[#222834] hover:border-[#2d3545]'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Time & Occasion Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#8f8576] block mb-1.5">
                3. Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-[#141820] border border-[#222834] text-xs text-[#eae5df] focus:outline-none focus:border-[#d4af37]"
              >
                {timeOptions.map((t) => (
                  <option key={t} value={t} className="bg-[#141820] text-[#eae5df]">{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider font-semibold text-[#8f8576] block mb-1.5">
                4. Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full py-2 px-3 rounded-lg bg-[#141820] border border-[#222834] text-xs text-[#eae5df] focus:outline-none focus:border-[#d4af37]"
              >
                {occasionOptions.map((occ) => (
                  <option key={occ} value={occ} className="bg-[#141820] text-[#eae5df]">{occ}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Direct Call & Booking Actions */}
        <div className="pt-4 border-t border-[#1f2532] space-y-2.5">
          <a
            href={RESTAURANT_INFO.phoneLink}
            id="modal-call-reserve-btn"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 99931 11959 to Confirm</span>
          </a>

          <button
            onClick={handleWhatsApp}
            id="modal-whatsapp-reserve-btn"
            type="button"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#171c26] hover:bg-[#202736] text-[#e2dad0] hover:text-[#d4af37] border border-[#2b3446] font-semibold text-xs tracking-wider transition-all cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Send Details via WhatsApp</span>
          </button>
        </div>

        <p className="text-[11px] text-[#7a7063] text-center mt-4">
          Open daily from 11:00 AM to 11:00 PM • No advance deposit required for standard tables.
        </p>

      </div>
    </div>
  );
};
