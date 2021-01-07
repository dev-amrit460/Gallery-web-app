import React from 'react'
import { Link } from "gatsby"
import "./Btn.css"

const Btn = () => {
    return (
      <>
      <center><div id="heading">Gallery App</div></center>
      <div className="d-flex justify-content-center align-items-center" id="btncontainer">
      
      <Link to="/Normal/" id="btn">Normal</Link>
      <Link to="/Swiper/" id="btn">Swiper</Link>
      <Link to="/Round/" id="btn">Sphere</Link>
      </div>
      </>
    );
  }

  export default Btn
