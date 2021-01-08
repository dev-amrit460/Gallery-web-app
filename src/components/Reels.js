import React from 'react';
import "./Reels.css"

const Reels = (props) => {
  //console.log(props.url)
  return (
<>

<div className="reel"><img src={props.url} className="img-fluid rounded-lg" alt=""></img>
      <div id="heading4">
        <span>Reels View</span>
      </div></div>

</>
  );
};

export default Reels;