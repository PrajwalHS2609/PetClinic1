import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeShop from "@/components/HomePage/HomeShop/HomeShop";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";

export default function HomePage() {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeService />
      <PetsType />
      <HomeCare />
      <HomeShop />
      <HomeTestimonial />
      <HomePartners />
    </div>
  );
}
