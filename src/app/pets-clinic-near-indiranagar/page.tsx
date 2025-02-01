import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import PetClinicsNearIndiranagarContent from "@/components/PetClinicsCities/PetClinicsNearIndiranagar/PetClinicsNearIndiranagarContent";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";
export const metadata = {
  title: "Pets Clinic near Indiranagar| Dog & Cats Clinic near Indiranagar",
  description:
    "Best Pets Clinic near Indiranagar is essential for every pet parent who wants to ensure their furry companions receive the best healthcare. ",
  canonical: "https://petclinics.co.in/pets-clinic-near-indiranagar",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function IndiranagarPage() {
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
      <PetClinicsNearIndiranagarContent/>
    </div>
  );
}
