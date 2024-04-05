import BannerAbout from "../../assets/banner_about.webp";
import BannerHome from "../../assets/banner_home.webp";
import "./banner.scss";

const bannerTexts = {
  home: "Chez vous, partout et ailleurs",
  about: "",
};

export const HOME = "home";
export const ABOUT = "about";

export const Banner = ({ page }) => {
  const chooseBanner = () => {
    switch (page) {
      case HOME:
        return BannerHome;
      case ABOUT:
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
