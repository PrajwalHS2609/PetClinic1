import Link from "next/link";

export default function FooterService() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Service</h4>
        <li>
          <Link href="/">Boarding</Link>
        </li>
        <li>
          <Link href="/">Training</Link>
        </li>
        <li>
          <Link href="/">Care</Link>
        </li>
        <li>
          <Link href="/">Dog Walker</Link>
        </li>
        <li>
          <Link href="/">Activities</Link>
        </li>
        <li>
          <Link href="/">Heath Food</Link>
        </li>
      </ul>
    </div>
  );
}
