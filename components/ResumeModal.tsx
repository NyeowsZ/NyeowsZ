"use client";

import React from "react";
import { X, Printer, GraduationCap, Code2, Briefcase } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {PROFILE.fullName}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-blue-600">
              {PROFILE.title} • @{PROFILE.handle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-5 text-xs sm:text-sm text-slate-600">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
            <span>{PROFILE.email}</span>
            <span>•</span>
            <span>github.com/nyeowsz</span>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider text-blue-600 font-mono">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>
            <p className="font-semibold text-slate-800">
              Bachelor of Science in Information Technology (BSIT)
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider text-blue-600 font-mono">
              <Code2 className="w-4 h-4" />
              <span>Core Tech Stack</span>
            </h3>
            <div className="space-y-1.5 pl-4 border-l-2 border-slate-200">
              <p>
                <strong className="text-slate-800">Languages & Web:</strong> TypeScript, JavaScript, PHP, HTML, CSS, Tailwind CSS
              </p>
              <p>
                <strong className="text-slate-800">Frameworks:</strong> Next.js, React, React Native, Laravel
              </p>
              <p>
                <strong className="text-slate-800">Backend & DB:</strong> REST APIs, RPC, Supabase, PostgreSQL, SQL, NoSQL
              </p>
              <p>
                <strong className="text-slate-800">Systems & DevOps:</strong> Docker CLI, Linux / Ubuntu, Nginx, Vercel, Git
              </p>
            </div>
          </div>

          {/* Project */}
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center gap-2 text-xs uppercase tracking-wider text-blue-600 font-mono">
              <Briefcase className="w-4 h-4" />
              <span>Key Project: {PROFILE.featuredProject.title}</span>
            </h3>
            <div className="pl-4 border-l-2 border-slate-200 space-y-1">
              <p className="font-medium text-slate-800">
                {PROFILE.featuredProject.tagline}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {PROFILE.featuredProject.description}
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-medium cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
