import React from 'react';
import { X, Shield, Lock, Activity, FileText, CheckCircle2 } from 'lucide-react';

export type SystemModalType = 'privacy' | 'terms' | 'security' | 'status' | null;

interface SystemModalProps {
  type: SystemModalType;
  onClose: () => void;
}

export const SystemModal: React.FC<SystemModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'pseudoSense Privacy Protocol',
      icon: <Lock className="w-5 h-5 text-[#38BDF8]" />,
      badge: 'PROTOCOL V2.4',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p>
            At <strong className="text-white">pseudoSense</strong>, privacy is not an afterthought; it is an architectural invariant. We adhere to sovereign data principles:
          </p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">1. Zero Non-Consensual Telemetry</strong>
              <span>We do not inject third-party surveillance scripts, cross-site trackers, or advertising SDKs into our client builds.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">2. Local-First Data Sovereignty</strong>
              <span>Applications like Workout Vault operate completely on device with IndexedDB and SQLite storage, meaning your biometric or personal routines never leave your hardware.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">3. Inquiries & Encryption</strong>
              <span>Information submitted through the Project Specification Matrix is transmitted directly to our studio partners under strict bilateral confidentiality.</span>
            </div>
          </div>
        </div>
      ),
    },
    terms: {
      title: 'Terms of Service & Engagement',
      icon: <FileText className="w-5 h-5 text-[#818CF8]" />,
      badge: 'COMMERCIAL TERMS',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p>
            Engaging pseudoSense Studio Inc. implies mutual adherence to precision standards:
          </p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">1. IP Ownership & Clean Delivery</strong>
              <span>All client deliverables, custom source trees, and design system tokens are transferred with full sovereign ownership upon project completion.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">2. Scope & Technical Benchmarks</strong>
              <span>Every sprint is bound by measurable latency budgets, verified test coverage, and strict zero-bloat dependency constraints.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">3. Operational Integrity</strong>
              <span>Deployments are signed and verified against target platform security sandboxes (App Store, Google Play, Cloud Edge).</span>
            </div>
          </div>
        </div>
      ),
    },
    security: {
      title: 'Security Matrix & Hardening',
      icon: <Shield className="w-5 h-5 text-[#10B981]" />,
      badge: 'SYSTEM HARDENED',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p>
            pseudoSense enforces defense-in-depth across the entire software supply chain:
          </p>
          <div className="space-y-2.5">
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">1. Strict Type Soundness</strong>
              <span>TypeScript compiler flags set to maximum strictness with zero &apos;any&apos; escapes. Runtime validation powered by immutable schemas.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">2. Offline Sandboxing</strong>
              <span>Mobile runtimes isolate sensitive calculation logic inside encrypted hardware keychains and Android Room cipher stores.</span>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <strong className="text-white block font-mono text-xs mb-1">3. Automated Vulnerability Auditing</strong>
              <span>All npm and Gradle dependencies undergo continuous CVE screening and sub-resource integrity checks.</span>
            </div>
          </div>
        </div>
      ),
    },
    status: {
      title: 'System Telemetry & Network Status',
      icon: <Activity className="w-5 h-5 text-[#56E5A9]" />,
      badge: 'ALL SYSTEMS NOMINAL',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[#94A3B8]">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <div className="font-mono text-[10px] text-[#94A3B8]">GLOBAL LATENCY</div>
              <div className="font-display font-bold text-white text-base text-[#10B981] mt-1">18 ms</div>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B]">
              <div className="font-mono text-[10px] text-[#94A3B8]">SERVICE UPTIME</div>
              <div className="font-display font-bold text-white text-base text-[#38BDF8] mt-1">99.998%</div>
            </div>
            <div className="p-3 rounded-lg bg-[#12141A] border border-[#1E222B] col-span-2 sm:col-span-1">
              <div className="font-mono text-[10px] text-[#94A3B8]">ACTIVE RUNTIME</div>
              <div className="font-display font-bold text-white text-base mt-1">Edge Mesh v2</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#090B0E] border border-[#1E222B] font-mono text-xs space-y-2">
            <div className="flex items-center justify-between text-white border-b border-[#1E222B] pb-1.5">
              <span>NODE REGION</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between">
              <span>asia-east1 (Tokyo / Cloud Run)</span>
              <span className="text-[#10B981] flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> OPERATIONAL</span>
            </div>
            <div className="flex justify-between">
              <span>us-central1 (Council Bluffs)</span>
              <span className="text-[#10B981] flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> OPERATIONAL</span>
            </div>
            <div className="flex justify-between">
              <span>europe-west1 (Belgium)</span>
              <span className="text-[#10B981] flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" /> OPERATIONAL</span>
            </div>
          </div>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-[#0D0F14] border border-[#1E222B] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col">
        <div className="px-6 py-4 border-b border-[#1E222B] flex items-center justify-between bg-[#101216]">
          <div className="flex items-center gap-3">
            {current.icon}
            <div>
              <div className="text-[10px] font-mono text-[#38BDF8] tracking-wider uppercase font-semibold">
                {current.badge}
              </div>
              <h3 className="font-display font-bold text-base text-white">
                {current.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#161920]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {current.content}
        </div>

        <div className="px-6 py-3.5 bg-[#101216] border-t border-[#1E222B] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono rounded bg-[#161920] hover:bg-[#1C222E] text-white border border-[#1E222B] transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
