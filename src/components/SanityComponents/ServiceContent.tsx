import React from "react";
import { PortableText } from "next-sanity";
import { portableTextComponents } from "@/components/PortableTextComponents";
import "@/components/Style/style.css";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import ServiceForYou from "../ServicesPage/ServiceForYou/ServiceForYou";
import HomeService from "../HomePage/HomeService/HomeService";
import PetsType from "../HomePage/PetsType/PetsType";
import HomeCare from "../HomePage/HomeCare/HomeCare";
import AboutUsKey from "../AboutUs/AboutUsKey/AboutUsKey";
import AboutUsTakeCare from "../AboutUs/AboutUsTakeCare/AboutUsTakeCare";
import HomeTestimonial from "../HomePage/HomeTestimonial/HomeTestimonial";
import HomePartners from "../HomePage/HomePartners/HomePartners";
import FaqComponent from "../FaqComponent/FaqComponent";
import Link from "next/link";
import ball from "@/media/tennis-ball.png";
import ropeToy from "@/media/rope-toy.png";
import petToy from "@/media/pet-toy.png";


export type FaqItem = { question: string; answer: PortableTextBlock[] };

export type CustomTable = {
  title?: string;
  headers?: string[];
  rows?: { cells: string[] }[];
};

export type ServiceContentType = {
  _id: string;
  title: string;
  slug: string;
  body?: PortableTextBlock[];
  mainImage?: { asset?: { url?: string } };
  youtubeVideoUrl?: string;
  faq?: FaqItem[];
  customTable?: CustomTable;
};

export default function ServiceContent({
  content,
}: {
  content: ServiceContentType;
}) {
  const imageUrl = content?.mainImage?.asset?.url;
  const youtubeUrl = content?.youtubeVideoUrl;

  return (
    <div className="sanityContent-container">
      <div className="sanityContent-content">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            width={550}
            height={310}
          />
        )}
        <div className="header-container">
          <Image src={ball} alt="ball" />
          <Image src={ropeToy} alt="ropeToy" />
          <Image src={petToy} alt="petToy" />
          <h2>{content.title}</h2>
          <div className="header-breadcrumb">
            <h4>
              <Link href="/">Home</Link> / Services
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

        <>
          <ServiceForYou />
          <HomeService />
          <PetsType />
          <HomeCare />
          <AboutUsKey />
          <AboutUsTakeCare />
          <HomeTestimonial />
          <HomePartners />
        </>
        {youtubeUrl && (
          <div className="youtube-container">
            <iframe
              width="100%"
              height="500"
              src={
                youtubeUrl.includes("youtu.be")
                  ? `https://www.youtube.com/embed/${youtubeUrl.split("/").pop()?.split("?")[0]}`
                  : `https://www.youtube.com/embed/${youtubeUrl.split("v=")[1]}`
              }
              title={content.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <h1 className="subServicesMain-item">{content.title}</h1>
        <div className="subServicesMain-item">
          {content.body && (
            <>
              <PortableText
                value={content.body}
                components={portableTextComponents}
              />

              {content.customTable && (
                <div className="custom-table">
                  {content.customTable.title && (
                    <h3>{content.customTable.title}</h3>
                  )}
                  <table>
                    <thead>
                      <tr>
                        {content.customTable.headers?.map((header, idx) => (
                          <th key={idx}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {content.customTable.rows?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.cells.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {Array.isArray(content?.faq) && content.faq.length > 0 && (
                <FaqComponent faqs={content.faq} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
