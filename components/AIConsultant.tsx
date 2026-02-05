
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, MapPin, Loader2 } from 'lucide-react';
import { getChatResponse } from '../lib/gemini';
import { PHONE_NUMBER, PHONE_HREF } from '../constants';

interface Message {
    role: 'user' | 'model';
    parts: string;
}

const AIConsultant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', parts: 'Hi! I\'m your Roadside Assistant. How can I help you today?' }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        const newMessages: Message[] = [...messages, { role: 'user', parts: userMessage }];

        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await getChatResponse(messages, userMessage);
            setMessages([...newMessages, { role: 'model', parts: response }]);
        } catch (error) {
            setMessages([...newMessages, { role: 'model', parts: 'Sorry, I encountered an error. Please call us directly.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const shareLocation = () => {
        if ("geolocation" in navigator) {
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationMsg = `My current location is latitude: ${latitude}, longitude: ${longitude}. Please check if I am in your service area.`;
                    const newMessages: Message[] = [...messages, { role: 'user', parts: "Sharing my location..." }];
                    setMessages(newMessages);

                    try {
                        const response = await getChatResponse(messages, locationMsg);
                        setMessages([...newMessages, { role: 'model', parts: response }]);
                    } catch (error) {
                        setMessages([...newMessages, { role: 'model', parts: 'Sorry, I had trouble processing your location. Please call us.' }]);
                    } finally {
                        setIsLoading(false);
                    }
                },
                (error) => {
                    setIsLoading(false);
                    setMessages([...messages, { role: 'model', parts: 'I couldn\'t get your location. Please tell me where you are or call us.' }]);
                }
            );
        }
    };

    return (
        <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-brand-blue p-4 text-white flex justify-between items-center bg-gradient-to-r from-brand-blue to-black">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Roadside Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-xs opacity-80">Online 24/7</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 min-h-[300px]">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                            ? 'bg-brand-red text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                                        }`}>
                                        {msg.parts}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                                        <Loader2 className="animate-spin text-brand-red" size={20} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="p-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto no-scrollbar">
                            <button
                                onClick={shareLocation}
                                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-brand-light text-brand-blue rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors"
                            >
                                <MapPin size={14} /> Send Location
                            </button>
                            <a
                                href={PHONE_HREF}
                                className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-brand-light text-brand-red rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors"
                            >
                                <Phone size={14} /> Call Now
                            </a>
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="w-full pl-4 pr-12 py-2.5 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-brand-blue hover:text-brand-red disabled:opacity-50"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-brand-red text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors relative"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-blue border-2 border-white rounded-full"></span>
                )}
            </motion.button>
        </div>
    );
};

export default AIConsultant;
