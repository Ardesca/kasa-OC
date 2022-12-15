import React from "react";
import "./css/header.css";
import logo from "../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={ logo } alt="logo de Kasa" />
      <nav>
        <NavLink to="/" className="link link-menu">Accueil</NavLink>
        <NavLink to="/a-propos" className="link link-menu">A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
