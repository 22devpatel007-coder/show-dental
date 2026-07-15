import React from 'react';
import { ClinicConfig } from '../types';
import LucideIcon from './LucideIcon';
import { ChevronRight } from 'lucide-react';

interface ServicesProps {
  config: ClinicConfig;
}

export default function Services({ config }: ServicesProps) {
  const services = config.services;

  const handleScrollToAppointment = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section id="services" className="py-16 sm:py-24 bg-white" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            Our Clinical Expertise
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Specialized Treatments & Procedures
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
            We provide evidence-based healthcare using cutting-edge therapeutic technology, strict hygiene parameters, and a highly individualized diagnostic methodology.
          </p>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white p-7 rounded-2xl border border-slate-200/70 hover:border-slate-300 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Icon Container */}
                <div className={`p-3.5 rounded-xl w-fit transition-all duration-300 ${config.colors.primaryLight} ${config.colors.primaryText} group-hover:scale-110`}>
                  <LucideIcon name={service.iconName} size={22} />
                </div>

                {/* Service Title */}
                <h3 className="font-sans font-bold text-lg text-slate-900 mt-5 group-hover:text-slate-950 transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mt-2.5">
                  {service.description}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center">
                <a
                  href="#appointment"
                  onClick={handleScrollToAppointment}
                  className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 transition-all group-hover:gap-1.5 ${config.colors.primaryText}`}
                >
                  <span>Inquire Treatment</span>
                  <ChevronRight size={12} />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Treatment Disclaimer */}
        <div className="mt-12 text-center bg-slate-50 rounded-xl p-4.5 border border-slate-200/50 max-w-2xl mx-auto">
          <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-relaxed">
            * All medical and procedural treatments require a comprehensive preliminary diagnostic consultation. Our clinicians adhere strictly to FDA, CDC, and state health standards.
          </p>
        </div>

      </div>
    </section>
  );
}
