import React from 'react';
import { ClinicConfig } from '../types';
import { Star, Check } from 'lucide-react';

interface TestimonialsProps {
  config: ClinicConfig;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const testimonials = config.testimonials;

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white" aria-label="Patient Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            Patient Stories
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mt-2 tracking-tight">
            Reviews From Our Recovered Patients
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
            Read first-hand accounts of patient experiences at our private practice, validating our commitment to precision clinical excellence and gentle care.
          </p>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Responsive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 transition-shadow duration-300 flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Review Text Area */}
              <div>
                {/* Stars and Verification */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold border border-emerald-100">
                    <Check size={10} strokeWidth={3} />
                    <span>Verified Patient</span>
                  </div>
                </div>

                {/* Review Copy */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {test.review}
                </p>
              </div>

              {/* Author Info Area */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={test.photoUrl}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-sans font-bold text-xs sm:text-sm text-slate-800 leading-tight">
                    {test.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      {test.date}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className={`text-[10px] font-bold ${config.colors.primaryText}`}>
                      {test.tag}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Aggregate Ratings Info */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 bg-slate-50 p-7 rounded-2xl border border-slate-200/60 shadow-sm max-w-4xl mx-auto text-center sm:text-left">
          <div>
            <h4 className="text-sm font-black text-slate-900">Highest Rated Private Specialist in the Region</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Our clinical statistics are aggregated from verified third-party patient experience surveys.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-3xl font-black text-slate-900">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mt-0.5">Over 380 Google Reviews</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
