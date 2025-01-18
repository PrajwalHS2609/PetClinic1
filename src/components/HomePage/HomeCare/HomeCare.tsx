import HomeCareContent from "./HomeCareContent";
import HomeCareHead from "./HomeCareHead";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "./HomeCare.css";

export default function HomeCare() {
  return (
    <div className="homeCare-container">
      <div className="homeCare-content">
        <img
          src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Grid-Sec-Img-a-1.webp"
          alt=""
        />
      </div>
      <div className="homeCare-content">
        <HomeCareHead />
        <HomeCareContent />
        <div className="homeCare-itemWrapper">
          <div className="homeCare-item">
            <FaEnvelopeOpenText className="homeCare-itemIcon" id="homeCare-itemIcon1" />
            <span>
              <h6>Email Us Anytimme</h6>
              <a href="mailto:info@xyz.com">info@xyz.com</a>
            </span>
          </div>
          <div className="homeCare-item">
            <FaPhoneAlt className="homeCare-itemIcon" id="homeCare-itemIcon2" />
            <span>
              <h6>Email Us Anytimme</h6>
              <a href="tel:9876543210">+91 9876543210</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
