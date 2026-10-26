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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#060813]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-xl shadow-black/40' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Role Badge */}
          <div className="flex items-center gap-4">
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

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070a1a] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 mt-3 shadow-2xl">
          {/* Prominent Contact Item at top of mobile menu */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full text-left px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600/25 to-teal-600/15 border border-emerald-500/30 flex items-center justify-between text-emerald-400 font-bold text-sm"
          >
            <span className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Contact &amp; WhatsApp</span>
            </span>
            <span className="text-xs font-mono font-normal text-emerald-300">+92 348 1064513</span>
          </button>

          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg"
          >
            Projects
          </a>
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg"
          >
            Experience &amp; Services
          </a>
          <a 
            href="#terminal" 
            onClick={(e) => handleNavClick(e, 'terminal')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg"
          >
            Architecture
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg"
          >
            Skills
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:bg-white/[0.05] rounded-lg"
          >
            About
          </a>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
            <a
              href="https://github.com/JunaidWarraich1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-junaid-warraich-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-blue-400"
            >
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
