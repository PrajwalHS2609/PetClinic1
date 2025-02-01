import "@/components/Style/style.css";
import PetClinicsNearKoramangalaService from "./PetClinicsNearKoramangalaService";
import PetClinicsNearKoramangalaWhy from "./PetClinicsNearKoramangalaWhy";
import PetClinicsNearKoramangalaCatClinic from "./PetClinicsNearKoramangalaCatClinic";
import PetClinicsNearKoramangalaDogClinic from "./PetClinicsNearKoramangalaDogClinic";
import PetClinicsNearKoramangalaWhyChoose from "./PetClinicsNearKoramangalaWhyChoose";
import PetClinicsNearKoramangalaImp from "./PetClinicsNearKoramangalaImp";

// import CommonService from "./CommonService/CommonService";
export default function PetClinicsNearKoramangalaContent() {
  return (
    <div className="subServiceContent-container">
      <div className="subServicesMain-item">
        <h1>
          Top Pets Clinic near Koramangala – Exceptional Veterinary Care for
          Your Furry Friends
        </h1>

        <p>
          If you are looking for the{" "}
          <a href="https://petclinics.co.in/pets-grooming-in-bangalore">
            Top Pets Clinic near Koramangala
          </a>
          , PetClinics.co.in is your go-to destination for quality pet care. We
          are committed to offering the best healthcare services for dogs, cats,
          and other beloved pets. Our highly skilled veterinarians ensure your
          pets receive the best medical attention, helping them lead healthy and
          happy lives.
        </p>
      </div>
      <PetClinicsNearKoramangalaWhy />
      <PetClinicsNearKoramangalaService />
      <PetClinicsNearKoramangalaDogClinic />
      <PetClinicsNearKoramangalaCatClinic />
      <div className="subServicesMain-item">
        <h4>Experienced Vets near Koramangala</h4>

        <p>
          Our team of{" "}
          <a href="https://petcl inics.co.in/services">Vets near Koramangala</a>{" "}
          is highly experienced in diagnosing and treating various pet health
          conditions. Whether it’s a routine visit or an emergency, you can
          trust our veterinarians to provide compassionate and professional
          care.
        </p>
      </div>
      <PetClinicsNearKoramangalaWhyChoose />
      <PetClinicsNearKoramangalaImp />
      <div className="subServicesMain-item">
        <h4>Book an Appointment at Our Top Pets Clinic near Koramangala</h4>

        <p>
          Your pet’s health and happiness are our priority. At PetClinics.co.in,
          we are dedicated to providing the best care for your furry friends.
          Whether you need vaccinations, check-ups, or emergency care, we are
          here to help.
        </p>
        <p>
          Visit PetClinics.co.in or call us today to schedule an appointment
          with our{" "}
          <a href="https://petclinics.co.in/pets-boarding-in-bangalore">
            expert Vets near Koramangala
          </a>
          . Let us be your trusted partner in pet healthcare!
        </p>
      </div>
    </div>
  );
}
