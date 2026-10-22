import React from 'react';
import { skillCategories } from '../data/skills';
import { Server, Database, Layout, Cpu, CheckCircle } from 'lucide-react';

const ICONS = {
  Server: Server,
  Database: Database,
  Layout: Layout,
  Cpu: Cpu
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-[#070b18]/60 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Rigor &amp; Tech Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Technologies I use daily to build resilient, production-ready distributed systems and frontend interfaces.
          </p>
        </div>

        {/* 4 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComponent = ICONS[cat.icon] || Server;
            return (
              <div 
                key={idx}
                className="aurora-glass rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.15] transition-all"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group/item flex flex-col gap-1 p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-100 group-hover/item:text-emerald-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          skill.level === 'Primary Stack' 
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium'
                            : skill.level === 'Proficient'
                            ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                            : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
