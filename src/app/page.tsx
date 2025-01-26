import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomeContent from "@/components/HomePage/HomeContent";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeShop from "@/components/HomePage/HomeShop/HomeShop";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
export const metadata = {
  title: "Pet Clinics in Bangalore | Best Pet Clinics Near Me",
  description:
    "Pet Clinics in Bangalore for pet owners seeking the best care for their animals, we offer a wide range of services tailored to meet the needs of your beloved pets.",
  canonical: "https://petclinics.co.in",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function HomePage() {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeService />
      <PetsType />
      <HomeCare />
      <HomeShop />
      <AboutUsKey />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
      <HomeContent />
      
    </div>
  );
}
