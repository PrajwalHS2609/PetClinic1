import AboutUsContent from "@/components/AboutUs/AboutUsContent";
import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeCare from "@/components/HomePage/HomeCare/HomeCare";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";

export default function AboutUs() {
  return (
    <div className="main-container">
      <AboutUsHeader />
      <AboutUsContent/>
      <HomeCare />
      <AboutUsKey />
      <ServiceForYou />
      <AboutUsTakeCare />
      <HomeTestimonial />
      <HomePartners />
    </div>
  );
}
