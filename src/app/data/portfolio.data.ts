// ============================================================
// portfolio.data.ts
// Atharv Warkari — Portfolio Content Data
// Place in: src/app/data/portfolio.data.ts
// ============================================================

export const HERO = {
  name: 'Atharv Warkari',
  title: 'Software Developer',
  subtitle: 'Angular · Flask · ASP.NET Core',
  tagline:
    'Building structured web applications — from research-grade ML systems to full-stack enterprise tools.',
  cvPath: 'assets/cv/Atharv_CV.pdf',
  email: 'atharv.warkari7@gmail.com',
  phone: '+91 9764926737',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/warkariii28',
  linkedin: 'https://linkedin.com/in/atharv-warkari-a489171a5',
};

// ============================================================

export const ABOUT = {
  bio: `Computer Engineering graduate with hands-on experience in Angular frontend development, 
Flask/Python backends, and SQL databases. Published a research paper on a Deepfake Detection 
System using CNN + Vision Transformer (ViT) at ICLI 2025 (Atlantis Press, Springer Nature). 
Currently working as a Software Development Intern, building production-grade Angular components 
and REST API integrations. Expanding into C# and ASP.NET Core backend development.`,
  highlights: [
    'Published researcher — ICLI 2025 (Springer Nature)',
    'Software Dev Intern — Cyberscript IT Solutions',
    'BE Computer Engineering — First Class with Distinction (CGPA 8.04)',
    'SSB Conference Round qualifier × 3 (2024–2026)',
    'NCC B & C Certificate | A Grade',
  ],
};

// ============================================================

export interface Skill {
  category: string;
  icon: string; // Font Awesome class or Devicon class
  items: string[];
}

export const SKILLS: Skill[] = [
  {
    category: 'Frontend',
    icon: 'fa-solid fa-layer-group',
    items: ['Angular', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    category: 'Backend',
    icon: 'fa-solid fa-server',
    items: ['Python', 'Flask', 'C#', 'ASP.NET Core Web API'],
  },
  {
    category: 'Databases',
    icon: 'fa-solid fa-database',
    items: ['PostgreSQL', 'MS SQL Server', 'SQLite', 'Firebase Firestore'],
  },
  {
    category: 'Languages',
    icon: 'fa-solid fa-code',
    items: ['Python', 'C#', 'C++', 'TypeScript'],
  },
  {
    category: 'Concepts',
    icon: 'fa-solid fa-brain',
    items: [
      'REST APIs',
      'JWT Auth',
      'Session Auth',
      'bcrypt Hashing',
      'ORM',
      'CRUD',
      'Grad-CAM',
      'MediaPipe',
    ],
  },
  {
    category: 'Tools',
    icon: 'fa-solid fa-wrench',
    items: ['Git', 'GitHub', 'Power BI', 'SQLAlchemy', 'Entity Framework Core'],
  },
];

// ============================================================

export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  badge?: string; // e.g. 'Published', 'Full-Stack', 'Research'
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'BrightPath — Learning Management System',
    year: '2026',
    description:
      'Full-stack LMS built with ASP.NET Core Web API and Angular. Supports role-based access for students and admins, course management, enrollment, and secure authentication.',
    techStack: ['Angular', 'ASP.NET Core', 'MS SQL Server', 'JWT', 'Bootstrap 5'],
    githubUrl: 'https://github.com/warkariii28/BrightPath',
    highlights: [
      'JWT authentication with role-protected routes and Angular auth guards',
      'CRUD modules for students, courses, and enrollments',
      'SQL Server integration with Stored Procedures',
      'Layered backend: controllers → services → repositories',
    ],
    badge: 'Full-Stack',
  },
  {
    id: 2,
    title: 'TrueVision — Deepfake Detection System',
    year: '2024–2025',
    description:
      'Web-based manipulated facial image detection system combining CNN + Vision Transformer with Grad-CAM explainability. Published at ICLI 2025 (Springer Nature).',
    techStack: [
      'Flask',
      'Python',
      'PyTorch',
      'CNN',
      'ViT',
      'Grad-CAM',
      'MediaPipe',
      'PostgreSQL',
      'Bootstrap',
    ],
    githubUrl: 'https://github.com/warkariii28/TrueVision--Deepfake-Detection-System',
    highlights: [
      'CNN + ViT hybrid model for deepfake classification',
      'Grad-CAM heatmap overlays for prediction interpretability',
      'MediaPipe-based face detection and image preprocessing',
      'PostgreSQL-backed result logging with feedback system',
    ],
    badge: 'Published Research',
  },
  {
    id: 3,
    title: 'Sanatana Yoga — Informational Website',
    year: '2026',
    description:
      'Responsive Angular website for a yoga practice — structured navigation, reusable components, FAQ/testimonial sections, and Firebase newsletter integration.',
    techStack: ['Angular', 'Bootstrap 5', 'CSS3', 'Firebase Firestore'],
    githubUrl: 'https://github.com/warkariii28/sanatana-yoga',
    highlights: [
      'Component-based architecture with clean routing',
      'FAQ and testimonial sections',
      'Newsletter form connected to Firebase Firestore with validation',
      'Fully responsive across devices',
    ],
    badge: 'Frontend',
  },
  {
    id: 4,
    title: 'Northstar-ID — Authentication System',
    year: '2025',
    description:
      'Flask-based backend authentication system focused on security fundamentals — password hashing, session management, and ORM-backed user storage.',
    techStack: ['Flask', 'Python', 'bcrypt', 'SQLAlchemy', 'SQLite'],
    githubUrl: 'https://github.com/warkariii28/Northstar-ID',
    highlights: [
      'bcrypt password hashing for secure credential storage',
      'Session-based authentication and route protection',
      'SQLAlchemy ORM with SQLite',
      'Server-side validation and input sanitisation',
    ],
    badge: 'Backend',
  }
];

