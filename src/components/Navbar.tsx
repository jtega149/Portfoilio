import { useState } from "react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

// Derive monogram from the name, e.g. "Ada Lovelace" -> "AL"
const monogram = profile.name
  .split(" ")
  .map((w) => w[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__bracket">[</span>
          {monogram}
          <span className="nav__bracket">]</span>
        </NavLink>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav__link ${isActive ? "is-active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
