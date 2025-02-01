import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearKoramangalaCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Cats Clinic near Koramangala – Comprehensive Feline Healthcare</h4>
      <p>
        If you need a Cats Clinic near Koramangala, our clinic is the perfect
        place for your feline friends. We provide:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Routine health check-ups and preventive care{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Specialized treatments for kidney and urinary tract infections{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Dental care to prevent oral diseases{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Stress-free consultations for anxious cats{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional guidance for a balanced diet{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}
