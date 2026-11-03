"use client";

import React, { useState, useEffect } from "react";
import { PROFILE } from "@/data/profile";
import {
  Menu,
  X,
  Github,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
} from "@/components/Icons";

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-white/70 backdrop-blur-xs border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left Section: Changes based on scroll position */}
        <div className="flex items-center min-w-[200px]">
          {!scrolled ? (
            /* On hero area: show handle @nyeowsz */
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-200 text-xs sm:text-sm font-mono font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 group"
            >
              <Github className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-600 transition-colors" />
              <span>@{PROFILE.handle}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
            </a>
          ) : (
            /* On scroll bottom: show name + github.com/nyeowsz below */
            <div className="flex flex-col group animate-in fade-in duration-300">
              <a
                href="#"
                className="text-base sm:text-lg font-bold tracking-tight leading-tight"
              >
                <span className="text-blue-600 transition-colors group-hover:text-blue-700">
                  {PROFILE.firstNameParts}
                </span>{" "}
                <span className="text-slate-900">{PROFILE.lastName}</span>
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-slate-500 hover:text-blue-600 flex items-center gap-1 mt-0.5 transition-colors"
              >
                <span>github.com/{PROFILE.handle}</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-slate-400" />
              </a>
            </div>
          )}
        </div>

        {/* Middle Section: Direct copyable Email pill */}
        <div className="hidden md:flex items-center justify-center">
          <button
            onClick={handleCopyEmail}
            title="Click to copy email"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full hover:bg-blue-50/80 hover:border-blue-200 text-xs font-mono text-slate-600 hover:text-blue-700 transition-all duration-200 cursor-pointer group"
          >
            <span>{PROFILE.email}</span>
            {copied ? (
              <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold pl-1">
                <Check className="w-3 h-3" />
                Copied
              </span>
            ) : (
              <Copy className="w-3 h-3 text-slate-400 group-hover:text-blue-500 transition-colors ml-0.5" />
            )}
          </button>
        </div>

        {/* Right Section: Navigation Links & Resume */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
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

        {/* Mobile menu trigger button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-100 bg-white/95 backdrop-blur-md px-6 py-5 flex flex-col gap-4 text-sm text-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
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
              <span>github.com/{PROFILE.handle}</span>
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
