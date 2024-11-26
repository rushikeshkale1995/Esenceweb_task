import React from "react";
import "./Krustycone.css";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reviews from "./Pages/Reviews";
import Gallary from "./Pages/Gallary";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

const Krustycone = () => {
  return (
    <div>
      {/* Navbar */}
     

      {/* Sections */}
     
      <Home />
      <hr />
      <About />
      <hr />
      <Menu />
      <hr/>
      <Reviews />
      <hr />
      <Gallary />
      <Contact />
      <Footer/>

    </div>
  );
};
export default Krustycone;
