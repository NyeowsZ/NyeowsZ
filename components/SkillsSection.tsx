"use client";

import React from "react";
import { Cpu, Code, Database, Wrench, CheckCircle2 } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages & Core":
        return <Code className="w-5 h-5 text-blue-600" />;
      case "Frameworks & Frontend":
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case "Backend & Systems":
        return <Database className="w-5 h-5 text-emerald-600" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-widest uppercase">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            CORE SKILLS & TECH STACK
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            A versatile set of languages, frameworks, and developer tools used to build end-to-end applications and reliable automation.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE.skills.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="font-bold text-base text-slate-900">
                    {cat.category}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 p-2 rounded-lg hover:bg-blue-50/50 hover:text-blue-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-blue-600 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
