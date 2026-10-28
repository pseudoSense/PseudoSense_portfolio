import React from 'react';
import { Smartphone, Sparkles, TrendingUp } from 'lucide-react';

export const VittaMatricMockup: React.FC = () => {
  return (
    <div className="w-full max-w-[340px] mx-auto group">
      {/* Phone Outer Bezel & Glow */}
      <div className="relative bg-[#0A0C0F] rounded-[42px] p-2.5 sm:p-3 border-2 border-[#1E222B] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group-hover:border-[#10B981]/50 group-hover:shadow-[0_25px_60px_-15px_rgba(16,185,129,0.28)] transition-all duration-300">
        
        {/* Subtle top speaker / sensor indent */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#1A1D24] rounded-full z-20 pointer-events-none" />

        {/* Screen Display Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#0D0F14] border border-[#1E222B]/80 flex flex-col items-center justify-center">
          {/* Authentic vittaMatric Screenshot */}
          <img
            src="/assets/aistudio/image_c97f4c2f.png"
            alt="vittaMatric Currency Exchange Application Screenshot"
            className="w-full h-auto max-h-[580px] object-contain rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {/* Bottom subtle ambient gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0F]/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Ambient bottom status chip */}
        <div className="mt-3 flex items-center justify-between px-2 text-[10px] font-mono text-[#94A3B8]">
          <span className="flex items-center gap-1.5 text-[#10B981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>Android Production Build</span>
          </span>
          <span className="text-[#94A3B8]/80">FX & EMI Engine</span>
        </div>
      </div>
    </div>
  );
};
