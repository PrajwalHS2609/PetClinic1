import Link from "next/link";
import "./ServiceForYou.css";

export default function ServiceForYouContent() {
  return (
    <div className="serviceForYouContent-container">
      <div className="serviceForYouContent-content">
        <h6>Our Shop</h6>
        <h2>We Are Here For You</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod,
          dolorem excepturi! Et consequuntur laboriosam illo, ea vero natus
          dolor, quia, ducimus aliquid veniam autem minus quibusdam quos nobis
          nisi exercitationem!
        </p>
      </div>
      <div className="serviceForYouContent-content">
        <div className="serviceForYouContent-item">
          <ul>
            <h4>Openning Hours</h4>
            <li>Mon - Fri : 08:30 - 20:00</li>
            <li>Sat & Sun : 09:30 - 21:30</li>
          </ul>
        </div>
        <div className="serviceForYouContent-item">
          <ul>
            <h4>Mail Us</h4>
            <li>
              <a href="mailto:info@xyz.com">info@xyz.com</a>
            </li>
            <li>
              <a href="tel:9876543210">+91 9876543210</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="serviceForYouContent-content">
        <Link href="/">
          <button>Book Now</button>
        </Link>
      </div>
    </div>
  );
}
