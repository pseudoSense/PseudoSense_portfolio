import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Sparkles, Terminal, Shield } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';
import { TeamMember } from '../types';

export const MembersSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="members" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#1E222B]/60">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#6366F1]/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#161922] border border-[#1E222B] text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase mb-4 shadow-[0_0_12px_rgba(56,189,248,0.15)]">
          // MEMBERS
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Core Team & Contributors
        </h2>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          Building innovative solutions through <span className="text-[#38BDF8] font-medium">code, creativity</span> and <span className="text-[#818CF8] font-medium">collaboration</span>.
        </p>
      </div>

      {/* Team Cards Grid - Exactly Two Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className="rounded-2xl bg-[#101216]/95 border border-[#1E222B] p-7 flex flex-col justify-between hover:border-[#38BDF8]/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#38BDF8]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Member Photo Box with glowing cyan perimeter halo */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative group/avatar">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#1E222B] group-hover:border-[#38BDF8] bg-[#0D0F14] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-[#38BDF8] shadow-lg group-hover:shadow-[0_0_24px_rgba(56,189,248,0.55)]">
                    {member.avatarUrl ? (
                      <img
                        src={member.avatarUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Hide broken image so monogram shows
                          (e.currentTarget as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    {/* Monogram fallback */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.avatarBg} -z-10 flex items-center justify-center text-white font-display font-bold text-xl`}>
                      {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#161922] text-[#10B981] border border-[#10B981]/20 flex items-center gap-1.5 shadow-[0_0_8px_rgba(16,185,129,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-[#38BDF8] transition-colors">
                {member.name}
              </h3>
              <div className="text-xs font-mono text-[#38BDF8] mb-3">
                {member.role}
              </div>

              {member.focus ? (
                <div className="text-[11px] font-mono text-[#94A3B8] border-b border-[#1E222B] pb-3 mb-3">
                  {member.focus}
                </div>
              ) : null}

              <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* Skills tags */}
              {member.skills && member.skills.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#161922] border border-[#1E222B] text-[10px] font-mono text-[#E3E2E6] group-hover:border-[#38BDF8]/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Interactive Social Rows: Gmail, LinkedIn, GitHub */}
            <div className="pt-4 border-t border-[#1E222B] space-y-1.5">
              <a
                href={`mailto:${member.email || 'contact.pseudosense@gmail.com'}`}
                className="group/link flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0D0F14] hover:bg-[#161E2A] border border-[#1E222B] hover:border-[#38BDF8]/40 transition-all duration-200 text-xs"
              >
                <div className="flex items-center gap-2 text-[#94A3B8] group-hover/link:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#38BDF8] group-hover/link:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] font-medium">Gmail</span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] group-hover/link:text-[#38BDF8] transition-colors">
                  Direct Dispatch ↗
                </span>
              </a>

              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0D0F14] hover:bg-[#161E2A] border border-[#1E222B] hover:border-[#38BDF8]/40 transition-all duration-200 text-xs"
              >
                <div className="flex items-center gap-2 text-[#94A3B8] group-hover/link:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-[#818CF8] group-hover/link:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] font-medium">LinkedIn</span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] group-hover/link:text-[#818CF8] transition-colors">
                  Network ↗
                </span>
              </a>

              <a
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0D0F14] hover:bg-[#161E2A] border border-[#1E222B] hover:border-[#38BDF8]/40 transition-all duration-200 text-xs"
              >
                <div className="flex items-center gap-2 text-[#94A3B8] group-hover/link:text-white transition-colors">
                  <Github className="w-3.5 h-3.5 text-[#E3E2E6] group-hover/link:scale-110 transition-transform" />
                  <span className="font-mono text-[11px] font-medium">GitHub</span>
                </div>
                <span className="text-[10px] font-mono text-[#94A3B8] group-hover/link:text-[#38BDF8] transition-colors">
                  Source ↗
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
