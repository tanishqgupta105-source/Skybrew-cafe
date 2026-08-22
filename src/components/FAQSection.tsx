import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/restaurantData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#0c0e13] relative border-t border-[#1a1f28]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151922] border border-[#262d3a] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Guest Information
            </span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold text-[#f5f0eb] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#a89f91] font-light">
            Everything you need to know before visiting Sky Brew in Gwarighat, Jabalpur.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx + 1}`}
                className="rounded-xl bg-[#11141b] border border-[#202634] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-medium text-[#eae5df] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-title font-semibold">{faq.q}</span>
                  <div className="w-7 h-7 rounded-full bg-[#181d27] border border-[#2b3342] flex items-center justify-center flex-shrink-0 text-[#d4af37]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#a89f91] leading-relaxed border-t border-[#1b212d] pt-3 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
