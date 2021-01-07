import React from 'react';
import "./Sphere.css"

const Rotate = (props) => {
  
 var style={"--i":props.id};

  return (
    <>
    

<span style={style} ><img src={props.url} className="img-fluid rounded-lg" alt=""></img></span>

</>
  );
};

export default Rotate;