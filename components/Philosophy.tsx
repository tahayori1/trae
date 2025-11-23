import React from 'react';
import { SectionId } from '../types';

const Philosophy: React.FC = () => {
  return (
    <section id={SectionId.PHILOSOPHY} className="py-32 bg-stone-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-24 items-start">
          
          {/* Text Content - Architectural Typography */}
          <div className="md:w-5/12 pt-12">
            <h2 className="text-4xl md:text-6xl text-stone-900 font-serif leading-none mb-12">
              The Origin <br />
              <span className="italic text-stone-400 font-light">of passion.</span>
            </h2>
            <div className="space-y-8 text-stone-600 font-light text-lg leading-relaxed text-justify">
              <p>
                At the origin of our brand, two factors converge: the raw material that excites us—<strong className="font-medium text-stone-900">wood</strong>—and the style that represents us—<strong className="font-medium text-stone-900">Nordic</strong>.
              </p>
              <p>
                We construct custom kitchen furniture from scratch. We do not just assemble; we adapt to the architectural constraints and the aesthetic desires of every client.
              </p>
              <p>
                Offering a high degree of customization and competitive prices with a close, personalized approach. We advise at every step, ensuring the kitchen becomes the beating heart of the home.
              </p>
            </div>
            
            <div className="mt-16 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-stone-900"></div>
               <div>
                  <p className="text-stone-900 text-sm uppercase tracking-widest font-bold">Ramón Moreno</p>
                  <p className="text-stone-400 text-xs uppercase tracking-wider mt-1">CEO Trae Home, S.L.</p>
               </div>
            </div>
          </div>

          {/* Image - Clean Frame */}
          <div className="md:w-7/12 relative group">
             <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                <img 
                  src="https://picsum.photos/id/192/1200/1600" 
                  alt="Woodworking craftsmanship" 
                  className="w-full h-full object-cover filter grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
             </div>
             <div className="hidden md:block absolute -right-6 top-12 text-9xl font-serif text-stone-900 opacity-5 rotate-90 origin-top-right whitespace-nowrap select-none pointer-events-none">
                Handcrafted
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;