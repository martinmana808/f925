import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { SERVICES } from '../constants';
import { ArrowUpRight, Plus, ArrowRight, CornerDownRight, Cpu } from 'lucide-react';

export const Products: React.FC = () => {
  return (
    <Section id="products" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

      <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-neutral-100 pb-10">
        <div className="max-w-3xl">
           <div className="inline-flex items-center gap-2 text-blue-600 font-mono text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 px-3 py-1 rounded-full">
             <Cpu size={12} />
             Core Capabilities
           </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">
            Building Intelligent <br/>Solutions.
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
            We move beyond simple chatbots. We combine specialized knowledge, robust integration, and agentic design to deliver comprehensive AI ecosystems.
          </p>
        </div>
        
         <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-mono font-medium text-neutral-900 group">
            <span className="border-b border-neutral-900 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">View full stack</span> 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform group-hover:text-blue-600" />
         </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(0,1fr)]">
        
        {/* Card 1: AI Assistants - Spans 7 cols - Redesigned Tech Look */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-950 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[500px] border border-slate-800 shadow-2xl shadow-blue-900/10"
        >
          {/* Decorative accents - Tech Mesh */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Large Icon Background */}
           <div className="absolute top-8 right-8 text-white/5 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
             {React.createElement(SERVICES[0].icon, { size: 180, strokeWidth: 0.5 })}
           </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
               <div className="px-3 py-1 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-xs font-mono shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md">
                  {SERVICES[0].subtitle}
               </div>
            </div>

            <h3 className="text-3xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight">
              {SERVICES[0].title}
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mb-10 font-light">
              {SERVICES[0].description}
            </p>
          </div>
          
          <div className="relative z-10 pt-8 border-t border-white/10 group-hover:border-white/20 transition-colors">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {SERVICES[0].features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-mono group/item">
                   <div className="mt-1 p-0.5 rounded bg-blue-500/20 group-hover/item:bg-blue-500/40 transition-colors">
                      <CornerDownRight size={12} className="text-blue-400" />
                   </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column Stack */}
        <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 2: Agentic Workflows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-between group hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 border border-neutral-200 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-50/50 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

               <div>
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-neutral-50 group-hover:bg-purple-50 rounded-xl flex items-center justify-center border border-neutral-100 group-hover:border-purple-100 text-neutral-900 transition-colors duration-300">
                        {React.createElement(SERVICES[1].icon, { size: 24, className: "group-hover:text-purple-600 transition-colors" })}
                    </div>
                 </div>
                 
                 <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-3 tracking-tight">
                   {SERVICES[1].title}
                 </h3>
                 <p className="text-base text-neutral-500 leading-relaxed mb-6">
                   {SERVICES[1].description}
                 </p>
               </div>
               <div>
                  <div className="flex flex-wrap gap-2">
                     {SERVICES[1].features.slice(0, 3).map((feature, i) => (
                       <span key={i} className="px-3 py-1.5 bg-neutral-50 group-hover:bg-white rounded-lg text-xs font-mono text-neutral-600 group-hover:text-purple-700 border border-neutral-100 group-hover:border-purple-100 transition-colors shadow-sm">
                         {feature}
                       </span>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* Card 3: AI Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-between group hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 border border-neutral-200 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50/50 to-transparent rounded-bl-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               
               <div>
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-neutral-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center border border-neutral-100 group-hover:border-blue-100 text-neutral-900 transition-colors duration-300">
                        {React.createElement(SERVICES[2].icon, { size: 24, className: "group-hover:text-blue-600 transition-colors" })}
                    </div>
                 </div>
                 
                 <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-3 tracking-tight">
                   {SERVICES[2].title}
                 </h3>
                 <p className="text-base text-neutral-500 leading-relaxed mb-6">
                   {SERVICES[2].description}
                 </p>
               </div>
               <div>
                  <div className="flex flex-wrap gap-2">
                     {SERVICES[2].features.slice(0, 3).map((feature, i) => (
                       <span key={i} className="px-3 py-1.5 bg-neutral-50 group-hover:bg-white rounded-lg text-xs font-mono text-neutral-600 group-hover:text-blue-700 border border-neutral-100 group-hover:border-blue-100 transition-colors shadow-sm">
                         {feature}
                       </span>
                     ))}
                  </div>
               </div>
            </motion.div>

        </div>

      </div>
    </Section>
  );
};