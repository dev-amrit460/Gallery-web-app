import React from 'react'
import { Link } from "gatsby"
import "./Btn.css"

const Btn = () => {
  return (
    <>
        <span id="heading">Gallery App</span>
        <div id="btncontainer">
          <Link to="/Normal/" id="btn">Normal</Link>
          <Link to="/Swiper/" id="btn">Swiper</Link>
          <Link to="/Round/" id="btn">Sphere</Link>
          <Link to="/Search/" id="btn">Search</Link>
        </div>
    </>
  );
}

export default Btn
