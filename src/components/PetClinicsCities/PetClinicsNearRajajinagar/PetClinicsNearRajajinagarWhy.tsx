import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearRajajinagarWhy() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Vets?</h4>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Years of experience
            in veterinary medicine
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Compassionate and
            friendly approach
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Use of modern
            diagnostic and treatment techniques
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Customized treatment
            plans for every pet{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
