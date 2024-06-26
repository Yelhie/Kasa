import { NavLink } from "react-router-dom";
import "./error.scss";

export const ErrorPage = () => {
  return (
    <div className="error_Container">
      <p className="error_Number">404</p>
      <p className="error_Text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>

      <NavLink className="error_Relink" to="/">
        Retourner sur la page d&apos;accueil
      </NavLink>
    </div>
  );
};
