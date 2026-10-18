import { certifications, achievement } from "../../data/portfolio";
import GlassCard from "../ui/GlassCard";
import "./Extras.css";

/* Certifications and achievements, side by side. */
export default function Extras() {
  return (
    <section className="block two" aria-label="Certifications and achievements">
      <GlassCard>
        <h2 className="h-sm">Certifications</h2>
        <ul className="ticks">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </GlassCard>
      <GlassCard delay={90}>
        <h2 className="h-sm">Achievements</h2>
        <p>{achievement}</p>
      </GlassCard>
    </section>
  );
}
