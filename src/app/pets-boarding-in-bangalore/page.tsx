import BoardingHeader from "@/components/Boarding/BoardingHeader";
import BoardingMain from "@/components/Boarding/BoardingMain";
export const metadata = {
  title: "Pets Boarding in Bangalore | Dog & Cat Boarding Near Me",
  description:
    "Pets Boarding in Bangalore at Best Price offers a safe and comfortable environment where pets receive personalized care, proper nutrition, and ample playtime to keep them happy and healthy.",
  canonical: "https://petclinics.co.in/pets-boarding-in-bangalore",
  keywords: [
    "Pet clinic, Veterinary clinic, Dog clinic, Cat clinic",
    "Pet clinic in Bangalore, Best pet clinic in Bangalore, Bangalore",
  ],
};
export default function Boarding() {
  return (
    <div className="main-container">
      <BoardingHeader />
      <BoardingMain />
    </div>
  );
}
