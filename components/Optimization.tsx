import React from 'react';
import { Section } from './ui/Section';
import { Sparkles, BarChart3, RefreshCw, Zap, Layers, GitMerge } from 'lucide-react';
import { motion } from 'framer-motion';

export const Optimization: React.FC = () => {
  return (
    <Section className="bg-neutral-50/50 border-b border-neutral-100">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
           <div className="inline-flex items-center gap-2 text-purple-600 font-mono text-xs font-bold uppercase tracking-widest mb-4">
             <Sparkles size={12} />
             System-Wide Impact
           </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">
            Everything can be optimized.
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
             We don't just build chatbots. We re-engineer your core operational architecture. By injecting AI into critical touchpoints, we transform linear processes into intelligent, self-optimizing loops.
          </p>
        </div>
        
         <div className="hidden md:block">
            <div className="flex items-center gap-2 text-sm font-mono text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Efficiency Protocol: Active
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {/* Card 1 */}
         <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
         >
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
               <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">Legacy Modernization</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
               Your old data isn't dead; it's just dormant. We transform legacy databases and static documents into active, querying vector engines that power real-time decision making.
            </p>
         </motion.div>

         {/* Card 2 */}
         <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
         >
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
               <GitMerge size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">Intelligent Pipelines</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
               Move from reactive to proactive. Our agents sit between your APIs, analyzing traffic and data flow to predict bottlenecks, automate routing, and scale resources instantly.
            </p>
         </motion.div>

         {/* Card 3 */}
         <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group"
         >
             <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
               <Zap size={24} />
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">Process Velocity</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">
               Reduce cycle times by 70%. We identify friction points in your workflows—approvals, data entry, synthesis—and deploy autonomous agents to bridge the gaps instantly.
            </p>
         </motion.div>
      </div>
    </Section>
  );
};