import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="page">
      <div className="container notfound">
        <span className="eyebrow">~/ error</span>
        <h1>404</h1>
        <p>This path doesn't resolve.</p>
        <Link to="/" className="btn btn--primary">
          ← Back home
        </Link>
      </div>
    </section>
  );
}
