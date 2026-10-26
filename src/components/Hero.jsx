import React from 'react';
import { ArrowDown, Briefcase, FileText, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden aurora-bg">
      {/* Decorative Aurora Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-emerald-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Short Human Intro & Core Value */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 tracking-wide uppercase">
                Full-Stack Software Engineer
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Building modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">full-stack web apps</span> &amp; scalable backend APIs.
            </h1>

            {/* Short Human Intro */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I’m <strong className="text-white font-semibold">Muhammad Junaid Warraich</strong>, an experienced <strong className="text-emerald-400 font-semibold">Full-Stack Software Engineer</strong>. I specialize in building high-performance REST APIs, scalable distributed microservices, and modern reactive frontends using <span className="text-blue-400 font-medium">Python (FastAPI, Flask)</span>, <span className="text-cyan-400 font-medium">React 18</span>, and relational <span className="text-indigo-300 font-medium">PostgreSQL</span>—transforming complex product requirements into robust, production-grade systems.
            </p>

            {/* Core Competencies Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Experienced Full-Stack Engineer</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>High-Performance APIs &amp; Microservices</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production React &amp; Cloud Databases</span>
              </div>
            </div>

            {/* CTA Action Buttons - 1st Button is dedicated Contact & WhatsApp */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              {/* Primary 1st Button: Contact & WhatsApp */}
              <button
                type="button"
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/30 border border-emerald-400/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 group cursor-pointer"
                title="View WhatsApp number and contact info"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                <span>Contact &amp; WhatsApp</span>
              </button>

              {/* 2nd Button: View Live Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 hover:text-white font-semibold text-sm border border-white/[0.12] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 text-blue-400" />
              </a>

              {/* 3rd Button: Experience & Services */}
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="px-4 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm border border-white/[0.08] transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Experience</span>
              </a>

              {/* 4th Button: Download Resume */}
              <a
                href="/Muhammad_Junaid_Resume.html"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white font-medium text-sm border border-white/[0.08] transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>ATS Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture & Quick Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 sm:w-72 lg:w-80 group">
              
              {/* Radial Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/35 via-indigo-500/25 to-emerald-500/35 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 -z-10" />

              {/* Photo Container */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl overflow-hidden">
                <div className="bg-[#0b0f24] rounded-[22px] overflow-hidden aspect-[4/5] flex items-end justify-center relative">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Junaid Warraich"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060813] via-[#060813]/60 to-transparent pointer-events-none" />

                  {/* On-Photo Pill: Clickable to open Contact */}
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="absolute bottom-3 inset-x-3 bg-black/75 hover:bg-black/90 backdrop-blur-md border border-white/10 hover:border-emerald-500/50 rounded-xl p-2.5 text-center transition-all cursor-pointer group/pill"
                    title="Click to view contact info"
                  >
                    <p className="text-xs font-semibold text-white">Muhammad Junaid Warraich</p>
                    <p className="text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1">
                      <span>Full-Stack Software Engineer</span>
                      <span className="text-slate-400 group-hover/pill:text-emerald-300 transition-colors">&bull; Contact Info</span>
                    </p>
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Experience Badges Under Photo */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="aurora-glass rounded-xl p-3 text-center border border-white/[0.08]">
                <p className="text-lg font-extrabold text-white">Full-Stack</p>
                <p className="text-[10px] text-slate-400 font-medium">Experienced</p>
              </div>
              <div className="aurora-glass rounded-xl p-3 text-center border border-white/[0.08]">
                <p className="text-lg font-extrabold text-emerald-400">Python + React</p>
                <p className="text-[10px] text-slate-400 font-medium">Core Stack</p>
              </div>
              <div className="aurora-glass rounded-xl p-3 text-center border border-white/[0.08]">
                <p className="text-lg font-extrabold text-blue-400">5 Apps</p>
                <p className="text-[10px] text-slate-400 font-medium">Live Deployed</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