// ============================================================

export interface Experience {
  role: string;
  company: string;
  duration: string;
  type: string;
  points: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: 'Software Developer Intern (.NET)',
    company: 'Aryaman Technologies Pvt. Ltd.',
    duration: 'May 2026 – Present',
    type: 'Internship',
    points: [
      'Working on ASP.NET Core Web API development and enterprise application workflows.',
      'Building and consuming REST APIs using C# and .NET technologies.',
      'Working with SQL Server databases and backend integration.',
      'Contributing to production-oriented software development practices and code reviews.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Cyberscript IT Solutions Pvt. Ltd.',
    duration: 'Sept 2025 – May 2026',
    type: 'Internship',
    points: [
      'Built reusable Angular components using service injection and component-based architecture.',
      'Implemented responsive layouts with Bootstrap 5 grid; resolved cross-browser rendering issues.',
      'Consumed REST APIs via Angular services to drive dynamic UI updates.',
      'Debugged component lifecycle and data-binding errors across feature modules.',
    ],
  },
  {
    role: 'Cybersecurity & Digital Forensics Intern',
    company: 'Cyber Secured India',
    duration: 'Dec 2023 – Feb 2024',
    type: 'Internship',
    points: [
      'Gained exposure to cybersecurity fundamentals and digital forensics investigation workflows.',
    ],
  },
];

// ============================================================

export interface Publication {
  title: string;
  conference: string;
  publisher: string;
  year: string;
  description: string;
  url?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'TrueVision: A Vision-based Deepfake Detection System',
    conference: 'ICLI 2025 International Conference',
    publisher: 'Atlantis Press (Springer Nature)',
    year: '2025',
    description:
      'Research paper presenting a web-based deepfake detection system integrating CNN and Vision Transformer (ViT) models with Grad-CAM explainability for interpretable predictions.',
  },
];

// ============================================================

export interface Education {
  degree: string;
  institution: string;
  board: string;
  year: string;
  score: string;
  distinction?: string;
}

export const EDUCATION: Education[] = [
  {
    degree: 'BE Computer Engineering',
    institution: 'MMCOE — Savitribai Phule Pune University',
    board: 'SPPU',
    year: '2025',
    score: 'CGPA: 8.04',
    distinction: 'First Class with Distinction',
  },
  {
    degree: 'HSC (Class XII)',
    institution: 'Abasaheb Garware College',
    board: 'Maharashtra Education Society',
    year: '2021',
    score: '88.67%',
  },
  {
    degree: 'SSC (Class X)',
    institution: 'Bal Shikshan Mandir EMS',
    board: 'Maharashtra Education Society',
    year: '2019',
    score: '92.6%',
  },
];

// ============================================================

export const ACHIEVEMENTS: string[] = [
  'Runner-Up — BE Project IdeaQuest 2024 (TrueVision Deepfake Detection System)',
  'Reached Services Selection Board (SSB) Conference Round × 3 (2024–2026)',
  'NCC B & C Certificate holder with A Grade',
  'Selected for Indian Naval Academy Attachment Camp, Ezhimala, Kerala',
  'District-level Elocution Competition Finalist — Speak for India',
  'State Topper in Sanskrit — Maharashtra State Board (MSBSHSE)',
  'Certified in Elementary and Intermediate Drawing Examinations',
];

// ============================================================

export interface Certification {
  name: string;
  issuer: string;
  status: 'Completed' | 'In Progress';
  url?: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'CS50 (Python)',
    issuer: 'Harvard University (edX)',
    status: 'Completed',
  },
  {
    name: 'TryHackMe Pre-Security Learning Path',
    issuer: 'TryHackMe',
    status: 'Completed',
  },
  {
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google (Coursera)',
    status: 'In Progress',
  },
];

// ============================================================

export const INTERESTS: string[] = ['Geopolitics', 'Reading', 'Yoga', 'Calisthenics', 'Drawing'];

// ============================================================
// NAV LINKS — used in navbar component
// ============================================================

export const NAV_LINKS = [
  { label: 'About', anchor: '#about' },
  { label: 'Skills', anchor: '#skills' },
  { label: 'Projects', anchor: '#projects' },
  { label: 'Experience', anchor: '#experience' },
  { label: 'Publications', anchor: '#publications' },
  { label: 'Education', anchor: '#education' },
  { label: 'Achievements', anchor: '#achievements' },
  { label: 'Contact', anchor: '#contact' },
];
