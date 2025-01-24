import SubServiceComponentNav from "../SubServiceComponent/SubServiceComponentNav";
import "@/components/Style/style.css";
import SubServiceContent from "../SubServiceComponent/SubServiceContent";
import SubServiceShop from "../SubServiceComponent/SubServiceShop";
export default function HealthFoodMain() {
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
          <h1>Pets Food in Bangalore </h1>
          <p>
            Finding the best pets food in Bangalore is crucial for pet owners
            who want to ensure their furry companions receive the right
            nutrition for a healthy and happy life. At PetClinics.co.in, we
            understand the importance of providing high-quality and nutritious
            food that meets the specific dietary needs of pets. Pets food in
            Bangalore is available in a variety of options, including dry
            kibble, wet food, raw diets, and specialized nutrition plans
            tailored to different breeds and life stages.
          </p>
        </div>
        <SubServiceContent />
      </div>
    </div>
  );
}
