import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HealthFoodContent from "@/components/HealthFood/HealthFoodContent";
import HealthFoodHeader from "@/components/HealthFood/HealthFoodHeader";
import HealthFoodMain from "@/components/HealthFood/HealthFoodMain";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";
export const metadata = {
  title: "Pets Food in Bangalore | Dog & Cats Food Near Me",
  description:
    "Pets Food in Bangalore at Best Price, we provide dry kibble, wet food, raw diets, and specialized nutrition plans tailored to different breeds and life stages.",
  canonical: "https://petclinics.co.in/pets-food-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function HealthFood() {
  return (
    <div className="main-container">
      <HealthFoodHeader />
      <HealthFoodMain />
      <div className="main-content">
        <SubServiceTakeCare />
        <AboutUsKey />
        <ServiceForYou />
        <AboutUsTakeCare />
        <HomeTestimonial />
        <HomePartners />
        <HealthFoodContent />
      </div>
    </div>
  );
}
