import { NavLink } from "react-router-dom";
import LogoRed from './../../assets/logo_red.png'
import './header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={LogoRed} alt="logo Kasa" />
            </div>

            <nav className="header_nav">
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" >Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" >A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
