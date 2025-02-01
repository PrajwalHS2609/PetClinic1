import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearFrazerWhy() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Vets?</h4>

      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Check Online • Years
            of expertise in veterinary medicine{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> • Gentle and
            compassionate approach
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> • Use of advanced
            diagnostic techniques
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Personalized
            treatment plans for every pet{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
