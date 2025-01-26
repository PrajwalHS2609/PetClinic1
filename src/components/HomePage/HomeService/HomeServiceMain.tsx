import Link from "next/link";
import "./HomeService.css";
export default function HomeServiceMain() {
  const services = [
    {
      id: 1,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-1.webp",
      serviceHead: "Dog's Grooming",
      para: "Pamper your pup with expert care! 🐾 From shiny coats to trimmed nails, our dog grooming services keep your furry friend looking and feeling their best.",
      link: "/pets-grooming-in-bangalore",
    },
    {
      id: 2,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-2.png",
      serviceHead: "Boarding",
      para: "A home away from home for your furry friends! 🐾 Our pet boarding services ensure comfort, care, and companionship while you're away.",
      link: "/pets-boarding-in-bangalore",
    },
    {
      id: 3,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-3.png",
      serviceHead: "Training",
      para: "Turn wagging tails into well-behaved companions! 🐾 Our pet training services build trust, obedience, and happy memories.",
      link: "/pets-training-in-bangalore",
    },
    {
      id: 4,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-4.png",
      serviceHead: "Veterinary Care",
      para: "Compassionate veterinary care for healthier, happier pets! 🐾 From check-ups to treatments, we’re here for your furry family.",
      link: "/pets-clinic-in-bangalore",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {services.map((x) => (
        <div className="homeServiceMain-wrapper" key={x.id}>
          <div className="homeServiceMain-content">
            <div className="homeServiceMain-item">
              <img src={x.img} alt={x.serviceHead} />
              <div className="homeServiceMain-itemCover">
                <Link href={x.link}>
                  <button>Read More</button>
                </Link>
              </div>
            </div>
            <div className="homeServiceMain-item">
              <h3>{x.serviceHead}</h3>
              <p>{x.para}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
