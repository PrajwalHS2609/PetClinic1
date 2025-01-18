import ContactUsHeader from "@/components/ContactUsPage/ContactUsHeader";
import ContactUsMain from "@/components/ContactUsPage/ContactUsMain";
import ContactUsMap from "@/components/ContactUsPage/ContactUsMap";
import HomePartners from "@/components/HomePage/HomePartners/HomePartners";

export default function ContactUs() {
  return (
    <div className="main-container">
      <ContactUsHeader />
      <ContactUsMain />
      <ContactUsMap />
      <HomePartners />
    </div>
  );
}
