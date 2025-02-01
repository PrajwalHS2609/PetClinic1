import "@/components/Style/style.css";
import PetClinicsNearBtmWhyChoose from "./PetClinicsNearBtmWhyChoose";
import PetClinicsNearBtmService from "./PetClinicsNearBtmService";
import PetClinicsNearBtmDogClinic from "./PetClinicsNearBtmDogClinic";
import PetClinicsNearBtmCatClinic from "./PetClinicsNearBtmCatClinic";
import PetClinicsNearBtmTrust from "./PetClinicsNearBtmTrust";

// import CommonService from "./CommonService/CommonService";
export default function PetClinicsNearBtmContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Pets Clinic near BTM Layout – Comprehensive Veterinary Care for Your
          Furry Friends
        </h1>

        <p>
          If you are searching for a Pets Clinic near BTM Layout, look no
          further! At PetClinics.co.in, we offer top-notch veterinary services
          tailored to meet the unique needs of your beloved pets. Whether you
          have a playful pup or a curious kitten, our expert veterinarians
          provide high-quality care to ensure their well-being.
        </p>
      </div>
      <PetClinicsNearBtmWhyChoose />
      <PetClinicsNearBtmService />
      <PetClinicsNearBtmDogClinic />
      <PetClinicsNearBtmCatClinic />
      <PetClinicsNearBtmTrust />
      <div className="subServicesMain-item">
        <h4>Book an Appointment at Our Pets Clinic near BTM Layout</h4>

        <p>
          Your pet deserves the best care, and our Pets Clinic near BTM Layout
          is here to provide it. Whether you need a routine check-up,
          vaccinations, or specialized treatment, we are committed to ensuring
          your pet's health and happiness.
        </p>
        <p>
          Visit PetClinics.co.in or call us today to book an appointment with
          our expert vets near BTM Layout. Let us be your trusted partner in pet
          care!
        </p>
      </div>
    </div>
  );
}
