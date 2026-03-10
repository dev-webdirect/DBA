"use client";

import React from 'react';

// @component: FooterBottom
export const FooterBottom = () => <div className="mt-10 sm:mt-14 lg:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5">
    <p className="text-white/50 text-[10px] sm:text-sm font-light uppercase tracking-widest text-center sm:text-left">
      © {new Date().getFullYear()} DBAKLAAR.NL — PROFESSIONEEL ONDERNEMERSCHAP VOOR ZZP'ERS.
    </p>
    <div className="flex items-center gap-2 text-[#DDB892] text-xs font-bold tracking-widest uppercase">
      <span>Ontwikkeld door webdirect</span>
      <div className="w-8 h-[1px] bg-[#DDB892]/40" />
    </div>
  </div>;