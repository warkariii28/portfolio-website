// ============================================================
// portfolio.data.ts
// Atharv Warkari — Portfolio Content Data
// Place in: src/app/data/portfolio.data.ts
// ============================================================

export const HERO = {
  name: 'Atharv Warkari',
  title: 'Angular/.NET Full-Stack Developer',
  subtitle: 'Angular · ASP.NET Core · Flask · AI/ML',
  tagline:
    'I build responsive web applications, secure APIs, and AI-powered systems backed by practical internship and research experience.',
  cvPath: 'cv/Atharv_CV.pdf',
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
  focusAreas: [
    { label: 'Frontend', value: 'Angular UI' },
    { label: 'Backend', value: '.NET APIs' },
    { label: 'Research', value: 'AI/ML Systems' },
  ],
  highlights: [
    'Published researcher — ICLI 2025 (Springer Nature)',
    '.NET Developer Intern — Aryaman Technologies',
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
  role?: string;
  problem?: string;
  impact?: string;
  context?: string;
  workflow?: string[];
  responsibilities?: string[];
  outcomes?: string[];
  highlights: string[];
  badge?: string; // e.g. 'Published', 'Full-Stack', 'Research';
  featured: boolean;
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
    role: 'Full-stack developer for Angular UI, API workflows, and SQL-backed modules.',
    problem: 'Create a structured LMS with role-based access, enrollment flows, and maintainable backend layers.',
    impact:
      'Demonstrates enterprise-style API design, Angular route protection, and database-driven CRUD workflows.',
    context:
      'BrightPath is positioned as an enterprise-style learning management system that connects Angular screens with secured ASP.NET Core APIs and SQL Server persistence.',
    workflow: [
      'User signs in and receives a JWT based on role.',
      'Angular guards protect student and admin workflows.',
      'Course, student, and enrollment modules call API services.',
      'Backend routes delegate work through service and repository layers.',
      'SQL Server stored procedures handle core data operations.',
    ],
    responsibilities: [
      'Structured reusable Angular views and data-driven API calls.',
      'Designed role-aware workflows for student and admin users.',
      'Mapped backend modules around controllers, services, repositories, and database procedures.',
    ],
    outcomes: [
      'Shows readiness for Angular/.NET full-stack roles.',
      'Demonstrates authentication, authorization, and CRUD implementation patterns.',
    ],
    highlights: [
      'JWT authentication with role-protected routes and Angular auth guards',
      'CRUD modules for students, courses, and enrollments',
      'SQL Server integration with Stored Procedures',
      'Layered backend: controllers → services → repositories',
    ],
    badge: 'Full-Stack',
    featured: false,
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
    role: 'ML backend and full-stack developer',
    problem: 'Detect manipulated facial images and make predictions explainable for users.',
    impact:
      'Published at ICLI 2025 and built as a web-based research prototype with explainability.',
    context:
      'TrueVision is the portfolio anchor: a research-backed AI system that detects manipulated facial images and presents explainable visual evidence.',
    workflow: [
      'User uploads a facial image through the Flask web interface.',
      'MediaPipe detects and prepares the face region for inference.',
      'CNN and Vision Transformer components analyze manipulation artifacts.',
      'Grad-CAM generates a heatmap that highlights influential image regions.',
      'Prediction metadata and feedback can be logged through PostgreSQL.',
    ],
    responsibilities: [
      'Built the Flask-backed inference flow and result presentation.',
      'Integrated image preprocessing, model prediction, and explainability output.',
      'Documented the system as part of a published research contribution.',
    ],
    outcomes: [
      'Published through Atlantis Press / Springer Nature proceedings.',
      'Combines AI/ML, backend integration, database usage, and user-facing explainability.',
    ],
    highlights: [
      'CNN + ViT hybrid model for deepfake classification',
      'Grad-CAM heatmap overlays for prediction interpretability',
      'MediaPipe-based face detection and image preprocessing',
      'PostgreSQL-backed result logging with feedback system',
    ],
    badge: 'Published Research',
    featured: true,
  },
  {
    id: 3,
    title: 'Sanatana Yoga — Informational Website',
    year: '2026',
    description:
      'Responsive Angular website for a yoga practice — structured navigation, reusable components, FAQ/testimonial sections, and Firebase newsletter integration.',
    techStack: ['Angular', 'Bootstrap 5', 'CSS3', 'Firebase Firestore'],
    githubUrl: 'https://github.com/warkariii28/sanatana-yoga',
    liveUrl: 'https://sanatana-yoga.web.app/',
    role: 'Frontend developer focused on responsive Angular sections and user-facing content flow.',
    problem: 'Present a yoga practice online with clean navigation, credibility sections, and newsletter capture.',
    impact:
      'Shows reusable component design, responsive layout discipline, and Firebase-backed form integration.',
    context:
      'Sanatana Yoga is a polished informational website focused on clear navigation, responsive content sections, and simple audience conversion.',
    workflow: [
      'Visitors browse structured sections for practice information and FAQs.',
      'Reusable Angular components keep content maintainable.',
      'Newsletter data is captured through Firebase Firestore.',
      'Responsive Bootstrap grids adapt content across desktop and mobile.',
    ],
    responsibilities: [
      'Created the Angular component structure and responsive layouts.',
      'Organized content sections for trust, clarity, and navigation.',
      'Connected newsletter capture to Firebase Firestore.',
    ],
    outcomes: [
      'Demonstrates frontend delivery for real-world informational sites.',
      'Shows clean section architecture and responsive UI fundamentals.',
    ],
    highlights: [
      'Component-based architecture with clean routing',
      'FAQ and testimonial sections',
      'Newsletter form connected to Firebase Firestore with validation',
      'Fully responsive across devices',
    ],
    badge: 'Frontend',
    featured: false,
  },
  {
    id: 4,
    title: 'Northstar-ID — Authentication System',
    year: '2025',
    description:
      'Flask-based backend authentication system focused on security fundamentals — password hashing, session management, and ORM-backed user storage.',
    techStack: ['Flask', 'Python', 'bcrypt', 'SQLAlchemy', 'SQLite'],
    githubUrl: 'https://github.com/warkariii28/Northstar-ID',
    role: 'Backend developer focused on authentication fundamentals and secure user storage.',
    problem: 'Build a focused authentication backend with hashed credentials, sessions, and protected routes.',
    impact:
      'Highlights security basics, ORM usage, validation, and practical Flask backend structure.',
    context:
      'Northstar-ID is a focused backend project for demonstrating authentication foundations without unnecessary product complexity.',
    workflow: [
      'User credentials are validated server-side.',
      'Passwords are hashed with bcrypt before storage.',
      'Session state controls protected route access.',
      'SQLAlchemy maps user records to SQLite persistence.',
    ],
    responsibilities: [
      'Implemented secure password handling and session protection.',
      'Structured user persistence through SQLAlchemy ORM.',
      'Kept validation and route protection on the server side.',
    ],
    outcomes: [
      'Shows practical backend security fundamentals.',
      'Complements the larger full-stack and AI projects with a focused auth system.',
    ],
    highlights: [
      'bcrypt password hashing for secure credential storage',
      'Session-based authentication and route protection',
      'SQLAlchemy ORM with SQLite',
      'Server-side validation and input sanitisation',
    ],
    badge: 'Backend',
    featured: false,
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
  id: string;
  title: string;
  conference: string;
  publisher: string;
  year: string;
  description: string;
  problem?: string;
  approach?: string[];
  outcome?: string;
  pdfUrl?: string;
  localPdfUrl?: string;
  articleUrl?: string;
  doi?: string;
  url?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: 'truevision',
    title: 'TrueVision: A Vision-based Deepfake Detection System',
    conference: 'ICLI 2025 International Conference',
    publisher: 'Atlantis Press (Springer Nature)',
    year: '2025',
    description:
      'Research paper presenting a web-based deepfake detection system integrating CNN and Vision Transformer (ViT) models with Grad-CAM explainability for interpretable predictions.',
    problem:
      'Deepfake image detection needs both accurate classification and interpretable evidence that helps users trust the result.',
    approach: [
      'Combined CNN and Vision Transformer concepts for visual feature learning.',
      'Used MediaPipe for face-focused preprocessing before model inference.',
      'Presented Grad-CAM heatmaps so predictions include visual explanation.',
      'Connected the research prototype to a Flask web flow with PostgreSQL-backed logging.',
    ],
    outcome:
      'Published through ICLI 2025 with Atlantis Press / Springer Nature, strengthening the portfolio with peer-reviewed applied AI work.',
    pdfUrl: 'https://www.atlantis-press.com/article/126015201.pdf',
    localPdfUrl: 'papers/truevision-paper.pdf',
    articleUrl: 'https://www.atlantis-press.com/proceedings/icli-25/126015201',
    doi: '10.2991/978-94-6463-831-8_46',
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

export interface AchievementCard {
  icon: string;
  iconType?: 'text' | 'sanskrit' | 'line';
  title: string;
  description: string;
  tag: string;
}

export const ACHIEVEMENT_CARDS: AchievementCard[] = [
  {
    icon: '◆',
    iconType: 'line',
    title: 'IdeaQuest Runner-Up',
    description: 'Recognized for TrueVision as a strong BE project concept with applied AI relevance.',
    tag: 'Research',
  },
  {
    icon: '★',
    iconType: 'line',
    title: 'SSB Conference Round x3',
    description: 'Cleared multiple assessment stages across attempts, showing consistency and composure.',
    tag: 'Leadership',
  },
  {
    icon: '⚑',
    iconType: 'line',
    title: 'NCC B & C Certificates',
    description: 'Earned A Grade certification with discipline, service orientation, and team exposure.',
    tag: 'Discipline',
  },
  {
    icon: '⌁',
    iconType: 'line',
    title: 'INA Attachment Camp',
    description: 'Selected for the Indian Naval Academy Attachment Camp at Ezhimala, Kerala.',
    tag: 'Selection',
  },
  {
    icon: '◌',
    iconType: 'line',
    title: 'Speak for India Finalist',
    description: 'Reached district-level elocution finals through structured communication and argumentation.',
    tag: 'Communication',
  },
  {
    icon: 'सं',
    iconType: 'sanskrit',
    title: 'State Topper in Sanskrit',
    description: 'Academic excellence in Sanskrit at Maharashtra State Board level.',
    tag: 'Academic',
  },
  {
    icon: '✎',
    iconType: 'line',
    title: 'Drawing Certification',
    description: 'Completed Elementary and Intermediate Drawing Examinations, strengthening visual thinking.',
    tag: 'Creative',
  },
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

export interface Interest {
  label: string;
  icon: string;
  description: string;
  url: string;
}

export const INTERESTS: Interest[] = [
  {
    label: 'Geopolitics',
    icon: '◎',
    description: 'Following global power, policy, security, and international relations.',
    url: 'https://www.google.com/search?q=geopolitics',
  },
  {
    label: 'Reading',
    icon: '▰',
    description: 'Building perspective through books, research, essays, and long-form analysis.',
    url: 'https://www.google.com/search?q=benefits+of+reading',
  },
  {
    label: 'Yoga',
    icon: '☼',
    description: 'Practicing discipline, mobility, breath control, and mental steadiness.',
    url: 'https://www.google.com/search?q=yoga+practice',
  },
  {
    label: 'Calisthenics',
    icon: '▣',
    description: 'Bodyweight strength training focused on control, consistency, and progression.',
    url: 'https://www.google.com/search?q=calisthenics',
  },
  {
    label: 'Drawing',
    icon: '✦',
    description: 'Visual thinking, observation, patience, and creative expression.',
    url: 'https://www.google.com/search?q=drawing+as+a+hobby',
  },
];

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
