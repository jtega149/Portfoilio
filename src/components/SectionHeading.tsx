interface SectionHeadingProps {
  /** The "path" shown in the terminal eyebrow, e.g. "~/projects". */
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
