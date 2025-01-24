import { FaPaw } from "react-icons/fa";
import "./HomeCare.css";
export default function HomeCareContent() {
  const HomeCare = [
    { id: 1, list: "24/7 support" },
    { id: 2, list: "Personalized care" },
    { id: 3, list: "Home Visit" },
    { id: 4, list: "Quick Delivery" },
    { id: 5, list: "Money Back Guarantee" },
    { id: 6, list: "Lowest Price" },
  ];
  return (
    <div className="homeCareContent-container">
      <ul>
        {HomeCare.map((x) => (
          <li key={x.id}>
            <FaPaw className="homeCareContent-icon" />
            {x.list}
          </li>
        ))}
      </ul>
    </div>
  );
}
