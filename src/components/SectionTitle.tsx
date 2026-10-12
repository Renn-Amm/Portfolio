interface Props {
  num: string;
  title: string;
  sub?: string;
}

export function SectionTitle({ num, title, sub }: Props) {
  return (
    <header className="section-title reveal">
      <h2>
        <span className="mono section-title__num">{num}.</span> {title}
        <span className="section-title__rule" aria-hidden="true" />
      </h2>
      {sub && <p>{sub}</p>}
    </header>
  );
}
