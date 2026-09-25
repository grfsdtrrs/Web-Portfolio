import { Project } from "../types";
import { X, Play, ExternalLink, Image as ImageIcon, CheckCircle } from "lucide-react";

interface DemoModalProps {
  project: Project | null;
  onClose: () => void;
}

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
}

export function DemoModal({ project, onClose }: DemoModalProps) {
  if (!project) return null;

  const embedUrl = getYouTubeEmbedUrl(project.demoUrl);

  const imageGroups = project?.imageGroups?.length
    ? project.imageGroups
    : project?.images?.length
    ? [{ label: null, images: project.images }]
    : project?.image
    ? [{ label: null, images: [project.image] }]
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#08101e] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 transition-colors duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm"
          aria-label="Close demo window"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-1 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            <span>{project.type}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {project.description}
          </p>
          {project.contribution && (
            <p className="text-xs font-mono text-cyan-700 dark:text-cyan-300/90 mt-1 font-medium">
              <strong>Role:</strong> {project.contribution}
            </p>
          )}
        </div>

        {/* Media Player or Gallery */}
        <div className="space-y-6">
          {project.videoFile ? (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-200 dark:border-slate-800">
              <video controls autoPlay preload="metadata" className="w-full h-full" src={project.videoFile}>
                Your browser does not support embedded videos.
              </video>
            </div>
          ) : embedUrl ? (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-slate-200 dark:border-slate-800">
              <iframe
                src={embedUrl}
                title={`${project.title} demo video`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}

          {/* Image Gallery Groups */}
          {imageGroups.map((group, gIdx) => (
            <div key={group.label || gIdx} className="space-y-3">
              {group.label && (
                <h4 className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-semibold tracking-wider">
                  {group.label} Previews
                </h4>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.images.map((imgSrc, imgIdx) => (
                  <div key={imgSrc + imgIdx} className="rounded-xl overflow-hidden bg-slate-100 dark:bg-black border border-slate-200 dark:border-slate-800/80 shadow-sm">
                    <img
                      src={imgSrc}
                      alt={`${project.title} preview ${imgIdx + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.repoUrl && project.repoUrl !== "#" && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-400/40 hover:bg-cyan-100 dark:hover:bg-cyan-500/30 font-semibold cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
