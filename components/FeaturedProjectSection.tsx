"use client";

import React from "react";
import { PROFILE } from "@/data/profile";
import { Github, ExternalLink, CheckCircle2 } from "@/components/Icons";

export default function FeaturedProjectSection() {
  const project = PROFILE.featuredProject;

  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-600 block mb-1">
            Featured Project
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Selected Work
          </h2>
        </div>

        {/* Minimalist Card for ParcelHub */}
        <div className="rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-7 sm:p-10 space-y-7">
          {/* Top Header of Card */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {project.title}
                <span className="text-blue-600 text-sm px-1 font-normal">
                  (Under Development)
                </span>
              </h3>
              <p className="text-sm sm:text-base font-medium text-blue-600">
                {project.tagline}
              </p>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium self-start shadow-2xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Capabilities */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
              Key Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700">
              {project.highlights.map((highlight, index) => {
                const [title, desc] = highlight.split(": ");
                return (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold block mb-0.5">
                        {title}
                      </strong>
                      <span className="text-slate-500 text-xs leading-normal">
                        {desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
            <span className="text-xs font-mono text-slate-400 mr-2">Tech:</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100/80 text-slate-700 border border-slate-200/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
