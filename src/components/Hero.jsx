import React from 'react';
import { ArrowDown, Code2, Database, Briefcase, FileText, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function Hero() {
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
              I’m <strong className="text-white font-semibold">Muhammad Junaid Warraich</strong>, a Full-Stack Developer with 1 year of software engineering experience at <span className="text-emerald-400 font-medium">Enigmatix</span>. I specialize in building end-to-end web applications with <span className="text-blue-400 font-medium">Python (FastAPI, Flask)</span>, modern <span className="text-cyan-400 font-medium">React 18</span>, and relational <span className="text-indigo-300 font-medium">PostgreSQL</span> databases.
            </p>

            {/* Core Competencies Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>1 Year Industry Experience @ Enigmatix</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>FastAPI, Flask &amp; REST Microservices</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>React 18, Vite &amp; Tailwind CSS</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>View Live Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm border border-white/[0.1] transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Experience &amp; Services</span>
              </a>

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

                  {/* On-Photo Pill */}
                  <div className="absolute bottom-3 inset-x-3 bg-black/70 backdrop-blur-md border border-white/10 rounded-xl p-2.5 text-center">
                    <p className="text-xs font-semibold text-white">Muhammad Junaid Warraich</p>
                    <p className="text-[10px] text-emerald-400 font-mono">Full-Stack Software Engineer</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Experience Badges Under Photo */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              <div className="aurora-glass rounded-xl p-3 text-center border border-white/[0.08]">
                <p className="text-lg font-extrabold text-white">1 Year</p>
                <p className="text-[10px] text-slate-400 font-medium">At Enigmatix</p>
              </div>
              <div className="aurora-glass rounded-xl p-3 text-center border border-white/[0.08]">
                <p className="text-lg font-extrabold text-emerald-400">Full-Stack</p>
                <p className="text-[10px] text-slate-400 font-medium">Python &amp; React</p>
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
