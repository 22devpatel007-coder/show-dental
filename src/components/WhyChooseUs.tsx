import React from 'react';
import { ClinicConfig } from '../types';
import LucideIcon from './LucideIcon';

interface WhyChooseUsProps {
  config: ClinicConfig;
}

export default function WhyChooseUs({ config }: WhyChooseUsProps) {
  const props = config.whyChooseUs;

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/50" aria-label="Why Choose Our Clinic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold trust statement (Col 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
              Our Standards
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight tracking-tight">
              Setting the Benchmark for Modern Clinical Care
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-slate-500 leading-relaxed">
              We understand that choosing a healthcare provider is a deeply personal decision. We hold ourselves to rigorous clinical benchmarks to ensure your visits are safe, predictable, and fully therapeutic.
            </p>

            {/* Quick stats list */}
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-center gap-3">
                <span className={`flex h-4.5 w-4.5 items-center justify-center rounded-full text-xs font-bold ${config.colors.primaryLight} ${config.colors.primaryText}`}>✓</span>
                <span className="text-xs sm:text-sm font-bold text-slate-700">100% HIPAA & Medical Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`flex h-4.5 w-4.5 items-center justify-center rounded-full text-xs font-bold ${config.colors.primaryLight} ${config.colors.primaryText}`}>✓</span>
                <span className="text-xs sm:text-sm font-bold text-slate-700">Cleanliness Exceeding State Standards</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`flex h-4.5 w-4.5 items-center justify-center rounded-full text-xs font-bold ${config.colors.primaryLight} ${config.colors.primaryText}`}>✓</span>
                <span className="text-xs sm:text-sm font-bold text-slate-700">Zero-Wait Check-in Priority System</span>
              </div>
            </div>
          </div>

          {/* Right Column: Propositon Cards Grid (Col 7) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {props.map((prop) => (
              <div
                key={prop.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 hover:border-slate-300 flex flex-col gap-4.5 transition-all duration-300 hover:-translate-y-1"
                id={`value-prop-card-${prop.id}`}
              >
                {/* Icon Container */}
                <div className={`p-3 rounded-xl w-fit ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                  <LucideIcon name={prop.iconName} size={20} />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-sans font-bold text-base text-slate-900 leading-snug">
                    {prop.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed mt-2">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
