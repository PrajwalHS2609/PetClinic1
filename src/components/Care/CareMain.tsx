import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceShop from "../SubServiceComponent/SubServiceShop";
export default function CareMain() {
  return (
    <div className="subServicesMain-container">
      <div className="subServicesMain-content">
        <SubServiceComponentNav />
        <SubServiceShop />
      </div>
      <div className="subServicesMain-content">
        '{" "}
        <div className="subServicesMain-itemWrapper">
          <img
            src="https://pettie.wpengine.com/wp-content/uploads/2023/05/service-detail-6.webp"
            alt=""
          />
          <h1>Pets Clinic in Bangalore </h1>
          <p>
            Finding the best pets clinics in Bangalore is essential for pet
            owners who want to ensure their furry friends receive the highest
            standard of healthcare. At PetClinics.co.in, we understand the needs
            of pet parents looking for reliable and professional veterinary
            services. Pets clinics in Bangalore provide comprehensive healthcare
            solutions, including routine check-ups, vaccinations, emergency
            care, and specialized treatments to keep pets healthy and happy.
          </p>
        </div>
        <SubServiceContent />
      </div>
    </div>
  );
}
