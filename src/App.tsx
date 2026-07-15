import React, { useEffect } from 'react';
import { clinicConfig } from './data/clinicTemplates';
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
  useEffect(() => {
    document.title = `${clinicConfig.displayName} | Professional Medical Practice`;
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 selection:bg-slate-200 antialiased" id="clinic-master-wrapper">
      <div>
        {/* 2. Header & Navigation (Sticky bar) */}
        <Navbar config={clinicConfig} />

        {/* 3. Hero Trust Landing */}
        <Hero config={clinicConfig} />

        {/* 4. About Doctor biography */}
        <AboutDoctor config={clinicConfig} />

        {/* 5. Specialities & Services */}
        <Services config={clinicConfig} />

        {/* 6. Why Choose Us (Clinical Trust benchmarks) */}
        <WhyChooseUs config={clinicConfig} />

        {/* 7. Patient Reviews / Testimonials */}
        <Testimonials config={clinicConfig} />

        {/* 8. Facility Tour Gallery */}
        <Gallery config={clinicConfig} />

        {/* 9. Appointment Intake Request Form */}
        <AppointmentForm config={clinicConfig} />

        {/* 10. Contact Details & Iframe Map */}
        <Contact config={clinicConfig} />

        {/* 11. Footer & Disclaimers */}
        <Footer config={clinicConfig} />
      </div>
    </div>
  );
}