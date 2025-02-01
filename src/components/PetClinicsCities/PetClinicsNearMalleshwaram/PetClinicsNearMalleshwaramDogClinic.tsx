import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearMalleshwaramDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Specialized Dogs Clinic near Malleshwaram</h4>
      <p>
        For dog owners looking for a Dogs Clinic near Malleshwaram, we provide
        specialized care tailored to canines of all breeds and sizes. Our
        services include:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Vaccinations and parasite prevention{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Treatment for skin conditions and allergies{" "}
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
            <FaRegHandPointRight className="contentList-containerIcon" />•
            Orthopedic treatments for joint and mobility issues{" "}
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
        Our experienced veterinarians understand the unique healthcare needs of
        dogs and are committed to providing the best possible care.
      </p>
    </div>
  );
}
