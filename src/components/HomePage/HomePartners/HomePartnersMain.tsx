"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomePartners.css"
export default function HomePartnersMain() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="homePartnersMain-container">
      <div className="homePartnersMain-content">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={false}
          showDots={false}
          ssr={true} // Server-side rendering
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 1s ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {[
            {
              id: 1,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-7-1.png",
              name: "img1",
            },
            {
              id: 2,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/home-logo1.png",
              name: "img2",
            },
            {
              id: 3,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-1-1.png",
              name: "img3",
            },
            {
              id: 4,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-6.png",
              name: "img4",
            },
            {
              id: 5,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-5.png",
              name: "img5",
            },
            {
              id: 6,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-2.png",
              name: "img6",
            },
            {
              id: 7,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-3.png",
              name: "img7",
            },
            {
              id: 8,
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Brand-4.png",
              name: "img8",
            },
          ].map((country, index) => (
            <div key={index}>
              <div className="homePartnersMain-wrapper">
                <div className="item">
                  <img
                    src={country.img}
                    alt={`${country.name.toLowerCase()}img`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
