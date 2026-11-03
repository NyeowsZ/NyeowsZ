"use client";

import React from "react";
import { ArrowUp, Github, Mail } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white/80 backdrop-blur-sm py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding & Slogan */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-slate-900 tracking-tight">
              <span className="text-blue-600">{PROFILE.firstNameParts}</span>{" "}
              <span>{PROFILE.lastName}</span>
              <span className="text-xs font-mono text-slate-400 font-normal ml-2">(@{PROFILE.handle})</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">
              {PROFILE.slogan}
            </p>
          </div>

          {/* Right: Quick actions & back to top */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© 2026 {PROFILE.fullName}. All rights reserved.</p>
          <p className="font-mono text-[11px]">Built with Next.js 16, React 19 & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
