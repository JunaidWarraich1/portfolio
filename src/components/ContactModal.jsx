import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mail, Phone, Copy, Check, ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = async (text, type) => {
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
    } catch (err) {
      console.error('Clipboard copy failed:', err);
    }
  };

  const handleScrollToContact = () => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-[#0b0f24] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-950/60 z-10 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors border border-white/10"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-left mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400 mb-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DIRECT CONTACT INFO</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let’s Connect &amp; Collaborate
          </h3>
          <p className="text-sm text-slate-300 mt-1 leading-relaxed">
            Reach out directly for freelance contracts, full-time engineering roles, or technical consulting.
          </p>
        </div>

        {/* Contact Actions Grid */}
        <div className="space-y-4">
          
          {/* WhatsApp / Phone Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-emerald-500/30 hover:border-emerald-500/60 transition-all">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block">
                    Instant WhatsApp &amp; Phone
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white tracking-wide">
                    +92 348 1064513
                  </p>
                </div>
              </div>

              {/* Copy Phone Button */}
              <button
                onClick={() => copyToClipboard('+923481064513', 'phone')}
                className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors shrink-0"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="https://wa.me/923481064513"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Chat WhatsApp</span>
              </a>

              <a
                href="tel:+923481064513"
                className="py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 border border-white/10 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-blue-500/30 hover:border-blue-500/60 transition-all">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white truncate">
                    j.warraich2004@gmail.com
                  </p>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={() => copyToClipboard('j.warraich2004@gmail.com', 'email')}
                className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors shrink-0"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <a
              href="mailto:j.warraich2004@gmail.com"
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/25 transition-all hover:scale-[1.01]"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Direct Email</span>
            </a>
          </div>

        </div>

        {/* Social Links & Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-blue-400 flex items-center gap-1 font-medium transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-600">&bull;</span>
            <a
              href="https://github.com/JunaidWarraich1"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={handleScrollToContact}
            className="text-emerald-400 hover:text-emerald-300 text-xs font-mono flex items-center gap-1 transition-colors hover:underline"
          >
            <span>Full Contact Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
