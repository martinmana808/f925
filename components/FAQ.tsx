import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div>
            <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
                FAQ
            </div>
            <h2 className="text-4xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">
                Common Questions
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
                Everything you need to know about our products, implementation process, and security standards.
            </p>
        </div>

        <div className="lg:col-span-2">
            <div className="divide-y divide-neutral-100 border-t border-b border-neutral-100">
                {FAQS.map((faq, index) => (
                    <div key={index} className="py-6">
                        <button 
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between text-left group"
                        >
                            <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors pr-8">
                                {faq.question}
                            </h3>
                            <span className="text-neutral-400 group-hover:text-blue-600 transition-colors">
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </span>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-4 text-neutral-500 text-sm leading-relaxed max-w-2xl">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};