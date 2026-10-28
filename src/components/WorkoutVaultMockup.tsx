import React from 'react';
import { WifiOff, ShieldCheck } from 'lucide-react';

export const WorkoutVaultMockup: React.FC = () => {
  return (
    <div className="w-full bg-[#0B0D11] rounded-xl border border-[#1E222B] shadow-2xl overflow-hidden font-sans text-[#E3E2E6] flex flex-col transition-all duration-300 group">
      {/* OS / Desktop Window Bar */}
      <div className="bg-[#14161C] px-3.5 py-2.5 border-b border-[#1E222B] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-[#94A3B8] ml-2 flex items-center gap-1.5 truncate">
            <WifiOff className="w-3 h-3 text-[#38BDF8]" />
            <span>WORKOUT 💪 VAULT - Offline Fitness Knowledge Base & Rep Tracker</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
            OFFLINE ENGINE ACTIVE
          </span>
        </div>
      </div>

      {/* Main App Screenshot Display Area - High Resolution Project Screenshot */}
      <div className="relative overflow-hidden bg-black flex items-center justify-center p-1 sm:p-2">
        <img
          src="/assets/aistudio/image_bd3f8f6c.png"
          alt="Workout Vault Application Full Screenshot"
          className="w-full h-auto max-h-[580px] object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11]/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-2.5 left-3 z-10 hidden sm:flex items-center gap-2 text-[10px] font-mono text-[#94A3B8] bg-[#0A0C0E]/85 px-2.5 py-1 rounded border border-[#1E222B] shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>Production Web Build • Santhosh S & Hemanth K</span>
        </div>
      </div>
    </div>
  );
};
