import React from "react";
import "./Blog.css";
import Link from "next/link";
import { FaTags } from "react-icons/fa6";

const BlogCard = () => {
  const blogCard = [
    {
      id: 1,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Blog-9.webp",
      title: "Tips for keeping your cat cool and healthy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur dolores numquam eaque eligendi, omnis in quas consequatur, voluptate ",
      link: "/",
    },
    {
      id: 2,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Blog-9.webp",
      title: "Tips for keeping your cat cool and healthy",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur dolores numquam eaque eligendi, omnis in quas consequatur, voluptate ",
      link: "/",
    },
  ];
  return (
    <div className="blogCard-container">
      {blogCard.map((x) => (
        <div className="blogCard-content" key={x.id}>
          <div className="blogCard-imgContent">
            <img src={x.img} alt={x.title} />
          </div>
          <div className="blogCard-tag">
            <FaTags className="blogCard-tagIcon" />
            <Link href="">CAT</Link>
            <Link href="">DOG</Link>
            <Link href="">TOYS</Link>
            <Link href="">FOOD</Link>
            <Link href="">BIRDS</Link>
          </div>
          <div className="blogCard-headContainer">
            <h3>
              <Link href={x.link}>{x.title}</Link>
            </h3>
          </div>
          <div className="blogCard-paraContainer">
            <p>{x.description}</p>
          </div>
          <div className="blogCard-buttonContainer">
            <Link href={x.link}>
              {" "}
              <button>READ MORE</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
