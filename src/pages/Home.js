import React from "react";
import "./css/home.css";
import Banner from "../components/Banner";
import HomeBanner from "../assets/img/BanniereAccueil.png";
import { NavLink } from "react-router-dom";
import Card from "../components/Card.js";
import ListeLogements from "../assets/data/logements.json";

const Home = () => {
  return (
    <div className="Accueil">
      <Banner image={HomeBanner} texte="Chez vous, partout et ailleurs" />
      <div className="liste-logements">
        {ListeLogements.map((logement) => (
          <NavLink
            key={logement.id}
            to={"/logement/" + logement.id + "/#"}
            className="houseLists"
          >
            <Card
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
