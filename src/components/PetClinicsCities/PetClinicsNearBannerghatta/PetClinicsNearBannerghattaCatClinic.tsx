import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearBannerghattaCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Comprehensive Cats Clinic near Bannerghatta Road</h4>
      <p>
        If you need a Cats Clinic near Bannerghatta Road, our clinic offers
        feline-focused healthcare services in a stress-free environment. Our
        services include:
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
            x`` Diagnosis and treatment of urinary tract infections and kidney
            diseases
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            x`` Gentle and stress-free consultations{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            x`` Dental care and grooming services{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            x`` Personalized nutritional plans for optimal health{" "}
          </span>
        </li>
      </ul>
      <p>
        Our team understands the unique needs of cats and ensures they receive
        compassionate and professional care.
      </p>
    </div>
  );
}
