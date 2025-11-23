import React from 'react';
import { SectionId } from '../types';
import { COMPANY_INFO } from '../constants';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-white pt-32 pb-12 border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          
          {/* Brand - Span 4 cols */}
          <div className="md:col-span-4">
            <div className="text-6xl font-brand tracking-tighter mb-8 text-stone-900">træ<span className="text-lg align-top font-sans font-light">®</span></div>
            <p className="text-stone-500 font-light leading-relaxed max-w-sm">
              Manufacturers of custom kitchen furniture. 
              Designing and producing from scratch, adapting to the needs and tastes of each client.
            </p>
          </div>

          {/* Links - Span 2 cols */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-8">Menu</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li><button onClick={() => document.getElementById(SectionId.PHILOSOPHY)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-stone-900 transition-colors">Philosophy</button></li>
              <li><button onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-stone-900 transition-colors">Projects</button></li>
              <li><button onClick={() => document.getElementById(SectionId.TECHNOLOGY)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-stone-900 transition-colors">Technology</button></li>
              <li><button className="hover:text-stone-900 transition-colors">Client Area</button></li>
            </ul>
          </div>

           {/* Contact - Span 3 cols */}
           <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-8">Contact</h4>
            <ul className="space-y-4 text-stone-500 text-sm font-light">
              <li>{COMPANY_INFO.address}</li>
              <li>{COMPANY_INFO.phone}</li>
              <li>{COMPANY_INFO.email}</li>
            </ul>
          </div>

          {/* Social - Span 2 cols */}
          <div className="md:col-span-1 md:col-start-12 flex flex-col items-end">
             <div className="flex gap-4 mb-4">
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Instagram strokeWidth={1} size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Linkedin strokeWidth={1} size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Facebook strokeWidth={1} size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest text-stone-400">
          <p>&copy; {new Date().getFullYear()} Trae Home, S.L.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-900">Privacy</a>
            <a href="#" className="hover:text-stone-900">Terms</a>
            <a href="#" className="hover:text-stone-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;