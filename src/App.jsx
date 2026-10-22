import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceServices from './components/ExperienceServices';
import TerminalSnippet from './components/TerminalSnippet';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectsGrid />
        <ExperienceServices />
        <TerminalSnippet />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
