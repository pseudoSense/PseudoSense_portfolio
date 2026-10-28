import React from 'react';
import { ArrowDown, Sparkles, Shield, Zap, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onInitiateContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreProjects, onInitiateContact }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#38BDF8]/15 via-[#6366F1]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#38BDF8]/10 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Hero Logo Emblem with micro-tilt and ambient glow pulsation */}
        <div className="relative mb-6 group cursor-pointer">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#38BDF8]/40 via-[#6366F1]/30 to-[#38BDF8]/40 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center p-1 bg-[#0D0F14]/80 border border-[#38BDF8]/30 shadow-[0_0_25px_rgba(56,189,248,0.35)] group-hover:scale-110 group-hover:-rotate-3 group-hover:border-[#38BDF8]/80 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all duration-300">
            <img
              src="/assets/aistudio/image_a9f00c1b.png"
              alt="pseudoSense Emblem"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Hero Headline */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1] mb-6 max-w-4xl">
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#7DD3FC] to-[#818CF8]">Sovereign Digital Systems</span> with Relentless Craft.
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl font-normal leading-relaxed mb-10">
          pseudoSense is an elite engineering collective building high-load web architectures, offline-first mobile applications, and dark-mode ergonomic design systems for high-growth technical ventures.
        </p>

        {/* Action Buttons with micro-lift and animated bounce */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onExploreProjects}
            className="group/btn w-full sm:w-auto px-7 py-3.5 rounded bg-[#38BDF8] text-[#08090C] font-display font-bold text-sm uppercase tracking-wider hover:bg-[#7DD3FC] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)]"
          >
            <span>Explore Our Works</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5] group-hover/btn:translate-y-1 transition-transform duration-200" />
          </button>

          <button
            onClick={onInitiateContact}
            className="group/btn w-full sm:w-auto px-7 py-3.5 rounded bg-[#101216] hover:bg-[#161920] text-[#F8FAFC] border border-[#1E222B] hover:border-[#38BDF8]/60 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]"
          >
            <span>Contact Us</span>
            <span className="text-[#38BDF8] text-base leading-none group-hover/btn:translate-x-1 transition-transform duration-200">▷</span>
          </button>
        </div>

        {/* Telemetry Grid / Core Pillars */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[#1E222B]/80 text-left">
          <div className="p-4 rounded-lg bg-[#0D0F14]/80 border border-[#1E222B] hover:border-[#38BDF8]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#94A3B8]">Performance</span>
            </div>
            <div className="font-display font-bold text-base text-[#F8FAFC]">Zero Latency</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">&lt; 15ms interaction response</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D0F14]/80 border border-[#1E222B] hover:border-[#38BDF8]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
              <Shield className="w-4 h-4" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#94A3B8]">Integrity</span>
            </div>
            <div className="font-display font-bold text-base text-[#F8FAFC]">100% Type-Safe</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">End-to-end verified schemas</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D0F14]/80 border border-[#1E222B] hover:border-[#38BDF8]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
              <Cpu className="w-4 h-4" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#94A3B8]">Mobility</span>
            </div>
            <div className="font-display font-bold text-base text-[#F8FAFC]">Offline-First</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">Zero cloud signal needed</div>
          </div>

          <div className="p-4 rounded-lg bg-[#0D0F14]/80 border border-[#1E222B] hover:border-[#38BDF8]/30 transition-colors">
            <div className="flex items-center gap-2 text-[#38BDF8] mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-[#94A3B8]">Ergonomics</span>
            </div>
            <div className="font-display font-bold text-base text-[#F8FAFC]">Obsidian Void</div>
            <div className="text-xs text-[#94A3B8] mt-0.5">Dark-mode precision optics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
