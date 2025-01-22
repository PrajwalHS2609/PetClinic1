import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceTakeCare from "../SubServiceComponent/SubServiceTakeCare";
import DogWalkerContent from "./DogWalkerContent";
export default function DogWalkerMain() {
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
          <h1>Dog Walkers in Bangalore </h1>
          <p>
            Finding the best dog walkers in Bangalore is essential for pet
            owners who want to ensure their furry friends receive regular
            exercise and care. At PetClinics.co.in, we understand the needs of
            pet parents looking for reliable and professional dog walking
            services. Dog walkers in Bangalore provide comprehensive pet care
            solutions, including regular walks, playtime, and companionship to
            keep dogs healthy and happy.
          </p>
        </div>
        <SubServiceContent />
        <SubServiceTakeCare />
        <DogWalkerContent />
      </div>
    </div>
  );
}
