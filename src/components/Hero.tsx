import React from 'react';
import { ClinicConfig } from '../types';
import { Calendar, Shield, Award, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  config: ClinicConfig;
}

export default function Hero({ config }: HeroProps) {
  const handleScrollToAppointment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector('#appointment');
    if (target) {
      const offset = 80 + (document.getElementById('review-toolbar-container') ? 60 : 0);
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-6 pb-12 sm:pb-20 overflow-hidden" aria-label="Welcome">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Hero Content Panel */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-1.5 self-start bg-slate-50 border border-slate-200/60 px-3 py-1.5 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.colors.primary.replace('bg-', 'bg-')}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${config.colors.primary}`}></span>
              </span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wide uppercase">
                Accepting New Patients
              </span>
              <span className="text-slate-300 mx-1">|</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[11px] font-bold text-slate-600 ml-1">4.9/5 Rating</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-slate-900 leading-[1.12] tracking-tight">
              {config.hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
              {config.hero.subheadline}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                onClick={handleScrollToAppointment}
                className={`flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-sans text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 cursor-pointer ${config.colors.primary} ${config.colors.primaryHover}`}
                id="hero-cta-primary"
              >
                <Calendar size={16} />
                <span>{config.hero.ctaPrimary}</span>
              </button>

              <a
                href={`https://wa.me/${config.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-sans text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 cursor-pointer"
                id="hero-cta-whatsapp"
              >
                {/* SVG for WhatsApp */}
                <svg className="w-4.5 h-4.5 fill-emerald-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
                <span>{config.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Small Trust Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100 max-w-lg">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">ISO Sterile Facility</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Maximum hygiene levels</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-tight">Board Certified Clinic</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">100% verified doctors</p>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src={config.doctor.photoUrl}
                alt={`${config.doctor.name} - ${config.doctor.title}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping Trust Stat Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-xl flex items-center gap-3.5 animate-fade-in-up">
                <div className={`p-2.5 rounded-lg text-white ${config.colors.primary}`}>
                  <Award size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">Clinical Excellence</span>
                  <span className="text-sm font-extrabold text-slate-900 mt-1 leading-none">{config.doctor.experienceYears}+ Years Experience</span>
                  <span className="text-[11px] text-slate-500 mt-1">{config.doctor.specialization}</span>
                </div>
              </div>
            </div>

            {/* Premium geometric layout accents in the background (no messy gradients) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 opacity-30 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" stroke="#E2E8F0" strokeWidth="0.25" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
