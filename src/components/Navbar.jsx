import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent jitter
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

  const toggleMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 60);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#060813]/95 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-xl shadow-black/50' 
          : 'bg-transparent py-4 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Role Badge */}
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

              {/* Live Status Pill: Clickable to open Contact */}
              <button
                type="button"
                onClick={onOpenContact}
                className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 hover:border-emerald-500/50 transition-all cursor-pointer"
                title="Click to view contact number and reach out"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-400">Available for Remote Roles</span>
              </button>
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
              <button 
                type="button"
                onClick={onOpenContact}
                className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </nav>

            {/* Action CTAs */}
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

              {/* Direct Contact Button */}
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 hover:text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-all hover:scale-[1.02] cursor-pointer"
                title="View contact number and WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact</span>
              </button>
              
              {/* Download ATS Resume */}
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

            {/* Mobile Controls: Instant 1-Touch Hamburger & Quick WhatsApp */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenContact}
                className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center active:scale-95 transition-transform"
                title="Open WhatsApp & Contact"
                aria-label="Contact and WhatsApp"
              >
                <MessageSquare className="w-5 h-5" />
              </button>

              {/* 3-Lines Hamburger Button: 48px Touch Target, Zero-Lag 1-Touch Response */}
              <button
                type="button"
                onClick={toggleMobileMenu}
                onTouchEnd={(e) => {
                  // Instant touch response on iOS Safari & Android Chrome
                  e.preventDefault();
                  toggleMobileMenu();
                }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.08] active:bg-white/[0.2] border border-white/[0.15] text-white active:scale-90 transition-all cursor-pointer touch-manipulation select-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-white stroke-[2.3]" />
                ) : (
                  <Menu className="w-6 h-6 text-white stroke-[2.3]" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer (Fixed Positioning with high z-index) */}
      {mobileMenuOpen && (
        <div 
          className="fixed top-[66px] sm:top-[74px] left-0 right-0 z-40 bg-[#070a1a] border-b border-white/[0.12] px-5 pt-3 pb-6 space-y-2.5 shadow-2xl animate-fadeIn md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
        >
          {/* Prominent WhatsApp / Contact Item */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600/30 to-teal-600/20 border border-emerald-500/40 flex items-center justify-between text-emerald-400 font-bold text-sm shadow-md shadow-emerald-950/40 active:scale-[0.98] transition-transform"
          >
            <span className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Contact &amp; WhatsApp</span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-300">+92 348 1064513</span>
          </button>

          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="block px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-xl active:bg-white/[0.08]"
          >
            Projects
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="block px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-xl active:bg-white/[0.08]"
          >
            Experience &amp; Services
          </a>
          <a 
            href="#terminal" 
            onClick={(e) => handleNavClick(e, 'terminal')}
            className="block px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-xl active:bg-white/[0.08]"
          >
            Architecture
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="block px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-xl active:bg-white/[0.08]"
          >
            Skills
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="block px-3.5 py-2.5 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-xl active:bg-white/[0.08]"
          >
            About
          </a>

          {/* Resume link in mobile drawer */}
          <a
            href="/Muhammad_Junaid_Resume.html"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3.5 py-2.5 text-base font-medium text-blue-400 hover:bg-white/[0.05] rounded-xl flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>ATS Resume</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="https://github.com/JunaidWarraich1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 py-1"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-blue-400 py-1"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </>
  );
}
