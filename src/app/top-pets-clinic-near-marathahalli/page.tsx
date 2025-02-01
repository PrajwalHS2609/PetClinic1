import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import PetClinicsNearMarathahalliContent from "@/components/PetClinicsCities/PetClinicsNearMarathahalli/PetClinicsNearMarathahalliContent";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";
export const metadata = {
  title:
    "Top Pets Clinic near Marathahalli| Dog & Cats Clinic near Marathahalli",
  description:
    "Top Pets Clinic near Marathahalli is essential for every pet parent who wants to ensure their furry companions receive the best healthcare.",
  canonical: "https://petclinics.co.in/top-pets-clinic-near-marathahalli",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function PetClinicsNearMarathahalli() {
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
      <PetClinicsNearMarathahalliContent />
    </div>
  );
}
