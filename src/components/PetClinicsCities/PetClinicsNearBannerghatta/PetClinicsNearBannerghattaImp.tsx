import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearBannerghattaImp() {
  return (
    <div className="contentList-container">
      <h4>The Importance of Regular Vet Visits</h4>
      <p>
        Regular veterinary visits at the{" "}
        <a href="https://petclinics.co.in/pets-training-in-bangalore">
          Best Pets Clinic near Bannerghatta Road
        </a>
        help ensure your pet’s long-term health. Routine check-ups offer:
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Early detection of
            health concerns
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> A compassionate and
            pet-friendly approach
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Use of modern
            diagnostic and treatment methods
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" /> Customized treatment
            plans tailored to each pet’s needs
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
