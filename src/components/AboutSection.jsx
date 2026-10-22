import React from 'react';
import { Scale, Binary, ShieldAlert, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
              <Scale className="w-3.5 h-3.5" />
              <span>THE DUAL DEGREE ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Where Computer Science Logic Meets Regulatory &amp; Contractual Rigor.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Most developers only learn syntax; very few combine formal algorithmic foundations with legal precision. With a <strong className="text-white font-semibold">BS in Computer Science</strong> and completing an <strong className="text-white font-semibold">LLB (Law Degree)</strong>, I approach systems architecture through the lens of zero-tolerance correctness.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Binary className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Algorithmic Precision &amp; Invariants</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Designing systems where mathematical invariants (like double-entry balance conservation) cannot be breached regardless of concurrent traffic.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <ShieldAlert className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Compliance, Security &amp; Data Governance</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Native understanding of data privacy, audit logging, idempotent payment security, and regulatory guardrails essential for fintech startups.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Executive-Grade Documentation</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clear, airtight architectural specifications and API documentation that bridge the gap between engineering teams and non-technical stakeholders.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Card: Background Summary */}
          <div className="lg:col-span-5">
            <div className="aurora-glass rounded-3xl p-8 border border-white/[0.1] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Academic &amp; Professional Profile</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Education</span>
                  <p className="text-sm font-bold text-white mt-1">Bachelor of Science in Computer Science (BS CS)</p>
                  <p className="text-xs text-slate-400">Data Structures, Algorithms, Distributed DBs, Systems Architecture</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Legal Studies</span>
                  <p className="text-sm font-bold text-white mt-1">Bachelor of Laws (LLB)</p>
                  <p className="text-xs text-slate-400">Contractual Law, Corporate Governance, Cyber Crime &amp; Compliance</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">Professional Experience</span>
                  <p className="text-sm font-bold text-white mt-1">Full-Stack &amp; Backend Engineering</p>
                  <p className="text-xs text-slate-400">Software House track record building client-facing SaaS, REST microservices, and responsive SPAs</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Target Roles</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    Backend Engineer &bull; Full-Stack Python/React Developer &bull; Systems &amp; API Engineer
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
