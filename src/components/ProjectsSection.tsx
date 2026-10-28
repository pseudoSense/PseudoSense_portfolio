import React from 'react';
import { ArrowUpRight, Smartphone, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { WorkoutVaultMockup } from './WorkoutVaultMockup';
import { VittaMatricMockup } from './VittaMatricMockup';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const workoutProjectUrl =
    PROJECTS_DATA[0].projectUrl || 'https://blackton-618.github.io/workout_library/';

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#38BDF8]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#6366F1]/5 blur-[140px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="mb-14">
        <div className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase mb-2">
          PORTFOLIO
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC] uppercase inline-block relative pb-4">
          OUR WORKS
          {/* Cyan double underline from Image 1 */}
          <span className="absolute bottom-1 left-0 w-24 h-[3px] bg-[#38BDF8] rounded-full" />
          <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-[#38BDF8]/60 rounded-full" />
        </h2>
      </div>

      {/* Project Cards Stack */}
      <div className="space-y-14">
        {/* Project 1: Workout Vault */}
        <div className="rounded-2xl bg-[#101216]/90 border border-[#1E222B] p-6 sm:p-8 lg:p-10 hover:border-[#38BDF8]/60 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-12px_rgba(56,189,248,0.18)] transition-all duration-300 relative overflow-hidden group">
          {/* Accent hover glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#38BDF8]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Meta & Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category Pill with Glowing Pulse */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161922] border border-[#38BDF8]/40 text-[10px] font-mono font-bold tracking-wider text-[#38BDF8] mb-4 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
                  <Globe className="w-3 h-3 text-[#38BDF8]" />
                  <span>WEBSITE</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-2 group-hover:text-[#38BDF8] transition-colors">
                  Workout 💪 Vault
                </h3>

                {/* App Brand Icon with New Logo */}
                <div className="w-16 h-16 rounded-xl bg-[#0D0F14] border border-[#1E222B] p-2 flex items-center justify-center shadow-md overflow-hidden group-hover:border-[#38BDF8]/60 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300 mb-6">
                  <img
                    src="/assets/aistudio/image_8125430b.png"
                    alt="Workout Vault Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  Workout Vault is a desktop-focused fitness website that helps users find and follow workouts without needing an internet connection. Users can enter a name and experience level, choose a training goal, and browse exercise guides for muscle building, fat burning, cardio, metabolic conditioning, abs, and calisthenics.
                </p>
              </div>

              {/* Action Button with micro-lift and bounce */}
              <div>
                <a
                  href={workoutProjectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] text-[#08090C] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#7DD3FC] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                >
                  <span>Explore our project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Right Column: Workout Vault App Mockup with Image Zoom */}
            <div className="lg:col-span-6 w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <WorkoutVaultMockup />
            </div>
          </div>
        </div>

        {/* Project 2: vittaMatric */}
        <div className="rounded-2xl bg-[#101216]/90 border border-[#1E222B] p-6 sm:p-8 lg:p-10 hover:border-[#10B981]/60 hover:-translate-y-1.5 hover:shadow-[0_25px_60px_-12px_rgba(16,185,129,0.18)] transition-all duration-300 relative overflow-hidden group">
          {/* Accent hover glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#10B981]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Meta & Info */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                {/* Category Pill with Glowing Pulse */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161922] border border-[#10B981]/40 text-[10px] font-mono font-bold tracking-wider text-[#10B981] mb-4 shadow-[0_0_12px_rgba(16,185,129,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <Smartphone className="w-3 h-3 text-[#10B981]" />
                  <span>ANDROID APP</span>
                </div>

                {/* Project Title */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-[#10B981] transition-colors">
                  vittaMatric
                </h3>

                {/* App Brand Icon with New Logo */}
                <div className="w-16 h-16 rounded-xl bg-[#0D0F14] border border-[#1E222B] p-1.5 flex items-center justify-center shadow-md overflow-hidden group-hover:border-[#10B981]/70 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 mb-6">
                  <img
                    src="/assets/aistudio/image_1d353d97.png"
                    alt="vittaMatric Logo"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  A modern financial calculator application featuring currency conversion, loan and EMI planning, investment calculations, and interactive financial dashboards. Designed with a clean, responsive interface and real-time financial insights to simplify financial planning and improve the overall user experience.
                </p>
              </div>

              {/* Action Button with micro-lift and bounce */}
              <div>
                <button
                  onClick={() => onSelectProject(PROJECTS_DATA[1])}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 rounded bg-[#38BDF8] text-[#08090C] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#7DD3FC] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                >
                  <span>Explore our project</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right Column: vittaMatric Mobile Mockup with Image Zoom */}
            <div className="lg:col-span-6 w-full flex justify-center transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <VittaMatricMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
