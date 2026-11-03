"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import { Mail, Check, Copy, ArrowUpRight, Github } from "@/components/Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Minimalist Contact Card */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-sm p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl font-bold text-slate-900">
              Have a project or opportunity?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              I&apos;m currently open to software engineering roles, internships, and collaborative software projects.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-500">
              Email: <span className="text-slate-900 font-semibold">{PROFILE.email}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-medium transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
