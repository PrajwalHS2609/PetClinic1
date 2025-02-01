import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearRajajinagarCatClinic() {
  return (
    <div className="contentList-container">
      <h4>Comprehensive Cats Clinic near Rajajinagar</h4>
      <p>
        If you’re looking for a Cats Clinic near Rajajinagar, our clinic
        provides specialized care tailored to feline health needs. Our services
        include:
      </p>
      <ul>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Regular wellness check-ups{" "}
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
            Stress-free consultations for nervous cats{" "}
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
            Customized diet and nutrition plans{" "}
          </span>
        </li>
      </ul>
      <p>
        We ensure a calm and comfortable environment to keep your feline
        companions relaxed during their visits.
      </p>
    </div>
  );
}
