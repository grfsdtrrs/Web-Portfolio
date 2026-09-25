import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, RefreshCw, ChevronDown, Terminal } from "lucide-react";
import { profile, projects, skills, ojt, contact } from "../data/portfolio";

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

/**
 * =====================================================================
 * PLACEHOLDER FOR CHATBOT BACKEND / API MODEL INTEGRATION
 * =====================================================================
 * The user requested a placeholder for a small chatbot based on the portfolio.
 * You can connect your backend logic, Gemini API endpoint, Groq, or Ollama here.
 *
 * Example implementation:
 * async function callPortfolioChatbotAPI(userPrompt: string): Promise<string> {
 *   const res = await fetch('/api/chat', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({ prompt: userPrompt, portfolioContext: ... })
 *   });
 *   const data = await res.json();
 *   return data.reply;
 * }
 * =====================================================================
 */
async function placeholderChatbotEngine(userMessage: string): Promise<string> {
  // Simulate small network delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  const lower = userMessage.toLowerCase();

  if (lower.includes("atlas") || lower.includes("training") || lower.includes("rag")) {
    return `ATLAS (Assisted Training, Learning and System) is an AI-powered platform developed during Sophia's OJT at Denso Ten Solutions. It features RAG-based document question-answering with ChromaDB & Groq, automated PDF summarization, FAQ generation, and Power Automate notifications for engineers.`;
  }

  if (lower.includes("mkip") || lower.includes("manufacturing")) {
    return `MKIP (Manufacturing Knowledge & Intelligence Platform) is an enterprise system built by Sophia for Denso Ten Solutions. She developed the React/TypeScript/FastAPI/PostgreSQL stack, implemented 8-case document hashing and duplicate prevention, and integrated an AI search chatbot with Ollama & pgvector.`;
  }

  if (lower.includes("diana") || lower.includes("diabetes")) {
    return `DIANA is Sophia's thesis project: a cluster-based predictive model for Type 2 Diabetes risk using blood biomarkers, developed with Go, React, Flask, and PostgreSQL.`;
  }

  if (lower.includes("skill") || lower.includes("tech") || lower.includes("stack") || lower.includes("languages")) {
    return `Sophia's core stack includes Python, TypeScript, React, Kotlin, FastAPI, Go, and PostgreSQL. In AI/ML, she specializes in LangChain, LangGraph, ChromaDB, TensorFlow Lite, and Hugging Face Transformers.`;
  }

  if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach")) {
    return `You can reach Sophia directly via email at grefaldo.sophianicole@gmail.com, or phone at 0906 398 7872. Her GitHub is github.com/grfsdtrrs and LinkedIn is linkedin.com/in/grefaldosophianicole.`;
  }

  if (lower.includes("ojt") || lower.includes("denso")) {
    return `Sophia completed 480 hours of OJT at Denso Ten Solutions Philippines Corporation (Laguna Technopark), building ATLAS and MKIP, optimizing RAG pipelines, and assisting in production troubleshooting.`;
  }

  return `Thanks for asking! Sophia Nicole Grefaldo is a Computer Science graduate specializing in AI/ML solutions and full-stack web and mobile applications. [Placeholder Model Response: Connect your backend API logic to customize further!]`;
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello! I'm Sophia's portfolio assistant. Ask me anything about her ML projects (ATLAS, MKIP, DIANA), tech stack, OJT experience, or contact details!",
      timestamp: "Just now"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    "Tell me about ATLAS & MKIP",
    "What are Sophia's ML skills?",
    "What was Sophia's role in DIANA?",
    "How can I contact Sophia?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (messageToSend?: string) => {
    const text = (messageToSend || inputMessage).trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = {
      id: "u-" + Date.now(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setLoading(true);

    try {
      const reply = await placeholderChatbotEngine(text);
      const botMsg: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: "Sorry, I encountered an issue generating a response. Please try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-white dark:bg-[#08101e] border border-cyan-400/80 dark:border-cyan-500/50 text-cyan-700 dark:text-cyan-300 shadow-lg dark:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:border-cyan-500 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Open Sophia's AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wide text-slate-900 dark:text-slate-100 hidden sm:inline">
            Sophia AI
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hidden sm:inline font-semibold">
            Assistant
          </span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] rounded-2xl bg-white dark:bg-[#070b13] border border-slate-200 dark:border-cyan-500/40 shadow-2xl dark:shadow-[0_15px_45px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3 bg-slate-50 dark:bg-[#0a1222] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 font-mono">Sophia's Portfolio AI</h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400/80 font-medium">
                  Model: [API Placeholder Ready]
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: "welcome",
                      sender: "bot",
                      text: "Chat cleared. Ask me anything about Sophia's engineering builds!",
                      timestamp: "Just now"
                    }
                  ])
                }
                className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                title="Clear conversation"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                title="Minimize chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-sans text-xs bg-slate-50/50 dark:bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium rounded-tr-none shadow-[0_2px_10px_rgba(6,182,212,0.25)]"
                      : "bg-white dark:bg-[#0c1527] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] font-mono mt-1 ${
                      msg.sender === "user" ? "text-slate-950/70 font-semibold" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#0c1527] border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none px-3.5 py-2 text-slate-500 dark:text-slate-400 flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400/80 ml-1 font-medium">Analyzing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-1.5 bg-slate-100 dark:bg-[#050a14] border-t border-slate-200 dark:border-slate-800/80 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-mono bg-white dark:bg-[#091220] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/30 transition-all cursor-pointer shrink-0 shadow-sm"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <div className="p-3 bg-slate-50 dark:bg-[#0a1222] border-t border-slate-200 dark:border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about projects, skills, OJT..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl bg-white dark:bg-[#060b14] border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 font-mono shadow-sm"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || loading}
                className="p-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
