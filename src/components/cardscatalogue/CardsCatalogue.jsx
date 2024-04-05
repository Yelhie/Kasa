import { Card } from "../cards/Card";
import { NavLink } from "react-router-dom";
import Data from "../../Data/locations.json";
import "./cardsCatalogue.scss";

export const CardCatalogue = () => {
  return (
    <section className="cardsCatalogue_section">
      <div className="card_container">
        {Data.map((logement) => (
          <NavLink key={logement.id} to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </NavLink>
        ))}
      </div>
    </section>
  );
};
