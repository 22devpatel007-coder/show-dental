import React from 'react';
import { ClinicConfig } from '../types';
import { Award, CheckCircle2, AwardIcon, GraduationCap, HeartHandshake } from 'lucide-react';

interface AboutDoctorProps {
  config: ClinicConfig;
}

export default function AboutDoctor({ config }: AboutDoctorProps) {
  const doc = config.doctor;

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/50" aria-label="About Our Doctor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            The Clinician
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2 tracking-tight">
            Meet Our Principal Provider
          </h2>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Doctor Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Doctor Image and Quick Specs (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              <img
                src={doc.photoUrl}
                alt={doc.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Highlight Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md border border-slate-800">
                Principal Specialist
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="block text-2xl font-black text-slate-900 leading-none">{doc.experienceYears}+</span>
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1.5 leading-tight">Years Active Practice</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                <span className="block text-2xl font-black text-slate-900 leading-none">99.8%</span>
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wide mt-1.5 leading-tight">Patient Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Doctor Detailed Biography (Col 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6 font-sans">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {doc.name}
              </h3>
              <p className={`text-sm font-semibold mt-1.5 flex items-center gap-1.5 ${config.colors.primaryText}`}>
                <GraduationCap size={16} />
                <span>{doc.qualification}</span>
              </p>
              <p className="text-xs text-slate-400 mt-0.5 font-medium uppercase tracking-wider">
                {doc.title}
              </p>
            </div>

            {/* Dr Introduction */}
            <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{doc.introduction}</p>
            </div>

            {/* Clinic Philosophy Box */}
            <div className="bg-white p-5.5 rounded-xl border border-slate-200/80 shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex gap-4">
              <div className={`p-3 rounded-lg h-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Our Care Philosophy</h4>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {doc.philosophy}
                </p>
              </div>
            </div>

            {/* Professional Achievements list */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3.5">
                Professional Accreditations & Milestones
              </h4>
              <ul className="space-y-2.5">
                {doc.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${config.colors.primaryText}`} />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
