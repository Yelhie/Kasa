import emptyStar from "../../assets/EmptyStar.webp";
import filledStar from "../../assets/FilledStar.webp";
import "./rating.scss";

export const Rating = ({ rating }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        className="star_image"
        key={index}
        src={index < rating ? filledStar : emptyStar}
        alt={index < rating ? "filled star" : "empty star"}
      />
    ));
  };

  return <div className="star_rating">{renderStars()}</div>;
};
