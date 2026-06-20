import Link from "next/link";
import { TypingName } from "@/components/TypingName";
import { profile } from "@/data/portfolio";

export function Hero({ landingOnly = false, onViewMore }) {
  return (
    <section id="home" className={landingOnly ? "hero-section landing-only section-band" : "hero-section section-band"}>
      <div className="landing-background" aria-hidden="true">
        <span className="motion-line line-one" />
        <span className="motion-line line-two" />
        <span className="motion-line line-three" />
      </div>

      <div className="hero-copy">
        <h1>
          Hi, I am <TypingName name={profile.name} />
        </h1>
        <p className="hero-lede">
          {profile.headline}
        </p>
        <div className="hero-actions">
          <button className="button primary" type="button" onClick={onViewMore}>
            View More
          </button>
          {!landingOnly ? (
            <>
              <Link className="button primary" href="#projects">
                View Projects
              </Link>
              <Link className="button secondary" href="#contact">
                Contact Me
              </Link>
            </>
          ) : null}
        </div>
      </div>

      <div className="hero-panel" aria-label="Portfolio profile photo">
        <div className="avatar-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.image}
            alt={profile.name}
            className="avatar-image"
          />
        </div>
      </div>
    </section>
  );
}
