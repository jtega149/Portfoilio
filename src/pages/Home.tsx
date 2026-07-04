import { useState } from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { hackathonWins, openSourceContributions, projects } from "../data/projects";
import { useTypingRotator } from "../hooks/useTypingRotator";

function initialsFrom(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function Home() {
  const typed = useTypingRotator(profile.heroRotators);
  const projectCount =
    projects.length + openSourceContributions.length + hackathonWins.length;
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = Boolean(profile.photo) && !photoFailed;
  const initials = initialsFrom(profile.name);

  return (
    <section className="page home">
      <div className="container home__grid">
        <div className="home__intro">
          <div className="home__avatar" aria-hidden={!showPhoto}>
            {showPhoto ? (
              <img
                className="home__avatar-img"
                src={profile.photo}
                alt={profile.name}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <span className="home__avatar-fallback">{initials}</span>
            )}
          </div>

          <span className="eyebrow">~/ whoami</span>
          <h1 className="home__name">{profile.name}</h1>
          <p className="home__role">{profile.role}</p>

          <p className="home__typed">
            <span className="home__typed-prefix">I build</span>{" "}
            <span className="home__typed-word">{typed}</span>
            <span className="cursor" aria-hidden />
          </p>

          <p className="home__tagline">{profile.tagline}</p>

          <div className="home__cta">
            <Link to="/projects" className="btn btn--primary">
              View projects
            </Link>
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </div>

        <aside className="home__spec panel">
          <ul className="spec">
            <li>
              <span className="spec__k">status</span>
              <span className="spec__v spec__v--green">available</span>
            </li>
            <li>
              <span className="spec__k">location</span>
              <span className="spec__v">{profile.location}</span>
            </li>
            <li>
              <span className="spec__k">role</span>
              <span className="spec__v">{profile.role}</span>
            </li>
            <li>
              <span className="spec__k">projects</span>
              <span className="spec__v">{projectCount} total</span>
            </li>
            <li>
              <span className="spec__k">contact</span>
              <a className="spec__v spec__v--link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
