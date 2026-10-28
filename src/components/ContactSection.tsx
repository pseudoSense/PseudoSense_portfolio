import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  ShieldCheck,
  AlertCircle,
  ArrowUpRight,
  Pencil,
} from 'lucide-react';
import { ProjectInquiry, SubmittedInquiryReceipt } from '../types';

const TARGET_EMAIL = 'pseudosense.team@gmail.com';
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

type DeliveryStatus = 'sent' | 'activation_required' | 'fallback';

interface ContactSectionProps {
  initialScope?: 'Web Architecture' | 'Mobile App' | 'UI/UX & System';
}

function buildEmailSubject(data: ProjectInquiry): string {
  const organizationSuffix = data.organization.trim() ? ` (${data.organization.trim()})` : '';
  return `[Project Specification] ${data.scope} — ${data.name.trim()}${organizationSuffix}`;
}

function formatAlignedEmailText(data: ProjectInquiry, lineBreak = '\n'): string {
  const organization = data.organization.trim();
  const lines = [
    'pseudoSense — PROJECT SPECIFICATION INQUIRY',
    '==================================================',
    '',
    'CLIENT & PROJECT DETAILS',
    '--------------------------------------------------',
    `Your Name       : ${data.name.trim()}`,
    ...(organization ? [`Organization    : ${organization}`] : []),
    `Corporate Email : ${data.email.trim()}`,
    `Project Scope   : ${data.scope}`,
    '',
    'PROJECT BRIEF & TECHNICAL OBJECTIVES',
    '--------------------------------------------------',
    data.brief.trim(),
    '',
    '==================================================',
    `Reply-To        : ${data.email.trim()}`,
  ];
  return lines.join(lineBreak);
}

