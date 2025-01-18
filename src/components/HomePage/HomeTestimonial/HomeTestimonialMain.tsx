"use client";
import "./HomeTestimonial.css";
import { Carousel } from "react-bootstrap";
import TestimonialCard from "./HomeTestimonialCard";

export default function HomeTestimonialMain() {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <TestimonialCard
          image="https://pettie.wpengine.com/wp-content/uploads/2023/05/home-testimonial-1.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quibusdam nisi rerum odio explicabo rem, tempore voluptatem quam possimus numquam praesentium voluptatibus quasi nulla illo laboriosam vero nam autem dolorem?"
          name="john Doe"
          designation="Teacher"
        />
      </Carousel.Item>
      {/* Second Slide */}
      <Carousel.Item>
        <TestimonialCard
          image="https://pettie.wpengine.com/wp-content/uploads/2023/05/home-testimonial-3.webp"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deleniti. Nulla suscipit molestiae voluptas optio rem repudiandae ut repellat omnis expedita veniam, repellendus tenetur inventore, aperiam quaerat laboriosam, hic velit!"
          name="Jane Doe"
          designation="Photographer"
        />
      </Carousel.Item>
      {/* Third Slide */}
      <Carousel.Item>
        <TestimonialCard
          image="https://pettie.wpengine.com/wp-content/uploads/2023/05/home-testimonial-2.webp"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deleniti. Nulla suscipit molestiae voluptas optio rem repudiandae ut repellat omnis expedita veniam, repellendus tenetur inventore, aperiam quaerat laboriosam, hic velit!"
          name="Robert"
          designation="Developer"
        />
      </Carousel.Item>
    </Carousel>
  );
}
