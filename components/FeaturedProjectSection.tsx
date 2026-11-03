"use client";

import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Radio,
  Activity,
  Check,
  Copy,
  Zap,
  ChevronRight,
} from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function FeaturedProjectSection() {
  const project = PROFILE.featuredProject;
  const [copiedServerId, setCopiedServerId] = useState<string | null>(null);
  const [heartbeatSeconds, setHeartbeatSeconds] = useState(17);

  // Simulated live heartbeat ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setHeartbeatSeconds((prev) => (prev > 1 ? prev - 1 : 25));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyTeleport = (serverId: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedServerId(serverId);
    setTimeout(() => setCopiedServerId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-widest uppercase">
            <Radio className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            FEATURED PROJECT
          </h2>
        </div>

        {/* Main Project Card Container (Light Modern Glass Card) */}
        <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 p-6 sm:p-8 lg:p-12 overflow-hidden">
          
          {/* Subtle gradient line on top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Project Info & Description */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              
              {/* Tech stack tags */}
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50/90 text-blue-700 border border-blue-200/80 shadow-2xs hover:bg-blue-100 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Zap className="w-3.5 h-3.5 text-blue-600" />
                    <span>Live PATCH Sync</span>
                  </div>
                  <p className="text-slate-500">In-place webhook message editing without Discord spam.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Ping Prioritization</span>
                  </div>
                  <p className="text-slate-500">Filters underpopulated servers sorted by ultra-low latency.</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB REPOSITORY</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Discord Server Tracker Card Mockup */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl border border-slate-200/90 bg-white shadow-lg overflow-hidden group">
                
                {/* Discord-style Card Header */}
                <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Discord Icon Avatar */}
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-2xs">
                      <Radio className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-slate-900">Server Tracker</span>
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700 uppercase tracking-wider">
                        APP
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="hidden sm:inline">Live PATCH Sync</span>
                  </div>
                </div>

                {/* Inner Server Tracker Container */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-white to-slate-50/50 space-y-4">
                  
                  {/* Status Banner */}
                  <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base tracking-tight">
                          Live Servers: {project.gameName}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                          ● ONLINE
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                        Heartbeat: {heartbeatSeconds}s ago • {project.stats.condition}
                      </p>
                    </div>

                    <div className="text-[11px] font-mono text-slate-400">
                      Place ID: {project.placeId}
                    </div>
                  </div>

                  {/* Server List */}
                  <div className="space-y-2.5">
                    {project.servers.map((srv, idx) => (
                      <div
                        key={srv.id}
                        className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 font-bold text-slate-800">
                            <span>{srv.name}</span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                              {srv.players}
                            </span>
                            <span className="text-[11px] font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                              {srv.ping}
                            </span>
                          </div>
                          <p className="font-mono text-[11px] text-slate-500 truncate max-w-[280px] sm:max-w-[240px] md:max-w-[320px]">
                            {srv.teleportCode}
                          </p>
                        </div>

                        {/* Interactive Auto Join Button */}
                        <button
                          onClick={() => handleCopyTeleport(srv.id, srv.teleportCode)}
                          className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white font-mono text-xs font-semibold transition-all cursor-pointer border border-blue-200/70 hover:border-blue-600 shadow-2xs"
                        >
                          {copiedServerId === srv.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>COPIED</span>
                            </>
                          ) : (
                            <>
                              <span>AUTO JOIN</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Tracker Footer Status */}
                  <div className="pt-2 px-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500 border-t border-slate-200/80">
                    <span className="flex items-center gap-1 text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      state.json synced
                    </span>
                    <span className="text-slate-400">
                      Payload: 3 active instances
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
