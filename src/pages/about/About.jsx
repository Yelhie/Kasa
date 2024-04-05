import { Collapse } from "../../components/collapse/Collapse";
import { Banner } from "../../components/banner/Banner";
import aboutJson from "../../Data/about.json";
import "./about.scss";

export const About = () => {
  return (
    <section className="about_section">
      <Banner page="about" />
      {aboutJson.map((aboutData) => {
        return (
          <div className="collapse" key={aboutData.id}>
            <Collapse title={aboutData.title} content={aboutData.content} />
          </div>
        );
      })}
    </section>
  );
};
