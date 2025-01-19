"use client";
import { useEffect } from "react";
import "./AboutUsKey.css";
export default function AboutUsKeyImg() {
  useEffect(() => {
    const imgElements = document.querySelectorAll<HTMLImageElement>(
      ".aboutUsKeyImg-content > img"
    );
    let lastScrollTop = 0;

    // Check if the device is mobile
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      console.log("Scroll animation disabled for mobile devices.");
      return; // Exit if on mobile
    }

    if (imgElements.length === 0) {
      console.warn("No image elements found!");
      return; // Exit if no images are found
    }

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      imgElements.forEach((imgElement) => {
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down, move image to the left
          imgElement.style.transform = "translateY(120px)";
        } else {
          // Scrolling up, move image to the right
          imgElement.style.transform = "translateY(0px)";
        }
      });

      lastScrollTop = Math.max(0, currentScrollTop); // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="aboutUsKeyImg-container">
      <div className="aboutUsKeyImg-content">
        {" "}
        <img
          src="https://pettie.wpengine.com/wp-content/uploads/2023/04/AdobeStock_531398182-1.webp"
          alt=""
        />
      </div>
      <div className="aboutUsKeyImg-content">
        <img
          src="https://pettie.wpengine.com/wp-content/uploads/2023/04/download-23.webp"
          alt=""
        />
      </div>
      <div className="aboutUsKeyImg-content">
        <img
          src="https://pettie.wpengine.com/wp-content/uploads/2023/05/Booking-Sec-bg-2.webp"
          alt=""
        />
      </div>
    </div>
  );
}
