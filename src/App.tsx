import React, { useEffect } from 'react';
import { clinicConfig } from './data/clinicTemplates';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutDoctor from './components/AboutDoctor';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

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
        <ScrollReveal>
          <AboutDoctor config={clinicConfig} />
        </ScrollReveal>

        {/* 5. Specialities & Services */}
        <ScrollReveal>
          <Services config={clinicConfig} />
        </ScrollReveal>

        {/* 6. Why Choose Us (Clinical Trust benchmarks) */}
        <ScrollReveal>
          <WhyChooseUs config={clinicConfig} />
        </ScrollReveal>

        {/* 7. Patient Reviews / Testimonials */}
        <ScrollReveal>
          <Testimonials config={clinicConfig} />
        </ScrollReveal>

        {/* 8. Facility Tour Gallery */}
        <ScrollReveal>
          <Gallery config={clinicConfig} />
        </ScrollReveal>

        {/* 9. Frequently Asked Questions */}
        <ScrollReveal>
          <FAQ config={clinicConfig} />
        </ScrollReveal>

        {/* 10. Appointment Intake Request Form */}
        <ScrollReveal>
          <AppointmentForm config={clinicConfig} />
        </ScrollReveal>

        {/* 11. Contact Details & Iframe Map */}
        <ScrollReveal>
          <Contact config={clinicConfig} />
        </ScrollReveal>

        {/* 12. Footer & Disclaimers */}
        <Footer config={clinicConfig} />
      </div>
    </div>
  );
}