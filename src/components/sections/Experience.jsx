import { experience } from "../../data/portfolio";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";
import BulletList from "../ui/BulletList";
import "./Experience.css";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" hint="Where I worked">
      <Reveal className="timeline">
        <GlassCard className="tl-item">
          <span className="tl-dot" />
          <div className="entry-head">
            <div>
              <h3>{experience.title}</h3>
              <p className="muted">{experience.company}</p>
            </div>
            <p className="period">{experience.period}</p>
          </div>
          <BulletList items={experience.points} />
        </GlassCard>
      </Reveal>
    </Section>
  );
}
