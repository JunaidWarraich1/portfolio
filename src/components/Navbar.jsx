import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    // 100ms delay ensures mobile drawer closes and DOM settles before measuring scroll position
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060813]/95 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/50' 
          : 'bg-[#060813]/80 backdrop-blur-sm py-4 sm:py-5 border-b border-white/[0.04]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Brand */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-blue-500/20">
                  <div className="w-full h-full bg-[#0c1022] rounded-[11px] flex items-center justify-center">
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 tracking-wider text-base">
                      MJ
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-100 text-sm tracking-tight group-hover:text-emerald-400 transition-colors">
                    Muhammad Junaid
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono tracking-wider uppercase font-medium">
                    Full-Stack Developer
                  </span>
                </div>
              </a>

              {/* Status Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Available for Remote Roles</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, 'projects')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Experience &amp; Services
              </a>
              <a 
                href="#terminal" 
                onClick={(e) => handleNavClick(e, 'terminal')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Architecture
              </a>
              <a 
                href="#skills" 
                onClick={(e) => handleNavClick(e, 'skills')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Skills
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://github.com/JunaidWarraich1"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-blue-400 hover:text-blue-300 border border-white/[0.08] transition-colors"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              
              <a
                href="/Muhammad_Junaid_Resume.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 border border-blue-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Clean Mobile 3-Lines Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="relative z-50 w-11 h-11 flex items-center justify-center rounded-xl bg-white/[0.08] active:bg-white/[0.2] border border-white/[0.12] text-white cursor-pointer select-none transition-all active:scale-95"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                style={{ touchAction: 'manipulation' }}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 stroke-[2.2] pointer-events-none" />
                ) : (
                  <Menu className="w-6 h-6 stroke-[2.2] pointer-events-none" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay - tapping anywhere closes the menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md md:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-0 left-0 right-0 z-40 pt-20 pb-8 px-6 bg-[#070a1a] border-b border-white/[0.1] shadow-2xl md:hidden animate-fadeIn max-h-[90vh] overflow-y-auto"
        >
          <div className="flex flex-col space-y-3.5">
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')}
              className="text-base font-semibold text-slate-200 hover:text-white py-2.5 border-b border-white/[0.06] active:text-emerald-400"
            >
              Projects
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-base font-semibold text-slate-200 hover:text-white py-2.5 border-b border-white/[0.06] active:text-emerald-400"
            >
              Experience &amp; Services
            </a>
            <a 
              href="#terminal" 
              onClick={(e) => handleNavClick(e, 'terminal')}
              className="text-base font-semibold text-slate-200 hover:text-white py-2.5 border-b border-white/[0.06] active:text-emerald-400"
            >
              Architecture
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleNavClick(e, 'skills')}
              className="text-base font-semibold text-slate-200 hover:text-white py-2.5 border-b border-white/[0.06] active:text-emerald-400"
            >
              Skills
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-base font-semibold text-slate-200 hover:text-white py-2.5 border-b border-white/[0.06] active:text-emerald-400"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-base font-bold text-emerald-400 hover:text-emerald-300 py-2.5 border-b border-white/[0.06] flex items-center justify-between"
            >
              <span>Contact &amp; WhatsApp</span>
              <span className="text-xs font-mono font-normal text-emerald-300">+92 348 1064513</span>
            </a>

            {/* Social & Resume actions */}
            <div className="pt-4 flex items-center justify-between">
              <a
                href="https://github.com/JunaidWarraich1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-white py-1"
              >
                <GithubIcon className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 py-1"
              >
                <LinkedinIcon className="w-5 h-5" /> LinkedIn
              </a>
              <a
                href="/Muhammad_Junaid_Resume.html"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
