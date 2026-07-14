import React, { useState, useEffect } from 'react';
import { clinicConfigs } from './data/clinicTemplates';
import ReviewToolbar from './components/ReviewToolbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeConfigId, setActiveConfigId] = useState<string>('dental');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const activeConfig = clinicConfigs[activeConfigId] || clinicConfigs.dental;

  // Dynamically update document title to mimic a real production launch
  useEffect(() => {
    document.title = `${activeConfig.displayName} | Professional Medical Practice`;
  }, [activeConfig]);

  // Handle cross-fade transition when template changes
  const handleSelectConfig = (id: string) => {
    if (id === activeConfigId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveConfigId(id);
      setIsTransitioning(false);
      
      // Smooth scroll back to top of section or viewport after brand change
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 250);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 selection:bg-slate-200 antialiased" id="clinic-master-wrapper">
      
      {/* 1. Interactive Presenter Toolbar (Discreet & dismissible review panel) */}
      <ReviewToolbar
        currentId={activeConfigId}
        onSelectConfig={handleSelectConfig}
        configs={clinicConfigs}
      />

      {/* Main Website Wrapper with transition crossfade */}
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* 2. Header & Navigation (Sticky bar) */}
        <Navbar config={activeConfig} />

        {/* 3. Hero Trust Landing */}
        <Hero config={activeConfig} />

        {/* 4. About Doctor biography */}
        <AboutDoctor config={activeConfig} />

        {/* 5. Specialities & Services */}
        <Services config={activeConfig} />

        {/* 6. Why Choose Us (Clinical Trust benchmarks) */}
        <WhyChooseUs config={activeConfig} />

        {/* 7. Patient Reviews / Testimonials */}
        <Testimonials config={activeConfig} />

        {/* 8. Facility Tour Gallery */}
        <Gallery config={activeConfig} />

        {/* 9. Appointment Intake Request Form */}
        <AppointmentForm config={activeConfig} />

        {/* 10. Contact Details & Iframe Map */}
        <Contact config={activeConfig} />

        {/* 11. Footer & Disclaimers */}
        <Footer config={activeConfig} />
        
      </div>
    </div>
  );
}
