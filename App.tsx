import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GaryChat } from './components/GaryChat';
import { VideoTestimonial } from './components/VideoTestimonial';
import { ContactModal, ContactData } from './components/ContactModal';
import { GaryChatRef } from './components/GaryChat';

const App: React.FC = () => {
    // Just file names now, as we don't display text
    const videoFiles = [
        "VIDEO-2025-10-23-10-27-06.mp4",
        "VIDEO-2025-10-23-10-32-15.mp4",
        "VIDEO-2025-10-23-10-34-55.mp4",
        "VIDEO-2025-10-23-10-53-45.mp4",
        "VIDEO-2025-10-23-14-44-29.mp4"
    ];

    const chatRef = React.useRef<GaryChatRef>(null);

    const [isContactOpen, setIsContactOpen] = useState(false);

    const handleChatClick = (e: React.MouseEvent) => {
        e.preventDefault();
        chatRef.current?.sendUserMessage("Hello Gary, how are you?");
    };

    const handleContactSubmit = async (data: ContactData) => {
        const history = chatRef.current?.getHistory() || [];
        
        // Format chat history for readable email
        const formattedHistory = history.map(m => 
            `[${m.role.toUpperCase()}] ${m.content}`
        ).join('\n\n');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: "f7da2fa0-e2d5-4e86-802a-3b12b7b56771",
                name: data.name,
                email: data.email,
                message: data.message,
                "Conversation with Gary": formattedHistory 
            })
        });

        const result = await response.json();
        if (!result.success) {
             throw new Error(result.message || 'Submission failed');
        }
    };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white relative overflow-hidden font-sans">
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
        onSubmit={handleContactSubmit}
      />
      
      {/* Subtle Gradient Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        {/* LEFT COLUMN: Content (Sticky) */}
        <div className="relative p-8 md:p-12 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto custom-scrollbar flex flex-col justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-10 max-w-2xl mx-auto w-full flex flex-col items-center"
            >
                {/* Header / Manifesto */}
                <div className="flex flex-col items-center gap-6">
                    <span className="text-sm font-medium text-neutral-500 tracking-tight">F925 builds and crafts AI products and solutions</span>
                    
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tighter leading-[1.1] text-neutral-900">
                    What we do is so good, we don't even need a website.
                    </h1>
                    
                    <div className="space-y-6 text-xl text-neutral-600 font-normal leading-relaxed max-w-lg">
                        <p>
 We replaced the browsing with a conversation to show you how good our AI products are. 
                        </p>
                        
                    </div>

                        <span className="text-sm font-medium text-neutral-500 tracking-tight">Experience the power and utility of our technology firsthand<br/>and see for yourself how AI can transform your business.</span>
                    <div className="pt-2">
                        <button 
                            onClick={handleChatClick}
                            className="inline-flex items-center justify-center px-6 py-2.5 text-[15px] font-medium bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all hover:scale-[1.02]"
                        >
                            Chat with Gary
                        </button>
                    </div>
                </div>

                {/* Testimonials */}
                <div className="w-full pt-8 border-t border-neutral-100/50">
                    <h3 className="text-sm font-medium text-neutral-500 mb-6 uppercase tracking-wider">
                        Trusted by industry leaders
                    </h3>
                    <div className="grid grid-cols-5 gap-3 max-w-xl mx-auto">
                        {videoFiles.map((file, i) => (
                            <VideoTestimonial 
                                key={i}
                                src={`/videos/${file}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-12 flex flex-col items-center gap-6">
                    <button 
                        onClick={() => setIsContactOpen(true)}
                        className="text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors border-b border-neutral-900 hover:border-neutral-600 pb-0.5"
                    >
                        Contact us (humans)
                    </button>

                    {/* <a 
                        href="/ai" 
                        className="text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide hover:text-neutral-600 hover:underline decoration-neutral-300 underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                    >
                        Take me back to the old and inneficient browsing ways, This is too cool for me.
                    </a> */}
                </div>

            </motion.div>
        </div>

        {/* RIGHT COLUMN: Chat (Full Height) */}
        <div className="h-[80vh] lg:h-screen bg-slate-100 border-l border-neutral-100/50 relative">
             <GaryChat ref={chatRef} />
        </div>

      </div>
    </div>
  );
};

export default App;
