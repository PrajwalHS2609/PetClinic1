import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import BoardingContent from "@/components/Boarding/BoardingContent";
import BoardingHeader from "@/components/Boarding/BoardingHeader";
import BoardingMain from "@/components/Boarding/BoardingMain";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";
export const metadata = {
  title: "Pets Boarding in Bangalore | Dog & Cat Boarding Near Me",
  description:
    "Pets Boarding in Bangalore at Best Price offers a safe and comfortable environment where pets receive personalized care, proper nutrition, and ample playtime to keep them happy and healthy.",
  canonical: "https://petclinics.co.in/pets-boarding-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function Boarding() {
  return (
    <div className="main-container">
      <BoardingHeader />
      <BoardingMain />
      <div className="main-content">
        <SubServiceTakeCare />
        <AboutUsKey />
        <ServiceForYou />
        <AboutUsTakeCare />
        <HomeTestimonial />
        <HomePartners />
        <BoardingContent />
      </div>
    </div>
  );
}
