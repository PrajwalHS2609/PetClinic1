import Link from "next/link";
import "./SubServiceComponent.css";
import Image from "next/image";
import boarding from "@/media/SubServiceNavImg/boarding.png";
import training from "@/media/SubServiceNavImg/training.png";
import care from "@/media/SubServiceNavImg/pet-care.png";
import dogWalker from "@/media/SubServiceNavImg/dog-walking.png";
import healthFood from "@/media/SubServiceNavImg/health-food.png";
import activities from "@/media/SubServiceNavImg/activities.png";

export default function SubServiceComponentNav() {
  return (
    <div className="subServiceComponentNav-container">
      <ul>
        <li>
          <Link href="/boarding">
            <Image src={boarding} alt="boarding"></Image>
            <b>Boarding</b>
          </Link>
        </li>
        <li>
          <Link href="training">
            <Image src={training} alt="training"></Image>
            <b>Training</b>
          </Link>
        </li>
        <li>
          <Link href="dog-walker">
            <Image src={dogWalker} alt="dogWalker"></Image>
            <b>Dog Walker</b>
          </Link>
        </li>
        <li>
          <Link href="/health-food">
            <Image src={healthFood} alt="healthFood"></Image>
            <b>Health Food</b>
          </Link>
        </li>
        <li>
          <Link href="/activities">
            <Image src={activities} alt="activities"></Image>
            <b>Activities</b>
          </Link>
        </li>
        <li>
          <Link href="/care">
            <Image src={care} alt="care"></Image>
            <b>Care</b>
          </Link>
        </li>
      </ul>
    </div>
  );
}
