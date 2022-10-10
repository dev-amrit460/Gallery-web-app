import React from 'react';
import "./Reels.css"

const Reels = (props) => {
  // console.log(props);

  const download = e => {
    // console.log(e);
    fetch(e, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  //console.log(props)
  return (
<>

<div className="reel"><span id="imageCheck"><img src={props.url.webformatURL} className="img-fluid" alt=""></img>
<button onClick={() => download(props.url.largeImageURL)} id="download">Download</button></span>
</div>

</>
  );
};

export default Reels;