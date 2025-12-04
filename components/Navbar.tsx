import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Case Study', href: '#gary' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <>
      {/* Desktop Floating Nav */}
      <nav className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center gap-10 px-8 py-3 rounded-full border transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-xl border-neutral-200 shadow-lg shadow-black/5' 
              : 'bg-white/50 backdrop-blur-md border-transparent'
          }`}
        >
          <a href="#" className="text-xl font-heading font-black tracking-tighter text-neutral-900">
            F925
          </a>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-neutral-900 text-white text-sm font-semibold rounded-full hover:bg-neutral-800 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </nav>

      {/* Mobile Nav */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6">
        <a href="#" className={`text-2xl font-heading font-black tracking-tighter ${isOpen ? 'text-neutral-900' : 'text-neutral-900'} z-50`}>
          F925
        </a>
        <button 
          className="text-neutral-900 z-50 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-sm border border-neutral-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl p-6 pt-32 flex flex-col gap-8"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-4xl font-heading font-bold tracking-tighter text-neutral-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
               <a 
                  href="#contact" 
                  className="text-4xl font-heading font-bold tracking-tighter text-neutral-900"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};