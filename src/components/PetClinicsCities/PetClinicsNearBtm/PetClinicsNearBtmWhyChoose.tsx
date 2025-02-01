import { HiOutlineBadgeCheck } from "react-icons/hi";
import "@/components/Style/style.css";
export default function PetClinicsNearBtmWhyChoose() {
  return (
    <div className="contentList-container">
      <h4>Why Choose Our Pets Clinic near BTM Layout?</h4>
      <p>
        Finding a trusted{" "}
        <a href="https://petclinics.co.in/pets-food-in-bangalore">
          Pets Clinic near BTM Layout
        </a>{" "}
        is crucial for pet parents who want the best for their furry companions.
        Our clinic is equipped with modern medical facilities and a team of
        experienced veterinarians committed to providing compassionate and
        effective care. Here’s why we stand out:
      </p>
      <ul>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Expert Veterinary Care{" "}
          </span>
          <p>
            Our experienced vets provide thorough check-ups, preventive care,
            and specialized treatments for dogs and cats.
          </p>
        </li>
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />•
            Comprehensive Services
          </span>
          <p>
            From vaccinations to surgical procedures, we offer a full range of
            medical services for pets.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />
            Affordable Pricing{" "}
          </span>
          <p>
            Quality pet care should be accessible, and we ensure our pricing is
            budget-friendly.
          </p>
        </li>{" "}
        <li>
          <span>
            <HiOutlineBadgeCheck className="contentList-containerIcon" />{" "}
            Convenient Location{" "}
          </span>
          <p>
            Our Pets Clinic near BTM Layout is easily accessible, making visits
            hassle-free for pet owners in and around the area.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
}
