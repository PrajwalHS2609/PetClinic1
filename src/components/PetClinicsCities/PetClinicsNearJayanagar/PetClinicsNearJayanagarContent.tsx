import "@/components/Style/style.css";
import PetClinicsNearJayanagarWhy from "./PetClinicsNearJayanagarWhy";
import PetClinicsNearJayanagarHow from "./PetClinicsNearJayanagarHow";
import PetClinicsNearJayanagarService from "./PetClinicsNearJayanagarService";
import PetClinicsNearJayanagarDogClinic from "./PetClinicsNearJayanagarDogClinic";
import PetClinicsNearJayanagarCatClinic from "./PetClinicsNearJayanagarCatsClinic";
// import CommonService from "./CommonService/CommonService";
export default function PetClinicsNearJayanagarContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Best Pets Clinic near Jayanagar – Comprehensive Pet Care for Your
          Furry Friends
        </h1>

        <p>
          Are you searching for the best pets clinic near Jayanagar to provide
          top-notch healthcare for your beloved pet? Whether you have a dog,
          cat, or any other furry companion, finding a reliable and experienced
          veterinary clinic is essential. At PetClinics.co.in, we connect you
          with the most trusted pets clinic near Jayanagar, ensuring the best
          care for your pet’s health and well-being.
        </p>
      </div>
      <PetClinicsNearJayanagarWhy />
      <PetClinicsNearJayanagarService />
      <PetClinicsNearJayanagarDogClinic />
      <PetClinicsNearJayanagarCatClinic />
      <PetClinicsNearJayanagarHow />
    </div>
  );
}
