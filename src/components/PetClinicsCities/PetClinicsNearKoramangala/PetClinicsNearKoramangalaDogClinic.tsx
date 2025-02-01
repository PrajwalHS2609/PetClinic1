import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearKoramangalaDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Dogs Clinic near Koramangala – Specialized Canine Care</h4>
      <p>
        For pet owners searching for a Dogs Clinic near Koramangala, we offer
        specialized services tailored for dogs of all breeds and sizes. Our
        canine care includes:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Vaccinations and deworming{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Treatment for skin allergies and infections{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional counseling for optimal health{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Orthopedic treatments for joint and bone issues{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Behavioral therapy and training advice{" "}
          </span>
        </li>
      </ul>
    </div>
  );
}
