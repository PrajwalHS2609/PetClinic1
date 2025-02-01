import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearKoramangalaImp() {
  return (
    <div className="contentList-container">
      <h4>The Importance of Regular Veterinary Visits</h4>
      <p>
        Many pet owners wait until their pets show signs of illness before
        visiting a vet. Regular check-ups at the Top Pets Clinic near
        Koramangala help in:
      </p>
      <ul>
        <li>
          <span>
            <GoDot  className="contentList-containerIcon" /> Early
            detection of health problems{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot  className="contentList-containerIcon" />
            Preventive care to avoid severe diseases{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot  className="contentList-containerIcon" />
            Expert guidance on pet nutrition and lifestyle{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot  className="contentList-containerIcon" />
            Ensuring a longer and healthier life for your pets{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
