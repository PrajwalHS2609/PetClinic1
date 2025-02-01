import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearBtmCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Cats Clinic near BTM Layout – Comprehensive Feline Healthcare</h4>
      <p>
        Cat lovers will find our Cats Clinic near BTM Layout the perfect place
        for their feline companions. Our specialized services for cats include:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Routine health check-ups{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Treatment for kidney and urinary tract issues{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Vaccinations and parasite control{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Dental cleanings{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Stress-free consultations for anxious cats{" "}
          </span>
        </li>{" "}
      </ul>
      <p>
        We understand the unique healthcare needs of cats and provide a
        stress-free environment to make their visit as comfortable as possible.
      </p>
    </div>
  );
}
