"use client";
import Link from "next/link";
import ball from "@/media/tennis-ball.png";
import ropeToy from "@/media/rope-toy.png";
import petToy from "@/media/pet-toy.png";
import "@/components/Style/style.css";
import Image from "next/image";
export default function CareHeader() {
  return (
    <div className="header-container">
      <Image src={ball} alt="ball" />
      <Image src={ropeToy} alt="ropeToy" />
      <Image src={petToy} alt="petToy" />
      <h2>Care</h2>
      <div className="header-breadcrumb">
        <h4>
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> /
          Care{" "}
        </h4>
      </div>
      <div className="custom-shape-divider-bottom-1737194905">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}
