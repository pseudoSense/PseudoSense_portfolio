import React from 'react';
import { Github, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/portfolioData';
import { SystemModalType } from './SystemModal';

interface FooterProps {
  onOpenSystemModal?: (type: SystemModalType) => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="bg-[#08090C] border-t border-[#1E222B] py-12 px-4 sm:px-6 lg:px-8 text-xs text-[#94A3B8]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          {/* Logo icon */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">
              <img
                src="/assets/aistudio/image_a9f00c1b.png"
                alt="pseudoSense Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="font-display font-bold text-white text-sm whitespace-nowrap">
              {COMPANY_INFO.brand}<sup className="text-[0.52em] -top-[0.65em] font-semibold tracking-wider ml-0.5">TM</sup>
            </span>
          </div>
          <p className="text-xs text-[#94A3B8]">
            © 2026 pseudoSense . All rights reserved.
          </p>
        </div>

        {/* Right: Remaining Links */}
        <div className="flex items-center justify-center gap-6 font-mono text-[11px]">
          {/* Social Links */}
          <div className="flex flex-col items-start gap-2">
            <a
              href={COMPANY_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4 shrink-0" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${COMPANY_INFO.email}`}
              title={COMPANY_INFO.email}
              className="group hover:text-[#38BDF8] flex items-center gap-1.5 transition-colors"
            >
              <img
                src="/assets/aistudio/image_1548fca8.png"
                alt="Mail"
                className="w-4 h-4 object-contain shrink-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span>Mail</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={onScrollToTop}
            className="p-1 rounded bg-[#101216] border border-[#1E222B] hover:border-[#38BDF8] text-[#94A3B8] hover:text-white transition-colors ml-2"
            title="Return to top"
            aria-label="Return to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
