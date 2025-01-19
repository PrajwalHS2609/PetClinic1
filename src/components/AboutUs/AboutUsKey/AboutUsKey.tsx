import AboutUsKeyContent from "./AboutUsKeyContent";
import AboutUsKeyImg from "./AboutUsKeyImg";
import "./AboutUsKey.css";

export default function AboutUsKey() {
  return (
    <div className="aboutUsKey-container">
      <div className="aboutUsKey-content">
        <AboutUsKeyImg />

        <AboutUsKeyContent />
      </div>
    </div>
  );
}
