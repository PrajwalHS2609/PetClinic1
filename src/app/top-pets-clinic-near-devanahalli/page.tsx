import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import DevanahalliPetClinicContent from "@/components/PetClinicsCities/DevanahalliPetClinic/DevanahalliPetClinicContent";
import DevanahalliPetClinicHead from "@/components/PetClinicsCities/DevanahalliPetClinic/DevanahalliPetClinicHead";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
export const metadata = {
  title: "Top Pets Clinic near Devanahalli | Dog & Cats Clinics Near Me",
  description:
    "Top Pets Clinic near Devanahalli, Bangalore is essential for any pet owner who values the health, comfort, and happiness of their furry companions.",
  canonical: "https://petclinics.co.in/top-pets-clinic-near-devanahalli",
  keywords: [
    "Haircut and styling, Hair color specialists, Manicure and pedicure, Nail art designs",
    "Spa and wellness, Bridal makeup services, Beard styling and trimming",
  ],
};
export default function DevanahalliPetClinics() {
  return (
    <div className="main-container">
      <HomeHeader />
      <DevanahalliPetClinicHead />
      <ServiceForYou />
      <HomeService />
      <PetsType />
      <HomeCare />
      <AboutUsKey />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
      <DevanahalliPetClinicContent />
    </div>
  );
}
