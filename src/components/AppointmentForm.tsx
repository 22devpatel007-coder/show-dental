import React, { useState } from 'react';
import { ClinicConfig } from '../types';
import { Calendar, Phone, User, MessageSquare, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface AppointmentFormProps {
  config: ClinicConfig;
}

export default function AppointmentForm({ config }: AppointmentFormProps) {
  // Local Form States
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.preferredDate) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    /* 
     DEVELOPER NOTE FOR BACKEND CONNECTION:
     To connect this form to real infrastructure:

     1. REST API Integration:
        Replace this local timeout simulation with an actual fetch request:
        
        try {
          const response = await fetch('/api/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          });
          const result = await response.json();
          // handle success state with result.reference
        } catch(err) {
          // handle network error
        }

     2. Direct Email Dispatch:
        Utilize EmailJS or Resend to forward form parameters directly to clinic administration.

     3. Direct client-side WhatsApp dispatch redirect:
        const whatsappText = encodeURIComponent(`New Consultation Request\nName: ${formData.fullName}\nPhone: ${formData.phone}\nPreferred Date: ${formData.preferredDate}`);
        window.open(`https://wa.me/${config.contact.whatsappNumber}?text=${whatsappText}`);
    */

    // Simulate clinical dispatch latency (1.2 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Generate a realistic medical booking confirmation reference
      const referenceCode = `${config.logoText.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(referenceCode);

      // Persist to local storage for patient convenience
      const existingBookings = JSON.parse(localStorage.getItem('clinic_appointments') || '[]');
      const newBooking = {
        id: referenceCode,
        clinicId: config.id,
        clinicName: config.displayName,
        patientName: formData.fullName,
        patientPhone: formData.phone,
        date: formData.preferredDate,
        time: formData.preferredTime,
        message: formData.message,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('clinic_appointments', JSON.stringify([...existingBookings, newBooking]));
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
      consent: false,
    });
    setIsSuccess(false);
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-white" aria-label="Book an Appointment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Explanatory Clinical Text (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
              In-Take Scheduling
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight tracking-tight">
              Secure Your Consult Appointment Today
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              We operate an optimized priority-scheduling system. Submit your preferred date, and our patient coordinator team will review clinic capacity and contact you to lock in your exact time.
            </p>

            <div className="flex flex-col gap-5 mt-3">
              <div className="flex gap-4">
                <div className={`p-2.5 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">100% Patient Confidentiality</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">Your data is handled securely under strict medical privacy regulations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className={`p-2.5 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Prompt Coordination Callback</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">A patient care executive will phone you back within 2 business hours of your request.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Card (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-900/5 overflow-hidden p-6 sm:p-9 relative">
              
              {/* Dynamic Header */}
              <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-slate-100">
                <div className={`p-3 rounded-lg text-white ${config.colors.primary}`}>
                  <Calendar size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Patient Intake Request</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Please provide standard diagnostic contact fields.</p>
                </div>
              </div>

              {!isSuccess ? (
                /* The Booking Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" id="booking-intake-form">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all"
                        placeholder="Johnathan Doe"
                      />
                    </div>
                  </div>

                  {/* Phone & Date Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    
                    {/* Phone Input */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Date <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        id="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="block w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all cursor-pointer"
                        />
                    </div>

                  </div>

                  {/* Preferred Time Window & Subject */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Consultation Window
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Morning (8AM-12PM)', 'Afternoon (12PM-4PM)', 'Evening (4PM-6PM)'].map((timeOption) => {
                        const isSelected = formData.preferredTime === timeOption;
                        return (
                          <button
                            key={timeOption}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, preferredTime: timeOption }))}
                            className={`px-2 py-2 rounded-lg text-[10px] sm:text-xs font-semibold border text-center transition-all cursor-pointer ${
                              isSelected
                                ? `${config.colors.primary} text-white border-transparent`
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                            }`}
                            id={`time-opt-${timeOption.toLowerCase().split(' ')[0]}`}
                          >
                            {timeOption.split(' ')[0]}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Messages / Special Concerns */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Medical Concern / Notes (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-4 focus:ring-slate-100 transition-all resize-none"
                      placeholder="e.g., severe joint pain, aesthetic skin questions, routine checkup..."
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 border-slate-300 rounded-md focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-normal">
                      I agree to the clinic privacy policy and consent to receiving a phone callback or secure SMS regarding my requested consultation.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-4 rounded-lg font-sans text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isSubmitting ? 'opacity-85 cursor-not-allowed' : `${config.colors.primary} ${config.colors.primaryHover} hover:shadow-lg hover:-translate-y-0.5`
                    }`}
                    id="booking-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Securely...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                /* Booking Success Message Panel */
                <div className="text-center py-6 animate-fade-in" id="booking-success-container">
                  <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4.5 border border-emerald-100">
                    <CheckCircle size={38} />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900">Intake Request Submitted</h4>
                  <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your clinical request has been queued. A patient care coordinator will contact you shortly to confirm your reservation.
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 max-w-md mx-auto leading-relaxed italic">
                    This is a demonstration website. No data has been sent or stored on a server.
                  </p>

                  {/* Reference Ticket info */}
                  <div className="bg-slate-50 border border-slate-200/80 p-4.5 rounded-xl my-6 inline-block text-left w-full max-w-sm">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Confirmation Token</span>
                    <strong className="block text-sm font-mono text-slate-800 mt-1.5">{bookingRef}</strong>
                    
                    <div className="border-t border-slate-200/50 mt-3 pt-3 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Service Type</span>
                        <span className="font-bold text-slate-700 capitalize">{config.clinicType} Practice</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Target Date</span>
                        <span className="font-bold text-slate-700">{formData.preferredDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-sm mx-auto">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors flex-1 cursor-pointer"
                    >
                      New Booking
                    </button>
                    <a
                      href={`https://wa.me/${config.contact.whatsappNumber}?text=Hello%20${config.brandName},%20I%20have%20submitted%20booking%20request%20ref%20${bookingRef}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex-1 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare size={14} />
                      <span>Confirm on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
