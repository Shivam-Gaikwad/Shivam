import GlassCard from "../ui/GlassCard";
import Chips from "../ui/Chips";
import BulletList from "../ui/BulletList";
import Button from "../ui/Button";

export default function ProjectCard({ project, delay }) {
  const { name, kind, stack, link, colors, status, points } = project;
  return (
    <GlassCard as="article" delay={delay} className="project" style={{ "--g1": colors[0], "--g2": colors[1] }}>
      <div className="project-top">
        <div>
          <h3>
            <span className="grad-p">{name}</span>
          </h3>
          <p className="muted">{kind}</p>
        </div>
        <div className="project-meta">
          {status && <span className="tag">{status}</span>}
          <Button size="sm" href={link.href} external>
            {link.label}
          </Button>
        </div>
      </div>
      <Chips items={stack} small />
      <BulletList items={points} />
    </GlassCard>
  );
}
