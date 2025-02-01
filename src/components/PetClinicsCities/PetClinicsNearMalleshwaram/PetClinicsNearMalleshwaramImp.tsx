import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearMalleshwaramImp() {
  return (
    <div className="contentList-container">
      <h4>The Importance of Regular Vet Visits</h4>
      <p>
        Regular veterinary visits at the Best Pets Clinic near Malleshwaram help
        ensure your pet’s well-being. Routine check-ups provide:
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Early detection of
            health issues{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Preventive care to
            avoid severe diseases
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Expert guidance on
            pet nutrition and lifestyle{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> A longer, healthier
            life for your furry friends{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
