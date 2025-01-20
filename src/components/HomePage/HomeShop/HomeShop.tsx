import Link from "next/link";
import "./HomeShop.css";
import { MdOutlineCurrencyRupee } from "react-icons/md";

export default function HomeShop() {
  const homeShop = [
    {
      id: 1,
      food: "Organic Cat Food",
      price: "300",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/shop-12.webp",
    },
    {
      id: 2,
      food: "Organic Dog Food",
      price: "400",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-8.webp",
    },
    {
      id: 3,
      food: "Pet Cereal Food",
      price: "350",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/05/shop-10.webp",
    },
  ];
  return (
    <div className="homeShop-container">
      {homeShop.map((x) => (
        <div className="homeShopCard-container" key={x.id}>
          <div className="homeShopCard-content">
            <img src={x.img} alt={x.food} />
            <Link href={"/"}>
              <button>BUY</button>
            </Link>
          </div>
          <div className="homeShopCard-textContainer">
            <h4>{x.food} </h4>
            <p>
              <MdOutlineCurrencyRupee  className="rupeeIcon"/>
              {x.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
