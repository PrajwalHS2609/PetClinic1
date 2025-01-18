import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import PetsType from "@/components/HomePage/PetsType/PetsType";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import ServicesHeader from "@/components/ServicesPage/ServicesHeader/ServicesHeader";

export default function ServicePage() {
  return (
    <div className="main-container">
      <ServicesHeader />
      <ServiceForYou/>
      <HomeService />
      <PetsType />
      <HomeTestimonial />
    </div>
  );
}
