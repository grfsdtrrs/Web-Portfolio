export const navItems = [
  { label: "Home", href: "/#home", pageHref: "/" },
  { label: "About", href: "/about", pageHref: "/about" },
  { label: "Skills", href: "/skills", pageHref: "/skills" },
  { label: "Projects", href: "/projects", pageHref: "/projects" },
  { label: "Experience", href: "/experience", pageHref: "/experience" },
  { label: "Certifications", href: "/certifications", pageHref: "/certifications" },
  { label: "Contact", href: "/contact", pageHref: "/contact" },
  { label: "OJT", href: "/ojt", pageHref: "/ojt" }
];

export const profile = {
  name: "Sophia Nicole Grefaldo",
  image: "/images/Profile/sng.jpg",
  headline:
    "Computer Science Graduate with a passion for software development, machine learning, and multimedia design",
  about:
    "I am a Computer Science graduate with hands-on experience in full-stack development, machine learning, and database-driven applications. I have built web and mobile projects such as DIANA, Palayon, and PitakApp, applying clustering and predictive modeling to real-world domains like healthcare, agriculture, and finance. I am excited to contribute to software engineering roles that combine data-driven problem solving, clean code, and user-centered design.",
  highlights: [
  { value: "CS", label: "Computer Science Graduate" },
  { value: "3+", label: "ML-Driven Projects" },         // DIANA, Palayon, PitakApp
  { value: "Full-Stack", label: "Web & Mobile Apps" },
  { value: "Open", label: "To Opportunities" }
]
};

export const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "C++", "C#", "PHP", "Kotlin", "TypeScript", "JavaScript"]
  },
  {
    title: "Web Development",
    items: ["React", "FastAPI", "HTML", "CSS", "ASP.NET", "Streamlit"]
  },
  {
    title: "Database",
    items: ["MySQL", "MS Access", "PostgreSQL"]
  },
  {
    title: "Software & Tools",
    items: ["Microsoft Office", "GitHub", "Visual Studio", "Figma", "Android Studio", "Power Automate"]
  },
  {
    title: "Multimedia & Design",
    items: ["Adobe Photoshop", "Adobe Lightroom", "Canva", "Premiere Pro", "Filmora"]
  },
  {
    title: "AI Tools",
    items: ["ChatGPT", "Gemini", "Claude", "Perplexity", "Codex", "Microsoft Copilot"]
  },
  {
    title: "AI/ML Libraries & Frameworks",
    items: ["LangChain", "LangGraph", "Hugging Face Transformers", "ChromaDB", "FAISS", "TensorFlow Lite", "OpenCV"]
  },
];


