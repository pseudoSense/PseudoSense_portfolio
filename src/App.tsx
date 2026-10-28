import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesSection } from './components/ServicesSection';
import { MembersSection } from './components/MembersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { SystemModal, SystemModalType } from './components/SystemModal';
import { AmbientCursorGlow } from './components/AmbientCursorGlow';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [systemModal, setSystemModal] = useState<SystemModalType>(null);
  const [contactScope, setContactScope] = useState<'Web Architecture' | 'Mobile App' | 'UI/UX & System'>('Web Architecture');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'projects', 'services', 'members', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScopeSelect = (scope: 'Web Architecture' | 'Mobile App' | 'UI/UX & System') => {
    setContactScope(scope);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#F8FAFC] selection:bg-[#38BDF8]/20 selection:text-[#38BDF8] relative overflow-hidden flex flex-col font-sans">
      {/* Dynamic mouse-following radial glow spotlight */}
      <AmbientCursorGlow />

      {/* Top Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenInquiry={() => handleNavigate('contact')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Home Section */}
        <HeroSection
          onExploreProjects={() => handleNavigate('projects')}
          onInitiateContact={() => handleNavigate('contact')}
        />

        {/* 2. Projects Section (OUR WORKS) */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 3. Services Section (WHAT WE DO) */}
        <ServicesSection
          onSelectServiceScope={handleScopeSelect}
        />

        {/* 4. Members Section (Code Architects) */}
        <MembersSection />

        {/* 5. Contact Section (INITIATE ENGAGEMENT) */}
        <ContactSection
          initialScope={contactScope}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenSystemModal={(type) => setSystemModal(type)}
        onScrollToTop={scrollToTop}
      />

      {/* Project Dossier Modal when clicking Explore our project */}
      <ProjectDossierModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Policy and Telemetry System Modals */}
      <SystemModal
        type={systemModal}
        onClose={() => setSystemModal(null)}
      />
    </div>
  );
}
