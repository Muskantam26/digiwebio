"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getWhatsAppUrl(message || undefined);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Chat Widget */}
      {isOpen && (
        <div className="mb-4 w-80 bg-[#121316] border border-[#252830] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#191B20] p-4 border-b border-[#252830] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E2F135] text-[#0A0B0D] flex items-center justify-center font-bold text-xs">
                IO
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">DigiWebIO Support</h4>
                <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online on WhatsApp
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSend} className="p-4 bg-[#0A0B0D]">
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              👋 Hi there! Need help with website development, web apps, or digital marketing? Send us a message on WhatsApp!
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe your project requirement..."
              rows={3}
              className="w-full bg-[#121316] border border-[#252830] rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E2F135] resize-none mb-3"
            />
            <button
              type="submit"
              className="w-full bg-[#E2F135] hover:bg-[#DFFF12] text-[#0A0B0D] font-bold text-xs py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Start WhatsApp Chat</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#E2F135] text-[#0A0B0D] shadow-xl shadow-[#E2F135]/20 hover:scale-110 hover:shadow-[#E2F135]/35 transition-all duration-300"
        aria-label="Chat with DigiWebIO on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0B0D] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A0B0D]" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
