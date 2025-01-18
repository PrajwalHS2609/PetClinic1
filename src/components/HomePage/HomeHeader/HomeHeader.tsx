"use client";
import Link from "next/link";
import "./HomeHeader.css";
import { Carousel } from "react-bootstrap";

export default function HomeHeader() {
  return (
    <Carousel>
      {/* First Slide */}
      <Carousel.Item>
        <div className="homeHeader-container">
          <div className="homeHeader-content" id="homeHeader-content1">
            <div className="homeHeader-item">
              <img
                src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-dog.webp"
                alt="Dog"
              />
            </div>
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Fresh Flavoured Dog Food</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              exercitationem inventore iusto hic explicabo facere temporibus
              nisi, placeat voluptas nulla.
            </p>
            <Link href="/">
              <button>DISCOVER</button>
            </Link>
          </div>
          <div className="homeHeader-content" id="homeHeader-content3">
            <img
              src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Home-1-Slider-foodpack-2.webp"
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
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Tasty Organic Rabbit Food</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, eaque voluptatum omnis ea esse rem aliquam architecto,
              dolore qui dolor est tempore blanditiis eveniet sunt autem quod
              perferendis vero voluptates?
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
          </div>
          <div className="homeHeader-content" id="homeHeader-content2">
            <h2>Nutrition Rich Cat Food</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              repellendus soluta sunt ut praesentium totam quasi, perferendis
              modi reiciendis.
            </p>
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
