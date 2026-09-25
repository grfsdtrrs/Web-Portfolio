import { useState } from "react";
import { certifications } from "../data/portfolio";
import { Certification } from "../types";
import {
  Award,
  ExternalLink,
  Calendar,
  ShieldCheck,
  CheckCircle,
  Eye,
  X,
  Maximize2
} from "lucide-react";

interface CertificationsSectionProps {
  expanded?: boolean;
}

export function CertificationsSection({ expanded = false }: CertificationsSectionProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-16 border-t border-slate-200 dark:border-slate-800/80 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-[2px] bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
          <h2 className="text-xs sm:text-sm font-mono tracking-widest text-cyan-600 dark:text-cyan-400 font-bold uppercase">
            CERTIFICATIONS & TRAININGS
          </h2>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight mb-10">
          Workshops, industry certifications, and learning milestones.
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white dark:bg-[#08101e]/90 border border-slate-200 dark:border-slate-800/90 hover:border-cyan-400 dark:hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-[#0c1628] shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-[0_10px_30px_rgba(6,182,212,0.12)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Certificate Image Banner */}
                {item.image && (
                  <div
                    onClick={() => setSelectedCert(item)}
                    className="relative h-48 w-full bg-slate-100 dark:bg-[#050b14] overflow-hidden cursor-pointer"
                    title="Click to view full certificate"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 dark:opacity-80 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#08101e] via-transparent to-transparent" />

                    {/* Top Issuer Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 dark:bg-[#070b13]/90 backdrop-blur-md border border-cyan-400/40 dark:border-cyan-500/30 text-[10px] font-mono text-cyan-700 dark:text-cyan-300 shadow-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                      <span>{item.issuer}</span>
                    </div>

                    {/* Top Date Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono bg-white/95 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                      <Calendar className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                      <span>{item.date}</span>
                    </div>

                    {/* Hover Magnify Overlay Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500 text-slate-950 shadow-[0_4px_15px_rgba(6,182,212,0.4)] transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Certificate</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  {!item.image && (
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800">
                        {item.issuer}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom verify link */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                  
                  
                </span>

                <div className="flex items-center gap-3">
                  {item.image && (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                      title="Enlarge certificate image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Image</span>
                    </button>
                  )}

                  {item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors group-hover:translate-x-0.5"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      Official Certificate
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Certificate Image Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-[#08101e] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 overflow-hidden transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer z-10 shadow-sm"
              aria-label="Close certificate preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-4 pr-10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                <span>{selectedCert.issuer}</span>
                <span>•</span>
                <span>{selectedCert.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                {selectedCert.title}
              </h3>
            </div>

            {/* Full-res Certificate Image */}
            {selectedCert.image && (
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner max-h-[55vh] flex items-center justify-center mb-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[55vh] object-contain"
                />
              </div>
            )}

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {selectedCert.description}
            </p>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Training & Certification</span>
              </span>

              <div className="flex items-center gap-3">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
                  >
                    <span>Open Issuer Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
