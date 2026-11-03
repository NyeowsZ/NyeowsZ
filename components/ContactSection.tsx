"use client";

import React, { useState } from "react";
import { Mail, Send, Check, Copy, MessageSquare, ArrowUpRight, Github } from "@/components/Icons";
import { PROFILE } from "@/data/profile";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    // Direct mailto link preparation
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus("Thank you! Your email client has been prepared. You can also copy the email directly.");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-blue-600 tracking-widest uppercase">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            LET&apos;S BUILD TOGETHER
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
            Have a project in mind, an opportunity, or just want to discuss software development? Feel free to reach out.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/40 space-y-4">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                Direct Email
              </span>
              <div className="space-y-1">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  {PROFILE.email}
                </a>
                <p className="text-xs text-slate-500">
                  I typically respond within 24 hours.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100/80 text-blue-700 text-xs font-semibold border border-blue-200/70 transition-all cursor-pointer shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Social profiles card */}
            <div className="p-6 rounded-3xl border border-slate-200/90 bg-white/90 shadow-md shadow-slate-200/40 space-y-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Find Me Online
              </span>
              <div className="space-y-2">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-700 group-hover:text-blue-600 transition-colors" />
                    <span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">
                      GitHub: <span className="font-mono font-bold">@nyeowsz</span>
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/40">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-slate-800 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-slate-800 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-slate-800 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about what you're building..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm text-slate-800 transition-all resize-none"
                  />
                </div>

                {status && (
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 text-xs font-medium">
                    {status}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
