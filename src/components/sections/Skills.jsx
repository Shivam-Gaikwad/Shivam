import { skills } from "../../data/portfolio";
import Section from "../ui/Section";
import SkillCard from "./SkillCard";
import "./Skills.css";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" hint="Tools I build with">
      <div className="skill-grid">
        {skills.map(([label, value], i) => (
          <SkillCard key={label} label={label} value={value} delay={i * 60} />
        ))}
      </div>
    </Section>
  );
}
