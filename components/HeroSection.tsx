"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { Github, ArrowUpRight, FolderGit2, User } from "@/components/Icons";

export default function HeroSection() {
  return (
    <section className="relative min-h-[78vh] flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28 overflow-hidden">
      {/* Soft atmospheric gradient glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-7 sm:space-y-9">
        
        {/* Subtle greeting indicator badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/80 text-slate-700 text-xs font-mono shadow-xs backdrop-blur-xs transition-all hover:border-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for work</span>
          <span className="text-slate-300">•</span>
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-1 transition-colors"
          >
            <span>@{PROFILE.handle}</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Hero Title: "Hi! I'm John Vince Key Dumaguit" */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Hi! I&apos;m{" "}
            <span className="text-blue-600 inline-block transition-transform hover:scale-102 duration-300">
              {PROFILE.firstNameParts}
            </span>{" "}
            <span>{PROFILE.lastName}</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-600 max-w-xl mx-auto">
            {PROFILE.title} specializing in responsive web applications, robust backend architectures, and developer tooling.
          </p>
        </div>

        {/* Hybrid Slogan Card: Quote from mywant.png as the description */}
        <div className="w-full max-w-2xl p-5 sm:p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-blue-200 text-center">
          <p className="text-base sm:text-lg md:text-xl font-normal text-slate-700 leading-relaxed">
            &ldquo;Good software{" "}
            <span className="font-semibold text-blue-600">solves problems</span>,{" "}
            <span className="font-semibold text-blue-600">is usable</span>, and{" "}
            <span className="font-semibold text-blue-600">stays simple</span>.&rdquo;
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>My Projects</span>
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-blue-50/50 border border-blue-600 text-blue-600 font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs"
          >
            <User className="w-4 h-4" />
            <span>Get to know me</span>
          </a>
        </div>

      </div>
    </section>
  );
}
