import "@/components/Style/style.css";
import PetClinicsNearHsrWhy from "./PetClinicsNearHsrWhy";
import PetClinicsNearHsrService from "./PetClinicsNearHsrService";
import PetClinicsNearHsrDogClinic from "./PetClinicsNearHsrDogClinic";
import PetClinicsNearHsrCatClinic from "./PetClinicsNearHsrCatClinic";
import PetClinicsNearHsrHow from "./PetClinicsNearHsrHow";
// import CommonService from "./CommonService/CommonService";
export default function PetClinicsNearHsrContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Best Pets Clinic near HSR Layout – Comprehensive Pet Care for Your
          Furry Friends
        </h1>

        <p>
          Are you searching for the{" "}
          <a href="https://petclinics.co.in/pets-grooming-in-bangalore">
            best pets clinic near HSR Layout
          </a>{" "}
          to provide top-notch healthcare for your beloved pet? Whether you have
          a dog, cat, or any other furry companion, finding a reliable and
          experienced veterinary clinic is essential. At PetClinics.co.in, we
          connect you with the most trusted{" "}
          <a href="https://petclinics.co.in/pets-food-in-bangalore">
            pets clinic near HSR Layout
          </a>
          , ensuring the best care for your pet’s health and well-being.
        </p>
      </div>
      <PetClinicsNearHsrWhy/>
      <PetClinicsNearHsrService/>
      <PetClinicsNearHsrDogClinic/>
      <PetClinicsNearHsrCatClinic/>
      <PetClinicsNearHsrHow/>
    </div>
  );
}
