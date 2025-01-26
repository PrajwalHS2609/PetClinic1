"use client";
import "./HomeTestimonial.css";
import { Carousel } from "react-bootstrap";
import TestimonialCard from "./HomeTestimonialCard";
import  Arjun from "@/media/Testimonial/Arjun R.png"
import  Priya from "@/media/Testimonial/Priya S.png"
import  Neha from "@/media/Testimonial/Neha M.png"

export default function HomeTestimonialMain() {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <TestimonialCard
          image={Priya.src}
          description="PetClinics.co.in has been a lifesaver for my dog, Bruno! From regular check-ups to grooming, their team is professional, friendly, and truly cares about pets. I always feel confident knowing Bruno is in safe hands!"
          name="Priya S"
          place="Bangalore"
        />
      </Carousel.Item>
      {/* Second Slide */}
      <Carousel.Item>
        <TestimonialCard
          image={Arjun.src}
          description="The vets at PetClinics.co.in are fantastic! They diagnosed my cat’s health issue quickly and provided excellent care. The clinic is clean, well-equipped, and the staff is incredibly kind. Highly recommended!"
          name="Arjun R"
          place="Bangalore"
        />
      </Carousel.Item>
      {/* Third Slide */}
      <Carousel.Item>
        <TestimonialCard
          image={Neha.src}
          description="I couldn’t be happier with the pet boarding service at PetClinics.co.in. My Gloden Re, Max, was so well taken care of while I was away. The updates and photos they sent were so reassuring. Thank you for the love and care!"
          name="Neha M"
          place="Bangalore"
        />
      </Carousel.Item>
    </Carousel>
  );
}
