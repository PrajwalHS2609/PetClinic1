import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceTakeCare from "../SubServiceComponent/SubServiceTakeCare";
import GroomingContent from "./GroomingContent";

export default function GroomingMain() {
  return (
    <div className="subServicesMain-container">
      <div className="subServicesMain-content">
        <SubServiceComponentNav />
      </div>
      <div className="subServicesMain-content">
        <div className="subServicesMain-item">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/service-detail-6.webp"
            alt=""
          />
          <p>
          Finding the <a href="https://petclinics.co.in/pets-grooming-in-bangalore">best pet grooming in Bangalore </a> is essential for pet owners
          who want their furry companions to look and feel their best. At
          PetClinics.co.in, we understand the importance of maintaining your
          pet's hygiene and appearance with high-quality <a href="https://petclinics.co.in/pets-grooming-in-bangalore"> grooming services</a>
          tailored to their specific needs. Whether you own a dog, cat, or small
          pet, pet grooming in Bangalore offers a range of services to keep your
          pet healthy and happy.
          </p>
        </div>
        <SubServiceContent />
        <SubServiceTakeCare />
        <GroomingContent />
      </div>
    </div>
  );
}
