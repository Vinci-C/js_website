import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="HeroSection" className="hero--section">
      <div className="hero--section--content-box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Vinci</span>
            <br />
            Chan
          </h1>
          <p className="hero--section--description">
            With a passion in mathematics and computer science
            <br />
            Click the button below to find out more!
          </p>
          <Link
            to="AboutMe"
            smooth={true}
            duration={500}
            className="btn btn-primary"
          >
            Learn More About Me
          </Link>
          {/* <button hrefclassName="btn btn-primary">Get in Touch</button> */}
        </div>
      </div>
      <div className="hero--section--img">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 100"
          className="hero-welcome-svg"
        >
          <text x="11" y="85" className="hero-welcome-text">
            welcome.
          </text>
        </svg>
        {/* <img src="./img/hero_img.png" alt="HeroSection" /> */}
      </div>
    </section>
  );
}
