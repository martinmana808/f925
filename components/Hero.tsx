import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ArrowRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <Section className="min-h-screen flex items-center justify-center pt-32 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />
      
      {/* Vibrant Background Gradients */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 mb-8 bg-white/60 border border-neutral-200 rounded-full backdrop-blur-sm shadow-sm">
             <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] font-mono font-medium text-emerald-600 uppercase tracking-wider">System Online</span>
             </div>
             <span className="text-xs font-medium text-neutral-500 pr-2">Enterprise AI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-neutral-900 mb-8 leading-[1.05]">
            AI that works in the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              real world.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We design and build intelligent assistants that solve real operational problems, 
            bridging the gap between theory and execution.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-neutral-900 text-white text-base font-medium rounded-xl overflow-hidden transition-all hover:bg-neutral-800 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 border border-transparent hover:border-blue-500/50"
            >
              <div className="relative flex items-center gap-2">
                <Terminal size={18} className="text-blue-400" />
                <span>Build your assistant</span>
              </div>
            </a>
            <a 
              href="#gary" 
              className="px-8 py-4 bg-white text-neutral-900 text-base font-medium rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-all hover:border-blue-200 hover:text-blue-600"
            >
              See how Gary works
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-100/50 flex justify-center gap-12 text-neutral-300">
             {/* Placeholder for logos if needed later */}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};