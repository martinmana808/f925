import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { PencilRuler, ShoppingCart, Search, Mail, Camera, Megaphone } from 'lucide-react';

export const WebServices: React.FC = () => {
  const services = [
    {
      title: 'Web design and development',
      description: 'Custom, responsive websites built to engage your audience and drive results.',
      icon: <PencilRuler className="w-8 h-8" />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Shopify Ecommerce',
      description: 'Expert Shopify development to create high-converting online stores.',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'bg-emerald-500/10 text-emerald-600',
    },
    {
      title: 'SEO Services',
      description: 'Strategic optimization to help your business climb the search rankings.',
      icon: <Search className="w-8 h-8" />,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      title: 'Email Marketing',
      description: 'Targeted campaigns that keep your customers coming back for more.',
      icon: <Mail className="w-8 h-8" />,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'Photography',
      description: 'High-quality visual content that makes your brand stand out.',
      icon: <Camera className="w-8 h-8" />,
      color: 'bg-rose-500/10 text-rose-600',
    },
    {
      title: 'Graphic design',
      description: 'Professional branding and visuals that tell your story.',
      icon: <Megaphone className="w-8 h-8" />,
      color: 'bg-indigo-500/10 text-indigo-600',
    },
  ];

  return (
    <Section id="services" className="bg-white">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tighter text-neutral-900 mb-6">
          Get your business <br />
          <span className="text-neutral-400">web ready and pumping</span>
        </h2>
        <p className="text-lg text-neutral-500 max-w-2xl">
          We provide a comprehensive range of digital services to help NZ businesses thrive in the online world.
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-neutral-50 border border-neutral-100 rounded-3xl hover:border-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`p-4 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">{service.title}</h3>
              <p className="text-neutral-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
    </Section>
  );
};
