export default function ContactUsForm() {
  return (
    <div className="contactUsForm-container">
      <img
        src="https://pettie.wpengine.com/wp-content/uploads/2023/04/Pty-Contact-img-1.webp"
        alt=""
      />
      <div className="contactUsForm-form">
        <form action="">
          <legend>BOOK YOUR SLOT</legend>
          <input type="text" name="" id=""  placeholder="Name"/>
          <input type="text" name="" id=""  placeholder="Email Address"/>
          <input type="text" name="" id=""  placeholder="Subject"/>
          <textarea name="" id="" rows={4} placeholder="Message"></textarea>
          <div className="contactUsForm-formButton">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
