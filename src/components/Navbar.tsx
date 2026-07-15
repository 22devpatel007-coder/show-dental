import React, { useState, useEffect } from 'react';
import { ClinicConfig } from '../types';
import { Menu, X, Calendar, MessageSquare } from 'lucide-react';
import LucideIcon from './LucideIcon';

interface NavbarProps {
  config: ClinicConfig;
}

export default function Navbar({ config }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    { name: 'About Dr.', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Clinic Tour', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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

  // Determine dynamic brand icon based on clinic type
  let brandIcon = 'Activity';
  if (config.clinicType === 'dental') brandIcon = 'Smile';
  if (config.clinicType === 'skin') brandIcon = 'Sparkles';
  if (config.clinicType === 'eye') brandIcon = 'Eye';

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-slate-900/5 border-b border-slate-100 py-3'
          : 'bg-white border-b border-transparent py-4'
      }`}
      id="navbar-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo-link"
          >
            <div className={`p-2 rounded-lg transition-transform group-hover:scale-105 ${config.colors.primaryLight} ${config.colors.primaryText}`}>
              <LucideIcon name={brandIcon} size={22} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tight text-slate-900 leading-none">
                {config.brandName}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase mt-0.5">
                Private Practice
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`font-sans text-[13px] font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1.5 border-b-2 border-transparent hover:border-slate-300`}
                id={`desktop-nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#appointment"
              onClick={(e) => handleScrollTo(e, '#appointment')}
              className={`flex items-center gap-1.5 px-4.5 py-2 rounded-lg font-sans text-xs font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ${config.colors.primary} ${config.colors.primaryHover}`}
              id="desktop-nav-cta"
            >
              <Calendar size={14} />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[60px] z-50 bg-slate-900/40 backdrop-blur-xs lg:hidden transition-all duration-300 animate-fade-in">
          <div className="bg-white px-4 py-6 border-b border-slate-100 shadow-xl shadow-slate-900/10 flex flex-col gap-4 animate-fade-in-down">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-sans text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 px-3 py-2.5 rounded-lg transition-colors"
                  id={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-col gap-2.5">
              <a
                href="#appointment"
                onClick={(e) => handleScrollTo(e, '#appointment')}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-sans text-sm font-semibold text-white shadow-sm active:scale-[0.98] transition-transform cursor-pointer ${config.colors.primary} ${config.colors.primaryHover}`}
                id="mobile-nav-cta-booking"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </a>
              <a
                href={`https://wa.me/${config.contact.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-sans text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                id="mobile-nav-cta-whatsapp"
              >
                <MessageSquare size={16} className="text-emerald-500" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
