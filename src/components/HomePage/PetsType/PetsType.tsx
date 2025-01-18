"use client";
import Dogs from "@/media/PetTypes/dogs.png";
import Birds from "@/media/PetTypes/birds.png";
import Cats from "@/media/PetTypes/cats.png";
import Cows from "@/media/PetTypes/cows.png";
import Rabbits from "@/media/PetTypes/rabbits.png";
import Fishes from "@/media/PetTypes/fishes.png";
import Hamsters from "@/media/PetTypes/hamsters.png";
import Mices from "@/media/PetTypes/mices.png";
import Turtles from "@/media/PetTypes/turtles.png";
import "./PetsType.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
export default function PetsType() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="petsType-container">
      <div className="petsTypeMain-container">
        <div className="petsTypeMain-content">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={false}
            ssr={true} // Server-side rendering
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="transform 1s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            slidesToSlide={3}
          >
            {/* ------------firstSlider------------- */}
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Dogs</h2>

                <div className="item" id="petsTypeMain-item1">
                  <Image src={Dogs} alt="Dogs" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Birds</h2>

                <div className="item" id="petsTypeMain-item2">
                  <Image src={Birds} alt="Birds" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Cats</h2>

                <div className="item" id="petsTypeMain-item3">
                  <Image src={Cats} alt="Cats" loading="lazy" />
                </div>
              </div>
            </div>
            {/* ------------secondSlider------------- */}
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Rabbits</h2>
                <div className="item" id="petsTypeMain-item1">
                  <Image src={Rabbits} alt="Rabbits" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Cows</h2>
                <div className="item" id="petsTypeMain-item2">
                  <Image src={Cows} alt="Cows" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Mices</h2>
                <div className="item" id="petsTypeMain-item3">
                  <Image src={Mices} alt="Mices" loading="lazy" />
                </div>
              </div>
            </div>
            {/* ------------thirdSlider------------- */}

            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Hamsters</h2>
                <div className="item" id="petsTypeMain-item1">
                  <Image src={Hamsters} alt="Hamsters" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Fishes</h2>
                <div className="item" id="petsTypeMain-item2">
                  <Image src={Fishes} alt="Fishes" loading="lazy" />
                </div>
              </div>
            </div>
            <div>
              <div className="petsTypeMain-wrapper">
                <h2>Turtles</h2>
                <div className="item" id="petsTypeMain-item3">
                  <Image src={Turtles} alt="Turtles" loading="lazy" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
