import { profile } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import ButtonRow from "../ui/ButtonRow";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="foot">
      <Reveal>
        <h2>
          Let&rsquo;s build something <span className="grad">together</span>
        </h2>
        <p className="muted">Open to entry-level software developer roles in Pune and beyond.</p>
        <ButtonRow center>
          <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          <Button variant="ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </Button>
        </ButtonRow>
        <ButtonRow center>
          <Button variant="ghost" href={profile.linkedin} external>
            LinkedIn
          </Button>
          <Button variant="ghost" href={profile.github} external>
            GitHub
          </Button>
        </ButtonRow>
        <p className="copy">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Reveal>
    </footer>
  );
}
