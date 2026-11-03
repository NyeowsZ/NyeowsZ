"use client";

import React from "react";
import { X, Download, Printer, GraduationCap, Code2, Briefcase, Mail } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {PROFILE.fullName}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-blue-600">
              {PROFILE.title} • @{PROFILE.handle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Resume Content Summary */}
        <div className="space-y-5 text-xs sm:text-sm text-slate-600">
          
          {/* Contact summary */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
            <span>Email: {PROFILE.email}</span>
            <span>•</span>
            <span>GitHub: github.com/nyeowsz</span>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider text-blue-600 font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <div className="pl-6 border-l-2 border-blue-500/30 space-y-1">
              <p className="font-bold text-slate-800">
                Bachelor of Science in Information Technology (BSIT)
              </p>
              <p className="text-xs text-slate-500">
                Focus on software engineering, database management systems, and network protocols.
              </p>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider text-blue-600 font-mono">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h3>
            <div className="pl-6 border-l-2 border-blue-500/30 space-y-2">
              <p>
                <strong className="text-slate-800">Languages:</strong> TypeScript, JavaScript, Luau, C, Java, PHP, SQL
              </p>
              <p>
                <strong className="text-slate-800">Frameworks & Web:</strong> Next.js, React, Tailwind CSS, Node.js, Express
              </p>
              <p>
                <strong className="text-slate-800">Systems & Tools:</strong> REST APIs, Discord Webhooks, Roblox Open Cloud API, MySQL, Git, Render
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm uppercase tracking-wider text-blue-600 font-mono">
              <Briefcase className="w-4 h-4" />
              <span>Featured Project</span>
            </h3>
            <div className="pl-6 border-l-2 border-blue-500/30 space-y-1.5">
              <p className="font-bold text-slate-800">
                {PROFILE.featuredProject.title}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {PROFILE.featuredProject.description}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-all cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
