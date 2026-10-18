import Reveal from "./Reveal";
import "./Section.css";

/* Page section with an animated title. `id` also drives the nav anchors. */
export default function Section({ id, title, hint, className = "", children }) {
  return (
    <section id={id} className={`block ${className}`.trim()} aria-labelledby={`${id}-heading`}>
      <Reveal className="title">
        <h2 id={`${id}-heading`}>{title}</h2>
        {hint && <p className="muted">{hint}</p>}
      </Reveal>
      {children}
    </section>
  );
}
