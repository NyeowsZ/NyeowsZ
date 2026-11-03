"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 bg-dot-grid selection:bg-blue-100 selection:text-blue-700">
      {/* Clean Navbar matching mywant.png */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Centered Hero from mywant.png */}
        <HeroSection />

        {/* Minimalist Featured Project: ParcelHub */}
        <FeaturedProjectSection />

        {/* Clean About & Real Tech Stack */}
        <AboutSection />

        {/* Focused Contact Section */}
        <ContactSection />
      </main>

      {/* Discreet Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
