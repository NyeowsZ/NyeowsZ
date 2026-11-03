"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { ArrowUp } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <span>© 2026 {PROFILE.fullName}</span>
          <span className="text-slate-300 mx-2">•</span>
          <span>@{PROFILE.handle}</span>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
