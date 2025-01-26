import "./ServiceWhy.css";
import { FaCheck } from "react-icons/fa6";

export default function ServiceWhyCard() {
  const serviceWhy = [
    {
        id: 1,
        head: "Highly Skilled Professionals",
        para: "Bangalore is home to some of the best veterinarians in the country.",
      },
    {
      id: 2,
      head: "Technology-Driven Services",
      para: "Clinics here adopt the latest technologies for diagnosis and treatment.",
    },

    {
      id: 3,
      head: "Holistic Care",
      para: "Many clinics focus on overall well-being, offering grooming, training, and diet planning alongside medical care.",
    },
    {
      id: 4,
      head: "Community Focus",
      para: "Pet clinics in Bangalore often collaborate with animal welfare organizations, hosting adoption drives and awareness campaigns",
    },
  ];
  return (
    <div className="serviceWhyCard-container">
      {serviceWhy.map((x) => (
        <div className="serviceWhyCard-wrapper" key={x.id}>
          <div className="serviceWhyCard-content">
            <div className="serviceWhyCard-item1">
              <FaCheck className="serviceWhyCard-icon" />
            </div>
            <div className="serviceWhyCard-item2">
              <h5>{x.head} </h5>
              <p>{x.para}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
