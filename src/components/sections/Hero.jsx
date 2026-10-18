import { profile } from "../../data/portfolio";
import Typewriter from "../ui/Typewriter";
import Button from "../ui/Button";
import ButtonRow from "../ui/ButtonRow";
import Stats from "./Stats";
import Portrait from "./Portrait";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="pill">
          <span className="dot" /> Open to entry-level roles · {profile.location}
        </p>
        <h1>
          Hi, I&rsquo;m <span className="grad">{profile.name}</span>
        </h1>
        <p className="role">
          <Typewriter words={profile.typedRoles} label={profile.role} />
        </p>
        <p className="lede">{profile.summary}</p>
        <ButtonRow>
          <Button href={`mailto:${profile.email}`}>Email me</Button>
          <Button variant="ghost" href={profile.github} external>
            GitHub
          </Button>
          <Button variant="ghost" href={profile.linkedin} external>
            LinkedIn
          </Button>
        </ButtonRow>
        <Stats />
      </div>
      <Portrait />
    </section>
  );
}
