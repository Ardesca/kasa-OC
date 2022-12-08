import "../styles/header.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="kasa-header">
      <img src={logo} alt="kasa" className="logo-principale" />
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active li" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? "nav-active li" : "")}
        >
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
}
export default Header;
