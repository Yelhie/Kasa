import { NavLink } from "react-router-dom";
import LogoRed from "./../../assets/logo_red.webp";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={LogoRed} alt="logo Kasa" />
      </div>

      <nav className="header_nav">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
