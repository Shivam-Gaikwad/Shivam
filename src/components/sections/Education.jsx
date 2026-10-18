import { education } from "../../data/portfolio";
import Section from "../ui/Section";
import GlassCard from "../ui/GlassCard";
import "./Education.css";

export default function Education() {
  return (
    <Section id="education" title="Education" hint="Where I studied">
      <div className="edu-grid">
        {education.map(([school, degree, score, years], i) => (
          <GlassCard key={school} delay={i * 90} className="edu">
            <p className="years">{years}</p>
            <h3>{school}</h3>
            <p className="muted">{degree}</p>
            <p className="score">{score}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
