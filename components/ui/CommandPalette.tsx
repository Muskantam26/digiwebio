"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Command,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Rocket,
  Briefcase,
  Layers,
  Users,
  BookOpen,
  Mail,
  MessageSquare,
  X,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

interface ActionItem {
  id: string;
  title: string;
  category: "Navigation" | "Quick Action";
  icon: React.ElementType;
  shortcut?: string;
  perform: (router: ReturnType<typeof useRouter>, setCopied: (v: boolean) => void) => void;
}

const ACTIONS: ActionItem[] = [
  {
    id: "start-project",
    title: "Start a Project (Intake & Scope)",
    category: "Navigation",
    icon: Rocket,
    shortcut: "G P",
    perform: (router) => router.push("/start-project"),
  },
  {
    id: "projects",
    title: "View Case Studies & Work",
    category: "Navigation",
    icon: Briefcase,
    shortcut: "G W",
    perform: (router) => router.push("/projects"),
  },
  {
    id: "services",
    title: "Explore Core Services",
    category: "Navigation",
    icon: Layers,
    shortcut: "G S",
    perform: (router) => router.push("/services"),
  },
  {
    id: "team",
    title: "Meet the Engineering Team",
    category: "Navigation",
    icon: Users,
    shortcut: "G T",
    perform: (router) => router.push("/team"),
  },
  {
    id: "blog",
    title: "Read Engineering Insights & Blog",
    category: "Navigation",
    icon: BookOpen,
    shortcut: "G B",
    perform: (router) => router.push("/blog"),
  },
  {
    id: "contact",
    title: "Direct Contact Page",
    category: "Navigation",
    icon: Mail,
    shortcut: "G C",
    perform: (router) => router.push("/contact"),
  },
  {
    id: "whatsapp",
    title: "Chat Directly on WhatsApp",
    category: "Quick Action",
    icon: MessageSquare,
    shortcut: "Chat",
    perform: () => window.open(getWhatsAppUrl(), "_blank"),
  },
  {
    id: "copy-email",
    title: "Copy Email to Clipboard",
    category: "Quick Action",
    icon: Copy,
    shortcut: "Copy",
    perform: (_, setCopied) => {
      navigator.clipboard.writeText(SITE_CONFIG.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    },
  },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle on Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredActions = ACTIONS.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (action: ActionItem) => {
    action.perform(router, setCopied);
    if (action.id !== "copy-email") {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredActions[selectedIndex]);
    }
  };

  return (
    <>
      {/* Floating Shortcut Trigger Button (Bottom-Left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 bg-[#121316]/90 hover:bg-[#191B20] text-slate-300 hover:text-white border border-[#252830] hover:border-[#E2F135]/60 px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-200 group cursor-pointer"
        aria-label="Open command palette"
      >
        <Command className="w-3.5 h-3.5 text-[#E2F135]" />
        <span className="text-xs font-mono font-medium">Quick Nav</span>
        <kbd className="text-[10px] font-mono bg-[#0A0B0D] text-[#E2F135] px-1.5 py-0.5 rounded border border-[#252830]">
          ⌘K
        </kbd>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-2xl bg-[#121316] border border-[#252830] shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden text-left"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#252830] bg-[#0E1013]">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  ref={inputRef}
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or jump to page..."
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-slate-400 hover:text-white text-xs"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-slate-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Action List */}
              <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[#191B20]/40">
                {filteredActions.length === 0 ? (
                  <div className="p-8 text-center text-xs font-mono text-slate-500">
                    No results found for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  filteredActions.map((action, idx) => {
                    const Icon = action.icon;
                    const isSelected = selectedIndex === idx;
                    return (
                      <button
                        key={action.id}
                        onClick={() => handleSelect(action)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#191B20] text-white"
                            : "text-slate-300 hover:bg-[#16181E]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                              isSelected
                                ? "bg-[#E2F135] text-[#0A0B0D] border-[#E2F135]"
                                : "bg-[#0A0B0D] text-slate-400 border-[#252830]"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold block leading-tight">
                              {action.title}
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase">
                              {action.category}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {action.id === "copy-email" && copied && (
                            <span className="text-[11px] font-mono text-[#E2F135] flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Copied
                            </span>
                          )}
                          {action.shortcut && (
                            <span className="text-[10px] font-mono bg-[#0A0B0D] text-slate-400 px-2 py-0.5 rounded border border-[#252830]">
                              {action.shortcut}
                            </span>
                          )}
                          <ArrowRight
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected ? "text-[#E2F135] translate-x-1" : "text-slate-600"
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Command Palette Footer */}
              <div className="bg-[#0E1013] border-t border-[#252830] px-4 py-2.5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span>Use ↑↓ to navigate</span>
                  <span>↵ to select</span>
                  <span>esc to close</span>
                </div>
                <div className="text-[#E2F135]">DigiWebIO Quick Access</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
