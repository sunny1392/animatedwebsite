import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home =()=>{
  const img = `https://www.scheffey.com/wp-content/uploads/2017/05/31_analysis-graphic.gif`;
  return(
    <>
    <Common name="Grow your business with" imgsrc={img} visit="/services" btnname="Get Started" />
    
    </>
  )
}
export default Home;