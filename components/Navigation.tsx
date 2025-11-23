import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        isScrolled ? 'bg-white border-b border-stone-200 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo - Pure Architectural Text */}
        <div 
          onClick={() => scrollTo(SectionId.HOME)}
          className={`cursor-pointer font-brand text-4xl tracking-tighter transition-colors ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}
        >
          træ<span className="text-xs font-sans font-light align-top ml-1">®</span>
        </div>

        {/* Desktop Links - Minimalist */}
        <div className="hidden md:flex gap-12 items-center">
          {[
            { id: SectionId.PHILOSOPHY, label: 'Philosophy' },
            { id: SectionId.PROJECTS, label: 'Projects' },
            { id: SectionId.TECHNOLOGY, label: 'Lab' },
            { id: SectionId.DEALERS, label: 'Partners' },
            { id: SectionId.CONTACT, label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-all hover:text-stone-500 ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}
            >
              {item.label}
            </button>
          ))}
          <button className={`flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold border-b border-transparent hover:border-current transition-all ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
            Client Access <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Clean */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-12 space-y-8">
           {[
            { id: SectionId.PHILOSOPHY, label: 'Philosophy' },
            { id: SectionId.PROJECTS, label: 'Projects' },
            { id: SectionId.TECHNOLOGY, label: 'Trae Lab' },
            { id: SectionId.DEALERS, label: 'Partners' },
            { id: SectionId.CONTACT, label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-stone-900 text-3xl font-serif"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;