import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, FileText, Check, Copy, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const safeCopy = async (text, type) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
      }

      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#10b981', '#2563eb', '#06b6d4']
        });
      } catch (e) {
        // Confetti blocked or unavailable
      }
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const handleResumeClick = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.85 },
        colors: ['#2563eb', '#10b981', '#ffffff']
      });
    } catch (e) {
      // Confetti blocked
    }
  };

  return (
    <section id="contact" className="py-24 relative aurora-bg scroll-mt-20">
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

        {/* Contact Grid - WhatsApp is 1st Card for immediate access */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Card 1: WhatsApp & Phone (Primary) */}
          <div className="aurora-glass rounded-2xl p-5 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex flex-col justify-between group shadow-lg shadow-emerald-950/20">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => safeCopy('+923481064513', 'phone')}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white flex items-center gap-1 border border-white/10 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                  Instant WhatsApp &amp; Call
                </span>
                <a
                  href="https://wa.me/923481064513"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm font-bold text-white hover:text-emerald-400 transition-colors mt-0.5"
                >
                  +92 348 1064513
                </a>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/[0.06] flex items-center gap-2">
              <a
                href="https://wa.me/923481064513"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-[11px] font-semibold text-center flex items-center justify-center gap-1 transition-colors"
              >
                <Send className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+923481064513"
                className="py-1.5 px-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white text-[11px] font-medium border border-white/10 transition-colors"
                title="Call phone number"
              >
                <Phone className="w-3 h-3 text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={() => safeCopy('j.warraich2004@gmail.com', 'email')}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white flex items-center gap-1 border border-white/10 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href="mailto:j.warraich2004@gmail.com"
                  className="block text-xs font-semibold text-slate-100 hover:text-blue-400 transition-colors truncate mt-0.5"
                >
                  j.warraich2004@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 mt-3 border-t border-white/[0.06]">
              <a
                href="mailto:j.warraich2004@gmail.com"
                className="w-full py-1.5 px-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 hover:text-white text-[11px] font-semibold text-center flex items-center justify-center gap-1 border border-blue-500/30 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Professional Network
                </span>
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

            <div className="pt-4 mt-3 border-t border-white/[0.06]">
              <a
                href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
                target="_blank"
                rel="noreferrer"
                className="w-full py-1.5 px-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white text-[11px] font-medium text-center flex items-center justify-center gap-1 border border-white/10 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="aurora-glass rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="text-left overflow-hidden">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Source Code &amp; Repos
                </span>
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

            <div className="pt-4 mt-3 border-t border-white/[0.06]">
              <a
                href="https://github.com/JunaidWarraich1"
                target="_blank"
                rel="noreferrer"
                className="w-full py-1.5 px-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white text-[11px] font-medium text-center flex items-center justify-center gap-1 border border-white/10 transition-colors"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3" />
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
