"use client";

import React from "react";
import { ArrowDown, Code2, Sparkles, FolderGit2, User, ChevronRight } from "@/components/Icons";
import { PROFILE } from "@/data/profile";
import TerminalWidget from "./TerminalWidget";

export default function HeroSection() {
  return (
    <section className="relative pt-12 sm:pt-20 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Subtle radial gradient highlight behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>Hello! I&apos;m</span>
              <span className="text-slate-400 font-normal">|</span>
              <span className="font-mono font-semibold text-blue-800">@{PROFILE.handle}</span>
            </div>

            {/* Main Name / Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
                {PROFILE.handle}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight">
                {PROFILE.roleSubtitle}
              </p>
            </div>

            {/* Description from hero.png */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Building responsive web experiences, modern API integrations, and practical developer tools.
            </p>

            {/* Slogan banner from mywant.png */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm max-w-xl">
              <p className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                Good software{" "}
                <span className="text-blue-600 font-bold">solves problems</span>,{" "}
                <span className="text-blue-600 font-bold">is usable</span>, and{" "}
                <span className="text-blue-600 font-bold">stays simple</span>.
              </p>
            </div>

            {/* CTA Buttons matching mywant.png pill design */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>My Projects</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-blue-50/50 border border-blue-600 text-blue-600 font-semibold text-sm sm:text-base shadow-2xs hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <User className="w-4 h-4" />
                <span>Get to know me</span>
              </a>
            </div>

            {/* Mini tech teaser */}
            <div className="pt-3 flex items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-600" /> Luau • TypeScript • Node.js • Next.js
              </span>
            </div>
          </div>

          {/* Right Column: Terminal Widget */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <TerminalWidget />
          </div>

        </div>

        {/* Scroll indicator orb matching bottom of hero.png */}
        <div className="pt-16 sm:pt-24 flex flex-col items-center justify-center">
          <a
            href="#projects"
            aria-label="Scroll to featured project"
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-xs font-mono font-medium tracking-widest uppercase">Explore Work</span>
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 border border-blue-200/80 group-hover:border-blue-400 group-hover:bg-blue-100/70 transition-all shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
