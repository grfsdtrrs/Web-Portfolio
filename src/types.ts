export interface Highlight {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  image: string;
  headline: string;
  about: string;
  highlights: Highlight[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ImageGroup {
  label: string | null;
  images: string[];
}

export interface Project {
  title: string;
  slug: string;
  short: string;
  type: string;
  image?: string;
  images?: string[];
  imageGroups?: ImageGroup[];
  description: string;
  contribution?: string;
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  videoFile?: string;
}

export interface ExperienceItem {
  date: string;
  title: string;
  description: string;
}

export interface Certification {
  date: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
  image?: string;
  description: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface OjtProject {
  key: string;
  name: string;
  description: string;
  objectives: string[];
  contributions?: string[];
  modules: string[];
  techStack: string[];
}

export interface OjtChallenge {
  title: string;
  solution: string;
}

export interface OjtData {
  title: string;
  company: string;
  department: string;
  role: string;
  period: string;
  hours: string;
  location: string;
  companyAddress: string;
  overview: string;
  companyBackground: string;
  responsibilities: string[];
  projects: OjtProject[];
  challenges: OjtChallenge[];
  accomplishments: string[];
  learnings: string;
  realization: string;
  conclusion: string;
}

export interface NavItem {
  label: string;
  href: string;
  pageHref: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}
