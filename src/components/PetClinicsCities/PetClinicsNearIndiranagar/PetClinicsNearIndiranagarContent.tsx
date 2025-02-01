import "@/components/Style/style.css";
import PetClinicsNearIndiranagarWhy from "./PetClinicsNearIndiranagarWhy";
import PetClinicsNearIndiranagarService from "./PetClinicsNearIndiranagarService";
import PetClinicsNearIndiranagarDogClinic from "./PetClinicsNearIndiranagarDogClinic";
import PetClinicsNearIndiranagarCatClinic from "./PetClinicsNearIndiranagarCatClinic";
import PetClinicsNearIndiranagarHow from "./PetClinicsNearIndiranagarHow";

// import CommonService from "./CommonService/CommonService";
export default function PetClinicsNearIndiranagarContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Best Pets Clinic near Indiranagar – Comprehensive Pet Care for Your
          Furry Friends
        </h1>

        <p>
          Are you searching for the best pets clinic near Indiranagar to provide
          top-notch healthcare for your beloved pet? Whether you have a dog,
          cat, or any other furry companion, finding a reliable and experienced
          veterinary clinic is essential. At PetClinics.co.in, we connect you
          with the most trusted pets clinic near Indiranagar, ensuring the best
          care for your pet’s health and well-being.
        </p>
      </div>
      <PetClinicsNearIndiranagarWhy />
      <PetClinicsNearIndiranagarService />
      <PetClinicsNearIndiranagarDogClinic />
      <PetClinicsNearIndiranagarCatClinic />
      <PetClinicsNearIndiranagarHow />
    </div>
  );
}
