import "./AboutUsTakeCare.css";
export default function AboutUsTakeCareMain() {
  const card = [
    {
      id: 1,
      name: "Ethan",
      desgination: "VETERINARIAN",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Team-Img-3.webp",
    },
    {
      id: 2,
      name: "Emma",
      desgination: "PET TRAINER",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Team-Img-2.webp",
    },
    {
      id: 3,
      name: "Noah",
      desgination: "PET TRAINER",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Team-Img-1.webp",
    },
    {
      id: 4,
      name: "Amelia",
      desgination: "VETERINARIAN",
      img: "https://pettie.wpengine.com/wp-content/uploads/2023/05/team-5.webp",
    },
  ];
  return (
    <div className="aboutUsTakeCareMain-container">
      {card.map((x) => (
        <div className="aboutUsTakeCareMain-cardContainer" key={x.id}>
          <img src={x.img} alt={x.name} />
          <div className="custom-shape-divider-bottom-1737294912">
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

          <div className="aboutUsTakeCareMain-cardContent">
            <h3>{x.name}</h3>
            <p>{x.desgination}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
