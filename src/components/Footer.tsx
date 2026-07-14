import React from 'react';
import { ClinicConfig } from '../types';
import { ShieldCheck, Heart, ArrowUp, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import LucideIcon from './LucideIcon';

interface FooterProps {
  config: ClinicConfig;
}

export default function Footer({ config }: FooterProps) {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
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

  let brandIcon = 'Activity';
  if (config.clinicType === 'dental') brandIcon = 'Smile';
  if (config.clinicType === 'skin') brandIcon = 'Sparkles';
  if (config.clinicType === 'eye') brandIcon = 'Eye';

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 font-sans border-t border-slate-900" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Info (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg text-white ${config.colors.primary}`}>
                <LucideIcon name={brandIcon} size={20} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {config.brandName}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mt-1.5">
              Providing premium, patient-centric healthcare solutions. Our practice combines experienced board-certified clinicians, advanced diagnostics, and an outstanding standard of clinical safety.
            </p>

            {/* Verification highlights */}
            <div className="flex items-center gap-2.5 mt-3 text-[11px] text-slate-400 font-semibold bg-slate-900/50 p-3 rounded-lg w-fit border border-slate-900">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Certified Private Specialist Clinic</span>
            </div>
          </div>

          {/* Quick links (Col 3) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Clinical Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Meet Dr. {config.doctor.name.split(',')[0].replace('Dr. ', '')}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Medical Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleScrollTo(e, '#testimonials')}
                  className="hover:text-white transition-colors"
                >
                  Patient Stories
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScrollTo(e, '#gallery')}
                  className="hover:text-white transition-colors"
                >
                  Take Clinic Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-slate-500">
              <p>
                <strong className="text-slate-300">Address:</strong><br />
                {config.contact.address}
              </p>
              <p>
                <strong className="text-slate-300">Inquiries:</strong> {config.contact.phone}
              </p>
              <p>
                <strong className="text-slate-300">Email:</strong> {config.contact.email}
              </p>
            </div>
          </div>

        </div>

        {/* Lower Footer Details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4.5">
          
          {/* Copyright & Disclaimer info */}
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-slate-600 leading-normal">
              © {new Date().getFullYear()} {config.displayName}. All rights reserved under local health regulations.
            </p>
            <p className="text-[10px] text-slate-700 mt-1 max-w-2xl leading-normal">
              Disclaimer: The medical, aesthetic, or surgical information provided throughout this practice platform is designed for educational or intake preparation guidelines only and should not be used in place of individual clinical analysis.
            </p>
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            title="Scroll to page top"
            id="scroll-top-btn"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}
