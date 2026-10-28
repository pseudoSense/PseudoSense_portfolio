export interface Project {
  id: string;
  category: string; // e.g. "WEBSITE", "ANDROID APP"
  title: string;
  logoUrl?: string;
  screenshotUrl?: string;
  logoText?: string;
  iconType: 'workout' | 'finance';
  summary: string;
  description: string;
  techStack: string[];
  capabilities: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  projectUrl?: string;
  previewType: 'desktop' | 'mobile';
  mockupDetails: {
    title: string;
    tagline?: string;
    subtext?: string;
  };
}

export interface ServiceItem {
  id: string;
  iconName: 'web' | 'mobile' | 'design';
  title: string;
  description: string;
  capabilities: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  avatarBg: string;
  avatarUrl?: string;
  status: string;
  skills: string[];
  githubUrl: string;
  linkedinUrl: string;
  email?: string;
}

export interface ProjectInquiry {
  name: string;
  organization: string;
  email: string;
  scope: 'Web Architecture' | 'Mobile App' | 'UI/UX & System';
  brief: string;
}

export interface SubmittedInquiryReceipt {
  referenceId: string;
  timestamp: string;
  data: ProjectInquiry;
  hash: string;
}
