"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import { Menu, X, FileText } from "@/components/Icons";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Exact brand typography from mywant.png */}
        <a href="#" className="flex flex-col group">
          <div className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
            <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
              {PROFILE.firstNameParts}
            </span>{" "}
            <span className="text-slate-900">{PROFILE.lastName}</span>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
            {PROFILE.title}
          </span>
        </a>

        {/* Right: Nav items matching mywant.png */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a
            href="#projects"
            className="hover:text-blue-600 transition-colors"
          >
            Projects
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

          {/* Dark pill button from mywant.png */}
          <button
            onClick={onOpenResume}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-2xs hover:shadow transition-all cursor-pointer"
          >
            Resume
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white px-6 py-5 flex flex-col gap-4 text-sm text-slate-700">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenResume) onOpenResume();
            }}
            className="w-full mt-2 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium text-center"
          >
            View Resume
          </button>
        </div>
      )}
    </header>
  );
}
