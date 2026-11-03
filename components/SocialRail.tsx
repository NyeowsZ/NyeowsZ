"use client";

import React, { useState } from "react";
import { Github, Linkedin, Twitter, MessageSquare, Check, Copy } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function SocialRail() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleCopyDiscord = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PROFILE.discordTag);
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  return (
    <aside
      aria-label="Social links rail"
      className="fixed left-5 sm:left-7 bottom-8 z-40 hidden lg:flex flex-col items-center gap-4"
    >
      <div className="flex flex-col items-center gap-3.5 bg-white/90 backdrop-blur-md p-2.5 rounded-full border border-slate-200/90 shadow-md shadow-slate-200/60">
        {/* GitHub */}
        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Visit GitHub Profile"
          className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 hover:scale-110"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* LinkedIn */}
        <a
          href={PROFILE.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
          className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 hover:scale-110"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* X / Twitter */}
        <a
          href={PROFILE.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter / X Profile"
          className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 hover:scale-110"
        >
          <Twitter className="w-4 h-4" />
        </a>

        {/* Discord with copy */}
        <button
          onClick={handleCopyDiscord}
          title={copiedDiscord ? "Discord tag copied!" : `Copy Discord: ${PROFILE.discordTag}`}
          className="p-2 rounded-full text-slate-600 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 hover:scale-110 relative group cursor-pointer"
        >
          {copiedDiscord ? (
            <Check className="w-4 h-4 text-emerald-600" />
          ) : (
            <MessageSquare className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Vertical line from hero.png */}
      <div className="w-[1.5px] h-14 bg-gradient-to-b from-slate-300 via-slate-200 to-transparent rounded-full" />
    </aside>
  );
}
