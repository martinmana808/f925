import React from 'react';
import { Section } from './ui/Section';
import { PROCESS } from '../constants';
import { motion } from 'framer-motion';

export const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-white">
       <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-100 pb-10">
        <div className="max-w-3xl">
           <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
             Our Path to Production
           </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">
            How We Build Your Assistant
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
             A streamlined, five-step process designed for fast, validated deployment of enterprise AI.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {PROCESS.map((step, index) => (
           <div key={step.number} className="flex flex-col group relative">
              {/* Connector Line - Gradient */}
              {index !== PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[50%] w-full h-[2px] bg-gradient-to-r from-neutral-200 to-neutral-100 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-500 -z-10" />
              )}
              
              <div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-center text-sm font-mono font-bold text-neutral-400 mb-6 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300 z-10 shadow-sm group-hover:shadow-blue-500/20 group-hover:scale-110">
                  {step.number}
              </div>
              
              <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{step.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed pr-4">
                  {step.description}
              </p>
           </div>
        ))}
      </div>
    </Section>
  );
};