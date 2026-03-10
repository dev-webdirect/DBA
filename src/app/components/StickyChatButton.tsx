"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ArrowRight } from 'lucide-react';
import type { StickyChatMessages } from '@/type';

type StickyChatButtonProps = {
  messages: StickyChatMessages;
};

// @component: StickyChatButton
export const StickyChatButton = ({ messages }: StickyChatButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 16,
        scale: 0.95
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 16,
        scale: 0.95
      }} transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1]
      }} className="w-[300px] sm:w-[320px] bg-[#1e2130] border border-white/10 rounded-[24px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="bg-[#DDB892] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1a1c24] rounded-lg flex items-center justify-center font-black text-[#DDB892] text-[10px]">
                  <span>DBA</span>
                </div>
                <div className="flex flex-col -space-y-0.5">
                  <span className="text-[#1a1c24] font-black text-sm leading-tight">
                    {messages.headerBrand}
                  </span>
                  <span className="text-[#1a1c24]/60 text-[10px] font-medium uppercase tracking-wider">
                    {messages.headerStatus}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-[#1a1c24]/10 hover:bg-[#1a1c24]/20 flex items-center justify-center transition-colors"
                aria-label={messages.closeAria}
              >
                <X size={13} className="text-[#1a1c24]" />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4">
              {/* Message bubble */}
              <div className="bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3">
                <p className="text-white/80 text-sm font-light leading-relaxed">
                  {messages.message}
                </p>
              </div>

              {/* Quick action */}
              <a
                href="#wachtlijst"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full bg-[#DDB892]/10 hover:bg-[#DDB892]/20 border border-[#DDB892]/20 hover:border-[#DDB892]/40 rounded-xl px-4 py-3 transition-all group"
                aria-label={messages.quickCtaAria}
              >
                <span className="text-[#DDB892] text-xs font-black uppercase tracking-widest">
                  {messages.quickCtaLabel}
                </span>
                <ArrowRight size={14} className="text-[#DDB892] group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="text-center text-[10px] text-white/20 uppercase tracking-widest font-medium">
                {messages.footerNote}
              </p>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#DDB892] hover:bg-white rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(221,184,146,0.4)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] transition-colors"
        aria-label={isOpen ? messages.triggerCloseAria : messages.triggerOpenAria}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? <motion.span key="close" initial={{
          rotate: -90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: 90,
          opacity: 0
        }} transition={{
          duration: 0.18
        }}>
              <X size={22} className="text-[#1a1c24]" />
            </motion.span> : <motion.span key="open" initial={{
          rotate: 90,
          opacity: 0
        }} animate={{
          rotate: 0,
          opacity: 1
        }} exit={{
          rotate: -90,
          opacity: 0
        }} transition={{
          duration: 0.18
        }}>
              <MessageCircle size={22} className="text-[#1a1c24]" />
            </motion.span>}
        </AnimatePresence>
      </motion.button>

      {/* Pulse ring when closed */}
      <AnimatePresence>
        {!isOpen && <motion.span initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute bottom-0 right-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full pointer-events-none">
            <span className="absolute inset-0 rounded-full bg-[#DDB892]/30 animate-ping" />
          </motion.span>}
      </AnimatePresence>

    </div>;
};
export default StickyChatButton;