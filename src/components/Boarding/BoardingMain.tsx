import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceShop from "../SubServiceComponent/SubServiceShop";
export default function BoardingMain() {
  return (
    <div className="subServicesMain-container">
      <div className="subServicesMain-content">
        <SubServiceComponentNav />
        <SubServiceShop/>
      </div>
      <div className="subServicesMain-content">
        <div className="subServicesMain-itemWrapper" id="subServicesMain-idItem">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/service-detail-6.webp"
            alt=""
          />
          <h1>Pets Boarding in Bangalore</h1>
          <p>
            Finding the best pet boarding in Bangalore is a top priority for pet
            owners who want to ensure their furry friends are well cared for
            while they are away. At PetClinics.co.in, we understand the concerns
            and needs of pet parents looking for a reliable and trustworthy
            place for their pets. Pet boarding in Bangalore offers a safe and
            comfortable environment where pets receive personalized care, proper
            nutrition, and ample playtime to keep them happy and healthy.
          </p>
        </div>
        <SubServiceContent />
      </div>
    </div>
  );
}
