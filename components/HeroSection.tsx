"use client";

import React from "react";
import { PROFILE } from "@/data/profile";

export default function HeroSection() {
  return (
    <section className="relative min-h-[72vh] flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-8 sm:space-y-10">
        {/* The Exact Headline Typography from mywant.png */}
        <div className="space-y-1.5 sm:space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal text-slate-800 tracking-tight leading-[1.25]">
            Good software
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-blue-600 tracking-tight leading-[1.25]">
            solves problems, is usable
          </h2>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-slate-800 tracking-tight leading-[1.25]">
            and <span className="font-semibold text-blue-600">simple</span>
          </h2>
        </div>

        {/* The Exact Action Buttons from mywant.png */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200"
          >
            My Projects
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-white hover:bg-blue-50/50 border border-blue-600 text-blue-600 font-medium text-sm sm:text-base transition-all duration-200"
          >
            Get to know me
          </a>
        </div>
      </div>
    </section>
  );
}
