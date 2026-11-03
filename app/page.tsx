"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import SocialRail from "@/components/SocialRail";
import HeroSection from "@/components/HeroSection";
import FeaturedProjectSection from "@/components/FeaturedProjectSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-slate-900 bg-dot-grid selection:bg-blue-100 selection:text-blue-700">
      {/* Top sticky navigation bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Fixed left social rail on desktop */}
      <SocialRail />

      {/* Main Page Sections */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Project Showcase */}
        <FeaturedProjectSection />

        {/* Technical Skills Grid */}
        <SkillsSection />

        {/* About Me & Background */}
        <AboutSection />

        {/* Contact & Inquiry Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
