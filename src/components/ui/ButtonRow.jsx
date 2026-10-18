import "./Button.css";

export default function ButtonRow({ center = false, children }) {
  return <div className={center ? "actions center" : "actions"}>{children}</div>;
}
