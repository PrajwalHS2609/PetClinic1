import { HiOutlineBadgeCheck } from "react-icons/hi";
import "@/components/Style/style.css";
export default function PetClinicsNearKoramangalaWhy() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Top Pets Clinic near Koramangala?</h4>
      <p>
        Finding a reliable Top Pets Clinic near Koramangala is essential for pet
        owners who want comprehensive and compassionate care for their furry
        companions. Here’s what sets us apart:
      </p>
      <ul>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Expert Veterinary Team{" "}
          </span>
          <p>
            Our experienced veterinarians provide top-notch care tailored to the
            unique needs of your pet.
          </p>
        </li>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Comprehensive Pet Care Services:{" "}
          </span>
          <p>
             From regular check-ups to advanced medical treatments, we offer a
            full spectrum of veterinary services.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Affordable Pricing:{" "}
          </span>
          <p>
            Quality pet care should be accessible to all, and we ensure that our
            services are budget-friendly.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />{" "}
            Convenient Location{" "}
          </span>
          <p>
            Our Top Pets Clinic near Koramangala is easily accessible, making it
            convenient for pet owners in and around the area.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
}
