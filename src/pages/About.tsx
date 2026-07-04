import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";

export function About() {
  return (
    <section className="page">
      <div className="container">
        <SectionHeading eyebrow="~/about" title="About" />

        <div className="about__grid">
          <div className="about__bio">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about__skills">
            <div className="subhead">
              <h3>Stack</h3>
              <span className="rule" />
            </div>
            {profile.skills.map((group) => (
              <div className="skillgroup" key={group.category}>
                <span className="skillgroup__label">{group.category}</span>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
