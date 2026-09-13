import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export function DemoPage({ slug }) {
  const project = projects.find((item) => item.slug === slug);

  const imageGroups = project?.imageGroups?.length
    ? project.imageGroups
    : project?.images?.length
    ? [{ label: null, images: project.images }]
    : project?.image
    ? [{ label: null, images: [project.image] }]
    : [];

  const hasDemo =
    project &&
    ((project.demoUrl && project.demoUrl !== "#") ||
      project.videoFile ||
      imageGroups.length > 0);

  if (!hasDemo) {
    notFound();
  }

  const embedUrl = getYouTubeEmbedUrl(project.demoUrl);

  return (
    <section className="content-section demo-page">
      <div className="section-heading">
        <p className="eyebrow">{project.type}</p>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className="demo-media">
        {project.videoFile ? (
          <div className="preview-video">
            <video controls preload="metadata" src={project.videoFile}>
              Your browser does not support embedded videos.
            </video>
          </div>
        ) : embedUrl ? (
          <div className="preview-video">
            <iframe
              src={embedUrl}
              title={`${project.title} demo video`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}

        {imageGroups.length > 0
          ? imageGroups.map((group, groupIndex) => (
              <div className="demo-gallery-group" key={group.label ?? groupIndex}>
                {group.label ? <h2 className="demo-gallery-label">{group.label}</h2> : null}
                <div className="demo-gallery">
                  {group.images.map((src, index) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} ${group.label ?? "UI"} preview ${index + 1}`}
                      className="demo-image"
                    />
                  ))}
                </div>
              </div>
            ))
          : null}

        {!project.videoFile && !embedUrl && imageGroups.length === 0 ? (
          <p>No preview available for this project yet.</p>
        ) : null}
      </div>
    </section>
  );
}