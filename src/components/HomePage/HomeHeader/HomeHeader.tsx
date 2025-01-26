"use client";
import Link from "next/link";
import "./HomeHeader.css";
import { Carousel } from "react-bootstrap";
import ball from "@/media/tennis-ball.png";
import ropeToy from "@/media/rope-toy.png";
import petToy from "@/media/pet-toy.png";
import "@/components/Style/style.css";
import Image from "next/image";
import Carousel1Img1 from "@/media/HomeHeaderImg/Carousel1Img1.png";
import Carousel1Img2 from "@/media/HomeHeaderImg/Carousel1Img2.png";

export default function HomeHeader() {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <div className="homeHeader-container">
          <div className="homeHeader-content" id="homeHeader-content1">
            <div className="homeHeader-item">
              <Image src={Carousel1Img1} alt="Dog" />
            </div>
            <Image src={ball} alt="ball" />
            <Image src={ropeToy} alt="ropeToy" />
            <Image src={petToy} alt="petToy" />
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Care, Compassion, and Healing for Your Furry Friends.</h2>
            <p>
              At our Pets Clinic, we offer expert care and compassion to keep
              your dogs and cats healthy and happy, from routine check-ups to
              advanced treatments.
            </p>
            <Link href="/">
              <button>DISCOVER</button>
            </Link>
          </div>
          <div className="homeHeader-content" id="homeHeader-content3">
            <Image src={Carousel1Img2} alt="Food Pack" />
            {/* <span>
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Plate-1.webp"
                alt="Plate"
              />
            </span> */}
          </div>
        </div>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <div className="homeHeader-container">
          <div className="homeHeader-content" id="homeHeader-content1">
            <div className="homeHeader-item" id="homeHeader-item2">
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Home-1-Slider-2.webp"
                alt="rabbit"
              />
            </div>{" "}
            <Image src={ball} alt="ball" />
            <Image src={ropeToy} alt="ropeToy" />
            <Image src={petToy} alt="petToy" />
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Perfect Paws Grooming Care</h2>
            <p>
              Give your pets the pampering they deserve with Perfect Paws
              Grooming Care! From bathing to styling, we ensure your furry
              friends look and feel their best.
            </p>
            <Link href="/">
              <button>DISCOVER</button>
            </Link>
          </div>
          <div className="homeHeader-content" id="homeHeader-content3">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Home-2-Slider-foodpack.webp"
              alt="Food Pack"
            />
            <span>
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Plate-1.webp"
                alt="Plate"
              />
            </span>
          </div>
        </div>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <div className="homeHeader-container">
          <div className="homeHeader-content" id="homeHeader-content1">
            <div className="homeHeader-item" id="homeHeader-item2">
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Home-1-Slider-3-1.webp"
                alt="cat"
              />
            </div>{" "}
            <Image src={ball} alt="ball" />
            <Image src={ropeToy} alt="ropeToy" />
            <Image src={petToy} alt="petToy" />
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Nutrition Rich Pets Food</h2>
            <p>
              Fuel your pets with the best! Our nutrition-rich pet food is
              packed with essential vitamins, minerals, and natural ingredients
              to keep your furry friends healthy, active, and happy every day.
            </p>
            <Link href="/">
              <button>DISCOVER</button>
            </Link>
          </div>
          <div className="homeHeader-content" id="homeHeader-content3">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Home-3-Slider-foodpack.webp"
              alt="Food Pack"
            />
            <span>
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-Plate-1.webp"
                alt="Plate"
              />
            </span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
