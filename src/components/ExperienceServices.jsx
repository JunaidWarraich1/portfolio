import React from 'react';
import { Briefcase, Layers, Code2, Server, Database, Layout, CheckCircle2, ArrowUpRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    desc: "Building complete, end-to-end web applications from reactive React 18 interfaces to robust Python backends, delivered with clean architecture and modern performance.",
    deliverables: ["Single-Page Apps (SPA)", "State Management", "Tailwind CSS Styling", "Cross-Browser Testing"],
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    icon: Server,
    title: "REST APIs & Backend Engineering",
    desc: "Designing fast, reliable, well-documented RESTful APIs using FastAPI and Flask. Enforcing strict schema validation, JWT authentication, and structured error handling.",
    deliverables: ["Interactive Swagger/OpenAPI", "JWT Auth & Session Guards", "Pydantic Schemas", "Microservice Routing"],
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400"
  },
  {
    icon: Database,
    title: "Database Design & ORM Modeling",
    desc: "Architecting relational database schemas with PostgreSQL and SQLite. Modeling complex foreign key cascades, data integrity rules, and query optimization via SQLAlchemy.",
    deliverables: ["Relational Schema Design", "SQLAlchemy Declarative Models", "Data Normalization", "Index & Query Optimization"],
    accent: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400"
  },
  {
    icon: Layout,
    title: "Frontend UI/UX Polish & Modernization",
    desc: "Crafting beautiful, accessible, dark/light modern user interfaces with Vite and Tailwind CSS. Optimizing bundle sizes, responsiveness, and seamless user experiences.",
    deliverables: ["Modern Dark/Light Themes", "Glassmorphism UI", "Mobile-First Responsiveness", "Fast Vite Tooling"],
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400"
  }
];

export default function ExperienceServices() {
  return (
    <section id="services" className="py-24 relative bg-[#060918]/70 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>EXPERIENCE &amp; SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience &amp; What I Deliver
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            One year of production software house experience combined with end-to-end full-stack capabilities.
          </p>
        </div>

        {/* Work Experience Card: Enigmatix */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aurora-glass rounded-2xl p-7 sm:p-8 border border-white/[0.1] relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Full-Stack Software Engineer</h3>
                    <p className="text-sm font-semibold text-emerald-400">Enigmatix</p>
                  </div>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300">
                  1 Year Experience &bull; Full-Time
                </span>
                <p className="text-xs text-slate-400 mt-1 font-mono">Pakistan (Software House)</p>
              </div>
            </div>

            <div className="mt-6 space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Engineered and shipped client-facing web applications utilizing <strong>Python (FastAPI, Flask)</strong> and <strong>React</strong>, delivering responsive user experiences with minimal latency.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Designed RESTful API architectures, implemented secure <strong>JWT authentication</strong> workflows, role-based access control (RBAC), and OpenAPI documentation.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Modeled relational database schemas on <strong>PostgreSQL</strong> using <strong>SQLAlchemy ORM</strong>, optimizing complex query execution times and data consistency.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Collaborated with cross-functional engineering and design teams using Git, GitHub PR reviews, and Agile sprints to deliver production features on schedule.
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
              {["Python", "FastAPI", "Flask", "React", "PostgreSQL", "SQLAlchemy", "Git", "REST APIs", "Tailwind CSS"].map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Services Grid Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Services &amp; Engineering Solutions
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Core technical services available for remote full-time positions and contract projects.
          </p>
        </div>

        {/* 4 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="aurora-glass rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${s.accent} border ${s.border} ${s.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {s.title}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Deliverables
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {s.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
