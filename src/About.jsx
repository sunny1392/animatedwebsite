import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About =()=>{
  const img = `https://infowithart.com/wp-content/uploads/2019/01/Cover-image.gif`;
  return(
    <>
    <Common name="Welcome to About Page" imgsrc={img} visit="/contact" btnname="Contact Now" />
    </>
  )
}
export default About;