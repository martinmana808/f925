import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';
import { AIService, Message as AIMessage, ChatResponse } from '../src/services/ai';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export interface GaryChatRef {
  sendUserMessage: (message: string) => void;
  getHistory: () => Message[];
}

export const GaryChat = React.forwardRef<GaryChatRef, {}>((props, ref) => {
  // Initial state with Gary's prefilled message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      role: 'assistant',
      content: "Hello, I'm Gary. I work for F925, building AI systems that solve real-world inefficiencies. To see how we can help, tell me about your business. What are you currently working on?"
    }
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([
    "I run a digital agency.",
    "I'm looking to automate data entry.",
    "What exactly do you guys build?"
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

  const processResponse = async (newHistory: Message[]) => {
      setIsTyping(true);
      setSuggestions([]); // Clear suggestions while thinking
      try {
        // Convert UI messages to AI service format
        const apiMessages: AIMessage[] = newHistory.map(m => ({
            role: m.role,
            content: m.content
        }));

        const response: ChatResponse = await AIService.sendMessage(apiMessages);

        const aiMessage: Message = {
            id: Date.now().toString(),
            role: 'assistant',
            content: response.reply,
        };
        setMessages((prev) => [...prev, aiMessage]);
        
        // Update suggestions
        if (response.suggestions && response.suggestions.length > 0) {
            setSuggestions(response.suggestions);
        }
      } catch (error) {
        // Error handling - maybe Gary is offline
        const errorMessage: Message = {
            id: Date.now().toString(),
            role: 'assistant',
            content: "I'm having trouble connecting to my neural core right now. Check your connection or API configuration.",
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput('');
    
    await processResponse(newHistory);
  };

  const handleStarterClick = async (starter: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: starter,
    };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    
    await processResponse(newHistory);
  };

  React.useImperativeHandle(ref, () => ({
    sendUserMessage: handleStarterClick,
    getHistory: () => messages
  }));

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
                  className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm ${
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
        {/* Suggested Response Chips */}
        <AnimatePresence>
            {suggestions.length > 0 && !isTyping && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex flex-wrap gap-2 justify-end mb-2"
                >
                    {suggestions.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => handleStarterClick(option)}
                            className="text-xs font-medium hover:bg-neutral-100 text-neutral-600 px-4 py-2 rounded-full border border-neutral-200 transition-all hover:border-neutral-300 hover:shadow-sm text-left truncate max-w-full"
                        >
                            {option}
                        </button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Gary anything..."
            className="w-full py-4 px-6 pr-14 bg-white border border-neutral-200 rounded-[2rem] text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-300 transition-all placeholder:text-neutral-400"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 disabled:opacity-50 disabled:hover:bg-neutral-900 transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
});
