import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";
import TrainingContent from "@/components/Training/TrainingContent";
import TrainingHeader from "@/components/Training/TrainingHeader";
import TrainingMain from "@/components/Training/TrainingMain";
export const metadata = {
  title: "Pets Training in Bangalore | Dog & Cat Training Near Me",
  description:
    "Pets Training in Bangalore at Best Price offers a structured and effective approach to teaching obedience, socialization, and essential skills that keep pets happy and disciplined.",
  canonical: "https://petclinics.co.in/pets-training-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function Training() {
  return (
    <div className="main-container">
      <TrainingHeader />
      <TrainingMain />
      <div className="main-content">
        <SubServiceTakeCare />
        <AboutUsKey />
        <ServiceForYou />
        <AboutUsTakeCare />
        <HomeTestimonial />
        <HomePartners />
        <TrainingContent />
      </div>
    </div>
  );
}
