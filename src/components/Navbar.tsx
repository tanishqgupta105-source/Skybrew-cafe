import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MapPin, Compass } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Location', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0d10]/95 backdrop-blur-md border-b border-[#252b36] shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#0b0d10]/90 via-[#0b0d10]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#171b22] flex items-center justify-center text-[#d4af37] shadow-inner group-hover:border-[#d4af37] transition-colors">
              <Compass className="w-5 h-5 text-[#d4af37] group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-title tracking-wider text-xl font-bold text-[#f5f0eb] group-hover:text-[#d4af37] transition-colors">
                  SKY BREW
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#a89f91] -mt-0.5">
                Rooftop • Jabalpur
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-[#c8bfb4] hover:text-[#d4af37] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.phoneLink}
              id="nav-call-btn"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#e2dad0] hover:text-[#d4af37] rounded-lg border border-[#2c3340] hover:border-[#d4af37]/60 bg-[#12151b]/80 transition-all duration-200"
              title="Call Sky Brew directly"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>+91 99931 11959</span>
            </a>

            <button
              onClick={onOpenReservation}
              id="nav-reserve-btn"
              type="button"
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide uppercase text-[#0b0d10] bg-[#d4af37] hover:bg-[#e5c158] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={RESTAURANT_INFO.phoneLink}
              id="mobile-nav-quick-call"
              className="p-2 rounded-lg bg-[#171b22] border border-[#2c3340] text-[#d4af37] hover:border-[#d4af37] transition-colors"
              aria-label="Call Sky Brew"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              type="button"
              className="p-2.5 rounded-lg bg-[#171b22] border border-[#2c3340] text-[#eae5df] hover:text-[#d4af37] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-b border-[#252b36] bg-[#0f1217]/98 backdrop-blur-xl px-6 py-6 transition-all duration-300 shadow-2xl"
        >
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#222731] flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">Sky Brew Jabalpur</p>
                <p className="text-xs text-[#a89f91]">Open Daily • 11:00 AM – 11:00 PM</p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                Open Now
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#c8bfb4] hover:text-[#d4af37] hover:bg-[#1a1f29] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#222731] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                id="mobile-drawer-reserve-btn"
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs uppercase font-bold tracking-wider text-[#0b0d10] bg-[#d4af37] hover:bg-[#e5c158] transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={RESTAURANT_INFO.phoneLink}
                  id="mobile-drawer-call-btn"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium text-[#e2dad0] bg-[#1a1f29] border border-[#2d3442] hover:border-[#d4af37]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Call Us</span>
                </a>
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="mobile-drawer-directions-btn"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-medium text-[#e2dad0] bg-[#1a1f29] border border-[#2d3442] hover:border-[#d4af37]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
