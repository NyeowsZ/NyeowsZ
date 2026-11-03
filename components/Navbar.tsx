"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/profile";
import { Menu, X, Github, ArrowUpRight } from "@/components/Icons";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal name when scrolled past 120px
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Revealed on scroll with smooth fade-in and slide animation */}
        <div className="flex items-center min-w-0">
          <div
            className={`flex items-center gap-3 transition-all duration-500 ease-out transform ${
              scrolled
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <a href="#" className="flex flex-col group">
              <div className="text-base sm:text-lg font-bold tracking-tight leading-tight">
                <span className="text-blue-600 transition-colors group-hover:text-blue-700">
                  {PROFILE.firstNameParts}
                </span>{" "}
                <span className="text-slate-900">{PROFILE.lastName}</span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal">
                {PROFILE.title}
              </span>
            </a>

            {/* Clickable GitHub handle pill */}
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Visit GitHub Profile"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 text-xs font-mono font-medium text-slate-700 hover:text-blue-700 transition-all duration-200"
            >
              <Github className="w-3 h-3 text-slate-500" />
              <span>@{PROFILE.handle}</span>
              <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Right: Nav items */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a
            href="#projects"
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Contact
          </a>

          {/* Dark pill Resume button */}
          <button
            onClick={onOpenResume}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-2xs hover:shadow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Resume
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4 text-sm text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600 font-medium"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600 font-medium"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-blue-600 font-medium"
          >
            Contact
          </a>
          <div className="pt-2 flex items-center justify-between border-t border-slate-100">
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{PROFILE.handle}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="py-2 px-4 rounded-lg bg-slate-900 text-white text-xs font-medium"
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
