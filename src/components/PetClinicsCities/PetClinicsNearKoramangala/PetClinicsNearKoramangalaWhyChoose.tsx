import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearKoramangalaWhyChoose() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Vets?</h4>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Extensive experience in pet healthcare{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />A caring and friendly
            approach towards animals{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Personalized treatment plans for each pet{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Nutritional and behavioral counseling{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
