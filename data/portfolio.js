export const navItems = [
  { label: "Home", href: "/#home", pageHref: "/" },
  { label: "About", href: "/about", pageHref: "/about" },
  { label: "Skills", href: "/skills", pageHref: "/skills" },
  { label: "Projects", href: "/projects", pageHref: "/projects" },
  { label: "Experience", href: "/experience", pageHref: "/experience" },
  { label: "Certifications", href: "/certifications", pageHref: "/certifications" },
  { label: "Contact", href: "/contact", pageHref: "/contact" }
];

export const profile = {
  name: "Sophia Nicole Grefaldo",
  image: "/images/Profile/sng.jpg",
  headline:
    "A 4th year Bachelor of Science in Computer Science student focused on full-stack web development, practical problem solving, and clean user experiences.",
  about:
    "I am a 4th year BSCS student with growing experience in frontend interfaces, backend APIs, databases, and collaborative software projects. This section is ready for your biography, academic background, career goals, and personal strengths.",
  highlights: [
    { value: "4th", label: "Year BSCS Student" },
    { value: "6+", label: "Project Placeholders" },
    { value: "Full", label: "Stack Learning Path" },
    { value: "Open", label: "To Opportunities" }
  ]
};

export const skills = [
  {
    title: "Programming Languages",
    items: [ "Python", "C++", "C#", "PHP", "Kotlin" ]
  },
  {
    title: "Web Development",
    items: [ "HTML", "CSS", "JavaScript", "ASP.NET", "Streamlit" ]
  },
  {
    title: "Database",
    items: ["MySQL", "MS Access", "Chroma DB"]
  },
  {
    title: "Software & Tools",
    items: ["Microsoft Office", "GitHub","Visual Studio", "Android Studio", "Power Automate" ]
  },
  {
    title: "Multimedia & Design",
    items: ["Adobe Photoshop", "Adobe Lightroom", "Canva", "Premiere Pro","Filmora"]
  },
  {
    title: "AI Tools",
    items: ["ChatGPT", "Gemini", "Claude","Perplexity","Codex","Roboflow" ]
  },
];

export const projects = [
  {
    title: "Personal Portfolio Website",
    short: "SMS",
    type: "Personal Project",
    image: "/images/Profile/webportfolio.png",
    description:
      "Created a professional web portfolio website to showcase academic and personal projects, technical competencies, and career achievements. Implemented a responsive design to ensure accessibility across desktop and mobile devices.",
    stack: ["Next.js", "React","Javascript","CSS","Node.js","Codex"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    title: "AI Assistance",
    short: "SMS",
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
    repoUrl: "#"
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
    short: "API",
    type: "Game Development Project",
    description:
      "Developed a 2D endless runner game inspired by Google Dino, featuring obstacle avoidance, score tracking, and progressively increasing speed and difficulty.",
    stack: ["Unity","C#","MySql"],
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
    description:
      "Completed the IBM AI Developer Professional Certificate, gaining hands-on experience in artificial intelligence, machine learning fundamentals, Python programming, and AI application development."
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
  {
    date: "2024",
    title: "AI and Machine Learning Workshop",
    issuer: "Organization Name",
    credentialUrl: "",
    description:
      "Placeholder for training focused on artificial intelligence, machine learning concepts, data analysis, computer vision, or chatbot development."
  }
];

export const contact = [
  { label: "Email", value: "grefaldo.sophianicole@gmail.com", href: "mailto:your.email@example.com" },
  { label: "Phone", value: "0906 398 7872", href: "tel:+639000000000" },
  { label: "Location", value: "Laguna, Philippines", href: "#" },
  { label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" }
];
