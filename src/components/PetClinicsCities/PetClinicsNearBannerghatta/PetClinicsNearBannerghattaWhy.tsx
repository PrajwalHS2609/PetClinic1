import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearBannerghattaWhy() {
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
            <GoDot className="contentList-containerIcon" /> Use of modern
            diagnostic and treatment methods
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> A compassionate and
            pet-friendly approach
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Customized treatment
            plans tailored to each pet’s needs{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
