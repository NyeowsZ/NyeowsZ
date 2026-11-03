"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Sparkles } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function TerminalWidget() {
  const [copied, setCopied] = useState(false);

  const terminalText = `$ whoami\n${PROFILE.terminal.whoami}\n\n$ focus\n${PROFILE.terminal.focus}\n\n$ core-stack\n${PROFILE.terminal.coreStack}\n\n$ status\nActive & Available for Opportunities`;

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group">
        
        {/* Subtle accent top border glow */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600" />

        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            {/* macOS 3 dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ef4444]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#f59e0b]/90 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#10b981]/90 inline-block" />
            </div>

            <div className="flex items-center gap-1.5 ml-3 font-mono text-xs text-slate-500 font-medium">
              <Terminal className="w-3.5 h-3.5 text-slate-400" />
              <span>{PROFILE.terminal.machine}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
              {PROFILE.terminal.shell}
            </span>

            <button
              onClick={handleCopy}
              title="Copy terminal contents"
              className="p-1.5 rounded-md hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4 bg-white/60">
          {/* Item 1: whoami */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold select-none">$</span>
              <span className="text-slate-900 font-semibold">whoami</span>
            </div>
            <p className="pl-4 text-slate-700 font-medium leading-relaxed">
              {PROFILE.terminal.whoami}
            </p>
          </div>

          {/* Item 2: focus */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold select-none">$</span>
              <span className="text-slate-900 font-semibold">focus</span>
            </div>
            <p className="pl-4 text-slate-700 font-medium leading-relaxed flex flex-wrap items-center gap-2">
              <span className="text-blue-600 font-semibold">Web Systems</span>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-600 font-semibold">REST APIs</span>
              <span className="text-slate-300">•</span>
              <span className="text-teal-600 font-semibold">Automation</span>
            </p>
          </div>

          {/* Item 3: core-stack */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold select-none">$</span>
              <span className="text-slate-900 font-semibold">core-stack</span>
            </div>
            <p className="pl-4 text-slate-600 leading-relaxed font-mono text-xs sm:text-[13px]">
              {PROFILE.terminal.coreStack}
            </p>
          </div>

          {/* Item 4: status */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 font-bold select-none">$</span>
              <span className="text-slate-900 font-semibold">status</span>
            </div>
            <div className="pl-4 flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full text-xs">
                {PROFILE.terminal.status}
              </span>
            </div>
          </div>

          {/* Prompt line with cursor */}
          <div className="pt-2 flex items-center gap-2 text-slate-400 select-none">
            <span className="text-blue-600 font-bold">$</span>
            <span className="inline-block w-2.5 h-4 bg-blue-600 animate-pulse rounded-2xs" />
          </div>
        </div>

        {/* Bottom subtle bar */}
        <div className="px-5 py-2.5 bg-slate-50/60 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3 h-3 text-blue-500" /> Ready for input
          </span>
          <span className="font-mono text-slate-400">UTF-8</span>
        </div>
      </div>
    </div>
  );
}
