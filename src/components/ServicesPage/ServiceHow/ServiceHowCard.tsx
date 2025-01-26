import Image from "next/image";
import "./ServiceHow.css";
import rating from "@/media/How/review.png";
import focus from "@/media/How/focus.png";
import technology from "@/media/How/technology.png";
import petCare from "@/media/How/pet-care.png";
export default function ServiceHowCard() {
  const serviceHow = [
    {
      id: 1,
      img: rating,
      head: "Reputation and Reviews",
      para: " Look for clinics with positive reviews and testimonials from other pet parents. A good reputation is often a sign of excellent service.",
    },
    {
      id: 2,
      img: technology,
      head: "Technology-Driven Services",
      para: "Clinics here adopt the latest technologies for diagnosis and treatment.",
    },

    {
      id: 3,
      img: petCare,
      head: "Holistic Care",
      para: "Many clinics focus on overall well-being, offering grooming, training, and diet planning alongside medical care.",
    },
    {
      id: 4,
      img: focus,
      head: "Community Focus",
      para: "Pet clinics in Bangalore often collaborate with animal welfare organizations, hosting adoption drives and awareness campaigns",
    },
  ];
  return (
    <div className="serviceHowCard-container">
      {serviceHow.map((x) => (
        <div className="serviceHowCard-wrapper" key={x.id}>
          <div className="serviceHowCard-content">
            <Image src={x.img} alt={x.head} width={50} height={50} />
            <h5> {x.head}</h5>
            <p>{x.para}</p>
            <div className="serviceHowCard-arrow"></div>
          </div>
          <h3>0{x.id}</h3>
        </div>
      ))}
    </div>
  );
}
