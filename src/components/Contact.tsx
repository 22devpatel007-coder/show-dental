import React from 'react';
import { ClinicConfig } from '../types';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink, Calendar } from 'lucide-react';

interface ContactProps {
  config: ClinicConfig;
}

export default function Contact({ config }: ContactProps) {
  const contact = config.contact;

  const handleOpenMap = () => {
    const query = encodeURIComponent(contact.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

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
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/50 relative" aria-label="Contact and Hours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            Inquiries
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2 tracking-tight">
            Connect With Our Patient Care Team
          </h2>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct details & Hours (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Details Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col gap-5.5">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100">
                Contact Information
              </h3>

              {/* Phone Detail */}
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Admissions Phone</span>
                  <a href={`tel:${contact.phone}`} className="text-sm font-bold text-slate-800 hover:underline mt-0.5 block">
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Email Detail */}
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Secure Clinic Email</span>
                  <a href={`mailto:${contact.email}`} className="text-sm font-bold text-slate-800 hover:underline mt-0.5 block">
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Address Detail */}
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Physical Location</span>
                  <span className="text-sm font-bold text-slate-800 mt-0.5 block leading-relaxed">
                    {contact.address}
                  </span>
                  <button
                    onClick={handleOpenMap}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider mt-2 hover:underline cursor-pointer ${config.colors.primaryText}`}
                  >
                    <span>Directions in Google Maps</span>
                    <ExternalLink size={10} />
                  </button>
                </div>
              </div>

            </div>

            {/* Working Hours Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex flex-col gap-4">
              <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-3 border-b border-slate-100 flex items-center gap-2">
                <Clock size={16} className={config.colors.primaryText} />
                <span>Practice Hours</span>
              </h3>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-700">Weekdays</span>
                  <span>{contact.workingHours.weekdays.replace('Monday - Friday: ', '')}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-700">Saturday</span>
                  <span>{contact.workingHours.saturday.replace('Saturday: ', '')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-slate-700">Sunday</span>
                  <span className="text-slate-400 font-medium">{contact.workingHours.sunday.replace('Sunday: ', '')}</span>
                </div>
              </div>

              <button
                onClick={handleScrollToAppointment}
                className={`w-full py-2.5 px-4 rounded-lg font-sans text-xs font-bold uppercase tracking-wider text-center border mt-2 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${config.colors.primaryText}`}
              >
                <Calendar size={14} />
                <span>Request Appointment Slot</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium Stylized Interactive Map Frame (Col 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden flex-1 min-h-[340px] flex flex-col">
              
              {/* Map Title Bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-4.5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  <span className="text-xs font-bold text-slate-600">Verified Geographic Plotting</span>
                </div>
                <button
                  onClick={handleOpenMap}
                  className="text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Expand Map</span>
                  <ExternalLink size={10} />
                </button>
              </div>

              {/* Map Body: Renders a real responsive Google Map Embed customized per clinic location! */}
              <div className="relative flex-1 min-h-[280px] bg-slate-100">
                <iframe
                  title="Clinic Google Map Location"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-none"
                  src={config.contact.mapEmbedUrlUrl}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Location Disclaimer Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <p className="text-[10px] text-slate-400 font-medium max-w-sm">
                  * Ample patient car-parking is available directly adjacent to our private practice entrance. Disabled-access ramps are provided.
                </p>
                <button
                  onClick={handleOpenMap}
                  className={`text-[10px] font-extrabold uppercase tracking-widest shrink-0 cursor-pointer ${config.colors.primaryText}`}
                >
                  GET DIRECTIONS
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Floating Sticky WhatsApp Consultation Help Desk (Fixed layout widget) */}
      <a
        href={`https://wa.me/${contact.whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:scale-105 group flex items-center gap-2 cursor-pointer border border-emerald-500"
        title="WhatsApp Emergency Help Desk"
        id="floating-whatsapp-trigger"
      >
        <MessageCircle size={22} className="fill-white text-emerald-600 group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold group-hover:max-w-xs transition-all duration-500 uppercase tracking-wider leading-none">
          Consult Desk
        </span>
      </a>

    </section>
  );
}
