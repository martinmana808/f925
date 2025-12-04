import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white text-neutral-900 py-40 md:py-56 px-6 md:px-12 border-t border-neutral-100 relative overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-[5rem] md:text-[10rem] font-heading font-black tracking-tighter mb-12 leading-[0.8] select-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600">
          Let’s build.
        </h2>
        <p className="text-2xl md:text-3xl text-neutral-500 mb-24 max-w-3xl mx-auto font-light tracking-tight">
          Stop experimenting with chatbots. Start building tools that impact your bottom line.
        </p>
        
        <div className="flex flex-col items-center gap-12">
           <a href="mailto:hello@f925.ai" className="group flex items-center gap-4 px-12 py-6 bg-neutral-900 text-white text-2xl font-semibold rounded-full hover:bg-neutral-800 transition-all hover:scale-105 shadow-2xl shadow-blue-900/10 border border-transparent hover:border-blue-500/20">
            Contact Us <span className="text-neutral-400 group-hover:translate-x-1 transition-transform group-hover:text-blue-400">&rarr;</span>
          </a>
          <span className="text-neutral-400 text-sm font-medium">
            Based in Buenos Aires & Global
          </span>
        </div>
        
        <div className="mt-48 pt-12 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm font-medium border-t border-neutral-100">
          <p>&copy; {new Date().getFullYear()} F925.</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};