export const projects = [
  {
    title: "AI - Powered Manufacturing Knowledge & Intelligence Platform (MKIP)",
    slug: "mkip",
    short: "MKIP",
    type: "OJT Project",
    image: "/images/Profile/MKIP.png",
    images: [
      "/images/certifications/comptia.png",
      "/images/certifications/googlecloud.png"
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
    demoUrl: "https://www.youtube.com/watch?v=9t3xxOAMh4Q&list=RDWeP13yRODUY&index=2",
    repoUrl: "#"
  },
  {
    title: "Assisted Training, Learning and System (ATLAS)",
    slug: "atlas",
    short: "AI Chatbot",
    type: "OJT Project",
    image: "/images/Profile/aiassistance.png",
    imageGroups: [
  { label: "User Side", images: ["/images/Profile/MKIP-user1.png", "/images/Profile/MKIP-user2.png"] },
  { label: "Admin Side", images: ["/images/Profile/MKIP-admin1.png", "/images/Profile/MKIP-admin2.png"] }
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
    short: "SMS",
    image: "/images/Profile/DIANA.png",
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
    short: "SMS",
    type: "Personal Project",
    image: "/images/Profile/webportfolio.png",
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
    image: "/images/Profile/webpayroll.png",
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
    short: "CAP",
    image: "/images/Profile/Palayon.png",
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
    short: "WEB",
    image: "/images/Profile/pitakapp.png",
    type: "Academic Project",
    description:
      "An Android budgeting app with machine learning-based expense forecasting, powered by a predictive model trained on business expense data, with full documentation support.",
    contribution:
      "Built the Android app UI and expense-tracking logic, and integrated a predictive model developed by a teammate.",
    stack: ["Android Studio", "Kotlin", "Json"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Bus Ticket Reservation System",
    slug: "bus-ticket-reservation-system",
    short: "ECOM",
    image: "/images/Profile/buslink.png",
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
    image: "/images/Profile/connect4.png",
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
    image: "/images/Profile/dino.png",
    type: "Game Development Project",
    description:
      "A 2D endless runner featuring a Luffy-inspired character, with obstacle avoidance, score tracking, and progressively increasing difficulty.",
    contribution:
      "Full-stack development of the obstacle mechanics and the progressive difficulty curve.",
    stack: ["Unity", "C#", "MySql"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Unity Game – Flappy Bird Clone",
    slug: "unity-flappy-bird-clone",
    short: "GAME",
    image: "/images/Profile/flappybird.png",
    type: "Academic Project",
    description:
      "A 2D arcade-style Unity game with a start menu, leaderboard, physics-based controls, obstacle generation, and collision detection for an engaging, challenging experience.",
    contribution:
      "Built the leaderboard module and connected it to the database.",
    stack: ["Unity", "C#", "MySql"],
    demoUrl: "#",
    repoUrl: "#"
  }
];

export const experience = [
  {
    date: "2026",
    title: "OJT Internship",
    description:
      "Developed an AI-powered chatbot with file upload and document summarization features, an admin management panel, and template upload functionality for administrators."
  },
  {
    date: "2024",
    title: "Freelance",
    description:
      "Edited videos for personal, academic, and small client projects; enhanced photos for creative, promotional, and event-related use; provided photography services for small events and personal shoots; and performed music gigs for private events and community activities."
  },
  {
    date: "2023",
    title: "Graphic Design/Social Media Content",
    description:
      "Created graphic posters for social media promotions and marketing campaigns. Designed visually appealing content to enhance online presence and engagement for various platforms."
  },
  {
    date: "2022",
    title: "Office Assistant",
    description:
      "Organized company records, reports, and spreadsheets to improve operational efficiency and developed an Excel-based payroll system that reduced manual computation and improved accuracy."
  },
  {
    date: "2019",
    title: "Work Immersion Trainee",
    description:
      "Participated in company workshops and technical training sessions, and assisted with basic programming tasks while learning production workflows and gaining a foundational understanding of C++."
  },
];

export const certifications = [
  {
    date: "2026",
    title: "IBM AI Developer Professional Certificate",
    issuer: "Coursera/IBM",
    credentialUrl: "",
    image: "",
    description:
      "Completed the IBM AI Developer Professional Certificate, gaining hands-on experience in artificial intelligence, machine learning fundamentals, Python programming, and AI application development."
  },
  {
    date: "2026",
    title: "Job Ready: Employability Skills",
    issuer: "Wadhwani Foundation",
    credentialUrl: "",
    image: "/images/certifications/wadhwani.png",
    description:
      "Completed training on core employability competencies including effective communication, professionalism, problem-solving, digital literacy, self-management, and interview preparation to build workplace readiness."
  },
  {
    date: "2025",
    title: "CompTIA Tech+",
    issuer: "CompTIA",
    credentialUrl: "https://www.credly.com/earner/earned/badge/5a6d0c77-815a-4b38-a099-62d1402a55b2",
    image: "/images/certifications/comptia.png",
    description:
      "Earned foundational knowledge in core IT concepts including hardware, software, networking, cybersecurity, and troubleshooting through the CompTIA Tech+ certification program."
  },
  {
    date: "2024",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    credentialUrl: "https://www.credly.com/earner/earned/badge/8ddb9be5-56e3-44da-b3fa-2890dbc17ad9",
    image: "/images/certifications/googlecloud.png",
    description:
      "Completed foundational training in cloud computing through Google Cloud, covering core concepts such as cloud infrastructure, virtualization, storage, networking, and basic cloud service management."
  },
  
];

export const contact = [
  { label: "Email", value: "grefaldo.sophianicole@gmail.com", href: "mailto:grefaldo.sophianicole@gmail.com" },
  { label: "Phone", value: "0906 398 7872", href: "tel:+639000000000" },
  { label: "Location", value: "Laguna, Philippines", href: "#" },
  { label: "GitHub", value: "github.com/grfsdtrrs", href: "https://github.com/grfsdtrrs" },
  { label: "LinkedIn", value: "linkedin.com/in/grefaldosophianicole", href: "https://www.linkedin.com/in/grefaldosophianicole/" }
];
export const ojt = {
  title: "On-the-Job Training",
  company: "Denso Ten Solutions Philippines Corporation",
  department: "Information System Department – Onsite Services Section",
  role: "OJT Intern",
  period: "May 11, 2026 – September 11, 2026",
  hours: "480 Hours",
  location: "Laguna Technopark, Santa Rosa, Laguna",
  companyAddress: "Ortigas Center, Pasig City",
  supervisor: "Jonathan Medalla",

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