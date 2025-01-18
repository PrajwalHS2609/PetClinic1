import ContactUsAddress from "./ContactUsAddress";
import ContactUsForm from "./ContactUsForm";
import "./ContactUs.css";
export default function ContactUsMain() {
  return (
    <div className="contactUsMain-container">
      <div className="contactUsMain-content">
        <ContactUsForm />
      </div>
      <div className="contactUsMain-content">
        <ContactUsAddress />
      </div>
    </div>
  );
}
