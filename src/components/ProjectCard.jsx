import React, { useState } from 'react';
import { ExternalLink, FileCode, CheckCircle2, Server, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  // Badge color mapping
  const badgeColors = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    sapphire: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  };

  return (
    <div className="aurora-glass rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/30 group">
      
      <div>
        {/* Top Header: Category & Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            {project.category}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${badgeColors[project.badgeColor] || badgeColors.emerald}`}>
            {project.statusBadge}
          </span>
        </div>

        {/* Project Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Summary */}
        <p className="text-slate-300 text-sm leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-5 bg-[#090d20]/80 p-3 rounded-xl border border-white/[0.05]">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">{m.label}</span>
              <span className="text-xs font-semibold text-slate-100">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Architecture Highlights Collapsible */}
        <div className="mb-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-xs font-semibold text-blue-400 hover:text-blue-300 py-1.5 transition-colors"
          >
            <span>Architecture &amp; Invariants</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {expanded && (
            <ul className="mt-2 space-y-2 text-xs text-slate-300 bg-white/[0.02] p-3 rounded-lg border border-white/[0.04]">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-[11px] font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo Credentials Pill */}
        {project.demoCredentials && (
          <div className="mb-4 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-mono text-[10px] uppercase">Testing Access</span>
            <span className="font-mono font-bold text-emerald-400 text-xs">{project.demoCredentials}</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.apiDocsUrl && (
          <a
            href={project.apiDocsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold transition-all hover:scale-[1.02]"
          >
            <span>Swagger Docs</span>
            <FileCode className="w-3.5 h-3.5" />
          </a>
        )}

        {!project.liveUrl && project.githubUrl ? (
          <>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-900/40 transition-all hover:scale-[1.02]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Architecture &amp; Codebase</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono ml-auto">
              <Server className="w-3 h-3 text-blue-400" />
              <span>Backend Microservice</span>
            </span>
          </>
        ) : (
          project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-200 text-xs font-semibold transition-all hover:scale-[1.02] ml-auto"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Source</span>
            </a>
          )
        )}
      </div>

    </div>
  );
}
