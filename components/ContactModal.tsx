import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ContactData) => Promise<void>;
}

export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    try {
      await onSubmit({ name, email, message });
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setIsError(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('Contact submit error:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Message Sent</h3>
                <p className="text-neutral-500">Thanks. We will be in touch with you shortly.</p>
              </div>
            ) : isError ? (
               <div className="p-12 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <X size={32} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Something happened</h3>
                <p className="text-sm text-neutral-500">The form could not be submitted. Please reload the page and resubmit.</p>
                <button 
                    onClick={onClose}
                    className="mt-4 px-6 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800"
                >
                    Close
                </button>
              </div>
            ) : (
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-neutral-900">Contact Humans</h2>
                        <button 
                            onClick={onClose}
                            className="p-2 text-neutral-400 hover:text-neutral-900 bg-neutral-100 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                                placeholder="Jane Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all"
                                placeholder="jane@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">Message <span className="text-neutral-400 font-normal">(Optional)</span></label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows={3}
                                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all resize-none"
                                placeholder="How can we help?"
                            />
                        </div>
                        
                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-neutral-900 text-white font-bold rounded-xl hover:bg-neutral-800 disabled:opacity-50 disabled:hover:bg-neutral-900 transition-all flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                        <p className="text-xs text-center text-neutral-400 mt-4">
                            Your conversation with Gary will be included for context.
                        </p>
                    </form>
                </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
