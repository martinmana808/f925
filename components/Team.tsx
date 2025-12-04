import React from 'react';
import { Section } from './ui/Section';
import { TEAM } from '../constants';
import { Cpu, Network, Zap } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <Section className="bg-neutral-50">
      <div className="mb-20">
         <div className="inline-flex items-center gap-2 text-neutral-400 font-mono text-xs font-bold uppercase tracking-widest mb-4">
             The Team Behind the Tech
        </div>
        <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">Built by Product Thinkers</h2>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A compact team with deep expertise in software architecture, business operations, and applied machine learning.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM.map((member, index) => (
          <div key={member.name} className={`bg-white p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm group relative overflow-hidden`}>
            {/* Top color accent */}
            <div className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-purple-500' : 'bg-orange-500'} opacity-0 group-hover:opacity-100 transition-opacity`} />

            <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center text-neutral-900 font-heading font-bold text-xl border border-neutral-100 group-hover:scale-105 transition-transform">
                  {member.name.charAt(0)}
                </div>
                <div className={`${index === 0 ? 'text-blue-500' : index === 1 ? 'text-purple-500' : 'text-orange-500'} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {index === 0 && <Cpu size={24} strokeWidth={1.5} />}
                    {index === 1 && <Network size={24} strokeWidth={1.5} />}
                    {index === 2 && <Zap size={24} strokeWidth={1.5} />}
                </div>
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-neutral-900 tracking-tight mb-2">{member.name}</h3>
            <div className={`text-xs font-mono font-bold uppercase tracking-wider mb-6 pb-6 border-b border-neutral-100 ${index === 0 ? 'text-blue-600' : index === 1 ? 'text-purple-600' : 'text-orange-600'}`}>
              {member.role}
            </div>
            
            <p className="text-neutral-500 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};