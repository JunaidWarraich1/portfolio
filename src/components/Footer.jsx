import React from 'react';
import { ArrowUp, Heart, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050711] py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-semibold text-slate-200">Muhammad Junaid Warraich</span>
          <span className="hidden sm:inline text-slate-600">&bull;</span>
          <span>BS Computer Science + LLB</span>
          <span className="hidden sm:inline text-slate-600">&bull;</span>
          <span className="font-mono text-emerald-400/90 text-[11px]">Zero-Tolerance Correctness</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-slate-500">
            React 18 &bull; Vite &bull; Tailwind CSS
          </span>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
