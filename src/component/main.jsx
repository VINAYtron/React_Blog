import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BollyWood from "./bollywood";
import Fitness from "./fitness";
import Home from "./home";
import Technology from "./technology";
import Tourism from "./tourism";
import Food from "./food";
import NavBar from "./navBar";
import RoutingParamsTourist from "./routingParamsTourist";
import RoutingParamsTechnology from "./routingParamsTechnology";
import RoutingParamsFitness from "./RoutingParamsFitness";
import RoutingParamsBollywood from "./RoutingParamsBollywood";
import RoutingParamsFood from "./routingParamsFood";

const Main = () => {
  return (
    <>
      <div className="headName">
        <h1>The Siren</h1>
      </div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/bollywood" element={<BollyWood />} />
          <Route path="/food" element={<Food />} />
          <Route path="/tourism/:place" element={<RoutingParamsTourist />} />
          <Route
            path="/technology/:tech"
            element={<RoutingParamsTechnology />}
          />
          <Route path="/fitness/:exercise" element={<RoutingParamsFitness />} />
          <Route
            path="/bollywood/:movie"
            element={<RoutingParamsBollywood />}
          />
          <Route path="/food/:dish" element={<RoutingParamsFood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Main;
