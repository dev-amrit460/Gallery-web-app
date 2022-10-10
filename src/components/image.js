import React from 'react';

const Image = (props) => {
  // console.log(props)

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
  // console.log(props);
  return (
    <div className="row">
      <div className="col-md-12 px-0">
        <div className="rounded-lg overflow-hidden" id="maindown">
          <img src={props.webformatURL} className="pic img-fluid" alt={props.tags}></img>
          <button onClick={() => download(props.largeImageURL)} id="download">Download</button>
        </div>
      </div>
    </div>
  );
};

export default Image;