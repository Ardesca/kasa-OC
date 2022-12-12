import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "../header-footer/Layout";
import Home from "../pages/Home";
import About from "../pages/About"
import Habitation from '../pages/Habitation';
import Erreur404 from "../pages/Erreur404";

const RoutesPath = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/logement/:id" element={<Habitation />}/>
            <Route path="/a-propos" element={<About />}/>
            <Route path="*" element={<Erreur404 />}/>
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default RoutesPath;
