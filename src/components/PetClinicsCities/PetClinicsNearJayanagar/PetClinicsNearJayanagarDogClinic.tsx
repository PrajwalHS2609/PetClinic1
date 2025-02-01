import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearJayanagarDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Finding a Reliable Dogs Clinic near Jayanagar</h4>
      <p>
        If you are a dog owner, finding a specialized dogs clinic near Jayanagar
        is crucial for your pet’s well-being. These clinics offer services such
        as:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Canine vaccinations and parasite control{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Treatment for skin and coat issues{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Orthopedic care and physical therapy{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional and behavioral counseling{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
