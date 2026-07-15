import React, { useState } from 'react';
import { ClinicConfig } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  config: ClinicConfig;
}

export default function FAQ({ config }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(config.faq[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            Patient Questions
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 max-w-xl mx-auto">
            Answers to the questions we hear most often from new and existing patients.
          </p>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-3.5">
          {config.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden"
                id={`faq-item-${item.id}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4.5 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg shrink-0 ${config.colors.primaryLight} ${config.colors.primaryText}`}>
                      <HelpCircle size={16} />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-800">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed px-5 sm:px-6 pb-5 pl-[3.75rem] sm:pl-[3.75rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}