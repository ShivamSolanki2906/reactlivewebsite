import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./Home";
import {Route, Routes  } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navber from "./Nevbar";
import "./index.css"


 


const App = () => {
  return (
    <>
      <Navber/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
       <Route path="*" element= {<Home/>}></Route>
       </Routes>
    </>
  );
};
export default App;
