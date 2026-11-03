"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, Menu, X, FileText, ArrowUpRight } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Branding matching mywant.png */}
        <a href="#" className="group flex flex-col justify-center">
          <div className="text-xl sm:text-2xl font-bold tracking-tight">
            <span className="text-blue-600 transition-colors group-hover:text-blue-700">
              {PROFILE.firstNameParts}
            </span>{" "}
            <span className="text-slate-900">{PROFILE.lastName}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <span>{PROFILE.title}</span>
            <span className="text-slate-300">•</span>
            <span className="font-mono text-blue-600 font-semibold">@{PROFILE.handle}</span>
          </div>
        </a>

        {/* Center: Email quick action (desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50/70 hover:bg-blue-50/60 hover:border-blue-200 text-xs font-mono text-slate-600 hover:text-blue-700 transition-all cursor-pointer group shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            <span>{PROFILE.email}</span>
            {copied ? (
              <span className="flex items-center gap-1 text-emerald-600 font-semibold pl-1">
                <Check className="w-3 h-3" />
                Copied
              </span>
            ) : (
              <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors ml-0.5" />
            )}
          </button>
        </div>

        {/* Right: Navigation items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a
            href="#projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-blue-600 transition-colors"
          >
            Skills
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 transition-colors"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </a>

          {/* Resume button matching mywant.png dark pill styling */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-300" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate-700 animate-in fade-in slide-in-from-top-2 duration-150">
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700"
          >
            <span className="truncate">{PROFILE.email}</span>
            {copied ? (
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied
              </span>
            ) : (
              <Copy className="w-3.5 h-3.5 text-slate-400" />
            )}
          </button>

          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-blue-600"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-blue-600"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1.5 hover:text-blue-600"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-medium py-2.5 rounded-lg shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
