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
  short: "MKIP",
  type: "OJT Project",
  image: "/images/Profile/MKIP.png",
  description:
    "Developed the frontend of a manufacturing knowledge platform with role-based user/admin interfaces and document management. Prepared Phase 2 for AI-powered search using Ollama and pgvector.",
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
    short: "AI Chatbot",
    type: "OJT Project",
    image: "/images/Profile/aiassistance.png",
    description:
      "Designed and developed an AI-powered chatbot with document summarization, template management, an admin dashboard, and Microsoft Power Automate integration for workflow automation.",
    stack: ["Streamlit", "Python", "Chroma DB", "Groq API", "Microsoft Copilot", "Power Automate"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "DIANA: Cluster-Based Predictive Modeling of Type 2 Diabetes Risk Using Blood Biomarkers",
    short: "SMS",
    image: "/images/Profile/DIANA.png",
    type: "Thesis",
    description:
      "Implemented machine learning clustering models to classify risk based on blood biomarker data.",
    stack: ["Go","React","Flask", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "https://diana-v2.vercel.app/"
  },
  {
    title: "Personal Portfolio Website",
    short: "SMS",
    type: "Personal Project",
    image: "/images/Profile/webportfolio.png",
    description:
      "Created a professional web portfolio website to showcase academic and personal projects, technical competencies, and career achievements. Implemented a responsive design to ensure accessibility across desktop and mobile devices.",
    stack: ["Next.js", "React","Javascript","CSS","Node.js","Codex"],
    demoUrl: "#",
    repoUrl: "https://sophiagrefaldo.vercel.app"
  },
  {
    title: "Web-Based Payroll Management System",
    short: "WEB",
    type: "Payroll System",
    image: "/images/Profile/webpayroll.png",
    description:
      "Designed and developed a payroll management web application with automated payroll calculations, employee information management, and secure local data handling.",
    stack: ["Vite", "React","Javascript","CSS3","Codex"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Palayon: Machine Learning Mobile App for Rice Disease Detection",
    short: "CAP",
    image: "/images/Profile/Palayon.png",
    type: "Software Engineering Project",
    description:
      "Built an offline Android application using Kotlin with image-based machine learning for disease prediction",
    stack: ["Kotlin", "TensorFlow Lite", "Android Studio", "Json"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "PitakApp – Expense Prediction Application",
    short: "WEB",
    image: "/images/Profile/pitakapp.png",
    type: "Academic Project",
    description:
      "Developed an Android budgeting app using Kotlin with machine learning-based expense forecasting and Integrated predictive model trained on business expense data",
    stack: ["Android Studio", "Kotlin", "Json"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Bus Ticket Reservation System",
    short: "ECOM",
    image: "/images/Profile/buslink.png",
    type: " Academic Project",
    description:
      "Developed a web-based bus reservation system using ASP.NET and Implemented basic seat booking and reservation management features",
    stack: ["ASP.NET", "C#", "MS Access"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Modified Connect4 Game",
    short: "GAME",
    image: "/images/Profile/connect4.png",
    type: "Academic Project",
    description:
      "Created an interactive Connect Four game with multiplayer and AI modes, featuring game-state tracking, winner detection, and responsive gameplay.",
    stack: ["C# Windows Form", "C#","Txt File"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Unity Game – Dino-Inspired Runner",
    short: "GAME",
    image: "/images/Profile/dino.png",
    type: "Game Development Project",
    description:
      "Developed a 2D endless runner game featuring a Luffy-inspired character, with obstacle avoidance mechanics, score tracking, and progressively increasing speed and difficulty to enhance gameplay challenge.",    
    stack: ["Unity","C#","MySql"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Unity Game – Flappy Bird Clone",
    short: "GAME",
    image: "/images/Profile/flappybird.png",
    type: "Academic Project",
    description:
      "Developed a 2D arcade-style game in Unity featuring a Start Game menu, leaderboard system for high-score tracking, and Exit functionality. Implemented physics-based controls, obstacle generation, collision detection, score management, and game-over mechanics to create an engaging and challenging gameplay experience.",
    stack: ["Unity","C#","MySql"],
    demoUrl: "#",
    repoUrl: "#"
  },
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
    description:
      "Completed the IBM AI Developer Professional Certificate, gaining hands-on experience in artificial intelligence, machine learning fundamentals, Python programming, and AI application development."
  },
  {
    date: "2026",
    title: "Job Ready: Employability Skills",
    issuer: "Wadhwani Foundation",
    credentialUrl: "",
    description:
      "Completed training on core employability competencies including effective communication, professionalism, problem-solving, digital literacy, self-management, and interview preparation to build workplace readiness."
  },
  {
    date: "2025",
    title: "CompTIA Tech+",
    issuer: "CompTIA",
    credentialUrl: "",
    description:
      "Earned foundational knowledge in core IT concepts including hardware, software, networking, cybersecurity, and troubleshooting through the CompTIA Tech+ certification program."
  },
  {
    date: "2024",
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    credentialUrl: "",
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
  period: "May 11, 2026 – May 11, 2026",
  hours: "480 Hours",
  location: "Laguna Technopark, Santa Rosa, Laguna / Ortigas Center, Pasig City",
  supervisor: "Jonathan Medalla",

  overview:
    "Completed a 480-hour practicum at Denso Ten Solutions Philippines Corporation under the Information System Department. The internship focused on developing an AI-assisted web application called ATLAS for document upload, summarization, question answering, template downloading, and administrative management, while also providing exposure to onsite technical support in the production environment.",

  companyBackground:
    "Denso Ten Solutions Philippines Corporation is a company specializing in automotive electronics and software engineering. It serves as a Knowledge Process Outsourcing and offshore development center that supports global automotive technologies such as embedded software, in-vehicle infotainment systems, navigation systems, ECUs, and vehicle control solutions.",

  responsibilities: [
    "Designed, developed, and enhanced an AI-assisted web application for document upload, summarization, intelligent question answering, and template downloading.",
    "Built frontend and backend features using Python and Streamlit while applying Object-Oriented Programming principles for maintainable code structure.",
    "Integrated LangChain, Groq API, Hugging Face Transformers, ChromaDB, and local storage for document processing, semantic retrieval, and AI-generated responses.",
    "Implemented administrator tools for file management, uploads, user management, logs, and monitoring of user activities.",
    "Performed research on embedding models, vector databases, workflow automation, and UI improvements to identify scalable solutions.",
    "Conducted functional testing, debugging, code refactoring, and continuous enhancement based on mentor feedback and presentation reviews.",
    "Observed and assisted in onsite technical support activities in the production area, including troubleshooting operational issues."
  ],

  project: {
    name: "ATLAS (Assistant Training, Learning and System)",
    description:
      "A web-based document intelligence workspace that allows users to interact with company documents through AI-powered summarization and Retrieval-Augmented Generation-based question answering.",
    objectives: [
      "Provide a centralized, role-based document platform for administrators and employees.",
      "Automatically summarize uploaded documents using AI.",
      "Enable question-and-answer conversations grounded on document content.",
      "Generate suggested questions to guide users in exploring documents.",
      "Prevent duplicate uploads and manage file revisions through hashing and versioning.",
      "Preserve user chat history across sessions.",
      "Provide categorized downloadable templates for employees."
    ]
  },

  modules: [
    "Authentication Module – unified login and registration with role-based routing.",
    "User Workspace – document library, chat interface, AI summarization, suggested questions, and persistent chat history.",
    "Download Templates – categorized template browsing and download functionality.",
    "Administrator Module – dashboard, file management, uploads, folder creation, activity logs, and user management.",
    "AI Core – LangChain pipelines for summarization, FAQ generation, and retrieval-based question answering."
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
    "FAISS",
    "JSON",
    "CSV",
    "Python-dotenv",
    "Microsoft OneDrive",
    "Power Automate"
  ],

  challenges: [
    {
      title: "Gemini API token limits",
      solution:
        "Shifted embedding generation to Hugging Face Transformers and used alternative LLM options to reduce dependency on a single rate-limited API."
    },
    {
      title: "Duplicate uploads",
      solution:
        "Implemented SHA-256 hash-based validation and revision handling for duplicate detection and version control."
    },
    {
      title: "Vector store performance",
      solution:
        "Optimized retrieval by using an in-memory FAISS index, tuned chunk sizes, and limited retrieved chunks per query."
    },
    {
      title: "Chat history persistence",
      solution:
        "Added per-user conversation storage and unique conversation handling so sessions remained private and persistent."
    }
  ],

  accomplishments: [
    "Completed all core features including authentication, AI summarization, RAG-based Q&A, FAQ generation, duplicate detection, file versioning, persistent chat history, template downloads, and administrator tools.",
    "Integrated five major modules into a single multipage Streamlit application.",
    "Tested authentication, uploads, summarization, Q&A accuracy, history persistence, and UI behavior across use cases.",
    "Improved the system continuously using mentor feedback, including admin-only uploads, optional summarization flow, and interface modernization."
  ],

  learnings:
    "The practicum strengthened technical skills in software engineering, AI integration, debugging, system design, research, and collaborative development. It also provided practical experience in adapting academic knowledge to real-world enterprise workflows and technical support responsibilities.",

  realization:
    "The internship highlighted the importance of building reliable, user-centered systems that solve actual workplace problems. It also showed that continuous learning, experimentation, and responsiveness to feedback are essential in professional software development.",

  conclusion:
    "The practicum served as a valuable bridge between academic preparation and industry practice by providing hands-on experience in AI-assisted system development, testing, problem-solving, and professional teamwork."
};