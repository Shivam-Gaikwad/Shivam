import { profile, navLinks } from "../../data/portfolio";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="bar">
      <a className="brand" href="#top">
        <span className="logo">SG</span>
        {profile.name}
      </a>
      <nav aria-label="Sections">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
}
