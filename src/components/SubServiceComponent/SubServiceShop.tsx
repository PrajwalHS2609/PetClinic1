"use client";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";

import "@/components/Style/style.css";
import Carousel from "react-multi-carousel";
export default function SubServiceShop() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1, // Default for super large screens
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // Default for super large screens
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // Default for super large screens
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // Default for super large screens
    },
  };
  return (
    <div className="subServiceShop-container">
      <div className="subServiceShop-content">
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
              food: "Organic Cat Food",
              price: "300",
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/shop-12.webp",
            },
            {
              id: 2,
              food: "Organic Dog Food",
              price: "400",
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-8.webp",
            },
            {
              id: 3,
              food: "Pet Cereal Food",
              price: "350",
              img: "https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-10.webp",
            },
          ].map((shop, index) => (
            <div key={index}>
              <div className="subServiceShop-wrapper">
                <div className="item">
                  <img
                    src={shop.img}
                    alt={`${shop.food.toLowerCase()}img`}
                    loading="lazy"
                  />
                  <h4>{shop.food}</h4>
                  <p>
                    <MdOutlineCurrencyRupee />
                    {shop.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
