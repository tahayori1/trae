import React from 'react';
import { SectionId } from '../types';
import { LOCATIONS } from '../constants';
import { Globe, ArrowRight } from 'lucide-react';

const Dealers: React.FC = () => {
  return (
    <section id={SectionId.DEALERS} className="py-32 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Header - Left Column */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-serif text-stone-900 mb-8 leading-tight">
              Global <br />
              <span className="italic text-stone-400 font-light">Network.</span>
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xs mb-12">
              Our architectural reach extends across continents. From our headquarters in Spain to logistics hubs in the Americas.
            </p>
            
            <button className="hidden md:flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-2 hover:opacity-60 transition-opacity">
              Become a Partner <ArrowRight size={14} />
            </button>
          </div>

          {/* Locations Grid - Right Column */}
          <div className="md:col-span-8">
            <div className="border-t border-stone-300">
              {LOCATIONS.map((loc, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-stone-300 hover:bg-stone-200/50 transition-colors cursor-default"
                >
                  <div className="flex items-baseline gap-6 mb-2 md:mb-0">
                    <span className="text-xs font-mono text-stone-400 w-12">{loc.code}</span>
                    <span className="text-2xl font-serif text-stone-900">{loc.city}</span>
                  </div>
                  
                  <div className="flex items-center gap-12">
                     <span className="text-xs uppercase tracking-widest text-stone-500 w-24 text-right md:text-left">{loc.country}</span>
                     <span className="hidden md:block text-xs font-medium text-stone-400 border border-stone-300 px-3 py-1 rounded-full">{loc.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-12 md:hidden">
                <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-2">
                Become a Partner <ArrowRight size={14} />
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dealers;