import Link from "next/link";
export default function FooterPolicy() {
  return (
    <div className="footerList-container">
      <ul>
        <h4>Terms</h4>
        <li>
          <Link href="/">Policy</Link>
        </li>
        <li>
          <Link href="/">Privacy</Link>
        </li>
        <li>
          <Link href="/">Terms of Services</Link>
        </li>
        <li>
          <Link href="/">Payment Mode</Link>
        </li>
        <li>
          <Link href="/">Return Policy</Link>
        </li>
        <li>
          <Link href="/">Pricing Policy</Link>
        </li>
      </ul>
    </div>
  );
}
