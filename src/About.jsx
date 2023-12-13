import React from "react";
import Wed from "../src/im/img3.png";
import { NavLink } from "react-router-dom";
import Commune from "./Commune";

const About = () => {
  return (
    <>
      <Commune name="WelCome to About Page"
        imgsrc= {Wed}
        visit =' contact'
        btname = "Contect now"
      />
    </>
  );
};
export default About;
