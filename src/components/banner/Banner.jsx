import BannerAbout from "../../assets/banner_about.webp";
import BannerHome from "../../assets/banner_home.webp";
import "./banner.scss";

export const Banner = ({ page }) => {
  const home = "home";
  const about = "about";

  const bannerTexts = {
    home: "Chez vous, partout et ailleurs",
    about: "",
  };

  const chooseBanner = () => {
    switch (page) {
      case home:
        return BannerHome;
      case about:
        return BannerAbout;
      default:
        return BannerHome;
    }
  };

  return (
    <div className="banner">
      <img
        className="banner_img"
        src={chooseBanner()}
        alt={`Bannière de la catégorie ${page}.`}
      />
      <p className="banner_txt">{bannerTexts[page]}</p>
    </div>
  );
};
