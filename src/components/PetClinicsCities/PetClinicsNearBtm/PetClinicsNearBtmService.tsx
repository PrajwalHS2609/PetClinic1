import "@/components/Style/style.css";
export default function PetClinicsNearBtmService() {
  return (
    <div className="contentList-container">
      <h4>Services Offered at Our Pets Clinic near BTM Layout</h4>
      <p>
        Our clinic provides a broad range of veterinary services to ensure your
        pets receive the best possible care.
      </p>
      <ul>
        <li>
          <span>
            <h5>General Health Check-ups </h5>
          </span>
          <p>
            Routine health check-ups are essential for early detection of
            illnesses. Our vets perform thorough physical exams, assess weight,
            dental health, and overall well-being.
          </p>
        </li>
        <li>
          <span>
            {" "}
            <h5>Vaccinations and Preventive Care</h5>
          </span>
          <p>
            Keep your pets safe with timely vaccinations against rabies,
            distemper, parvovirus, and more. We also offer flea, tick, and
            heartworm prevention treatments.
          </p>
        </li>{" "}
        <li>
          <span>
            {" "}
            <h5>Surgical Procedures</h5>
          </span>
          <p>
            Our expert veterinarians perform surgeries, including spaying,
            neutering, and emergency operations, using state-of-the-art
            equipment.
          </p>
        </li>{" "}
        <li>
          <span>
            {" "}
            <h5>Emergency and Critical Care</h5>
          </span>
          <p>
            In case of sudden illness or accidents, our emergency care services
            ensure that your pet receives immediate medical attention.
          </p>
        </li>{" "}
        <li>
          <span>
            {" "}
            <h5> Grooming & Hygiene</h5>
          </span>
          <p>
            Our clinic provides professional grooming services to keep your pets
            looking and feeling their best. This includes nail trimming, fur
            trimming, and skin treatments.
          </p>
        </li>{" "}
        <li>
          <span>
            <h5>Pet Dental Care</h5>
          </span>
          <p>
            Oral hygiene is vital for your pet’s overall health. Our dental care
            services include cleaning, scaling, and treating oral infections.
          </p>
        </li>{" "}
        <li>
          <span>
            <h5>Diagnostic Services</h5>
          </span>
          <p>
            We use advanced diagnostic tools such as X-rays, ultrasounds, and
            lab tests to accurately diagnose health issues in pets.
          </p>
        </li>{" "}
      </ul>
    </div>
  );
}
