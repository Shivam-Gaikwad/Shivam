import { stats } from "../../data/portfolio";
import Counter from "../ui/Counter";

export default function Stats() {
  return (
    <dl className="stats">
      {stats.map((s) => (
        <div key={s.label}>
          <dt>{s.label}</dt>
          <dd>
            <Counter to={s.value} decimals={s.decimals} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
