import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearMalleshwaramCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Comprehensive Cats Clinic near Malleshwaram</h4>
      <p>
        If you are looking for a Cats Clinic near Malleshwaram, our clinic is
        fully equipped to offer specialized care for your feline companions. Our
        cat-friendly services include:
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
            Dental care and grooming services{" "}
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
      <p>
        We recognize that cats require a calm and soothing environment, and our
        team ensures they receive gentle and compassionate care.
      </p>
    </div>
  );
}
