import {
  Profile,
  SkillCategory,
  Project,
  ExperienceItem,
  Certification,
  ContactItem,
  OjtData,
  NavItem
} from '../types';

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", pageHref: "/" },
  { label: "Projects", href: "#projects", pageHref: "/projects" },
  { label: "About", href: "#about", pageHref: "/about" },
  { label: "Skills", href: "#skills", pageHref: "/skills" },
  { label: "Experience", href: "#experience", pageHref: "/experience" },
  { label: "Certifications", href: "#certifications", pageHref: "/certifications" },
  { label: "OJT", href: "#ojt", pageHref: "/ojt" },
  { label: "Contact", href: "#contact", pageHref: "/contact" }
];

export const profile: Profile = {
  name: "Sophia Nicole Grefaldo",
  image: "src/images/Profile/sng.jpg",
  headline:
    "Computer Science Graduate with a passion for software development, machine learning, and multimedia design",
  about:
    "I am a Computer Science graduate with hands-on experience in full-stack development, machine learning, and database-driven applications. During my OJT internship, I developed AI-powered systems such as MKIP and ATLAS, implementing Retrieval-Augmented Generation (RAG), vector embeddings, and vector databases like pgvector and ChromaDB. Alongside academic web and mobile projects like DIANA, Palayon, and PitakApp, I combine predictive modeling, semantic search, and full-stack development to build user-centered software.",
  highlights: [
    { value: "CS", label: "Computer Science Graduate" },
    { value: "3+", label: "ML-Driven Projects" },
    { value: "Full-Stack", label: "Web & Mobile Apps" },
    { value: "Open", label: "To Opportunities" }
  ]
};

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "Kotlin", "C++", "C#", "PHP"]
  },
  {
    title: "Web Technologies & Frameworks",
    items: ["React", "FastAPI", "ASP.NET", "Streamlit", "HTML", "CSS"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MS Access"]
  },
  {
    title: "Developer Tools & Platforms",
    items: ["GitHub", "Visual Studio", "Android Studio", "Power Automate", "Microsoft Office", "Vercel"]
  },
  {
    title: "Multimedia & UI/UX Design",
    items: ["Figma", "Adobe Photoshop", "Adobe Lightroom", "Canva", "Premiere Pro", "Filmora"]
  },
  {
    title: "AI Developer & Productivity Tools",
    items: ["Cursor", "Claude Code", "Codex", "Google AI Studio", "GitHub Copilot", "ChatGPT", "Gemini", "Perplexity"]
  },
  {
    title: "AI Concepts & Architecture",
    items: ["RAG Workflows", "Embeddings", "Vector Databases", "Document Search"]
  },
  {
    title: "AI Platforms & Productivity Tools",
    items: ["Roboflow", "Google Teachable Machine", "Cursor", "Claude Code", "Codex", "Google AI Studio", "GitHub Copilot", "ChatGPT"]
  }
];


