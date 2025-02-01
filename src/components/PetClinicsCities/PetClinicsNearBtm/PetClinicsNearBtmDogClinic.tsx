import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearBtmDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Dogs Clinic near BTM Layout – Specialized Canine Care</h4>
      <p>
        For dog owners looking for a Dogs Clinic near BTM Layout, we offer
        dedicated care to ensure your pup stays healthy and happy. Our canine
        services include:
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
            Treatment for skin and ear infections{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional counseling{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Orthopedic care for joint problems{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Behavioral training support{" "}
          </span>
        </li>{" "}
      </ul>
      <p>
        Our experienced veterinarians are well-versed in treating all dog
        breeds, from small puppies to large breeds, ensuring they receive the
        best possible care.
      </p>
    </div>
  );
}
