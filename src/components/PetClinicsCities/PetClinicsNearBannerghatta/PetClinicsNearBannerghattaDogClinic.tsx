import { FaRegHandPointRight } from "react-icons/fa6";
import "@/components/Style/style.css";
export default function PetClinicsNearBannerghattaDogClinic() {
  return (
    <div className="contentList-container">
      <h4>Specialized Dogs Clinic near Bannerghatta Road</h4>
      <p>
        For dog owners looking for a Dogs Clinic near Bannerghatta Road, we
        offer specialized healthcare services for canines of all breeds and
        sizes. Our services include:
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
            Treatment for skin conditions and allergies{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Nutritional counseling and weight management{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Orthopedic care and mobility treatments{" "}
          </span>
        </li>
        <li>
          <span>
            <FaRegHandPointRight className="contentList-containerIcon" />
            Behavioral therapy and training guidance{" "}
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
