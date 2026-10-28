import { Project, ServiceItem, TeamMember } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'workout-vault',
    category: 'WEBSITE',
    title: 'Workout 💪 Vault',
    logoUrl: '/assets/aistudio/image_8125430b.png',
    screenshotUrl: '/assets/aistudio/image_bd3f8f6c.png',
    logoText: 'WV',
    iconType: 'workout',
    summary: 'A desktop-focused fitness website that helps users find and follow workouts without needing an internet connection.',
    description:
      'Workout Vault is a desktop-focused fitness website that helps users find and follow workouts without needing an internet connection. Users can enter a name and experience level, choose a training goal, and browse exercise guides for muscle building, fat burning, cardio, metabolic conditioning, abs, and calisthenics.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'IndexedDB Storage', 'Web Audio Metronome', 'Service Workers'],
    capabilities: [
      'Offline-First Exercise Knowledge Base',
      'High-Precision Rep & Rest Interval Timer',
      'Targeted Muscle Group & Calisthenics Engine',
      'Zero Cloud Dependency & Local Vault Storage'
    ],
    metrics: [
      { label: 'Network Dependency', value: '0% (Offline)' },
      { label: 'Query Latency', value: '< 12ms' },
      { label: 'Exercise Guides', value: '180+ Curated' },
      { label: 'Bundle Footprint', value: '98 KB Gzip' }
    ],
    githubUrl: 'https://github.com/ashokrajapn/workout-vault',
    projectUrl: 'https://blackton-618.github.io/workout_library/',
    previewType: 'desktop',
    mockupDetails: {
      title: 'MASTER YOUR CRAFT. ANYWHERE. NO SIGNAL NEEDED.',
      tagline: 'STRONG BODY, STRONG MIND.',
      subtext: 'Your ultimate offline workout library, high-precision training timer, and rep companion.'
    }
  },
  {
    id: 'vitta-matric',
    category: 'ANDROID APP',
    title: 'vittaMatric',
    logoUrl: '/assets/aistudio/image_1d353d97.png',
    screenshotUrl: '/assets/aistudio/image_c97f4c2f.png',
    logoText: 'VM',
    iconType: 'finance',
    summary: 'A modern financial calculator application featuring currency conversion, loan and EMI planning, investment calculations, and interactive financial dashboards.',
    description:
      'A modern financial calculator application featuring currency conversion, loan and EMI planning, investment calculations, and interactive financial dashboards. Designed with a clean, responsive interface and real-time financial insights to simplify financial planning and improve the overall user experience.',
    techStack: ['Kotlin', 'Android Jetpack', 'Jetpack Compose', 'Room DB', 'Coroutines', 'Material 3 Dark'],
    capabilities: [
      'Live & Cached Multicurrency Exchange Matrix',
      'Amortization Schedules & Prepayment Simulator',
      'Compound Interest & SIP Projection Engine',
      'Biometric Protection & Offline Vault Encrypted'
    ],
    metrics: [
      { label: 'Animation Frame Rate', value: '120 FPS' },
      { label: 'Supported Currencies', value: '42 Global' },
      { label: 'Calculation Latency', value: '< 2ms' },
      { label: 'Android Target', value: 'API 26+' }
    ],
    githubUrl: 'https://github.com/ashokrajapn/vittaMatric',
    previewType: 'mobile',
    mockupDetails: {
      title: 'Currency exchange',
      tagline: 'Real-time financial clarity at your fingertips.',
      subtext: 'Instant conversion rates, loan planning, and investment charts.'
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    iconName: 'web',
    title: 'Web Development',
    description:
      'Full-stack architectures, high-load web applications, SSR/Jamstack ecosystems, interactive WebGL experiences, and ultra-secure API backends.',
    capabilities: [
      'Enterprise Web Apps',
      'Custom Headless CMS Architecture',
      'Performance & WebGL Optimization',
      'Edge & Cloud Infrastructure'
    ]
  },
  {
    id: 'mobile-development',
    iconName: 'mobile',
    title: 'Mobile App Development',
    description:
      'Native iOS/Android and cross-platform mobile products built with fluid 120Hz gesture physics, offline-first syncing, and biometric hardware integration.',
    capabilities: [
      'iOS (Swift & SwiftUI)',
      'Android (Kotlin & Jetpack)',
      'React Native High-Performance',
      'BLE & IoT Hardware Connectivity'
    ]
  },
  {
    id: 'ui-ux-design',
    iconName: 'design',
    title: 'UI/UX Design',
    description:
      'Systematic design languages, human-centered ergonomics, high-fidelity micro-interactions, dark-mode design systems, and rapid interactive prototyping.',
    capabilities: [
      'Systematic Design Systems',
      'High-Fidelity Rapid Prototyping',
      'Usability & Latency Auditing',
      'Spatial Motion Choreography'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'hemanth-k',
    name: 'Hemanth K',
    role: 'Information Technology',
    focus: '',
    bio: 'Information Technology student passionate about web development, software engineering, and emerging technologies. Skilled in learning C, Python, HTML, CSS, and JavaScript through hands-on projects. Focused on problem-solving, building user-friendly applications, and continuous learning. Currently exploring Japanese language and culture while growing as a developer.',
    avatarBg: 'from-blue-600/30 to-indigo-900/50',
    avatarUrl: '/assets/aistudio/image_996239eb.png',
    status: 'Operational • Mobile Sprint',
    skills: [],
    githubUrl: 'https://github.com/Hemanth-coding',
    linkedinUrl: 'https://www.linkedin.com/in/hemanth-k-266490425',
    email: 'hemanthind.11@gmail.com'
  },
  {
    id: 'santhosh-shankar',
    name: 'Santhosh Shankar',
    role: 'AI & ML',
    focus: '',
    bio: 'Aspiring full‑stack developer with hands‑on experience, AI and Machine Learning student passionate about building intuitive web and Android applications. Exploring full‑stack application development, database integration, and UI design to craft seamless digital solutions. Driven by curiosity, collaboration, and a vision to turn ideas into impactful code.',
    avatarBg: 'from-cyan-500/30 to-teal-900/50',
    avatarUrl: '/assets/aistudio/image_00b5a709.png',
    status: 'Operational • Core Services',
    skills: [],
    githubUrl: 'https://github.com/blackton-618',
    linkedinUrl: 'https://www.linkedin.com/in/santhosh-shankar-743636389',
    email: 'santhosh12shankar@gmail.com'
  }
];

export const COMPANY_INFO = {
  brand: 'pseudoSense',
  logoUrl: '/assets/aistudio/image_a9f00c1b.png',
  tagline: 'Sovereign Intelligence & Precision Engineering',
  established: '2024',
  description:
    'pseudoSense is a dedicated software engineering and design collective building resilient web applications, native mobile systems, and uncompromising user interfaces for high-stakes technology environments.',
  email: 'pseudosense.team@gmail.com',
  github: 'https://github.com/pseudoSense',
  linkedin: 'https://linkedin.com/in/ashokrajapn',
  status: 'All systems operational'
};
