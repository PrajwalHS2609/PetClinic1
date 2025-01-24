import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceShop from "../SubServiceComponent/SubServiceShop";
export default function TrainingMain() {
  return (
    <div className="subServicesMain-container">
      <div className="subServicesMain-content">
        <SubServiceComponentNav />
        <SubServiceShop />
      </div>
      <div className="subServicesMain-content">
        <div className="subServicesMain-itemWrapper">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/service-detail-6.webp"
            alt=""
          />
          <h1> Pets Training in Bangalore </h1>
          <p>
            Finding the best pets training in Bangalore is a top priority for
            pet owners who want to ensure their furry friends are well-behaved
            and properly trained. At PetClinics.co.in, we understand the
            concerns and needs of pet parents looking for a reliable and
            trustworthy place for their pets to receive professional training.
            Pets training in Bangalore offers a structured and effective
            approach to teaching obedience, socialization, and essential skills
            that keep pets happy and disciplined.
          </p>
        </div>
        <SubServiceContent />
      </div>
    </div>
  );
}
