
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the world of JabaTamu. I am your Sommelier. How may I elevate your energy today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const responseText = await geminiService.chat(newMessages);
    setMessages([...newMessages, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[550px] bg-stone-50 dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden">
          <div className="bg-stone-100 dark:bg-black p-6 border-b border-black/5 dark:border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-600 dark:bg-green-500 animate-pulse"></div>
              <h3 className="text-stone-900 dark:text-white font-black text-xs uppercase tracking-[0.2em]">JabaTamu Sommelier</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>

          <div
            className="flex-1 overflow-y-auto p-6 space-y-6"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${msg.role === 'user'
                      ? 'bg-stone-900 dark:bg-white text-white dark:text-black rounded-tr-none shadow-xl'
                      : 'bg-white dark:bg-[#1a1a1a] text-stone-600 dark:text-stone-300 border border-black/5 dark:border-white/5 rounded-tl-none'
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-2xl rounded-tl-none border border-black/5 dark:border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-stone-300 dark:bg-stone-700 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-stone-400 dark:bg-stone-600 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-stone-500 dark:bg-stone-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-6 border-t border-black/5 dark:border-white/5 bg-stone-100/50 dark:bg-black/50">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our sommelier..."
                className="flex-1 bg-white dark:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-xl px-5 py-3 text-sm text-stone-900 dark:text-white focus:outline-none focus:border-green-500/50 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-stone-900 dark:bg-white text-white dark:text-black p-3 rounded-xl hover:bg-green-600 dark:hover:bg-green-500 transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-stone-900 dark:bg-white text-white dark:text-black rounded-full shadow-2xl hover:bg-yellow-500 dark:hover:bg-yellow-400 flex items-center justify-center transition-all hover:scale-110 active:scale-90 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" /></svg>
        </button>
      )}
    </div>
  );
};
