import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearFrazerDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Specialized Dogs Clinic near Frazer Town</h4>
      <p>
        If you're searching for a Dogs Clinic near Frazer Town, we offer
        specialized healthcare for dogs of all breeds and sizes. Our services
        for dogs include:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Vaccination and deworming programs{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Treatment for skin infections and allergies{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional counseling and diet plans{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Orthopedic care and rehabilitation{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Behavioral therapy and training advice{" "}
          </span>
        </li>
      </ul>
      <p>
        Our dedicated team ensures that your canine companions receive the best
        possible care.
      </p>
    </div>
  );
}
