import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUp, 
  Heart,
  Instagram,
  Facebook,
  Share2
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#07090c] border-t border-[#1a1f29] pt-16 pb-28 sm:pb-16 text-[#eae5df] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b212d]">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/50 bg-[#12161f] flex items-center justify-center text-[#d4af37]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-title tracking-wider text-2xl font-bold text-[#f5f0eb]">
                  SKY BREW
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#a89f91]">
                  Rooftop Cafe • Jabalpur
                </p>
              </div>
            </div>

            <p className="font-serif-title italic text-base text-[#d4af37]">
              "Good food. Great atmosphere. Elevated evenings."
            </p>

            <p className="text-xs sm:text-sm text-[#9f9486] leading-relaxed font-light">
              An elevated dining experience on the 4th floor of Satya Raj Pride. Bringing fresh multi-cuisine flavors, clay oven tandoori specials, pizzas, biryanis, and artisanal brews to Gwarighat, Jabalpur.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.phoneLink}
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#141822] border border-[#272f3e] text-[#d4af37] hover:border-[#d4af37]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 99931 11959</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-title text-sm font-bold uppercase tracking-widest text-[#f5f0eb]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a89f91]">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About Sky Brew</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#d4af37] transition-colors">Menu Catalog</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#d4af37] transition-colors">Why Sky Brew</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#d4af37] transition-colors">The Experience</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#d4af37] transition-colors">Location & Contact</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#d4af37] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Cuisines & Offerings */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-title text-sm font-bold uppercase tracking-widest text-[#f5f0eb]">
              Our Specialities
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a89f91]">
              <li>• Clay Oven Tandoori Starters</li>
              <li>• Authentic North Indian Curries</li>
              <li>• Handcrafted Woodfire Style Pizzas</li>
              <li>• Dum Handi Biryanis</li>
              <li>• Gourmet Sandwiches & Burgers</li>
              <li>• Indo-Chinese Wok Dishes</li>
              <li>• Sizzling Desserts & Cold Brews</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-title text-sm font-bold uppercase tracking-widest text-[#f5f0eb]">
              Visit & Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-[#a89f91]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.shortAddress}, Opposite Guru Govind Singh Khalsa School, Bhim Nagar, Polipather, Jabalpur 482008</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                <a href={RESTAURANT_INFO.phoneLink} className="hover:text-[#d4af37] font-semibold text-[#eae5df]">
                  +91 99931 11959
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span>Open Daily: 11:00 AM – 11:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                type="button"
                className="w-full py-2.5 px-4 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reserve a Table
              </button>
            </div>
          </div>

        </div>

        {/* Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7d7365]">
          <p>© 2026 Sky Brew. All rights reserved.</p>
          
          <p className="flex items-center gap-1.5">
            <span>Satya Raj Pride, Gwarighat, Jabalpur, Madhya Pradesh</span>
          </p>

          <button
            onClick={scrollToTop}
            id="footer-back-to-top"
            className="inline-flex items-center gap-1.5 text-xs text-[#a89f91] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
