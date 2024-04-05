import "./card.scss";

export const Card = ({ logement }) => {
  return (
    <div className="Card">
      <p>{logement.title}</p>
      <img src={logement.cover} alt={logement.title} />
    </div>
  );
};
