import "./Button.css";

/* Link styled as a button. variant: "primary" | "ghost". size: "md" | "sm". */
export default function Button({ href, variant = "primary", size = "md", external = false, children }) {
  const cls = ["btn", variant === "ghost" && "ghost", size === "sm" && "small"].filter(Boolean).join(" ");
  const extra = external ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a className={cls} href={href} {...extra}>
      {children}
    </a>
  );
}
