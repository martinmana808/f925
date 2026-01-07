import React from 'react';
import { Section } from './ui/Section';
import { VALUE_PROPS } from '../constants';

export const WhyItWorks: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="mb-24 max-w-4xl">
        <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
             Our Methodology
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">The F925 Advantage</h2>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Our core principles ensure that every AI product we build is robust, reliable, and fundamentally connected to real business outcomes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {VALUE_PROPS.map((prop) => (
          <div key={prop.title} className="flex flex-col items-start pt-6 border-t border-neutral-200 group">
            <div className="mb-6 text-neutral-400 group-hover:text-blue-600 transition-colors">
              <prop.icon size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3 tracking-tight">{prop.title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};