import GroomingHeader from "@/components/Grooming/GroomingHeader";
import GroomingMain from "@/components/Grooming/GroomingMain";
export const metadata = {
  title: "Pets Grooming in Bangalore | Dog & Cat Grooming Near Me",
  description:
    "Pets Grooming in Bangalore at Best Price, we understand the importance of maintaining your pet's hygiene and appearance with high-quality grooming services tailored to their specific needs.",
  canonical: "https://petclinics.co.in/pets-grooming-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function Grooming() {
  return (
    <div className="main-container">
      <GroomingHeader />
      <GroomingMain />
    </div>
  );
}
