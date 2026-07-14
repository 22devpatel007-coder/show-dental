import React, { useState } from 'react';
import { ClinicConfig } from '../types';
import { Eye, ShieldAlert } from 'lucide-react';

interface GalleryProps {
  config: ClinicConfig;
}

export default function Gallery({ config }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = config.gallery;
  
  // Extract unique categories (e.g., 'Clinic', 'Treatment Room', 'Equipment', 'Staff')
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/50" aria-label="Clinic Tour Gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-bold uppercase tracking-widest ${config.colors.primaryText}`}>
            Our Facilities
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 mt-2 tracking-tight">
            Take a Virtual Tour of Our Private Practice
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-3 max-w-2xl mx-auto">
            Step inside our modern facility, designed purposefully to reduce patient anxiety, uphold clinical sterility, and accommodate cutting-edge diagnostic laser and scan systems.
          </p>
          <div className="w-12 h-1 bg-slate-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? `${config.colors.primary} text-white border-transparent shadow-sm`
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
                id={`gallery-filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Responsive Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.imageUrl)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-white border border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-zoom-in"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest leading-none">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-1 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <div className="p-1.5 bg-white/20 backdrop-blur-md rounded text-white">
                    <Eye size={14} />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Image Full-screen Lightbox Modal (Interaction) */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
            id="gallery-lightbox-modal"
          >
            <div className="relative max-w-4xl max-h-[85vh] rounded-lg overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <img
                src={selectedImage}
                alt="Enlarged Clinical Room Preview"
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                className="absolute top-4 right-4 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition-colors text-xs font-bold cursor-pointer"
                onClick={() => setSelectedImage(null)}
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
