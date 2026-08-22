import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="floating-back-to-top-btn"
      type="button"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 w-11 h-11 rounded-full bg-[#171b24]/90 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#0b0d10] border border-[#2b3445] hover:border-[#d4af37] shadow-xl backdrop-blur-md items-center justify-center transition-all duration-300 transform hover:scale-110 cursor-pointer"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
