import React from 'react';
import { motion } from 'framer-motion';

interface ViewToggleProps {
  currentView: 'ai' | 'web';
  onViewChange: (view: 'ai' | 'web') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="flex justify-center mt-32 relative z-20">
      <div className="p-1.5 bg-neutral-100 rounded-full flex items-center gap-1 border border-neutral-200">
        <button
          onClick={() => onViewChange('ai')}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors ${
            currentView === 'ai' ? 'text-white' : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          {currentView === 'ai' && (
            <motion.div
              layoutId="toggle-bg"
              className="absolute inset-0 bg-neutral-900 rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">AI Solutions</span>
        </button>
        <button
          onClick={() => onViewChange('web')}
          className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-colors ${
            currentView === 'web' ? 'text-white' : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          {currentView === 'web' && (
            <motion.div
              layoutId="toggle-bg"
              className="absolute inset-0 bg-neutral-900 rounded-full"
              transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">Web Development</span>
        </button>
      </div>
    </div>
  );
};
