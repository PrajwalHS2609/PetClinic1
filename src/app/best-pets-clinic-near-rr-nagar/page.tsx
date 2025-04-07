import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import RRNagarPetClinicsContent from "@/components/PetClinicsCities/RRNagarPetClinics/RRNagarPetClinicsContent";
import RRNagarPetClinicsHead from "@/components/PetClinicsCities/RRNagarPetClinics/RRNagarPetClinicsHead";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
export const metadata = {
  title: "Best Pets Clinic near RR Nagar | Dog & Cats Clinics Near Me",
  description:
    "Best Pets Clinic near RR Nagar, Bangalore is essential for any pet owner who values the health, comfort, and happiness of their furry companions.",
  canonical: "https://petclinics.co.in/best-pets-clinic-near-rr-nagar",
  keywords: [
    "Haircut and styling, Hair color specialists, Manicure and pedicure, Nail art designs",
    "Spa and wellness, Bridal makeup services, Beard styling and trimming",
  ],
};
export default function RRNagarPetClinics() {
  return (
    <div className="main-container">
      <HomeHeader />
      <RRNagarPetClinicsHead />
      <ServiceForYou />
      <HomeService />
      <PetsType />
      <HomeCare />
      <AboutUsKey />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
      <RRNagarPetClinicsContent />
    </div>
  );
}
