import { HiOutlineBadgeCheck } from "react-icons/hi";
import "@/components/Style/style.css";
export default function PetClinicsNearFrazerWhyChoose() {
  return (
    <div className="contentList-container">
      <h4>Why Choose the Best Pets Clinic near Banashankari?</h4>
      <p>
        Finding a reliable pet clinic is crucial for the well-being of your
        pets. At our Best Pets Clinic near Frazer Town, we offer:
      </p>
      <ul>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Experienced Veterinarians{" "}
          </span>
          <p>Our skilled vets provide comprehensive and compassionate care.</p>
        </li>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Advanced Medical Facilities{" "}
          </span>
          <p>
            Equipped with modern technology for accurate diagnosis and
            treatment.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Affordable Pet Healthcare{" "}
          </span>
          <p>High-quality services at reasonable prices.</p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />{" "}
            Convenient Location{" "}
          </span>
          <p>
            Easily accessible for pet owners in Frazer Town and surrounding
            areas.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />{" "}
            Emergency Services{" "}
          </span>
          <p>24/7 care for urgent medical needs.</p>
        </li>{" "}
      </ul>
    </div>
  );
}
