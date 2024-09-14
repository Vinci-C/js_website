import { portfolio } from "../../data/portfolio";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {portfolio.skills.map((item, index) => {
          console.log("This is", item);
          return (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
