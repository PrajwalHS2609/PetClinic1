import "./Footer.css";
import FooterBio from "./FooterBio";
import FooterLink from "./FooterLinks";
import FooterPolicy from "./FooterPolicy";
import FooterService from "./FooterService";
export default function Footer() {
  return (
    <div className="footer-container">
      <FooterBio />
      <FooterLink />
      <FooterService />
      <FooterPolicy />
    </div>
  );
}
