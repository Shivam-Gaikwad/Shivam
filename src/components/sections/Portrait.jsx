import { profile, floatingChips } from "../../data/portfolio";
import photo from "../../assets/shivam.jpg";
import "./Portrait.css";

export default function Portrait() {
  return (
    <div className="portrait-wrap">
      <div className="ring" />
      <figure className="portrait">
        <img src={photo} alt={`Portrait of ${profile.name}`} width="720" height="922" />
      </figure>
      {floatingChips.map((chip, i) => (
        <span key={chip} className={`fchip f${i + 1}`} aria-hidden="true">
          {chip}
        </span>
      ))}
    </div>
  );
}
