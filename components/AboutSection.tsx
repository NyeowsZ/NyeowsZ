"use client";

import React from "react";
import { User, GraduationCap, Compass, Sparkles, Terminal, CheckCircle } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-widest uppercase">
            <User className="w-4 h-4 text-blue-600" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            ABOUT ME
          </h2>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story & Bio (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/40 space-y-5">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span>Hey, I&apos;m</span>
                <span className="text-blue-600">{PROFILE.fullName}</span>
                <span className="font-mono text-sm font-semibold text-slate-400">({PROFILE.handle})</span>
              </h3>

              <p>
                I am a Software Developer and BSIT student driven by creating software that bridges complex backend systems with clean, intuitive user experiences.
              </p>

              <p>
                Whether it is engineering real-time game telemetry dispatchers using Luau and REST APIs, building scalable Next.js applications, or automating repetitive server workflows, I believe that the best code is focused, reliable, and straightforward.
              </p>

              {/* Slogan highlight */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 text-blue-900 font-medium text-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-blue-950">Guiding Principle:</span>
                  &ldquo;Good software solves problems, is usable, and stays simple.&rdquo;
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>BS in Information Technology (BSIT)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                  <Terminal className="w-4 h-4 text-emerald-600" />
                  <span>Backend & Systems Automation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts & Values (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white/90 shadow-md shadow-slate-200/40 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Compass className="w-4 h-4 text-blue-600" />
                <span>What I Focus On</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Low-latency API integration & Webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full-Stack Next.js & React architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Automated background tasks & telemetry</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clean database schema design (MySQL)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/90 bg-white/90 shadow-md shadow-slate-200/40 space-y-3">
              <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Current Availability
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-base font-bold text-slate-900">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Looking for software development roles, internships, and ambitious freelance projects. Let&apos;s build something great together.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
