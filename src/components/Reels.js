import React from 'react';
import "./Reels.css"

const Reels = (props) => {
  //console.log(props)
  return (
<>

<div className="reel"><span id="imageCheck"><img src={props.url} className="img-fluid" alt=""></img></span>
      <div id="heading4">
        <span>Reels View</span>
      </div></div>

</>
  );
};

export default Reels;