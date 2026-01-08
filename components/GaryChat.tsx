import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export const GaryChat: React.FC = () => {
  // Initial state with Gary's prefilled message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      role: 'assistant',
      content: "Hello, I'm Gary, I work for F925, 24/7, non-stop and I can serve an infinite amount of customers at the same time. I'm here, at your service."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI delay/response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm running in simulation mode. Connect me to an LLM API to unlock my full potential.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleStarterClick = (starter: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: starter,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI delay/response
    setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "That's a valid query. System ready for expansion.",
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      }, 1500);
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto px-4 md:px-8 py-8">
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar">
        <div className="space-y-6 min-h-[100px]">
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-5 rounded-2xl text-lg leading-relaxed shadow-sm ${
                    message.role === 'user'
                      ? 'bg-neutral-900 text-white rounded-br-none'
                      : 'bg-white border border-neutral-100 text-neutral-800 rounded-bl-none'
                  }`}
                >
                  {message.role === 'assistant' && (
                     <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-widest text-blue-600">
                       <Sparkles size={12} /> Gary
                     </div>
                  )}
                  {message.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-neutral-100 p-4 rounded-2xl rounded-bl-none flex gap-2 items-center shadow-sm">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-75" />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce delay-150" />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="mt-auto space-y-4">
        {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 justify-center md:justify-end mb-4">
                {[
                    "What is it exactly that you guys build?",
                    "I need help, but I don't know exactly how.",
                    "I want to step into the future."
                ].map((starter, i) => (
                    <button
                        key={i}
                        onClick={() => handleStarterClick(starter)}
                        className="text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-4 py-2 rounded-full transition-colors text-left"
                    >
                        {starter}
                    </button>
                ))}
            </div>
        )}

        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gary anything..."
            className="w-full p-6 pr-16 bg-white border border-neutral-200 rounded-3xl text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all placeholder:text-neutral-400"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 disabled:opacity-50 disabled:hover:bg-neutral-900 transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};
