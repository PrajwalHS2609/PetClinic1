"use client";
import Image from "next/image";
import "./CommonService.css";
import HealthCheckups from "@/media/commonService/pet-care.png";
import Vaccination from "@/media/commonService/animal-vaccination.png";
import emergency from "@/media/commonService/siren.png";
import dental from "@/media/commonService/dentistry.png";
import Nutritional from "@/media/commonService/snacks.png";
import Parasite from "@/media/commonService/lice-free.png";
import BehavioralTraining from "@/media/commonService/dog-training.png";
import Surgical from "@/media/commonService/nurse.png";
import Diagnostic from "@/media/commonService/heartbeat.png";
import Grooming from "@/media/commonService/grooming.png";

export default function CommonServiceCard() {
  const pccImp = [
    {
      id: 1,
      icon: HealthCheckups,
      head: "Routine Health Check-ups",
      para: "Regular check-ups are essential to monitor your pet’s overall health. Pet clinics in Bangalore offer thorough physical examinations, vaccinations, and preventive care to keep your pets healthy and disease-free. These services help identify potential health issues before they become serious.",
    },
    {
      id: 2,
      icon: Vaccination,
      head: "Vaccination Services",
      para: "Vaccines protect your pets from dangerous diseases such as rabies, distemper, and parvovirus. Most pet clinics services in Bangalore provide comprehensive vaccination schedules tailored to your pet’s specific needs.",
    },
    {
      id: 3,
      icon: emergency,
      head: "Emergency and Critical Care",
      para: "Emergencies can strike anytime, and pet clinics in Bangalore are well-equipped to handle them. Whether it’s an accident, poisoning, or a sudden illness, these clinics provide 24/7 emergency services to save your pet’s life.",
    },

    {
      id: 4,
      icon: Diagnostic,
      head: "Diagnostic Services",
      para: "Advanced diagnostic tools, such as X-rays, ultrasounds, and blood tests, are commonly available in pet clinics. These services ensure accurate diagnosis and timely treatment for your pets.",
    },
    {
      id: 5,
      icon: Surgical,
      head: "Surgical Services",
      para: "From routine spaying and neutering to complex orthopedic surgeries, many pet clinics services in Bangalore include surgical care. Experienced veterinarians perform these procedures in sterile environments to ensure the safety and comfort of your pet.",
    },

    {
      id: 6,
      icon: dental,
      head: "Dental Care for Pets",
      para: "Dental hygiene is often overlooked in pets. Many pet clinics in Bangalore offer dental cleaning, extractions, and treatment for gum diseases to maintain your pet's oral health.",
    },
    {
      id: 7,
      icon: BehavioralTraining,
      head: "Behavioral Training and Counseling",
      para: "Behavioral issues such as aggression, anxiety, and excessive barking can disrupt your pet’s life. Many pet clinics in Bangalore provide training and counseling sessions to address these issues, ensuring a harmonious relationship between you and your pet.",
    },
    {
      id: 8,
      icon: Nutritional,
      head: "Nutritional Advice and Diet Planning",
      para: "A balanced diet is crucial for your pet’s health. Clinics offering pet clinics services in Bangalore provide personalized nutritional advice to help you select the best food and supplements for your pet.",
    },
    {
      id: 9,
      icon: Parasite,
      head: "Parasite Control and Prevention",
      para: "Ticks, fleas, and worms can cause significant discomfort and health issues in pets. Pet clinics offer effective treatments and preventive solutions to keep these parasites at bay.",
    },
    {
      id: 10,
      icon: Grooming,
      head: "Grooming Services",
      para: "Grooming is more than just a beauty treatment—it’s essential for your pet’s health. Services such as bathing, nail trimming, and fur trimming are commonly available at pet clinics across Bangalore",
    },
  ];
  return (
    <div className="pccImpCard-container">
      {pccImp.map((x) => (
        <div className="pccImpCard-wrapper" key={x.id}>
          {" "}
          <div className="pccImpCard-content">
            <div className="pccImpCard-item">
              <span>
                <h6>{x.id}</h6>
              </span>
              <span className="pccImpCard-icon">
                <Image src={x.icon} alt={x.head} width={50} height={50} />
              </span>
            </div>
          </div>
          <div className="pccImpCard-content">
            <h5>{x.head} </h5>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
