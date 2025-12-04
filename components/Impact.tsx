import React from 'react';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';
import { Timer, Target, BarChart2, Zap } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <Section className="bg-[#050505] text-white overflow-hidden relative border-t border-neutral-900">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
        <div className="max-w-3xl">
           <div className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
             <BarChart2 size={12} />
             Performance Metrics
           </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-white mb-6">
            Quantifiable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Evolution.</span>
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-xl">
             We don't deal in vague promises. We deploy systems that generate measurable shifts in your operational baseline.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* Card 1: Speed / Time Reduction (Large) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                   <Timer size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Workflow Velocity</h3>
                <p className="text-neutral-400 text-sm max-w-md">Drastic reduction in task completion time for complex data retrieval and synthesis workflows.</p>
            </div>

            {/* Graph Visualization */}
            <div className="relative z-10 mt-4 space-y-6">
                {/* Traditional */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        <span>Human-Only Process</span>
                        <span>4.5 Hours</span>
                    </div>
                    <div className="h-4 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "90%" }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-neutral-600 rounded-full"
                        />
                    </div>
                </div>

                {/* AI Augmented */}
                <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">
                        <span>F925 Agent</span>
                        <span>2.3 Minutes</span>
                    </div>
                    <div className="h-4 w-full bg-neutral-800 rounded-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-blue-500/20 blur-sm" />
                        <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "12%" }}
                           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                           className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                        />
                    </div>
                </div>
            </div>
        </motion.div>


        {/* Card 2: Consistency (Tall) */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group"
        >
             <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
             <div className="relative z-10">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                   <Target size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Precision</h3>
                <p className="text-neutral-400 text-sm mb-8">Eliminating variability in decision making.</p>
             </div>

             {/* Graphic: Waveform */}
             <div className="relative z-10 flex-1 flex items-center justify-center bg-neutral-950/50 rounded-2xl border border-white/5 p-4">
                <div className="relative w-full h-32 flex items-center">
                    {/* Chaotic Line */}
                    <svg className="absolute inset-0 w-full h-full text-neutral-700" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <path d="M0,25 Q10,5 20,40 T40,10 T60,45 T80,5 T100,25" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    </svg>
                    {/* Stable Line */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                    <div className="absolute top-1/2 left-[80%] w-3 h-3 bg-white rounded-full -translate-y-1/2 shadow-[0_0_15px_white] animate-pulse" />
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-purple-400">99.9% Consistency</div>
             </div>
        </motion.div>

        {/* Card 3: Data Analysis */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-neutral-900/50 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group"
        >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
             <div className="relative z-10">
                 <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
                   <Zap size={24} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Deep Insight</h3>
                <p className="text-neutral-400 text-sm mb-6">Processing volume that scales infinitely.</p>
             </div>
             
             {/* Stat Big */}
             <div className="relative z-10 mt-auto">
                 <div className="text-5xl font-mono font-bold text-white tracking-tighter mb-2">
                    50k<span className="text-emerald-500">+</span>
                 </div>
                 <div className="h-1 w-full bg-neutral-800 rounded-full mb-2 overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2 }}
                        className="h-full bg-emerald-500"
                    />
                 </div>
                 <span className="text-xs text-neutral-500 font-mono uppercase">Documents processed / hour</span>
             </div>
        </motion.div>

        {/* Card 4: ROI / Savings (Large) */}
        <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="col-span-1 lg:col-span-2 bg-gradient-to-r from-neutral-900 to-neutral-800 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group"
        >
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none" />
             
             <div className="relative z-10 max-w-md mb-8 md:mb-0">
                 <h3 className="text-3xl font-heading font-bold text-white mb-4">Compound Efficiency</h3>
                 <p className="text-neutral-400 text-sm leading-relaxed">
                    The real value isn't just speed; it's the compounding effect of error reduction and automated throughput on your bottom line.
                 </p>
             </div>

             <div className="relative z-10 flex gap-8">
                 <div className="text-center">
                     <div className="text-4xl font-bold text-white mb-1">3x</div>
                     <div className="text-xs text-neutral-500 font-mono uppercase">Output</div>
                 </div>
                 <div className="w-[1px] h-12 bg-neutral-700" />
                 <div className="text-center">
                     <div className="text-4xl font-bold text-white mb-1">-60%</div>
                     <div className="text-xs text-neutral-500 font-mono uppercase">OpEx</div>
                 </div>
             </div>
        </motion.div>

      </div>
    </Section>
  );
};