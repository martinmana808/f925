import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CheckCircle2, Zap, ArrowRight, BarChart3, Database, FileText } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  return (
    <Section id="gary" className="bg-black text-white relative overflow-hidden py-32 md:py-48">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section - Airy and Large */}
        <div className="mb-24 md:mb-40">
           <div className="flex items-center gap-3 mb-8">
              <span className="h-[1px] w-12 bg-neutral-700"></span>
              <span className="text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest">Case Study 01</span>
           </div>
           
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
              <h2 className="text-6xl md:text-9xl font-heading font-bold tracking-tighter leading-[0.9]">
                Meet Gary. <br/>
                <span className="text-neutral-600">The Engineer.</span>
              </h2>
              <p className="text-xl md:text-2xl text-neutral-400 max-w-lg leading-relaxed font-light lg:text-right">
                An intelligent diagnostic system built for STIHL. Gary turns thousands of technical manuals into instant, actionable answers.
              </p>
           </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
           
           {/* Left Column: Stats & Context - Clean Cards */}
           <div className="lg:col-span-4 flex flex-col gap-12 lg:sticky lg:top-32">
              <div className="space-y-6">
                 {/* Stat Card 1 */}
                 <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md hover:bg-neutral-900/60 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                       <BarChart3 className="text-orange-500" size={24} />
                       <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Velocity</span>
                    </div>
                    <div className="text-6xl font-heading font-bold text-white mb-2 tracking-tighter">
                      40%
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">Reduction in mean-time-to-resolution for technical support tickets.</p>
                 </div>

                 {/* Stat Card 2 */}
                 <div className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 backdrop-blur-md hover:bg-neutral-900/60 transition-colors">
                    <div className="flex items-start justify-between mb-6">
                       <Database className="text-blue-500" size={24} />
                       <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Coverage</span>
                    </div>
                    <div className="text-6xl font-heading font-bold text-white mb-2 tracking-tighter">
                      24/7
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">Instant, autonomous access to over 50,000 pages of proprietary schematics.</p>
                 </div>
              </div>

              {/* Quote - Minimalist */}
              <div className="pl-6 border-l border-neutral-800">
                 <p className="text-lg text-neutral-300 italic mb-4 font-light">
                   "Gary isn't just a chatbot; it's a diagnostic engineer on demand. It proved we can deploy AI solutions that impact the bottom line."
                 </p>
                 <footer className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                    — Operations Director, STIHL
                 </footer>
              </div>
           </div>

           {/* Right Column: The UI Mockup (Floating, Glassy) */}
           <div className="lg:col-span-8 relative pt-8">
              {/* Back Glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-orange-500/10 via-blue-500/5 to-purple-500/10 rounded-[4rem] blur-3xl opacity-50" />
              
              <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                 {/* Window Controls */}
                 <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#0F0F0F]/80 backdrop-blur-xl sticky top-0 z-20">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-neutral-700/50" />
                       <div className="w-3 h-3 rounded-full bg-neutral-700/50" />
                       <div className="w-3 h-3 rounded-full bg-neutral-700/50" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                        Gary_System_v2.4
                        </span>
                    </div>
                 </div>

                 {/* Chat Interface */}
                 <div className="p-8 md:p-16 space-y-16 bg-gradient-to-b from-[#0F0F0F] to-[#050505] min-h-[700px]">
                    
                    {/* Message 1: User */}
                    <div className="flex gap-6 max-w-2xl">
                       <div className="w-12 h-12 rounded-2xl bg-neutral-800/50 flex items-center justify-center shrink-0 border border-white/5">
                          <span className="text-xs font-mono text-neutral-400 font-bold">USR</span>
                       </div>
                       <div className="space-y-3 pt-2">
                          <div className="text-xs text-neutral-500 font-mono tracking-widest">TICKET #4921 • 10:42 AM</div>
                          <div className="text-2xl md:text-3xl text-neutral-200 leading-tight font-light tracking-tight">
                             The MS 170 chainsaw won't start. I've checked the spark plug, it looks clean, but there is a strong smell of fuel.
                          </div>
                       </div>
                    </div>

                    {/* Message 2: AI */}
                    <div className="flex gap-6 max-w-4xl ml-auto flex-row-reverse">
                       <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
                          <Zap size={20} className="text-orange-500" />
                       </div>
                       <div className="space-y-6 text-right w-full">
                          <div className="text-xs text-neutral-500 font-mono tracking-widest">ANALYSIS COMPLETE (140ms)</div>
                          
                          <div className="text-2xl md:text-3xl text-white leading-tight font-light tracking-tight">
                             Likely <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 font-medium">flooded engine</span> based on fuel odor indicators.
                          </div>

                          {/* Action Block */}
                          <div className="bg-[#111] p-8 rounded-3xl border border-neutral-800 text-left relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap size={80} />
                             </div>

                             <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3 text-orange-400 mb-2 uppercase tracking-wider text-xs font-bold font-mono">
                                   <CheckCircle2 size={14} /> Recovery Protocol Recommended
                                </div>
                                
                                <div className="space-y-4 font-mono text-sm text-neutral-400">
                                    <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <span className="text-neutral-500">01</span>
                                        <span className="text-neutral-200">Set Master Control Lever to <strong>Run (I)</strong> position.</span>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <span className="text-neutral-500">02</span>
                                        <span className="text-neutral-200">Pull starter rope 5-6 times to clear combustion chamber.</span>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <span className="text-neutral-500">03</span>
                                        <span className="text-neutral-200">Dry spark plug surface and reinstall.</span>
                                    </div>
                                </div>
                             </div>
                          </div>
                          
                          {/* Reference Widget */}
                           <div className="flex justify-end pt-4">
                              <div className="bg-white/5 pl-2 pr-6 py-2 rounded-full border border-white/10 flex items-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group text-left">
                                 <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                                    <FileText size={14} className="text-neutral-400" />
                                 </div>
                                 <div className="flex flex-col">
                                     <span className="text-xs text-white font-medium">MS 170 Service Manual.pdf</span>
                                     <span className="text-[10px] text-neutral-500 font-mono">Page 42 • Ref: Flooded Engine</span>
                                 </div>
                                 <ArrowRight size={14} className="text-neutral-500 group-hover:translate-x-1 transition-transform ml-2" />
                              </div>
                           </div>

                       </div>
                    </div>

                 </div>
              </div>
           </div>

        </div>
      </div>
    </Section>
  );
};