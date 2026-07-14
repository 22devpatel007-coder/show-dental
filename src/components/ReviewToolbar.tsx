import React, { useState } from 'react';
import { ClinicConfig } from '../types';
import { Sparkles, Check, ChevronRight, RefreshCw, X } from 'lucide-react';

interface ReviewToolbarProps {
  currentId: string;
  onSelectConfig: (id: string) => void;
  configs: Record<string, ClinicConfig>;
}

export default function ReviewToolbar({ currentId, onSelectConfig, configs }: ReviewToolbarProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-slate-900 text-white px-3 py-2 rounded-full shadow-lg hover:bg-slate-800 transition-all text-xs font-medium border border-slate-700"
        id="toolbar-open-trigger"
      >
        <RefreshCw size={14} className="animate-spin" style={{ animationDuration: '4s' }} />
        <span>Switch Practice Template</span>
      </button>
    );
  }

  return (
    <div
      className="bg-slate-900 border-b border-slate-800 text-white py-3 px-4 sticky top-0 z-50 font-sans shadow-md"
      id="review-toolbar-container"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="bg-blue-500/15 text-blue-400 p-1 rounded">
            <Sparkles size={16} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">MVP Client Presentation</span>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">Adaptable Engine</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">Toggle clinic presets in real time to see how the branding, colors, copy, and doctor profiles dynamically adapt.</p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {Object.values(configs).map((cfg) => {
            const isSelected = cfg.id === currentId;
            let iconText = '🦷';
            if (cfg.id === 'physio') iconText = '🏃';
            if (cfg.id === 'skin') iconText = '✨';
            if (cfg.id === 'eye') iconText = '👁️';

            // Custom border/glow for active item based on selected clinic type
            let activeStyle = '';
            if (isSelected) {
              if (cfg.id === 'dental') activeStyle = 'bg-blue-600 border-blue-400 text-white shadow-md';
              if (cfg.id === 'physio') activeStyle = 'bg-teal-600 border-teal-400 text-white shadow-md';
              if (cfg.id === 'skin') activeStyle = 'bg-rose-600 border-rose-400 text-white shadow-md';
              if (cfg.id === 'eye') activeStyle = 'bg-indigo-600 border-indigo-400 text-white shadow-md';
            } else {
              activeStyle = 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white';
            }

            return (
              <button
                key={cfg.id}
                onClick={() => onSelectConfig(cfg.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 cursor-pointer ${activeStyle}`}
                id={`preset-btn-${cfg.id}`}
              >
                <span className="text-sm leading-none">{iconText}</span>
                <span>{cfg.displayName}</span>
                {isSelected && <Check size={12} className="ml-1" />}
              </button>
            );
          })}

          <div className="w-px h-6 bg-slate-800 mx-1 hidden sm:block"></div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
            title="Hide presenter bar"
            id="toolbar-close-btn"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
