import useInView from "../../hooks/useInView";
import "./Reveal.css";

/* Fades and slides its content in when scrolled into view. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`.trim()}
      style={{ "--d": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
