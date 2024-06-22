import reCAPTCHA from "react-google-recaptcha";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="sub--title">
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          velit aliquam perspiciatis inventore, explicabo eos?
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-lg">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-lg">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-lg">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <input
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message here..."
            required
          />
        </label>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" className="input" />
        <reCAPTCHA />
        <button>Submit</button>
      </form>
    </section>
  );
}
