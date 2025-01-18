import "./ContactUs.css";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { PiEnvelopeLight } from "react-icons/pi";

export default function ContactUsAddress() {
  return (
    <div className="contactUsAddress-container">
      <div className="contactUsAddress-content">
        <h2>We Are Always Available for You & Your Pets</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          repellat atque dolorum esse obcaecati! Reiciendis, dolore.
          Reprehenderit, corporis?
        </p>
      </div>
      <div className="contactUsAddress-content">
        <div className="contactUsAddress-itemWrapper">
          <div className="contactUsAddress-item">
            <SlLocationPin className="contactUsAddress-itemIcon" />
          </div>
          <div className="contactUsAddress-item">
            <h5>Address</h5>
            <a href="">
              123, Mahatma Gandhi Rd, FM Cariappa Colony, Sivanchetti Gardens,
              Bengaluru, Karnataka 560025
            </a>
          </div>
        </div>
        <div className="contactUsAddress-itemWrapper">
          <div className="contactUsAddress-item">
            <FiPhone className="contactUsAddress-itemIcon" />
          </div>
          <div className="contactUsAddress-item">
            <h5>Contact</h5>
            <a href="tel:9876543210">+91 9876543210</a>
          </div>
        </div>
        <div className="contactUsAddress-itemWrapper">
          <div className="contactUsAddress-item">
            <PiEnvelopeLight className="contactUsAddress-itemIcon" />
          </div>
          <div className="contactUsAddress-item">
            <h5>Email</h5>
            <a href="mailto:info@xyz.com">info@xyz.com</a>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
