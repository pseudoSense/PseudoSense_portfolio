import React, { useState } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, Copy, Check, Terminal, Sparkles, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectDossierModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [customRepoUrl, setCustomRepoUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'source'>('overview');

  if (!project) return null;

  const currentRepoUrl = customRepoUrl || project.githubUrl;

  const handleCopyClone = () => {
    navigator.clipboard.writeText(`git clone ${currentRepoUrl}.git`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0D0F14] border border-[#1E222B] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#1E222B] flex items-center justify-between bg-[#101216]">
          <div className="flex items-center gap-3">
            {project.logoUrl && (
              <img
                src={project.logoUrl}
                alt={project.title}
                className="w-8 h-8 rounded-lg object-contain bg-[#08090C] p-1 border border-[#1E222B] shadow-sm"
              />
            )}
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-lg text-white">
              {project.title} — Architectural Dossier
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#161920] transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center px-6 border-b border-[#1E222B] bg-[#0E1015] text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'overview'
                ? 'border-[#38BDF8] text-[#38BDF8]'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            01. OVERVIEW & CAPABILITIES
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'architecture'
                ? 'border-[#38BDF8] text-[#38BDF8]'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            02. SYSTEM ARCHITECTURE
          </button>
          <button
            onClick={() => setActiveTab('source')}
            className={`py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'source'
                ? 'border-[#38BDF8] text-[#38BDF8]'
                : 'border-transparent text-[#94A3B8] hover:text-white'
            }`}
          >
            03. SOURCE & REPOSITORY
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#94A3B8]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-2">
                  // Mission Specification
                </h4>
                <p className="text-white text-base leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Application Interface Screenshot Preview */}
              {project.screenshotUrl && (
                <div className="rounded-xl overflow-hidden border border-[#1E222B] bg-[#0A0C0F] p-3 flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#94A3B8] mb-2 px-1">
                    <span className="text-[#38BDF8]">LIVE INTERFACE CAPTURE</span>
                    <span>1:1 FIDELITY</span>
                  </div>
                  <div className="w-full flex justify-center overflow-hidden rounded-lg bg-[#000000]">
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.title} Interface Preview`}
                      className="max-h-[320px] w-auto object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                  Verified Performance Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
                      <div className="font-mono text-xs text-[#94A3B8]">{m.label}</div>
                      <div className="font-display font-bold text-white text-base mt-1 text-[#38BDF8]">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Capabilities */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3">
                  Engineered Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-[#101216] border border-[#1E222B] text-white text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-2">
                  // Technology Matrix
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded bg-[#161922] border border-[#1E222B] text-white text-xs font-mono flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint Card */}
              <div className="p-4 rounded-xl bg-[#0B0D11] border border-[#1E222B] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-[#94A3B8] border-b border-[#1E222B] pb-2">
                  <span>ARCHITECTURE_PIPELINE.DAG</span>
                  <span className="text-[#10B981]">VERIFIED</span>
                </div>
                <div className="space-y-1 text-[#E3E2E6]">
                  <div>[Client UI] ➔ Virtual DOM Diffing ➔ 120Hz Animation Scheduler</div>
                  <div className="text-[#38BDF8]">└── State Store ➔ Immutable Snapshots & Local Persistence</div>
                  <div className="text-[#818CF8]">└── Offline Adapter ➔ IndexedDB / SQLite Storage Engine</div>
                  <div className="text-[#10B981]">└── Cryptographic Validation ➔ CRC32 Integrity Verification</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'source' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] mb-1.5">
                  // Repository & Version Control
                </h4>
                <p className="text-xs text-[#94A3B8]">
                  Direct access to the public engineering codebase and documentation.
                </p>
              </div>

              {/* Git Clone Box */}
              <div className="p-3.5 rounded-lg bg-[#08090C] border border-[#1E222B] flex items-center justify-between font-mono text-xs text-white">
                <div className="flex items-center gap-2 overflow-x-auto">
                  <Terminal className="w-4 h-4 text-[#38BDF8] shrink-0" />
                  <span className="text-[#94A3B8] select-none">$</span>
                  <span className="truncate">git clone {currentRepoUrl}.git</span>
                </div>
                <button
                  onClick={handleCopyClone}
                  className="ml-3 px-3 py-1.5 rounded bg-[#161920] hover:bg-[#1F2430] text-[#38BDF8] border border-[#1E222B] flex items-center gap-1.5 shrink-0 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Custom Repo Link Override Tool */}
              <div className="p-4 rounded-xl bg-[#101216] border border-[#1E222B] space-y-2.5">
                <label className="block text-xs font-display font-semibold text-white">
                  Override Repository URL (Test Custom Repo)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customRepoUrl}
                    onChange={(e) => setCustomRepoUrl(e.target.value)}
                    placeholder={project.githubUrl}
                    className="flex-1 px-3 py-2 text-xs bg-[#08090C] border border-[#1E222B] rounded text-white focus:outline-none focus:border-[#38BDF8] font-mono"
                  />
                  {customRepoUrl && (
                    <button
                      onClick={() => setCustomRepoUrl('')}
                      className="px-3 py-2 text-xs text-[#94A3B8] hover:text-white"
                    >
                      Reset
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-[#94A3B8]">
                  Enter an alternative repository address if you want to inspect a private or cloned branch.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-4 bg-[#101216] border-t border-[#1E222B] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#94A3B8] font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>pseudoSense Open Standards License</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#94A3B8] hover:text-white rounded bg-[#161920] border border-[#1E222B]"
            >
              Close Dossier
            </button>
            <a
              href={currentRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 text-xs font-display font-bold uppercase tracking-wider bg-[#38BDF8] text-[#08090C] hover:bg-[#7DD3FC] rounded transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)]"
            >
              <Github className="w-4 h-4" />
              <span>Open on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
