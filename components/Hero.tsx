import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Architectural Photography Style */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/364/1920/1080"
          alt="Luxury Kitchen Interior"
          className="w-full h-full object-cover grayscale-[20%]"
        />
        {/* Subtle gradient only at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent" />
      </div>

      {/* Content - Structured Layout */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-32">
        <div className="max-w-4xl border-l-2 border-white/80 pl-8 md:pl-12 backdrop-blur-sm bg-stone-900/10 py-8">
          <p className="text-white/90 text-xs uppercase tracking-[0.3em] mb-6">
            Non Conventional Kitchen
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[0.9]">
            Architecture <br />
            <span className="italic font-light">for living.</span>
          </h1>
          <div className="pt-10 flex items-center gap-6">
             <button 
                onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({behavior: 'smooth'})}
                className="text-white text-xs uppercase tracking-[0.2em] font-medium border-b border-white pb-2 hover:opacity-70 transition-opacity"
             >
              Discover Collection
             </button>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-12 right-12 text-white/80 animate-pulse">
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest -rotate-90 origin-center translate-y-8">Scroll</span>
            <div className="h-16 w-[1px] bg-white/50 mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;