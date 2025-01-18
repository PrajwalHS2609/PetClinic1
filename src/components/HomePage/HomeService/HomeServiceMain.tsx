import "./HomeService.css";
export default function HomeServiceMain() {
  const services = [
    {
      id: 1,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-1.webp",
      serviceHead: "Dog's Grooming",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis assumenda nihil exercitationem quis dolore eveniet aspernatur perferendis? Beatae, minus!",
    },
    {
      id: 2,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-2.png",
      serviceHead: "Boarding",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis assumenda nihil exercitationem quis dolore eveniet aspernatur perferendis? Beatae, minus!",
    },
    {
      id: 3,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-3.png",
      serviceHead: "Training",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis assumenda nihil exercitationem quis dolore eveniet aspernatur perferendis? Beatae, minus!",
    },
    {
      id: 4,
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Home1-Service-img-4.png",
      serviceHead: "Veterinary Care",
      para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis assumenda nihil exercitationem quis dolore eveniet aspernatur perferendis? Beatae, minus!",
    },
  ];
  return (
    <div className="homeServiceMain-container">
      {services.map((x) => (
        <div className="homeServiceMain-wrapper" key={x.id}>
          <div className="homeServiceMain-content" >
            <div className="homeServiceMain-item">
              <img src={x.img} alt={x.serviceHead} />
              <div className="homeServiceMain-itemCover">
                <button>Read More</button>
              </div>
            </div>
            <div className="homeServiceMain-item">
              <h3>{x.serviceHead}</h3>
              <p>{x.para}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
