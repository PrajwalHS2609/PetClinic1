import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import PetClinicsNearMalleshwaramContent from "@/components/PetClinicsCities/PetClinicsNearMalleshwaram/PetClinicsNearMalleshwaramContent";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";
export const metadata = {
  title: "Best Pets Clinic near Malleshwaram| Dog & Cats Clinic near Malleshwaram",
  description:
    "Best Pets Clinic near Malleshwaram is essential for every pet parent who wants to ensure their furry companions receive the best healthcare. ",
  canonical: "https://petclinics.co.in/best-pets-clinic-near-malleshwaram",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function MalleshwaramLayoutPage() {
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
      <PetClinicsNearMalleshwaramContent/>
    </div>
  );
}
