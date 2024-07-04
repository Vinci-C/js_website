import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio.jsx";
import ContactMe from "../ContactMe";
import Footer from "../Footer.jsx";

export default function Home() {
  return (
    <>
      {" "}
      {/*fragments*/}
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
