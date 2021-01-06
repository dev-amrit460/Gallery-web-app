import React from 'react';
import "./Sphere.css"

const Rotate = (props) => {
  
 var style={"--i":props.id};

  return (
    <>
    

<span style={style} ><img src={props.link} className="img-fluid " alt=""></img></span>

</>
  );
};

export default Rotate;