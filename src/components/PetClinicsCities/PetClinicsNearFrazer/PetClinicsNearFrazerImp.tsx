import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearFrazerImp() {
  return (
    <div className="contentList-container">
      <h4>Importance of Regular Vet Visits </h4>
      <p>
        Regular visits to the{" "}
        <a href="https://petclinics.co.in/pets-boarding-in-bangalore">
          Best Pets Clinic near Frazer Town
        </a>{" "}
        are essential for maintaining your pet’s overall health. Routine vet
        check-ups help in:
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> • Early detection of
            potential health issues
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />• Preventing diseases
            through timely vaccinations
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />• Expert guidance on
            diet, exercise, and pet care
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />• Ensuring your pet’s
            long-term health and happiness{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