export const projects: Project[] = [
  {
    title: "AI - Powered Manufacturing Knowledge & Intelligence Platform (MKIP)",
    slug: "mkip",
    short: "WEB",
    type: "OJT Project",
    image: "src/images/Profile/MKIP.png",
    images: [
      "src/images/Profile/MKIP.png",
    ],
    description:
      "A manufacturing knowledge platform with role-based user and admin interfaces for document management, extended into Phase 2 with AI-powered search and chatbot integration using Ollama and pgvector.",
    contribution:
      "Full-stack development of the frontend and backend through Phase 2, including the AI chatbot integration.",
    stack: [
      "React",
      "TypeScript",
      "Material UI",
      "FastAPI",
      "PostgreSQL",
      "Ollama",
      "pgvector",
      "Figma"
    ],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Assisted Training, Learning and System (ATLAS)",
    slug: "atlas",
    short: "WEB",
    type: "OJT Project",
    image: "src/images/Projects/ATLAS/1.png",
    imageGroups: [
      {
        label: "Login Screen",
        images: [
          "src/images/Projects/ATLAS/1.png",
          "src/images/Projects/ATLAS/0.png",
        ]
      },
      {
        label: "User Side",
        images: [
          "src/images/Projects/ATLAS/2.png",
          "src/images/Projects/ATLAS/3.png",
          "src/images/Projects/ATLAS/4.png",
          "src/images/Projects/ATLAS/5.png",
          "src/images/Projects/ATLAS/6.png",
        ]
      },
      {
        label: "Admin Side",
        images: [
          "src/images/Projects/ATLAS/7.png",
          "src/images/Projects/ATLAS/8.png",
          "src/images/Projects/ATLAS/9.png",
          "src/images/Projects/ATLAS/10.png",
        ]
      },
      {
        label: "Power Automate Workflow",
        images: [
          "src/images/Projects/ATLAS/11.png",
          "src/images/Projects/ATLAS/12.png",

        ]
      }
    ],
    description:
      "An AI-powered chatbot with document summarization, template management, an admin dashboard, and Power Automate integration for workflow automation.",
    contribution:
      "Full-stack development of the entire system, from the RAG chatbot pipeline to Power Automate and Teams notifications.",
    stack: ["Streamlit", "Python", "Chroma DB", "Groq API", "Microsoft Copilot", "Power Automate"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "DIANA: Cluster-Based Predictive Modeling of Type 2 Diabetes Risk Using Blood Biomarkers",
    slug: "diana",
    short: "WEB",
    image: "src/images/Profile/DIANA.png",
    type: "Thesis",
    description:
      "A machine learning system that applies clustering models to classify Type 2 diabetes risk from blood biomarker data.",
    contribution:
      "Contributed to the dashboard module, research documentation, and system testing.",
    stack: ["Go", "React", "Flask", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://diana-v2.vercel.app/"
  },
  {
    title: "Personal Portfolio Website",
    slug: "personal-portfolio",
    short: "WEB",
    type: "Personal Project",
    image: "src/images/Profile/webp.png",
    description:
      "A professional web portfolio built with AI-assisted development to showcase academic and personal projects, technical skills, and career achievements, with a fully responsive layout across devices.",
    contribution:
      "Full-stack development of the entire site solo, from UI/UX to deployment.",
    stack: ["Next.js", "React", "Javascript", "CSS", "Node.js", "Codex"],
    demoUrl: "#",
    repoUrl: "https://sophiagrefaldo.vercel.app"
  },
  {
    title: "Web-Based Payroll Management System",
    slug: "payroll-management-system",
    short: "WEB",
    type: "Payroll System",
    image: "src/images/Profile/webpayroll.png",
    description:
      "A payroll management web app built with AI-assisted development, featuring automated payroll calculations, employee record management, and secure local data handling.",
    contribution:
      "Full-stack development of the payroll computation logic and employee records interface.",
    stack: ["Vite", "React", "Javascript", "CSS3", "Codex"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Palayon: Machine Learning Mobile App for Rice Disease Detection",
    slug: "palayon",
    short: "MOBILE APP",
    image: "src/images/Profile/Palayon.png",
    type: "Software Engineering Project",
    description:
      "An offline Android app that uses image-based machine learning to detect rice diseases, built with full documentation support.",
    contribution:
      "Full-stack development of the TensorFlow Lite model and the offline-first Android app.",
    stack: ["Kotlin", "TensorFlow Lite", "Android Studio", "Json"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "PitakApp – Expense Prediction Application",
    slug: "pitakapp",
    short: "MOBILE APP",
    image: "src/images/Profile/pitakapp.png",
    type: "Academic Project",
    description:
      "An Android budgeting app with machine learning-based expense forecasting, powered by a predictive model trained on business expense data, with full documentation support.",
    contribution:
      "Built the Android app UI and expense-tracking logic, and integrated a predictive model developed by a teammate.",
    stack: ["Android Studio", "Kotlin", "Json"],
    demoUrl: "https://youtu.be/nBsEBStLWOE",
    repoUrl: "#"
  },
  {
    title: "Bus Ticket Reservation System",
    slug: "bus-ticket-reservation-system",
    short: "WEB",
    image: "src/images/Profile/buslink.png",
    type: "Academic Project",
    description:
      "A web-based bus reservation system with seat booking and reservation management, built using ASP.NET.",
    contribution:
      "Helped develop the frontend and the ASP.NET backend with MS Access.",
    stack: ["ASP.NET", "C#", "MS Access"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Modified Connect4 Game",
    slug: "modified-connect4",
    short: "GAME",
    image: "src/images/Profile/connect4.png",
    type: "Academic Project",
    description:
      "An interactive Connect Four game with multiplayer and AI modes, featuring game-state tracking, winner detection, and responsive gameplay.",
    contribution:
      "Helped develop the frontend and backend, including state tracking, winner detection, and both game modes.",
    stack: ["C# Windows Form", "C#", "Txt File"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Unity Game – Dino-Inspired Runner",
    slug: "unity-dino-runner",
    short: "GAME",
    image: "src/images/Profile/dino.png",
    type: "Game Development Project",
    description:
      "A 2D endless runner featuring a Luffy-inspired character, with obstacle avoidance, score tracking, and progressively increasing difficulty.",
    contribution:
      "Full-stack development of the obstacle mechanics and the progressive difficulty curve.",
    stack: ["Unity", "C#", "MySql"],
    demoUrl: "https://youtu.be/edVKuFPb1rI",
    repoUrl: "#"
  },
  {
    title: "Unity Game – Flappy Bird Clone",
    slug: "unity-flappy-bird-clone",
    short: "GAME",
    image: "src/images/Profile/flappybird.png",
    type: "Game Development Project",
    description:
      "A 2D arcade-style Unity game with a start menu, leaderboard, physics-based controls, obstacle generation, and collision detection for an engaging, challenging experience.",
    contribution:
      "Built the leaderboard module and connected it to the database.",
    stack: ["Unity", "C#", "MySql"],
    demoUrl: "#",
    repoUrl: "#"
  }
];

export const experience: ExperienceItem[] = [
  {
    date: "2026",
    title: "Internship",
    description:
      "Developed an AI-powered chatbot with file upload and document summarization features, an admin management panel, and template upload functionality for administrators."
  },
  {
    date: "2022",
    title: "Freelance Developer",
    description:
      "Organized company records, reports, and spreadsheets to improve operational efficiency and developed an Excel-based payroll system that reduced manual computation and improved accuracy."
  },
  {
    date: "2019",
    title: "Work Immersion Trainee",
    description:
      "Participated in company workshops and technical training sessions, and assisted with basic programming tasks while learning production workflows and gaining a foundational understanding of C++."
  }
];

export const certifications: Certification[] = [
  {
    date: "2026",
    title: "IBM AI Developer Professional Certificate",
    issuer: "Coursera/IBM",
    credentialUrl: "https://www.coursera.org",
    image: `data:image/svg+xml;utf8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <rect width="1200" height="800" fill="#0f0f0f"/>
        <rect x="120" y="120" width="960" height="560" rx="32" fill="#0f0f0f"/>
        <text x="600" y="456" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="180" font-weight="700" fill="#ffffff" letter-spacing="10"></text>
      </svg>
    `)}`,
    description:
      "Completed the IBM AI Developer Professional Certificate, gaining hands-on experience in artificial intelligence, machine learning fundamentals, Python programming, and AI application development."
  },
  {
    date: "2026",
    title: "Job Ready: Employability Skills",
    issuer: "Wadhwani Foundation",
    credentialUrl: "https://web.certificate.wfglobal.org/en/certificate?certificateId=6a54de479ca40b8cfd4b76c7",
    image: "src/images/certifications/wadhwani.png",
    description:
      "Completed training on core employability competencies including effective communication, professionalism, problem-solving, digital literacy, self-management, and interview preparation to build workplace readiness."
  },
  {
    date: "2025",
    title: "CompTIA Tech+",
    issuer: "CompTIA",
    credentialUrl: "https://www.credly.com/earner/earned/badge/5a6d0c77-815a-4b38-a099-62d1402a55b2",
    image: "src/images/certifications/comptia.png",
    description:
      "Earned foundational knowledge in core IT concepts including hardware, software, networking, cybersecurity, and troubleshooting through the CompTIA Tech+ certification program."
  },
  {
    date: "2024",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    credentialUrl: "https://www.credly.com/earner/earned/badge/8ddb9be5-56e3-44da-b3fa-2890dbc17ad9",
    image: "src/images/certifications/googlecloud.png",
    description:
      "Completed foundational training in cloud computing through Google Cloud, covering core concepts such as cloud infrastructure, virtualization, storage, networking, and basic cloud service management."
  }
];

export const contact: ContactItem[] = [
  { label: "Email", value: "grefaldo.sophianicole@gmail.com", href: "mailto:grefaldo.sophianicole@gmail.com" },
  { label: "Phone", value: "0906 398 7872", href: "tel:+639063987872" },
  { label: "Location", value: "Laguna, Philippines", href: "#" },
  { label: "GitHub", value: "github.com/grfsdtrrs", href: "https://github.com/grfsdtrrs" },
  { label: "LinkedIn", value: "linkedin.com/in/grefaldosophianicole", href: "https://www.linkedin.com/in/grefaldosophianicole/" }
];

export const ojt: OjtData = {
  title: "On-the-Job Training",
  company: "Denso Ten Solutions Philippines Corporation",
  department: "Information System Department – Onsite Services Section",
  role: "OJT Intern",
  period: "May 11, 2026 – September 11, 2026",
  hours: "480 Hours",
  location: "Laguna Technopark, Santa Rosa, Laguna",
  companyAddress: "Ortigas Center, Pasig City",

  overview:
    "Completed a 480-hour practicum at Denso Ten Solutions Philippines Corporation under the Information System Department, Onsite Services Section, deployed at the Laguna Technopark in Santa Rosa, Laguna. The internship involved developing two major AI-powered systems: ATLAS, a training and learning assistance platform for technicians, and contributions to MKIP, a manufacturing knowledge and intelligence platform, alongside exposure to onsite technical support in the production environment.",

  companyBackground:
    "Denso Ten Solutions Philippines Corporation (TNSP), formerly known as Fujitsu TEN Solutions Philippines, Inc., is part of the DENSO TEN Group and specializes in software development and engineering solutions for the automotive industry, including embedded software, in-vehicle infotainment, navigation systems, and vehicle control technologies. TNSP operates in coordination with DENSO TEN Philippines Corporation (TNPH), which handles manufacturing and production of automotive electronic products at the Laguna Technopark, while TNSP focuses on software development and information systems.",

  responsibilities: [
    "Researched and selected suitable technologies to develop ATLAS (AI-Powered Training and Learning Assistance System), an AI-assisted platform for technicians to access and understand Work Instructions.",
    "Built an AI-powered PDF summarization feature using Python, Streamlit, and the Groq API, then expanded it into a full Retrieval-Augmented Generation (RAG) chatbot using LangChain, ChromaDB, and Hugging Face Transformers.",
    "Implemented role-based access with a Login Page, User Module, AI Chat module, Templates module, and Admin Module featuring folder management, file upload, and user management with full CRUD functionality.",
    "Integrated Microsoft Power Automate and Microsoft Teams to automatically notify users when administrators uploaded new documents.",
    "Collaborated with another intern to build an integration agent enabling communication between ATLAS and a related system.",
    "Contributed to MKIP (AI-Powered Manufacturing Knowledge and Intelligence Platform) Phase 1, developing the frontend, backend, and database for the Document Repository using React, TypeScript, Material UI, FastAPI, and PostgreSQL.",
    "Implemented document validation and hash-based duplicate-checking for the MKIP document repository to prevent redundant uploads and maintain an organized knowledge base.",
    "Contributed to MKIP Phase 2 by integrating an AI Search Chatbot, adapting RAG components from ATLAS using Groq API, LangChain, Hugging Face Transformers, and ChromaDB.",
    "Observed and assisted in onsite technical support activities in the production area, including troubleshooting a recurring NG (Not Good) status issue and learning proper handling of anti-static equipment."
  ],

  projects: [
    {
      key: "atlas",
      name: "ATLAS (AI-Powered Training and Learning Assistance System)",
      description:
        "A web-based AI platform that helps technicians access, understand, and retrieve information from lengthy Work Instructions through document summarization and Retrieval-Augmented Generation-based question answering.",
      objectives: [
        "Provide a centralized, role-based document platform for administrators and employees.",
        "Automatically summarize uploaded Work Instructions using AI.",
        "Enable question-and-answer conversations grounded on document content to reduce repetitive inquiries to IT support.",
        "Generate suggested questions (FAQs) to guide users in exploring documents.",
        "Prevent duplicate uploads and manage file revisions through SHA-256 hashing and versioning.",
        "Preserve user chat history across sessions.",
        "Provide categorized downloadable templates for employees.",
        "Automate notifications for newly uploaded documents via Power Automate and Microsoft Teams."
      ],
      modules: [
        "Login Page – authentication and registration with role-based routing.",
        "User Interface – central workspace linking to Document Library, AI Chat, Summarizer, Chat History, and Download Templates.",
        "AI Chat, Summarizer & Chat History – document-grounded RAG chatbot, AI summarization, and persistent per-user conversation history.",
        "FAQ Generator – automatically suggested questions based on the selected document.",
        "Download Templates – categorized templates (Smart, Dev, Network) for employee use.",
        "Admin Dashboard – overview of uploads, top FAQs per document, and activity logs.",
        "Admin Manage Files – search, browse, download, and delete stored documents.",
        "Admin Upload Templates – folder selection/creation and validated file uploads.",
        "Admin User Management – create, view, update, and delete user accounts.",
        "Duplicate Detection & File Versioning – SHA-256 hash comparison with overwrite-or-version handling.",
        "Power Automate Workflow – automated Microsoft Teams notifications on new uploads.",
        "Agent Integration Button – connects ATLAS with a fellow intern's system for cross-platform communication."
      ],
      techStack: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq API",
        "Gemini",
        "Hugging Face Transformers",
        "PyMuPDF",
        "EasyOCR",
        "ChromaDB",
        "JSON",
        "CSV",
        "Microsoft OneDrive",
        "SharePoint",
        "Power Automate",
        "Microsoft Teams"
      ]
    },
    {
      key: "mkip",
      name: "MKIP (AI-Powered Manufacturing Knowledge and Intelligence Platform)",
      description:
        "A centralized platform designed to consolidate manufacturing knowledge, including Work Instructions, SOPs, manuals, troubleshooting guides, engineering standards, lessons learned, and quality reports, addressing scattered knowledge and slow information retrieval. Development follows a phased roadmap starting with a Document Repository (Phase 1) and an AI Search Chatbot (Phase 2), with future phases planned for Knowledge Intelligence, Manufacturing Intelligence, and a Smart Factory Assistant.",
      objectives: [
        "Centralize manufacturing knowledge into a single searchable repository.",
        "Reduce dependence on experienced personnel for tribal knowledge.",
        "Speed up information retrieval across WI, SOPs, manuals, and quality reports.",
        "Provide traceable, source-referenced AI-generated answers.",
        "Validate and de-duplicate uploaded documents through content hashing and metadata checks.",
        "Support role-based access for administrators and general users."
      ],
      contributions: [
        "Developed the Login Page and User Module (Home/Dashboard, ChatNow, Documents) for Phase 1.",
        "Developed the Admin Module, including Dashboard, Documents, Users, Activity Logs, and Settings.",
        "Implemented document upload validation and duplicate/version checking using content hashing across eight distinct comparison cases.",
        "Integrated the AI Search Chatbot for Phase 2 by adapting RAG components built for ATLAS."
      ],
      modules: [
        "Login Page – authentication with role-based redirection.",
        "Home Dashboard – overview and quick access to knowledge resources after login.",
        "ChatNow – AI chatbot answering questions from the manufacturing knowledge repository with source references.",
        "Document Viewer – displays the referenced source document for verifying AI-generated answers.",
        "Documents – search, filter, view, and download centralized manufacturing documents.",
        "Admin Dashboard – overview of total documents, users, recent uploads, top FAQs, and activity logs.",
        "Admin Documents – upload, versioning, metadata management, and organization of repository files.",
        "Admin User Management – create, view, update, and delete user accounts (mock data during internship).",
        "Admin Activity Logs – records user/system activity and displays Top FAQs.",
        "Admin Settings – account email/password management (mock data during internship).",
        "Duplicate Checking & File Versioning – compares document number, title, and content hash across 8 cases to block, version, or accept uploads."
      ],
      techStack: [
        "React",
        "TypeScript",
        "Material UI (MUI)",
        "FastAPI",
        "PostgreSQL",
        "Local Storage",
        "LangChain",
        "LangGraph",
        "Groq API",
        "Hugging Face Transformers",
        "ChromaDB",
        "PyMuPDF"
      ]
    }
  ],

  challenges: [
    {
      title: "Gemini API token limits (ATLAS)",
      solution:
        "Transitioned from the Gemini API to the Groq API for the language model and Hugging Face Transformers for embeddings to reduce dependency on a single rate-limited provider."
    },
    {
      title: "Duplicate uploads and file versioning",
      solution:
        "Implemented SHA-256 hash-based validation in ATLAS, and a more granular check in MKIP comparing document number, title, and content hash across eight cases to decide whether to block, version, or accept an upload."
    },
    {
      title: "Restricted access to originally planned MKIP technologies",
      solution:
        "Substituted unavailable or unapproved tools with accessible alternatives (Groq API, LangChain, Hugging Face Transformers, ChromaDB) while keeping PostgreSQL as the primary database."
    },
    {
      title: "Chat history persistence (ATLAS)",
      solution:
        "Added per-user conversation storage and unique conversation handling so sessions remained private and persistent across logins."
    },
    {
      title: "Cross-system interoperability",
      solution:
        "Built an integration agent with another intern to enable communication and data transfer between ATLAS and the succeeding intern's system."
    }
  ],

  accomplishments: [
    "Delivered a complete ATLAS system covering authentication, AI summarization, RAG-based Q&A, FAQ generation, duplicate detection, file versioning, persistent chat history, template downloads, and admin tools across five integrated modules in a single multipage Streamlit application.",
    "Automated document-upload notifications end-to-end using Power Automate and Microsoft Teams.",
    "Contributed the Document Repository frontend, backend, and database layers for MKIP Phase 1, including admin document management and an eight-case duplicate/version-checking system.",
    "Integrated an AI Search Chatbot into MKIP Phase 2 by adapting RAG logic originally built for ATLAS.",
    "Tested authentication, uploads, summarization, Q&A accuracy, history persistence, and UI behavior across both systems, refining features continuously based on mentor feedback."
  ],

  learnings:
    "The practicum strengthened technical skills in full-stack development, AI integration (RAG, embeddings, vector databases), database management with PostgreSQL, workflow automation, troubleshooting, and adapting to unfamiliar technologies under changing requirements. It also built professional skills in collaboration, communication, and time management through coordination with mentors, a supervisor, and fellow interns.",

  realization:
    "The internship showed that software development requires more than technical implementation — systems must be built around real user problems and operational contexts, as seen when observing a production issue where a repaired product still showed an NG status. It also underscored the importance of time management, continuous learning, adaptability when resources or technologies are limited, and balancing professional responsibility with personal well-being.",

  conclusion:
    "The practicum served as a valuable bridge between academic preparation and industry practice, providing hands-on experience across two AI-powered systems (ATLAS and MKIP), exposure to real manufacturing operations at the Laguna Technopark, and growth in technical competence, adaptability, discipline, and professional collaboration."
};
