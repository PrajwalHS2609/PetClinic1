import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";

export default function AboutUs() {
  return (
    <div className="main-container">
      <AboutUsHeader />
      <HomeCare />
      <ServiceForYou />
      <HomePartners />
    </div>
  );
}
