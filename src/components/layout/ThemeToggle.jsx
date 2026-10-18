export default function ThemeToggle({ theme, onToggle }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="theme" onClick={onToggle} aria-label={`Switch to ${next} theme`}>
      {next === "light" ? "Light" : "Dark"}
    </button>
  );
}
