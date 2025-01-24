import AboutUsKey from "@/components/AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "@/components/AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import DogWalkerHeader from "@/components/DogWalker/DogWalkeHeader";
import DogWalkerContent from "@/components/DogWalker/DogWalkerContent";
import DogWalkerMain from "@/components/DogWalker/DogWalkerMain";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceForYou from "@/components/ServicesPage/ServiceForYou/ServiceForYou";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";

export default function DogWalker() {
  return (
    <div className="main-container">
      <DogWalkerHeader />
      <DogWalkerMain />
      <div className="main-content">
        <SubServiceTakeCare />
        <AboutUsKey />
        <ServiceForYou />
        <AboutUsTakeCare />
        <HomeTestimonial />
        <HomePartners />
        <DogWalkerContent />
      </div>
    </div>
  );
}
