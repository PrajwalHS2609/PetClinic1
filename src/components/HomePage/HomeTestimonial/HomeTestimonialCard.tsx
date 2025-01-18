import React from "react";
import rating from "@/media/rating.png";
import Image from "next/image";
interface TestimonialProps {
  image: string;
  description: string;
  name: string;
  designation: string;
}
const TestimonialCard: React.FC<TestimonialProps> = (props) => {
  return (
    <div className="homeTestimonialCard-container">
      <div className="homeTestimonialCard-content">
        <img src={props.image} alt="rating" />
      </div>
      <div className="homeTestimonialCard-content">
        <div className="homeTestimonialCard-rating">
          <Image src={rating} alt="rating" />
        </div>
        <p>{props.description}</p>
        <h4>{props.name}</h4>
        <h6>{props.designation}</h6>
      </div>
    </div>
  );
};
export default TestimonialCard;
