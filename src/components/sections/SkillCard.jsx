import GlassCard from "../ui/GlassCard";
import Chips from "../ui/Chips";

export default function SkillCard({ label, value, delay }) {
  return (
    <GlassCard delay={delay} className="skill">
      <h3>{label}</h3>
      <Chips items={value.split(", ")} />
    </GlassCard>
  );
}
