import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from "react-router-dom";

const Common =(props)=>{
  const img = `https://www.scheffey.com/wp-content/uploads/2017/05/31_analysis-graphic.gif`;
  return(
    <>
    <section id="header" className="d-flex align-items-center">
       <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 orger-lg-1 d-flex justify-content-center flex-column ">
            <h1>
              {props.name}
              <br/>
              
              
               <strong className="brand-name"> Sunny Shop</strong>
            </h1>
            
            <h2 className="my-3">
              We are team of telented developers
            </h2>
            
            <div className="mt-3">
              <NavLink exact to={props.visit} className=" btn btn-success"> {props.btnname}</NavLink>

            </div>

          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img ">
            <img src={props.imgsrc} className="img-fluid animated " alt="home img" />

          </div>
          </div>

        </div>

      </div>

    </div>
    </section>
    </>
  )
}
export default Common;