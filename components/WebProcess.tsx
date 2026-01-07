import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ClipboardList, Layout, Code2, Rocket } from 'lucide-react';

export const WebProcess: React.FC = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We dive deep into your business goals, target audience, and competition.',
      icon: <ClipboardList />,
    },
    {
      title: 'Design',
      description: 'Crafting a unique visual identity and user experience for your site.',
      icon: <Layout />,
    },
    {
      title: 'Build',
      description: 'Development using modern technologies for speed and reliability.',
      icon: <Code2 />,
    },
    {
      title: 'Launch',
      description: 'Final testing and deployment to get your business live and pumping.',
      icon: <Rocket />,
    },
  ];

  return (
    <Section className="bg-neutral-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#10b9810a,transparent)]" />
      
      <div className="relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter mb-6">Our Process</h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A straightforward, transparent approach to building your digital future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-neutral-700 -z-10" />
              )}
              <div className="bg-neutral-800 border border-neutral-700 p-6 rounded-2xl w-fit mb-8 text-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                {step.icon}
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-neutral-500">0{index + 1}</span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
