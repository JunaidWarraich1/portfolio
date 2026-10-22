import React from 'react';
import { Code2, Award, BookOpen, Scale, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>ABOUT MY WORK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Passionate About Clean Architecture, Scalable Backends &amp; Fast UIs.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I am a <strong className="text-white font-semibold">Full-Stack Software Engineer</strong> with a strong foundation in computer science and real-world software house experience at <strong className="text-emerald-400 font-semibold">Enigmatix</strong>. My engineering approach centers around building reliable, maintainable software—from structured REST APIs and normalized database schemas to responsive, high-converting frontends.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Problem Solver</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Comfortable working across the entire web stack: writing clean Python backend logic, modeling relational databases, and constructing interactive React user interfaces.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Production Quality &amp; Security</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Focused on secure authentication (JWT), input validation with Pydantic, database constraints, and automated unit testing to prevent regressions.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Edge: Dual Degree Note placed concisely below */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-blue-950/30 to-transparent border border-indigo-500/20">
              <div className="flex items-center gap-2 mb-1.5 text-indigo-300 font-semibold text-xs font-mono uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5 text-indigo-400" />
                <span>Additional Edge &bull; CS + Legal Studies (LLB)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Alongside my Computer Science degree, I am also completing an <strong>LLB (Bachelor of Laws)</strong>. This background strengthens my analytical reasoning, attention to contractual details, and understanding of software compliance, data privacy, and IP—helping me bridge technical code with organizational requirements.
              </p>
            </div>

          </div>

          {/* Right Card: Background Summary */}
          <div className="lg:col-span-5">
            <div className="aurora-glass rounded-3xl p-7 sm:p-8 border border-white/[0.1] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span>Education &amp; Background</span>
              </h3>

              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Primary Education</span>
                  <p className="text-sm font-bold text-white mt-1">Bachelor of Science in Computer Science (BS CS)</p>
                  <p className="text-xs text-slate-400">Data Structures, Algorithms, Database Systems, Software Engineering</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider">Software House Experience</span>
                  <p className="text-sm font-bold text-white mt-1">Enigmatix &bull; Full-Stack Software Engineer</p>
                  <p className="text-xs text-slate-400">1 Year Experience &bull; Full-Stack Web Development, APIs &amp; PostgreSQL</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Complementary Legal Study</span>
                  <p className="text-sm font-bold text-white mt-1">Bachelor of Laws (LLB)</p>
                  <p className="text-xs text-slate-400">Analytical Logic, Contract Law &amp; Digital Compliance</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Target Roles</span>
                  <p className="text-xs text-slate-200 mt-1 font-medium">
                    Full-Stack Software Engineer &bull; Python / React Developer &bull; Backend API Engineer
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
