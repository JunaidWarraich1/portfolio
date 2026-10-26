import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import ExperienceServices from './components/ExperienceServices';
import TerminalSnippet from './components/TerminalSnippet';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      <Navbar onOpenContact={() => setContactModalOpen(true)} />
      <main className="flex-grow">
        <Hero onOpenContact={() => setContactModalOpen(true)} />
        <ProjectsGrid />
        <ExperienceServices />
        <TerminalSnippet />
        <SkillsSection />
        <AboutSection />
        <ContactSection onOpenContact={() => setContactModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </div>
  );
}
