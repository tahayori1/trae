import React from 'react';
import { SectionId } from '../types';
import { STATS } from '../constants';
import { Cpu, Box, Truck, BarChart3, Monitor, ArrowUpRight } from 'lucide-react';

const Technology: React.FC = () => {
  return (
    <section id={SectionId.TECHNOLOGY} className="py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - Technical Style */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-t border-stone-800 pt-8">
            <div className="max-w-2xl">
                <div className="text-yellow-500 mb-4">
                    <Cpu strokeWidth={1} size={48} />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    Design Center <br/> træ Lab<span className="align-super text-sm">TM</span>
                </h2>
                <p className="text-stone-400 font-light text-lg leading-relaxed max-w-xl">
                    We drive the transformation of the furniture sector with a smart system that integrates AI and cutting-edge technology.
                    Architecture meets Intelligence.
                </p>
            </div>
            
            {/* Stats - Grid Lines */}
            <div className="mt-12 md:mt-0 grid grid-cols-2 gap-x-12 gap-y-12">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                        <span className="text-4xl font-light text-white font-brand">{stat.value}</span>
                        <span className="text-xs uppercase tracking-widest text-stone-500 mt-2">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Technical Grid - Wireframe Look */}
        <div className="grid md:grid-cols-3 border-l border-t border-stone-800">
            {[
                {
                    icon: Monitor,
                    title: "Interactive Lab",
                    desc: "Real-time updates, constant access. Visualize in 3D, select finishes, and quote instantly."
                },
                {
                    icon: BarChart3,
                    title: "AI Intelligence",
                    desc: "Our system learns from each interaction. Real-time manufacturing status verification."
                },
                {
                    icon: Truck,
                    title: "Smart Logistics",
                    desc: "Centralized control of fleet and cargo. Sustainable, reinforced packaging for safety."
                }
            ].map((item, idx) => (
                <div key={idx} className="border-r border-b border-stone-800 p-12 hover:bg-stone-800/50 transition-colors group cursor-default">
                    <item.icon className="text-stone-500 group-hover:text-yellow-500 transition-colors mb-8" strokeWidth={1} size={32} />
                    <h3 className="text-lg font-serif mb-4 text-stone-200">{item.title}</h3>
                    <p className="text-stone-500 font-light text-sm leading-relaxed">
                        {item.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-24 border border-stone-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-stone-800/20">
             <div>
                <p className="text-2xl font-serif italic text-stone-300">"More than an exhibition, a sensory experience."</p>
             </div>
             <button className="flex items-center gap-3 bg-white text-stone-900 px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-stone-200 transition-colors">
                Access Lab <ArrowUpRight size={16} />
             </button>
        </div>
      </div>
    </section>
  );
};

export default Technology;