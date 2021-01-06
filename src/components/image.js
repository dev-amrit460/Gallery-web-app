import React from 'react';

const Image = (props) => {
  //console.log(props);
  return (
    <div className="row">
      <div className="col-md-12 px-0">
        <div className="rounded-lg overflow-hidden">
          <img src={props.webformatURL} className="pic img-fluid" alt={props.tags}></img>
        </div>
      </div>
    </div>
  );
};

export default Image;