import "@/components/Style/style.css";
import PetClinicsNearBanashankariWhyChoose from "./PetClinicsNearBanashankariWhyChoose";
import PetClinicsNearBanashankariService from "./PetClinicsNearBanashankariService";
import PetClinicsNearBanashankariDogClinic from "./PetClinicsNearBanashankariDogClinic";
import PetClinicsNearBanashankariCatClinic from "./PetClinicsNearBanashankariCatClinic";
import PetClinicsNearBanashankariHow from "./PetClinicsNearBanashankariHow";

export default function PetClinicsNearBanashankariContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Best Pets Clinic near Banashankari – Comprehensive Pet Care for Your
          Furry Friends{" "}
        </h1>

        <p>
          Are you searching for the best pets clinic near Banashankari to
          provide top-notch healthcare for your beloved pet? Whether you have a
          dog, cat, or any other furry companion, finding a reliable and
          experienced veterinary clinic is essential. At PetClinics.co.in, we
          connect you with the most trusted pets clinic near Banashankari,
          ensuring the best care for your pet’s health and well-being.
        </p>
      </div>
      <PetClinicsNearBanashankariWhyChoose />
      <PetClinicsNearBanashankariService />
      <PetClinicsNearBanashankariDogClinic />
      <PetClinicsNearBanashankariCatClinic />
      <PetClinicsNearBanashankariHow />
    </div>
  );
}
