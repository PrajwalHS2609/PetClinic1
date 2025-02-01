import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearRajajinagarImp() {
  return (
    <div className="contentList-container">
      <h4>The Importance of Regular Vet Visits</h4>
      <p>
        Regular vet check-ups at the Best Pets Clinic near Rajajinagar ensure
        your pet’s health and longevity. Routine visits help in:
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Early detection of
            potential health issues
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Preventing diseases
            through vaccinations and timely treatments
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Providing expert
            nutritional and lifestyle guidance
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Keeping your pet
            happy and active for years to come
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
