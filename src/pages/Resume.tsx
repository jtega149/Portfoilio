import { useEffect, useState } from "react";
import { resume } from "../data/resume";
import { SectionHeading } from "../components/SectionHeading";

function isPdfResponse(response: Response): boolean {
  const type = response.headers.get("content-type") ?? "";
  // SPA fallbacks return HTML — embedding that causes the app-in-app loop.
  if (type.includes("text/html")) return false;
  return type.includes("application/pdf") || type.includes("application/octet-stream");
}

export function Resume() {
  const [pdfReady, setPdfReady] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(resume.file, { method: "HEAD" })
      .then((response) => {
        if (!cancelled) {
          setPdfReady(response.ok && isPdfResponse(response));
        }
      })
      .catch(() => {
        if (!cancelled) setPdfReady(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="page">
      <div className="container">
        <div className="resume__head">
          <SectionHeading
            eyebrow="~/resume"
            title="Resume"
            lead={`Last updated ${resume.updated}.`}
          />
          <div className="resume__actions">
            <a
              className="btn btn--primary"
              href={resume.file}
              download={resume.downloadName}
            >
              ↓ Download PDF
            </a>
            <a
              className="btn"
              href={resume.file}
              target="_blank"
              rel="noreferrer"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        <div className="resume__frame panel">
          {pdfReady ? (
            <object
              className="resume__object"
              data={resume.file}
              type="application/pdf"
              aria-label="Resume PDF"
            />
          ) : (
            <div className="resume__fallback resume__object">
              {pdfReady === null ? (
                <p>Loading resume…</p>
              ) : (
                <>
                  <p>Can't display the PDF inline here.</p>
                  <p className="resume__fallback-hint">
                    Drop your file at <code>public{resume.file}</code>, then use
                    Download or Open in new tab above.
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
