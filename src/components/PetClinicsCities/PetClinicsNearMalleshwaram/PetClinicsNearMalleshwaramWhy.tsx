import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearMalleshwaramWhy() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Vets?</h4>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Years of experience
            in pet healthcare{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />A compassionate and
            friendly approach{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Customized treatment
            plans for every pet{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Utilization of advanced medical technology{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
