import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Building, 
  Compass, 
  Car,
  CreditCard,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#090b0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161a22] border border-[#262d3a] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Location & Hours
            </span>
          </div>
          <h2
            id="location-heading"
            className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-[#f5f0eb] mb-4 tracking-tight"
          >
            Find Your Way To Sky Brew
          </h2>
          <p className="text-[#a89f91] text-sm sm:text-base font-light max-w-2xl mx-auto">
            Conveniently located on the 4th floor of Satya Raj Pride along Gwarighat Main Road in Jabalpur.
          </p>
        </div>

        {/* Location Information & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#11141b] border border-[#222834] rounded-2xl p-7 sm:p-9 shadow-xl">
            
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1f2532]">
                <div>
                  <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#f5f0eb]">
                    SKY BREW
                  </h3>
                  <p className="text-xs tracking-widest text-[#d4af37] uppercase font-semibold">
                    Rooftop Cafe & Restaurant
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 text-xs font-semibold">
                  Open 7 Days
                </div>
              </div>

              {/* Address Block */}
              <div className="space-y-6 mt-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181d27] border border-[#293242] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-[#8e8576] font-semibold mb-1">
                      Address
                    </p>
                    <p className="text-sm text-[#eae5df] leading-relaxed">
                      4th Floor, Satya Raj Pride, 164, Gwarighat Main Road, Bhim Nagar, Polipather, Jabalpur, Madhya Pradesh 482008, India
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-[#e5c158] font-medium"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Address copied to clipboard!' : 'Copy full address'}</span>
                    </button>
                  </div>
                </div>

                {/* Landmark */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181d27] border border-[#293242] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e8576] font-semibold mb-1">
                      Prominent Landmark
                    </p>
                    <p className="text-sm text-[#eae5df]">
                      Opposite Guru Govind Singh Khalsa School
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181d27] border border-[#293242] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e8576] font-semibold mb-1">
                      Direct Contact Phone
                    </p>
                    <a
                      href={RESTAURANT_INFO.phoneLink}
                      className="text-base font-bold text-[#f5f0eb] hover:text-[#d4af37] transition-colors"
                    >
                      +91 99931 11959
                    </a>
                    <p className="text-[11px] text-[#8e8576] mt-0.5">Available during operating hours for reservations & inquiries</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181d27] border border-[#293242] flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8e8576] font-semibold mb-1">
                      Operating Hours
                    </p>
                    <p className="text-sm font-semibold text-[#eae5df]">
                      Every Day: 11:00 AM – 11:00 PM
                    </p>
                    <p className="text-[11px] text-[#8e8576] mt-0.5">Lunch, Afternoon Cafe & Rooftop Evening Dinners</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-6 border-t border-[#1f2532] grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="location-get-directions-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={RESTAURANT_INFO.phoneLink}
                id="location-call-skybrew-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#171b23] hover:bg-[#202632] text-[#f5f0eb] hover:text-[#d4af37] border border-[#2c3444] font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Sky Brew</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-7 rounded-2xl bg-[#11141b] border border-[#222834] overflow-hidden flex flex-col justify-between shadow-xl">
            
            {/* Embedded Google Map Iframe for Gwarighat Jabalpur */}
            <div className="relative w-full h-[320px] sm:h-[400px] bg-[#141822]">
              <iframe
                title="Sky Brew Location Map Jabalpur"
                src="https://maps.google.com/maps?q=Satya+Raj+Pride+Gwarighat+Road+Jabalpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Location Card */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0b0d10]/95 backdrop-blur-md p-4 rounded-xl border border-[#2d3545] shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
                  <p className="font-serif-title text-sm font-bold text-[#f5f0eb]">Sky Brew Rooftop</p>
                </div>
                <p className="text-xs text-[#a89f91]">4th Floor, Satya Raj Pride, Polipather</p>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#d4af37] hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Amenities strip */}
            <div className="p-6 bg-[#13161f] border-t border-[#1e2432] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-2.5 rounded-lg bg-[#181d27]/70 border border-[#232a38]">
                <Car className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span className="text-xs font-medium text-[#eae5df] block">Street & Parking</span>
                <span className="text-[10px] text-[#8e8576]">Easy road access</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#181d27]/70 border border-[#232a38]">
                <Building className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span className="text-xs font-medium text-[#eae5df] block">Elevator Access</span>
                <span className="text-[10px] text-[#8e8576]">To 4th Floor</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#181d27]/70 border border-[#232a38]">
                <Sparkles className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span className="text-xs font-medium text-[#eae5df] block">Rooftop View</span>
                <span className="text-[10px] text-[#8e8576]">Open-air terrace</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#181d27]/70 border border-[#232a38]">
                <CreditCard className="w-4 h-4 text-[#d4af37] mx-auto mb-1" />
                <span className="text-xs font-medium text-[#eae5df] block">Digital Payments</span>
                <span className="text-[10px] text-[#8e8576]">UPI, Cards, Cash</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
