import React from 'react';
import { Terminal, Smartphone, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceScope?: (scopeName: 'Web Architecture' | 'Mobile App' | 'UI/UX & System') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceScope }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'web':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#1E222B] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/60 group-hover:bg-[#161E2D] group-hover:shadow-[0_0_22px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-all duration-300">
            {/* Terminal / Code Icon matching Image 1 */}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="14" x="3" y="5" rx="2" />
              <polyline points="7 10 10 12 7 14" />
              <line x1="13" x2="17" y1="14" y2="14" />
            </svg>
          </div>
        );
      case 'mobile':
        return (
          <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#1E222B] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/60 group-hover:bg-[#161E2D] group-hover:shadow-[0_0_22px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-all duration-300">
            {/* Smartphone icon */}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <line x1="12" x2="12.01" y1="18" y2="18" />
            </svg>
          </div>
        );
      case 'design':
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#1E222B] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/60 group-hover:bg-[#161E2D] group-hover:shadow-[0_0_22px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-all duration-300">
            {/* UI/UX Compass/Ergonomics icon matching Image 1 */}
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2" />
              <path d="m12 7 5 13" />
              <path d="m12 7-5 13" />
              <path d="M9 15h6" />
            </svg>
          </div>
        );
    }
  };

  const getScopeEquivalent = (title: string): 'Web Architecture' | 'Mobile App' | 'UI/UX & System' => {
    if (title.includes('Web')) return 'Web Architecture';
    if (title.includes('Mobile')) return 'Mobile App';
    return 'UI/UX & System';
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#38BDF8]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* Category Pill Tag */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#161922] border border-[#1E222B] text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase mb-4">
          WHAT WE DO
        </div>

        {/* Section Headline */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Our end to end services
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          Building innovative solution through{' '}
          <span className="text-[#38BDF8] font-semibold">code</span>,{' '}
          <span className="text-[#818CF8] font-semibold">creativity</span> and{' '}
          <span className="text-[#56E5A9] font-semibold">collaboration</span>
        </p>
      </div>

      {/* 3 Column Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_DATA.map((service) => {
          const scope = getScopeEquivalent(service.title);
          return (
            <div
              key={service.id}
              className="rounded-2xl bg-[#101216]/90 border border-[#1E222B] p-6 lg:p-8 flex flex-col justify-between hover:border-[#38BDF8]/50 hover:-translate-y-2 hover:shadow-[0_20px_45px_-10px_rgba(56,189,248,0.15)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Radiant Top Border Gradient Transition */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Icon with glow shift */}
                <div className="mb-6">{getIcon(service.iconName)}</div>

                {/* Service Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities List */}
                <div className="border-t border-[#1E222B] pt-5">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8] mb-3 font-semibold">
                    CAPABILITIES
                  </div>
                  <ul className="space-y-2.5">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-xs text-[#E3E2E6] group-hover:text-white transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0 group-hover:scale-125 transition-transform" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action Link with micro-lift */}
              <div className="mt-8 pt-4 border-t border-[#1E222B]/60">
                <button
                  onClick={() => {
                    if (onSelectServiceScope) onSelectServiceScope(scope);
                    const contactElem = document.getElementById('contact');
                    contactElem?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-3.5 rounded bg-[#161922] hover:bg-[#1C222E] border border-[#1E222B] hover:border-[#38BDF8]/50 text-xs text-[#94A3B8] hover:text-[#38BDF8] flex items-center justify-between transition-all duration-200 font-mono hover:-translate-y-0.5 active:scale-98 shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                >
                  <span>Select Scope for Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
