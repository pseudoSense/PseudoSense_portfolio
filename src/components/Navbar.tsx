import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'members', label: 'Members' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090C]/90 backdrop-blur-md border-b border-[#1E222B] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            aria-label="pseudoSense Home"
          >
            {/* Emblem Logo with micro-tilt and ambient glow pulsation */}
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 filter drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:drop-shadow-[0_0_22px_rgba(56,189,248,0.85)]">
              <img
                src="/assets/aistudio/image_a9f00c1b.png"
                alt="pseudoSense Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col shrink-0">
              <span className="font-display font-bold text-lg tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors whitespace-nowrap">
                pseudoSense<sup className="text-[0.52em] -top-[0.65em] font-semibold tracking-wider ml-0.5">TM</sup>
              </span>
            </div>
          </button>

          {/* Desktop Navigation with Expanding Indicator Underlines */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 ml-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`group/nav px-3.5 py-1.5 text-sm font-medium transition-all rounded-md relative ${
                    isActive
                      ? 'text-[#38BDF8] font-semibold bg-[#161920]'
                      : 'text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#101216]/60'
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-200">{link.label}</span>
                  {/* Dynamic expanding cyan indicator underline */}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#38BDF8] rounded-full transition-transform duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 shadow-[0_0_10px_#38BDF8]'
                        : 'scale-x-0 group-hover/nav:scale-x-100 shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#161920] rounded-md border border-[#1E222B] transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#38BDF8]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative mt-auto w-full bg-[#0D0F14] border-t border-[#1E222B] px-6 py-8 rounded-t-2xl shadow-2xl flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#1E222B] pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/image_a9f00c1b.png"
                  alt="pseudoSense Logo"
                  className="w-7 h-7 object-contain rounded-full drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono tracking-wider text-[#94A3B8]">
                    pseudoSense<sup className="text-[0.55em] -top-[0.6em] ml-0.5">TM</sup> ONLINE
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#94A3B8] hover:text-white"
                aria-label="Close navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-left text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#161920] text-[#38BDF8] border border-[#38BDF8]/30 font-semibold'
                        : 'text-[#94A3B8] hover:text-white hover:bg-[#101216]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />}
                  </button>
                );
              })}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#38BDF8] text-[#08090C] font-display font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#38BDF8]/20"
              >
                <span>Initiate Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-4 pt-3 border-t border-[#1E222B] text-xs text-[#94A3B8]">
                <a
                  href={COMPANY_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-[#3E484F]">•</span>
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-[#3E484F]">•</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-1.5 hover:text-[#38BDF8] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
