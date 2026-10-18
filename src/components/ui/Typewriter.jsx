import useTypewriter from "../../hooks/useTypewriter";
import "./Typewriter.css";

/* Animated text for sighted users; screen readers get `label` instead. */
export default function Typewriter({ words, label }) {
  const text = useTypewriter(words);
  return (
    <>
      <span className="sr">{label}</span>
      <span aria-hidden="true" className="typed">
        {text}
        <i className="caret" />
      </span>
    </>
  );
}
