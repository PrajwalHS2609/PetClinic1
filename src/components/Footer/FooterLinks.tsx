import Link from "next/link";

export default function FooterLink() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Our Links</h4>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Shop</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
