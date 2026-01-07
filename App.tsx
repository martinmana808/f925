import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaryChat } from './components/GaryChat';
import { VideoTestimonial } from './components/VideoTestimonial';
import { X } from 'lucide-react';

const App: React.FC = () => {
    // Just file names now, as we don't display text
    const videoFiles = [
        "VIDEO-2025-10-23-10-27-06.mp4",
        "VIDEO-2025-10-23-10-32-15.mp4",
        "VIDEO-2025-10-23-10-34-55.mp4",
        "VIDEO-2025-10-23-10-53-45.mp4",
        "VIDEO-2025-10-23-14-44-29.mp4"
    ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white relative overflow-hidden font-sans">
      
      {/* Subtle Gradient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* LEFT COLUMN: Content (Sticky) */}
        <div className="relative p-6 md:p-12 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto custom-scrollbar flex flex-col justify-between">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12 max-w-2xl mx-auto lg:mx-0 w-full"
            >
                {/* Header / Manifesto */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tighter leading-tight mb-8">
                    F925
                    </h1>
                    
                    <div className="space-y-6 text-xl md:text-2xl text-neutral-500 font-light leading-relaxed">
                        <p className="text-neutral-900 font-medium">
                            Our AI products are so good, we don't even need a website.
                        </p>
                        <p>
                            We replaced the browsing with a conversation. Experience the power and utility of our technology firsthand.
                        </p>
                        <p className="text-neutral-900 font-bold">
                            Don't search. Just ask.
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="space-y-8">
                    <h3 className="text-lg font-medium text-neutral-900 leading-tight max-w-md">
                        What some of our clients and business partners have to say about us.
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        {videoFiles.map((file, i) => (
                            <VideoTestimonial 
                                key={i}
                                src={`/videos/${file}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Contact Footer */}
                <div className="pt-8 border-t border-neutral-100">
                     <a 
                        href="mailto:contact@f925.ai" 
                        className="text-sm font-semibold text-neutral-400 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-900 pb-0.5"
                    >
                        Contact us
                    </a>
                </div>
            </motion.div>
        </div>

        {/* RIGHT COLUMN: Chat (Full Height) */}
        <div className="h-[80vh] lg:h-screen bg-neutral-50/50 border-l border-neutral-100/50 relative">
             <GaryChat />
        </div>

      </div>
    </div>
  );
};

export default App;
