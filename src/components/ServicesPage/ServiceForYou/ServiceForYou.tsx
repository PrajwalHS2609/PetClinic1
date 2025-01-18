import "./ServiceForYou.css";
import ServiceForYouContent from "./ServiceForYouContent";
import ServiceForYouImgs from "./ServiceForYouImgs";
export default function ServiceForYou() {
  return (
    <div className="serviceForYou-container">
      <div className="serviceForYou-content">
        <ServiceForYouImgs />
      </div>
      <div className="serviceForYou-content">
        <ServiceForYouContent />
      </div>
    </div>
  );
}
