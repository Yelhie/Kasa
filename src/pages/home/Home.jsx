import { CardCatalogue } from "../../components/cardscatalogue/CardsCatalogue";
import { Banner } from "../../components/banner/Banner";
import "./home.scss";

export const Home = () => {
  return (
    <section className="home_section">
      <Banner page="home" />
      <CardCatalogue />
    </section>
  );
};
