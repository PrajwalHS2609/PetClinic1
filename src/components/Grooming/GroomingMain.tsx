import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceShop from "../SubServiceComponent/SubServiceShop";

export default function GroomingMain() {
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
          <h1>Pets Grooming in Bangalore</h1>
          <p>
            Finding the best pet grooming in Bangalore is essential for pet
            owners who want their furry companions to look and feel their best.
            At PetClinics.co.in, we understand the importance of maintaining
            your pet's hygiene and appearance with high-quality grooming
            services tailored to their specific needs. Whether you own a dog,
            cat, or small pet, pet grooming in Bangalore offers a range of
            services to keep your pet healthy and happy.
          </p>
        </div>
        <SubServiceContent />
      </div>
    </div>
  );
}
