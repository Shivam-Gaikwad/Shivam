import useScrollProgress from "../../hooks/useScrollProgress";
import "./ScrollProgress.css";

export default function ScrollProgress() {
  const ref = useScrollProgress();
  return <div className="progress" ref={ref} aria-hidden="true" />;
}
