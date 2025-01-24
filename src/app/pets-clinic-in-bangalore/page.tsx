import CareContent from "@/components/Care/CareContent";
import CareHeader from "@/components/Care/CareHeader";
import CareMain from "@/components/Care/CareMain";
import SubServiceTakeCare from "@/components/SubServiceComponent/SubServiceTakeCare";
export const metadata = {
  title: "Pets Clinic in Bangalore | Dog & Cat Clinic Near Me",
  description:
    "Pets Clinic in Bangalore at Best Price, including routine check-ups, vaccinations, emergency care, and specialized treatments to keep pets healthy and happy.",
  canonical: "https://petclinics.co.in/pets-clinic-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function Carousel() {
  return (
    <div className="main-container">
      <CareHeader />
      <CareMain />
          <div className="main-content">
          <SubServiceTakeCare />
          <CareContent />
          </div>
    </div>
  );
}
