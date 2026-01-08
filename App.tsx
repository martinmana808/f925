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

                    <svg width="60" className="f925logo" height="60" viewBox="0 0 295 304" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M134.876 11.4111H134.877L154.642 22.8223H154.643L176.14 35.2334H176.139L195.905 46.6455L195.904 46.6465L197.971 47.8398H262.479V143.521L270.909 158.122L270.911 158.121L283.322 179.617H283.32L294.732 199.383L273.235 211.794L273.234 211.793L253.47 223.205L253.469 223.204L235.438 233.614L235.439 233.616L215.673 245.027L215.674 245.028L211.864 247.228L202.439 263.555L202.437 263.553L192.024 281.587L192.026 281.588L179.615 303.084L159.85 291.672V291.673L140.084 280.261V280.262L120.318 268.85V268.851L98.8213 256.439L98.8223 256.437L96.7559 255.244H32.251V159.559L22.7031 143.021L12.4131 125.197L12.4111 125.199L0 103.702L21.4971 91.291L39.5312 80.8789L61.0283 68.4678L80.7939 57.0566L82.8496 55.8691L92.4082 39.3193L92.4102 39.3203L102.7 21.4971L115.111 0L134.876 11.4111ZM179.249 301.719V301.718L160.35 290.807H160.349L179.249 301.719ZM138.852 278.396L138.853 278.395L120.818 267.983H120.817L138.852 278.396ZM147.201 176.646L147.202 176.646L134.791 198.144L134.789 198.142L124.377 216.176L124.378 216.177L112.966 235.941L112.968 235.942L112.967 235.943L130.997 246.354H130.998L150.763 257.765H150.764L170.528 269.176L180.939 251.141L162.908 240.73V240.731L141.411 228.32L153.822 206.823L170.515 216.46L170.352 216.177V216.176L158.941 196.412L158.942 196.411L148.53 178.377L148.528 178.379L147.363 176.362L147.201 176.646ZM119.086 266.984L119.087 266.983L101.056 256.573H101.055L119.086 266.984ZM99.3213 255.571H99.3223L98.7549 255.244H98.7539L99.3213 255.571ZM142.777 227.954L161.676 238.865L161.677 238.864L142.778 227.954L154.188 208.189L142.777 227.954ZM57.0732 230.422H77.8955V184.776H102.718V204.046L114.291 184.001L114.292 184.002L124.704 165.968L125.867 163.953H57.0732V230.422ZM169.026 164.237L169.028 164.236L181.439 185.732H181.438L192.85 205.498H192.849L203.261 223.532L203.263 223.531L221.294 213.121L221.293 213.119L242.79 200.708L260.824 190.295L250.413 172.264L230.649 183.675L230.648 183.674L210.884 195.086L198.473 173.59L215.164 163.953H168.862L169.026 164.237ZM102.718 206.048V206.05L102.747 205.998L102.746 205.997L102.718 206.048ZM199.839 173.955L211.25 193.72L199.84 173.955L217.164 163.953H217.163L199.839 173.955ZM251.28 171.764L261.69 189.795H261.691L251.28 171.763V171.764ZM115.158 184.502H115.159L125.571 166.468L125.57 166.467L115.158 184.502ZM126.57 164.734L126.571 164.735L127.023 163.953H127.022L126.57 164.734ZM32.251 157.559V157.558L24.6914 144.463H24.6895L32.251 157.559ZM24.1914 143.598L24.0703 143.388V143.387H24.0693L24.1914 143.598ZM23.5693 142.521H23.5703L13.2803 124.697H13.2793L23.5693 142.521ZM71.708 90.9648L71.707 90.9639L51.9424 102.376L51.9414 102.375L33.9092 112.786L44.2002 130.609L63.9658 119.199L83.7314 107.788L96.1426 129.285L79.0889 139.131H125.869L124.707 137.117L124.708 137.116L113.297 117.352V117.351L102.885 99.3164L102.884 99.3184L91.4727 79.5527L71.708 90.9648ZM127.024 139.131H127.026L126.574 138.348H126.572L127.024 139.131ZM217.073 118.308H192.251V98.6182L180.436 119.083L180.434 119.081L170.021 137.116L170.022 137.117L168.859 139.131H237.657V72.6621H217.073V118.308ZM125.574 136.616L115.164 118.583H115.162L125.574 136.616ZM147.94 127.714L147.941 127.716L148.392 126.938L148.391 126.937L147.94 127.714ZM113.906 51.7314L131.938 62.1426H131.939L153.437 74.5537L141.025 96.0508L123.98 86.21L135.795 106.673H135.794L147.205 126.438H147.203L147.363 126.715L147.524 126.438L159.936 104.94L159.937 104.941L170.349 86.9072L181.76 67.1416H181.759V67.1396L163.729 56.7295V56.7305L143.963 45.3184V45.3193L124.197 33.9072L113.906 51.7314ZM1.36621 104.068L12.2773 122.967H12.2783L1.36719 104.067L1.36621 104.068ZM114.163 116.851H114.164L103.753 98.8164H103.751L114.163 116.851ZM160.803 105.441H160.804L171.216 87.4072L171.215 87.4062L160.803 105.441ZM102.751 97.0879V97.0869L92.3398 79.0527H92.3379L102.751 97.0879ZM122.977 84.4756L140.659 94.6846V94.6836L122.977 84.4746V84.4756ZM172.214 85.6748H172.215L182.626 67.6426L182.625 67.6416L172.214 85.6748ZM142.73 43.4531L142.731 43.4521L124.698 33.041H124.697L142.73 43.4531Z" fill="black"/>
</svg>

                    
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
