"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./BackToTop.css";
import backToTop from "@/media/backtotop.png";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show button when scroll is greater than 300px
      } else {
        setShowButton(false); // Hide button when scroll is less than 300px
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div className="backToTop-container" onClick={scrollToTop}>
          <Image src={backToTop} alt="back-To-Top" />
        </div>
      )}
    </>
  );
}
