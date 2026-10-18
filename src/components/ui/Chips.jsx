import "./Chips.css";

/* A wrapping row of pill tags. */
export default function Chips({ items, small = false }) {
  return (
    <ul className={small ? "chips small-chips" : "chips"}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
