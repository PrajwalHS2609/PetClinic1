import { GoDot } from "react-icons/go";
import "@/components/Style/style.css";
export default function PetClinicsNearBtmTrust() {
  return (
    <div className="contentList-container">
      <h4>Why Trust Our Vets?</h4>
      <p>
        For dog owners looking for a Dogs Clinic near BTM Layout, we offer
        dedicated care to ensure your pup stays healthy and happy. Our canine
        services include:
      </p>
      <ul>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Highly trained and experienced professionals{" "}
          </span>
        </li>
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Compassionate approach towards pets{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Personalized treatment plans{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <GoDot className="contentList-containerIcon" />
            Use of the latest medical technology{" "}
          </span>
        </li>{" "}
      </ul>
    </div>
  );
}
