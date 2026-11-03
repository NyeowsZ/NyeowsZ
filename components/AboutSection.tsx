"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Background & Skills
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Story Card */}
        <div className="p-7 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-sm space-y-6">
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            <p>
              Hey! I&apos;m{" "}
              <strong className="text-slate-900 font-semibold">{PROFILE.fullName}</strong>{" "}
              <span className="text-xs font-mono text-blue-600">(@{PROFILE.handle})</span>, a software developer passionate about building reliable full-stack applications, robust backend architectures, and clean developer workflows.
            </p>
            <p>
              I specialize in bridging responsive frontends (Next.js, React, React Native) with solid server systems (Laravel, PHP, Supabase, PostgreSQL, REST/RPC APIs). I deploy with Docker CLI, Linux / Ubuntu environments, and Nginx to deliver production-ready software that solves genuine problems without unnecessary complexity.
            </p>
          </div>

          {/* Clean Tech Stack Categories */}
          <div className="pt-6 border-t border-slate-100 space-y-5">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Technical Competencies
            </h3>

            <div className="space-y-4">
              {PROFILE.techStack.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
                >
                  <span className="text-xs font-medium text-slate-500 w-48 shrink-0">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
