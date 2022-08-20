import React from "react";
import {Route , Routes} from  'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";
import Footer from "./Footer";


const App =()=>{
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      
      

    </Routes>
    <Footer />
    
    </>
  )
}
export default App;