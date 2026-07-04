import { profile } from "../data/profile";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__sig">
          {profile.name} · {profile.location}
        </span>
        <span className="footer__meta">
          <span className="footer__status">
            <span className="footer__dot" /> online
          </span>
          © {year}
        </span>
      </div>
    </footer>
  );
}
