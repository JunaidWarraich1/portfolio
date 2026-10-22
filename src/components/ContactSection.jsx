import React, { useState } from 'react';
import { Mail, MessageSquare, FileText, Check, Copy, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('j.warraich2004@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#10b981', '#06b6d4']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleResumeClick = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.85 },
      colors: ['#2563eb', '#10b981', '#ffffff']
    });
  };

  return (
    <section id="contact" className="py-24 relative aurora-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">resilient</span> together?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
          I am actively exploring remote software engineering positions and technical contract opportunities. Let’s discuss how I can contribute to your engineering team.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Email Card */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</span>
              <a
                href="mailto:j.warraich2004@gmail.com"
                className="block text-xs font-semibold text-slate-100 hover:text-blue-400 transition-colors truncate mt-0.5"
              >
                j.warraich2004@gmail.com
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Instant Chat / WhatsApp</span>
              <a
                href="https://wa.me/923481064513"
                target="_blank"
                rel="noreferrer"
                className="block text-xs font-semibold text-slate-100 hover:text-emerald-400 transition-colors mt-0.5"
              >
                +92 348 1064513
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Professional Network</span>
              <a
                href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
                target="_blank"
                rel="noreferrer"
                className="block text-xs font-semibold text-slate-100 hover:text-blue-400 transition-colors truncate mt-0.5"
              >
                in/muhammad-junaid-warraich-dev
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400">
                <GithubIcon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Source Code</span>
              <a
                href="https://github.com/JunaidWarraich1"
                target="_blank"
                rel="noreferrer"
                className="block text-xs font-semibold text-slate-100 hover:text-indigo-400 transition-colors truncate mt-0.5"
              >
                github.com/JunaidWarraich1
              </a>
            </div>
          </div>

        </div>

        {/* Primary Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/Muhammad_Junaid_Resume.html"
            target="_blank"
            rel="noreferrer"
            onClick={handleResumeClick}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 border border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5"
          >
            <FileText className="w-4 h-4" />
            <span>Download Official ATS Resume (1-Page)</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
}