function buildGmailComposeUrl(data: ProjectInquiry): string {
  const subject = buildEmailSubject(data);
  const body = formatAlignedEmailText(data, '\n');
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    TARGET_EMAIL
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildMailtoUrl(data: ProjectInquiry): string {
  const subject = buildEmailSubject(data);
  const body = formatAlignedEmailText(data, '\r\n');
  return `mailto:${TARGET_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialScope }) => {
  const [formData, setFormData] = useState<ProjectInquiry>({
    name: '',
    organization: '',
    email: '',
    scope: initialScope || 'Web Architecture',
    brief: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SubmittedInquiryReceipt | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState<DeliveryStatus>('sent');
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  // Sync initial scope if parent changes it
  React.useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({ ...prev, scope: initialScope }));
    }
  }, [initialScope]);

  const dispatchEmail = async (cleanedData: ProjectInquiry) => {
    setIsSubmitting(true);
    setError(null);

    const payload: Record<string, string> = {
      'Your Name': cleanedData.name,
      ...(cleanedData.organization ? { Organization: cleanedData.organization } : {}),
      Email: cleanedData.email,
      'Project Scope': cleanedData.scope,
      'Project Brief & Technical Objectives': cleanedData.brief,
      _subject: buildEmailSubject(cleanedData),
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(FORMSUBMIT_AJAX_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        referrerPolicy: 'origin-when-cross-origin',
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      const isSuccess = response.ok && (result?.success === true || result?.success === 'true');
      const serverMessage = typeof result?.message === 'string' ? result.message : '';

      if (isSuccess) {
        setDeliveryStatus('sent');
      } else if (serverMessage.toLowerCase().includes('activation')) {
        setDeliveryStatus('activation_required');
      } else {
        setDeliveryStatus('fallback');
      }
    } catch {
      setDeliveryStatus('fallback');
    } finally {
      const refId = `PS-${Math.floor(1000 + Math.random() * 9000)}-${cleanedData.scope
        .substring(0, 3)
        .toUpperCase()}`;
      setReceipt({
        referenceId: refId,
        timestamp: new Date().toISOString(),
        data: cleanedData,
        hash: TARGET_EMAIL,
      });
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation (only Organization is optional)
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    if (!formData.brief.trim()) {
      setError('Please provide a brief technical objective or project overview.');
      return;
    }

    const cleanedData: ProjectInquiry = {
      name: formData.name.trim(),
      organization: formData.organization.trim(),
      email: formData.email.trim(),
      scope: formData.scope,
      brief: formData.brief.trim(),
    };

    await dispatchEmail(cleanedData);
  };

  const handleResend = async () => {
    if (!receipt || isSubmitting) return;
    await dispatchEmail(receipt.data);
  };

  const handleCopyReceipt = () => {
    if (!receipt) return;
    const text = formatAlignedEmailText(receipt.data, '\n');
    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  const handleEdit = () => {
    setReceipt(null);
  };

  const handleReset = () => {
    setReceipt(null);
    setFormData({
      name: '',
      organization: '',
      email: '',
      scope: initialScope || 'Web Architecture',
      brief: '',
    });
  };

  const activeData = receipt ? receipt.data : formData;
  const activeGmailLink = buildGmailComposeUrl(activeData);
  const activeMailtoLink = buildMailtoUrl(activeData);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-t border-[#1E222B]/60">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#38BDF8]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-[#38BDF8] uppercase font-semibold">
              // INITIATE ENGAGEMENT
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Have a project in mind? Let&apos;s engineer something exceptional.
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              We selectively partner with visionary technology teams, backed founders, and specialized enterprises seeking definitive technical superiority.
            </p>
          </div>

          <div className="space-y-1 pt-2">
            <h3 className="font-display font-bold text-lg text-white">
              Get in touch with us
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Fill out this form to join us
            </p>
          </div>
        </div>

        {/* Right Column: Project Specification Matrix Card */}
        <div className="lg:col-span-7 rounded-2xl bg-[#101216]/95 border border-[#1E222B] p-6 sm:p-8 lg:p-9 shadow-2xl relative">
          <div className="mb-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1.5">
              Project Specification Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Transmit your project specifications. Studio partners review submissions within 24 hours.
            </p>
          </div>

          {/* Error notification */}
          {error && (
            <div className="mb-6 p-3 rounded-lg bg-red-950/40 border border-red-500/40 text-red-300 text-xs flex items-center gap-2 font-mono">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {receipt ? (
            /* Neatly Aligned Project Specification Summary & Delivery Status */
            <div className="space-y-5 animate-fadeIn">
              {/* Status Banner */}
              {deliveryStatus === 'sent' && (
                <div className="p-3.5 rounded-lg bg-emerald-950/35 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-white text-xs sm:text-sm">
                      Message Sent Directly to {TARGET_EMAIL}
                    </p>
                    <p className="text-[#94A3B8] text-[11px] mt-0.5">
                      Your neatly aligned project specification has been delivered to our inbox.
                    </p>
                  </div>
                </div>
              )}

              {deliveryStatus === 'activation_required' && (
                <div className="p-3.5 rounded-lg bg-amber-950/35 border border-amber-500/40 text-amber-200 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-display font-bold text-white text-xs sm:text-sm">
                      One-Time Inbox Activation Sent to {TARGET_EMAIL}
                    </p>
                    <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                      Open <span className="font-mono text-[#38BDF8]">{TARGET_EMAIL}</span> (check Inbox and Spam) and click{' '}
                      <span className="font-semibold text-white">&ldquo;Activate Form&rdquo;</span> once, then click{' '}
                      <span className="font-semibold text-white">Resend Inquiry Now</span> below — or send immediately via Gmail.
                    </p>
                  </div>
                </div>
              )}

              {deliveryStatus === 'fallback' && (
                <div className="p-3.5 rounded-lg bg-[#0D1520] border border-[#38BDF8]/40 text-[#E2E8F0] text-xs flex items-start gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-[#38BDF8] mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-white text-xs sm:text-sm">
                      Specification Aligned — Complete Dispatch via Gmail
                    </p>
                    <p className="text-[#94A3B8] text-[11px] mt-0.5">
                      Click <span className="text-white font-semibold">Send via Gmail</span> below to open Gmail pre-addressed to{' '}
                      <span className="font-mono text-[#38BDF8]">{TARGET_EMAIL}</span> with all details neatly aligned.
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-[#090B0E] border border-[#38BDF8]/35 overflow-hidden">
                {/* Summary Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-[#0D1117] border-b border-[#1E222B]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                    <span className="font-display font-bold text-white text-sm">
                      Aligned Project Specification
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded border border-[#38BDF8]/25">
                    To: {TARGET_EMAIL}
                  </span>
                </div>

                {/* Neatly Aligned Key-Value Rows */}
                <div className="divide-y divide-[#1E222B]/80 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1 sm:gap-4 px-4 py-3 items-baseline">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                      Your Name
                    </span>
                    <span className="font-mono text-white font-medium break-words">
                      {receipt.data.name}
                    </span>
                  </div>

                  {receipt.data.organization && (
                    <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1 sm:gap-4 px-4 py-3 items-baseline">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                        Organization
                      </span>
                      <span className="font-mono text-white font-medium break-words">
                        {receipt.data.organization}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1 sm:gap-4 px-4 py-3 items-baseline">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                      Corporate Email
                    </span>
                    <span className="font-mono text-[#38BDF8] font-medium break-all">
                      {receipt.data.email}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1 sm:gap-4 px-4 py-3 items-baseline">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold">
                      Project Scope
                    </span>
                    <span className="font-mono text-white font-medium">
                      {receipt.data.scope}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[165px_1fr] gap-1.5 sm:gap-4 px-4 py-3.5 items-start">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#94A3B8] font-semibold pt-0.5">
                      Project Brief
                    </span>
                    <p className="text-[#E3E2E6] font-sans text-xs leading-relaxed whitespace-pre-wrap break-words bg-[#10131A] p-3 rounded border border-[#1E222B]">
                      {receipt.data.brief}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
                {deliveryStatus !== 'sent' && (
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 py-3 px-4 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#08090C] text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-[#08090C] border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Resend Inquiry Now</span>
                      </>
                    )}
                  </button>
                )}

                <a
                  href={activeGmailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full sm:flex-1 py-3 px-4 rounded text-xs font-display font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    deliveryStatus === 'sent'
                      ? 'bg-[#161922] hover:bg-[#1C222E] border border-[#1E222B] text-white'
                      : 'bg-[#141C26] hover:bg-[#1B2635] border border-[#38BDF8]/50 text-[#38BDF8]'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyReceipt}
                  className="w-full sm:w-auto py-3 px-4 rounded bg-[#161922] hover:bg-[#1C222E] border border-[#1E222B] text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedReceipt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedReceipt ? 'Copied' : 'Copy Details'}</span>
                </button>
              </div>

              {/* Edit, Mail App fallback, or Reset Inquiry */}
              <div className="flex flex-wrap items-center justify-center gap-5 pt-1">
                <a
                  href={activeMailtoLink}
                  className="text-xs font-mono text-[#94A3B8] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  <span>Open Default Mail App</span>
                </a>

                <button
                  type="button"
                  onClick={handleEdit}
                  className="text-xs font-mono text-[#94A3B8] hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <Pencil className="w-3 h-3" />
                  <span>Edit Details</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] inline-flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Transmit Another Inquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Matrix Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: YOUR NAME & ORGANIZATION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5 font-semibold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER NAME"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#090B0E] border border-[#1E222B] rounded text-white placeholder:text-[#475569] font-mono focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5 font-semibold">
                    ORGANIZATION <span className="text-[#64748B] font-normal">(OPTIONAL)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="ENTER ORGANISATION (OPTIONAL)"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#090B0E] border border-[#1E222B] rounded text-white placeholder:text-[#475569] font-mono focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: CORPORATE EMAIL */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5 font-semibold">
                  CORPORATE EMAIL
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ENTER MAIL ID"
                  className="w-full px-3.5 py-2.5 text-xs bg-[#090B0E] border border-[#1E222B] rounded text-white placeholder:text-[#475569] font-mono focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300"
                />
              </div>

              {/* Row 3: PROJECT SCOPE Pills with Animated Toggle States */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-2 font-semibold">
                  PROJECT SCOPE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['Web Architecture', 'Mobile App', 'UI/UX & System'] as const).map((sc) => {
                    const isSelected = formData.scope === sc;
                    return (
                      <button
                        key={sc}
                        type="button"
                        onClick={() => setFormData({ ...formData, scope: sc })}
                        className={`px-3 py-2.5 rounded text-xs text-left flex items-center gap-2 border transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#141C26] border-[#38BDF8] text-[#F8FAFC] shadow-[0_0_16px_rgba(56,189,248,0.25)] scale-[1.02]'
                            : 'bg-[#090B0E] border-[#1E222B] text-[#94A3B8] hover:border-[#38BDF8]/40 hover:scale-[1.01]'
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                            isSelected ? 'border-[#38BDF8] bg-[#38BDF8] scale-110' : 'border-[#475569]'
                          }`}
                        >
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#08090C] animate-scaleIn" />}
                        </span>
                        <span className="font-mono text-[11px] transition-colors">{sc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: PROJECT BRIEF & TECHNICAL OBJECTIVES */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5 font-semibold">
                  PROJECT BRIEF & TECHNICAL OBJECTIVES
                </label>
                <textarea
                  rows={4}
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="Describe technical scope, desired timeline, target scale, and existing infrastructure..."
                  className="w-full px-3.5 py-2.5 text-xs bg-[#090B0E] border border-[#1E222B] rounded text-white placeholder:text-[#475569] font-sans focus:outline-none focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/25 focus:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button: Transmit Inquiry ↗ */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn w-full py-3.5 px-4 rounded bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#08090C] font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.55)] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-[#08090C] border-t-transparent rounded-full animate-spin" />
                      <span>Sending to {TARGET_EMAIL}...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </div>

              {/* Micro text */}
              <div className="pt-2 text-center">
                <p className="text-[10px] text-[#94A3B8] font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-[#10B981]" />
                  <span>All communications are protected under mutual cryptographic standard non-disclosure.</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
