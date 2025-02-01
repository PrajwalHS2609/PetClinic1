import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearHsrCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Specialized Cats Clinic near HSR Layout</h4>
      <p>
        Cat owners can benefit from a dedicated cats clinic near HSR Layout,
        where experienced veterinarians offer feline-specific treatments.
        Services include:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Vaccination and deworming{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Dental and oral care for cats{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Management of feline diseases{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Spaying and neutering services{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
