import Link from "next/link";
import "./AboutUsKey.css";
import { FaRegHandshake } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { LuTrophy } from "react-icons/lu";

export default function AboutUsKeyContent() {
  const keyPoints = [
    {
      id: 1,
      icon: <FaRegHandshake className="aboutUsKeyContent-icon" />,
      head: "20K",
      para: "Happy Customer",
    },
    {
      id: 2,
      icon: <FaUserTie className="aboutUsKeyContent-icon" />,
      head: "1K",
      para: "Professionals",
    },
    {
      id: 3,
      icon: <FaRegHeart className="aboutUsKeyContent-icon" />,
      head: "550",
      para: "Adopted Pets",
    },
    {
      id: 4,
      icon: <LuTrophy className="aboutUsKeyContent-icon" />,
      head: "90+",
      para: "Awards",
    },
  ];
  return (
    <div className="aboutUsKeyContent-container">
      <div className="aboutUsKeyContent-content">
        {keyPoints.map((x) => (
          <div className="aboutUsKeyContent-item" key={x.id}>
            {x.icon}
            <span>
              <h4>{x.head}</h4>
              <p>{x.para}</p>
            </span>
          </div>
        ))}
      </div>
      <div className="aboutUsKeyContent-content">
        <h3>Pet companion kept safe and trained well</h3>
        <Link href="/">
          {" "}
          <button>VIEW ALL</button>
        </Link>
      </div>
    </div>
  );
}
