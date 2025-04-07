import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import BellandurPetClinicContent from "@/components/PetClinicsCities/BellandurPetClinic/BellandurPetClinicContent";
import BellandurPetClinicHead from "@/components/PetClinicsCities/BellandurPetClinic/BellandurPetClinicHead";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
export const metadata = {
  title: "Pets Clinic near Bellandur | Dog & Cats Clinics Near Me",
  description:
    "Pets Clinic near Bellandur, Bangalore is essential for any pet owner who values the health, comfort, and happiness of their furry companions.",
  canonical: "https://petclinics.co.in/pets-clinic-near-bellandur",
  keywords: [
    "Haircut and styling, Hair color specialists, Manicure and pedicure, Nail art designs",
    "Spa and wellness, Bridal makeup services, Beard styling and trimming",
  ],
};
export default function BellandurPetClinics() {
  return (
    <div className="main-container">
      <HomeHeader />
      <BellandurPetClinicHead />
      <ServiceForYou />
      <HomeService />
      <PetsType />
      <HomeCare />
      <AboutUsKey />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
      <BellandurPetClinicContent />
    </div>
  );
}
