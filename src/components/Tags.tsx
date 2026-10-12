import { skillLabel } from "../content";

/** Tech tags under a card. The tag matching `highlight` is underlined. */
export function Tags({ stack, highlight = null }: { stack: string[]; highlight?: string | null }) {
  return (
    <ul className="tags mono">
      {stack.map((id) => (
        <li key={id} className={id === highlight ? "is-match" : undefined}>
          {skillLabel[id] ?? id}
        </li>
      ))}
    </ul>
  );
}
