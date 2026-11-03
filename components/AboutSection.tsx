"use client";

import React from "react";
import Image from "next/image";
import { PROFILE } from "@/data/profile";
import { GraduationCap, MapPin, Calendar } from "@/components/Icons";

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
        <div className="p-7 sm:p-10 rounded-3xl border border-slate-200/90 bg-white shadow-sm space-y-8">
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

          {/* Education Card */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Education
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 transition-all hover:bg-slate-50">
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-xl bg-white p-1.5 shadow-2xs border border-slate-200/60 flex items-center justify-center overflow-hidden">
                <Image
                  src={PROFILE.education.logo}
                  alt={PROFILE.education.institution}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {PROFILE.education.institution}
                  </h4>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/70">
                    {PROFILE.education.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  {PROFILE.education.degree}
                </p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono pt-0.5">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PROFILE.education.location}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PROFILE.education.period}</span>
                  </span>
                </div>
              </div>
            </div>
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
