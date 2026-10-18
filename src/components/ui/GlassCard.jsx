import Reveal from "./Reveal";
import { spotlight } from "../../utils/spotlight";
import "./GlassCard.css";

/* Frosted card with scroll reveal and a cursor-following glow. */
export default function GlassCard({ className = "", ...props }) {
  return <Reveal className={`glass ${className}`.trim()} onMouseMove={spotlight} {...props} />;
}
