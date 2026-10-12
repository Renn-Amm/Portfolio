/** Section heading: "01. About ────" with an optional subtitle. */
interface Props {
  num: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ num, title, subtitle }: Props) {
  return (
    <header className="section-title reveal">
      <h2>
        <span className="mono section-title__num">{num}.</span> {title}
        <span className="section-title__rule" aria-hidden="true" />
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}
