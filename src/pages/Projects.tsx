import { useState } from "react";
import {
  projects,
  openSourceContributions,
  hackathonWins,
} from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";

type ProjectFilter = "all" | "oss" | "hackathon";

const FILTERS: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "oss", label: "Open Source Contributions" },
  { id: "hackathon", label: "Hackathon Wins" },
];

function Arrow() {
  return (
    <span aria-hidden style={{ fontFamily: "var(--font-mono)" }}>
      ↗
    </span>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const showProjects = filter === "all";
  const showOss = filter === "all" || filter === "oss";
  const showHackathon = filter === "all" || filter === "hackathon";

  // Featured first, then the rest, preserving file order within each group.
  const ordered = [...projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured)
  );

  return (
    <section className="page">
      <div className="container">
        <div className="projects__head">
          <SectionHeading
            eyebrow="~/projects"
            title="Projects"
            lead="Selected work. The source for each is linked where available."
          />

          <div
            className="proj-filter"
            role="group"
            aria-label="Filter projects"
          >
            {FILTERS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                className={`proj-filter__btn${filter === id ? " is-active" : ""}`}
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {showProjects && (
          <div className="proj-grid">
            {ordered.map((p) => (
              <article
                key={p.id}
                className={`card proj ${p.featured ? "proj--featured" : ""}`}
              >
                <div className="proj__top">
                  <h3 className="proj__title">{p.title}</h3>
                  <span className="proj__year">{p.year}</span>
                </div>
                <p className="proj__desc">{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.links.length > 0 && (
                  <div className="proj__links">
                    {p.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="proj__link"
                      >
                        {l.label} <Arrow />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {showOss && (
          <>
            {filter === "all" && (
              <div className="subhead">
                <h3>Open Source Contributions</h3>
                <span className="rule" />
                <span className="count">
                  {String(openSourceContributions.length).padStart(2, "0")}
                </span>
              </div>
            )}

            <ul className="oss">
              {openSourceContributions.map((c) => (
                <li key={c.id} className="oss__item">
                  <div className="oss__main">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="oss__project"
                    >
                      {c.project} <Arrow />
                    </a>
                    <span className="oss__role">{c.role}</span>
                  </div>
                  <p className="oss__desc">{c.description}</p>
                  {c.tech && c.tech.length > 0 && (
                    <div className="chips">
                      {c.tech.map((t) => (
                        <span className="chip" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {showHackathon && (
          <>
            {filter === "all" && (
              <div className="subhead">
                <h3>Hackathon Wins</h3>
                <span className="rule" />
                <span className="count">
                  {String(hackathonWins.length).padStart(2, "0")}
                </span>
              </div>
            )}

            <div className="proj-grid">
              {hackathonWins.map((h) => (
                <article key={h.id} className="card proj">
                  <div className="proj__top">
                    <h3 className="proj__title">{h.title}</h3>
                    <span className="proj__year">{h.year}</span>
                  </div>
                  <p className="proj__meta">
                    {h.event}
                    {h.placement && (
                      <>
                        <span aria-hidden> · </span>
                        <span className="proj__placement">{h.placement}</span>
                      </>
                    )}
                  </p>
                  <p className="proj__desc">{h.description}</p>
                  <div className="chips">
                    {h.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {h.links.length > 0 && (
                    <div className="proj__links">
                      {h.links.map((l) => (
                        <a
                          key={l.url}
                          href={l.url}
                          target="_blank"
                          rel="noreferrer"
                          className="proj__link"
                        >
                          {l.label} <Arrow />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
