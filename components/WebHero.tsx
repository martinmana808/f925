import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ArrowRight, Globe, ShoppingBag, BarChart3 } from 'lucide-react';

export const WebHero: React.FC = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />
      
      {/* Background Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-neutral-50 border border-neutral-200 rounded-full">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Digital Craftsmanship</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
            Web design that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
              converts.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're a web design company and Shopify expert building conversion-focused 
            digital experiences for ambitious businesses.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
            {[
              { icon: <Globe size={20} />, label: 'Web Design' },
              { icon: <ShoppingBag size={20} />, label: 'Shopify' },
              { icon: <BarChart3 size={20} />, label: 'SEO' },
              { icon: <ArrowRight size={20} />, label: 'Marketing' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white border border-neutral-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-emerald-600">{item.icon}</div>
                <span className="text-sm font-semibold text-neutral-900">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-neutral-900 text-white text-lg font-bold rounded-2xl hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/10 active:scale-95"
            >
              Start Your Project
            </a>
            <a 
              href="#services" 
              className="text-lg font-bold text-neutral-900 hover:text-emerald-600 transition-colors flex items-center gap-2"
            >
              Explore Services <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
