/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CinematicVideoSection } from './components/CinematicVideoSection';
import { About } from './components/About';
import { WhySkyBrew } from './components/WhySkyBrew';
import { SignatureMenu } from './components/SignatureMenu';
import { Experience } from './components/Experience';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { ReservationCTA } from './components/ReservationCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { BackToTop } from './components/BackToTop';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#eae5df] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#ffffff]">
      {/* Navigation Header */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Cinematic Video Background Feature */}
        <CinematicVideoSection />

        {/* About / Experience */}
        <About />

        {/* Why Sky Brew Highlights */}
        <WhySkyBrew />

        {/* Signature Interactive Menu */}
        <SignatureMenu onOpenReservation={handleOpenReservation} />

        {/* Atmosphere & The Experience Showcase */}
        <Experience onOpenReservation={handleOpenReservation} />

        {/* Masonry Image Gallery with Lightbox */}
        <Gallery />

        {/* Location, Hours & Interactive Map */}
        <LocationSection />

        {/* Guest FAQ */}
        <FAQSection />

        {/* Reservation Call To Action */}
        <ReservationCTA onOpenReservationModal={handleOpenReservation} />
      </main>

      {/* Website Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyCTA onOpenReservation={handleOpenReservation} />

      {/* Desktop Floating Back To Top */}
      <BackToTop />

      {/* Reservation Assistance Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
