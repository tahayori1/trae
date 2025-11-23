import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-32 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-200 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Selected Works</h2>
            <p className="text-stone-500 max-w-sm text-right mt-6 md:mt-0 font-light text-sm">
                A curation of spaces where functionality meets pure aesthetic pleasure.
            </p>
        </div>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className={`group flex flex-col md:flex-row gap-8 md:gap-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image - Sharp & Architectural */}
              <div className={`w-full ${project.layout === 'full' ? 'md:w-full' : 'md:w-2/3'}`}>
                <div className="overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.02]"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
                </div>
              </div>

              {/* Content - Minimal Gallery Info */}
              <div className={`w-full md:w-1/3 flex flex-col justify-center ${project.layout === 'full' ? 'hidden' : 'block'}`}>
                 <div className="border-t border-stone-900 pt-6">
                    <span className="block text-6xl md:text-8xl font-serif text-stone-200 mb-6 font-light group-hover:text-stone-900 transition-colors duration-500">
                        {project.id.toString().padStart(2, '0')}
                    </span>
                    
                    <h3 className="text-2xl font-serif text-stone-900 mb-4">{project.subtitle}</h3>
                    
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8 text-xs uppercase tracking-widest text-stone-400">
                      {project.tags.map((tag, i) => (
                        <span key={tag}>{tag}{i < project.tags.length - 1 && <span className="text-stone-300 mx-2">/</span>}</span>
                      ))}
                    </div>

                    <p className="text-stone-600 font-light leading-relaxed mb-8 text-sm">
                      {project.description}
                    </p>

                    <button className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest hover:gap-6 transition-all duration-300">
                      View Case <ArrowRight size={14} />
                    </button>
                 </div>
              </div>

               {/* Mobile/Full Layout Content Fallback */}
               {project.layout === 'full' && (
                 <div className="md:hidden">
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">{project.subtitle}</h3>
                    <p className="text-stone-600 text-sm">{project.description}</p>
                 </div>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;