import { useState, type FormEvent } from "react";
import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { SocialIcon } from "../components/SocialIcon";

export function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  // Builds a mailto: link and opens the visitor's mail client.
  // No server required. Swap this out for a form backend (Formspree,
  // your own API, etc.) later if you want inline sending.
  function send(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${from ? ` (${from})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="page">
      <div className="container">
        <SectionHeading
          eyebrow="~/contact"
          title="Contact"
          lead="Open to interesting work and good conversations."
        />

        <div className="contact__grid">
          <form className="contact__form" onSubmit={send}>
            <label className="field">
              <span className="field__label">name</span>
              <input
                className="field__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ada Lovelace"
                required
              />
            </label>
            <label className="field">
              <span className="field__label">email</span>
              <input
                className="field__input"
                type="email"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="ada@example.com"
              />
            </label>
            <label className="field">
              <span className="field__label">message</span>
              <textarea
                className="field__input field__input--area"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="btn btn--primary">
              Send message →
            </button>
          </form>

          <aside className="contact__links">
            <div className="subhead">
              <h3>Channels</h3>
              <span className="rule" />
            </div>
            <ul className="links">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="links__row">
                    <span className="links__label">
                      <SocialIcon label={s.label} className="links__icon" />
                      {s.label}
                    </span>
                    <span className="links__handle">{s.handle ?? "↗"}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
