import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { Layers, Sparkles } from 'lucide-react';

const CATEGORIES = ["All Systems", "Full-Stack SaaS", "Fintech & Concurrency", "Algorithms & Math", "Algorithms & OOP"];

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Systems");

  const filteredProjects = selectedCategory === "All Systems"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE ARSENAL &bull; 5 SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Production Architectures
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every system is built with automated tests, database schemas, and clean architectural separation. No placeholder demos.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'bg-white/[0.04] text-slate-400 hover:text-slate-200 hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
