import { projects } from "../../data/portfolio";
import Section from "../ui/Section";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" hint="Things I built">
      <div className="projects">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
}
