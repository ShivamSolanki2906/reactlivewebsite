import React from "react";
import Wed from "../src/im/img5.png";
import { NavLink } from "react-router-dom";
import Commune from "./Commune";

const Home = () => {
  return (
    <>
      <Commune name="Grow Your business with"
        imgsrc = {Wed}
        visit ="/service"
        btname = "Get Started"
      />
    </>
  );
};
export default Home;
