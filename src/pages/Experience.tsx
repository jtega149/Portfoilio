import { useState } from "react";
import { experience, irrelevantExperience } from "../data/experience";
import type { Experience as ExperienceEntry } from "../data/types";
import { SectionHeading } from "../components/SectionHeading";

type ExperienceTab = "relevant" | "irrelevant";

function ExperienceTimeline({ jobs }: { jobs: ExperienceEntry[] }) {
  return (
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={job.id} className="timeline__item">
          <div className="timeline__marker" aria-hidden />
          <div className="timeline__body">
            <div className="timeline__top">
              {job.logo && (
                <img
                  src={job.logo}
                  alt=""
                  className="timeline__logo"
                  loading="lazy"
                />
              )}
              <div className="timeline__info">
                <div className="timeline__head">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__company">
                  {job.company}
                  {job.location && (
                    <span className="timeline__loc"> · {job.location}</span>
                  )}
                </p>
              </div>
            </div>
            {job.summary && <p className="timeline__summary">{job.summary}</p>}
            <ul className="timeline__highlights">
              {job.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {job.tech && job.tech.length > 0 && (
              <div className="chips">
                {job.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  const [tab, setTab] = useState<ExperienceTab>("relevant");
  const jobs = tab === "relevant" ? experience : irrelevantExperience;

  return (
    <section className="page">
      <div className="container">
        <SectionHeading eyebrow="~/experience" title="Experience" />

        <div className="exp-toggle" role="tablist" aria-label="Experience type">
          <button
            type="button"
            role="tab"
            id="exp-tab-relevant"
            aria-selected={tab === "relevant"}
            aria-controls="exp-panel"
            className={`exp-toggle__btn ${tab === "relevant" ? "exp-toggle__btn--active" : ""}`}
            onClick={() => setTab("relevant")}
          >
            Relevant Experience
          </button>
          <button
            type="button"
            role="tab"
            id="exp-tab-irrelevant"
            aria-selected={tab === "irrelevant"}
            aria-controls="exp-panel"
            className={`exp-toggle__btn ${tab === "irrelevant" ? "exp-toggle__btn--active" : ""}`}
            onClick={() => setTab("irrelevant")}
          >
            Irrelevant Experience
          </button>
        </div>

        <div
          id="exp-panel"
          role="tabpanel"
          aria-labelledby={tab === "relevant" ? "exp-tab-relevant" : "exp-tab-irrelevant"}
        >
          <ExperienceTimeline jobs={jobs} />
        </div>
      </div>
    </section>
  );
}
