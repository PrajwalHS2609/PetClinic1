import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import PetClinicsNearBanashankariContent from "@/components/PetClinicsCities/PetClinicsNearBanashankari/PetClinicsNearBanashankariContent";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";
export const metadata = {
  title: "Top Pets Clinic near Banashankari | Dog & Cats Clinics Near Me",
  description:
    " Top Pets Clinic near Banashankari, Bangalore is essential for any pet owner who values the health, comfort, and happiness of their furry companions.",
  canonical: "https://petclinics.co.in/best-pets-clinic-near-banashankar",
  keywords: [
    "Haircut and styling, Hair color specialists, Manicure and pedicure, Nail art designs",
    "Spa and wellness, Bridal makeup services, Beard styling and trimming",
  ],
};
export default function BanashankariLayoutPage() {
  return (
    <div className="main-container">
      <ServicesHeader />
      <ServiceForYou />
      <HomeService />
      <PetsType />
      <HomeCare />
      <AboutUsKey />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
      <PetClinicsNearBanashankariContent />
    </div>
  );
}
