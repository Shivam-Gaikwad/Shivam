import useInView from "../../hooks/useInView";
import useCountUp from "../../hooks/useCountUp";

/* Number that counts up when it scrolls into view. */
export default function Counter({ to, decimals = 0 }) {
  const [ref, seen] = useInView(0.5);
  const value = useCountUp(to, seen);
  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}
