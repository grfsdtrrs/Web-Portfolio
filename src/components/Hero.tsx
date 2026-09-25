import { useState, useRef, ChangeEvent, MouseEvent } from "react";
import { TypingName } from "./TypingName";
import { profile, contact } from "../data/portfolio";
import {
  ArrowRight,
  Download,
  Cpu,
  Layers,
  Database,
  Check,
  Copy,
  Camera,
  Image as ImageIcon,
  Sparkles,
  Mail,
  MapPin,
  ExternalLink,
  RotateCcw,
  Contact,
  Github,
  Linkedin,
  Phone
} from "lucide-react";

interface HeroProps {
  onExplore: () => void;
  onConnect: () => void;
  onViewMore: () => void;
  isRevealed: boolean;
}

export function Hero({ onExplore, onConnect, onViewMore, isRevealed }: HeroProps) {
  const [photoUrl, setPhotoUrl] = useState<string>(profile.image || "");
  const [activeViewMode, setActiveViewMode] = useState<"photo" | "hologram">("photo");
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const emailItem = contact.find((c) => c.label.toLowerCase().includes("email"));
  const phoneItem = contact.find((c) => c.label.toLowerCase().includes("phone"));
  const locationItem = contact.find((c) => c.label.toLowerCase().includes("location"));
  const githubItem = contact.find((c) => c.label.toLowerCase().includes("github"));
  const linkedinItem = contact.find((c) => c.label.toLowerCase().includes("linkedin"));

  const emailValue = emailItem?.value || "grefaldo.sophianicole@gmail.com";

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotoUrl(objectUrl);
    }
  };

  const handleCopyEmail = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailValue);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden transition-colors duration-200">
      {/* Background Cyber Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-300/20 dark:bg-white/5 blur-[140px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Layout: Bio & CTAs on Left, Calling-Card Profile on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Eyebrow with leading monochrome bar */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-zinc-950 dark:bg-white shadow-sm" />
              <span className="text-xs sm:text-sm font-mono tracking-widest text-zinc-700 dark:text-zinc-300 font-bold uppercase">
                COMPUTER SCIENCE GRADUATE / FULL-STACK DEVELOPER
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              <TypingName name={profile.name} />
            </h1>

            {/* Subheading text */}
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              I build intelligent machine learning pipelines, RAG systems, and responsive web and mobile applications focused on real-world problem solving.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExplore}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Explore my builds</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onConnect}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 text-zinc-900 dark:text-zinc-100 hover:border-zinc-500 dark:hover:border-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Connect</span>
              </button>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  onViewMore();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-mono text-zinc-900 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CV & Details</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                3+ ML Systems (MKIP, DIANA, Palayon)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                OJT at Denso Ten Solutions
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                <Contact className="w-3 h-3 text-zinc-500" />
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Calling Card Profile Photo (No Square Border) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center py-4 lg:py-0 relative">
            {/* 3D Calling Card Flip Container (No Outer Square Border) */}
            <div
              onClick={() => setIsCardFlipped(!isCardFlipped)}
              className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[4/5] perspective-1000 cursor-pointer group"
              title="Click to flip calling card with contact details"
            >
              {/* Flip wrapper */}
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isCardFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT FACE: Profile Photo (Frameless, No Border Square) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-100 dark:bg-zinc-950 flex flex-col items-center justify-center">
                  {activeViewMode === "photo" ? (
                    <>
                      {photoUrl ? (
                        <img
                          src={photoUrl}
                          alt={profile.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={() => {
                            setPhotoUrl(
                              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                            );
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950">
                          <div className="w-16 h-16 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                            <Camera className="w-8 h-8" />
                          </div>
                          <div className="space-y-1">
                            <span className="text-xs font-bold text-zinc-900 dark:text-white block font-mono">
                              Portrait Placeholder
                            </span>
                            <span className="text-[11px] text-zinc-500 font-mono block">
                              Click photo to flip calling card
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Photo Gradient & Upload Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Tap to Reveal Calling Card Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono flex items-center gap-1.5 shadow-lg group-hover:bg-black/85 transition-all">
                        <Contact className="w-3.5 h-3.5 text-white" />
                      </div>

                     

                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        accept="image/*"
                        className="hidden"
                      />

                      {/* Bottom Caption */}
                    </>
                  ) : (
                    /* HOLOGRAPHIC VECTOR DEVELOPER */
                    <svg
                      viewBox="0 0 340 420"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    >
                      <g opacity="0.85">
                        <rect x="40" y="50" width="130" height="90" rx="6" fill="#18181b" stroke="#71717a" strokeWidth="1.5" strokeDasharray="3 2" fillOpacity="0.7" />
                        <circle cx="105" cy="95" r="24" stroke="#a1a1aa" strokeWidth="1.2" />
                        <line x1="81" y1="95" x2="129" y2="95" stroke="#71717a" strokeWidth="0.8" />
                        <line x1="105" y1="71" x2="105" y2="119" stroke="#71717a" strokeWidth="0.8" />
                        <line x1="50" y1="60" x2="80" y2="60" stroke="#a1a1aa" strokeWidth="2" />

                        <rect x="110" y="115" width="125" height="80" rx="5" fill="#18181b" stroke="#71717a" strokeWidth="1.5" fillOpacity="0.8" />
                        <line x1="120" y1="130" x2="160" y2="130" stroke="#ffffff" strokeWidth="2" />
                        <path d="M120 170 L140 155 L160 162 L180 145 L200 158 L220 138" stroke="#a1a1aa" strokeWidth="2" fill="none" />
                        <circle cx="180" cy="145" r="3" fill="#ffffff" />
                      </g>

                      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                        <path d="M225 65 C222 55, 230 45, 245 45 C260 45, 270 52, 268 62 C265 65, 268 72, 272 75 C275 80, 270 88, 265 88 C260 88, 258 92, 255 98 C248 100, 238 98, 235 90 C230 85, 226 75, 225 65 Z" fill="#27272a" stroke="#a1a1aa" />
                        <path d="M230 52 C236 48, 245 50, 248 48 C252 46, 256 50, 260 52" stroke="#ffffff" />
                        <path d="M240 120 C220 128, 195 145, 192 165 C188 190, 185 240, 188 280 L285 280 C288 240, 288 190, 282 165 C278 145, 260 128, 240 120 Z" fill="#18181b" stroke="#ffffff" strokeWidth="2.2" />
                        <path d="M192 165 C185 180, 175 200, 160 215 C145 220, 135 210, 125 195 C122 190, 118 185, 120 180" stroke="#a1a1aa" strokeWidth="2" />
                        <circle cx="120" cy="180" r="4" fill="#ffffff" stroke="#ffffff" />
                        <path d="M280 168 C275 185, 260 210, 245 225 C235 230, 220 220, 215 205" stroke="#ffffff" strokeWidth="2" />
                        <circle cx="215" cy="205" r="4" fill="#ffffff" stroke="#a1a1aa" />
                      </g>

                      <ellipse cx="170" cy="380" rx="140" ry="30" stroke="#71717a" strokeWidth="1.2" strokeDasharray="6 3" opacity="0.4" />
                      <line x1="80" y1="380" x2="260" y2="380" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" />
                    </svg>
                  )}
                </div>

                {/* BACK FACE: Calling Card Animation (Shows Contact Information) */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl overflow-hidden p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between select-none">
                  {/* Subtle Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />

                  {/* Card Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-extrabold text-xs tracking-wider">
                          <img
                            src="/images/Profile/GRFS.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
                          DIGITAL CALLING CARD
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Flip</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-1">
                      <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                        Sophia Nicole Grefaldo
                      </h3>
                      <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 font-medium">
                        BS Computer Science • Full-Stack & AI
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Open to Opportunities</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Items */}
                  <div className="relative z-10 space-y-2.5 py-2">
                    {/* Email with copy button */}
                    <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between group/email">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                        <span className="text-xs font-mono text-zinc-800 dark:text-zinc-200 truncate">
                          {emailValue}
                        </span>
                      </div>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer shrink-0 ml-1"
                        title="Copy email address"
                        aria-label="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <a
                      href={githubItem?.href || "https://github.com/grfsdtrrs"}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Github className="w-4 h-4 text-zinc-500 shrink-0" />
                        <span className="truncate">{githubItem?.label || "GitHub"}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0 ml-1" />
                    </a>

                    <a
                      href={linkedinItem?.href || "https://www.linkedin.com/in/grefaldosophianicole/"}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Linkedin className="w-4 h-4 text-zinc-500 shrink-0" />
                        <span className="truncate">{linkedinItem?.label || "LinkedIn"}</span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0 ml-1" />
                    </a>
                  </div>

                  {/* Card Footer */}
                  <div className="relative z-10 pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    
                    <span className="text-zinc-900 dark:text-white font-semibold">Sophia Nicole Grefaldo</span>
                  </div>
                </div>
              </div>

              {/* "READY FOR COLLABORATION" BADGE AT HOME SECTION */}
              
            </div>
          </div>
        </div>

        {/* 01, 02, 03 SECTION: Positioned below Hero right before Selected Work */}
        <div className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 01 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover:scale-105 transition-transform">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                  AI & Machine Learning
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  LangChain, RAG architectures, ChromaDB vector stores, dense embeddings, and TensorFlow Lite on-device inference.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Production RAG</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Core Focus</span>
              </div>
            </div>

            {/* Card 02 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover:scale-105 transition-transform">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                  Full-Stack & Mobile
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Modern React with TypeScript, high-performance FastAPI backends, ASP.NET Core, and native Android Kotlin applications.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>End-to-End Apps</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Scalable UX</span>
              </div>
            </div>

            {/* Card 03 */}
            <div className="group p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 shadow-sm hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-800">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100 group-hover:scale-105 transition-transform">
                    <Database className="w-5 h-5" />
                  </div>
                </div>
                <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                  Data & Cloud Systems
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  PostgreSQL with ChromaDB similarity indexing, MySQL relational schemas, cloud deployments, and containerized pipelines.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>ChromaDB & SQL</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">Cloud Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
