import React, { useEffect, useState } from "react"
import axios from 'axios';
import Reels from "./Reels";

const ReelData = () => {

  const [images, setImages] = useState([]);
  
  useEffect(()=>{
    loadImage();
  },[])

  const loadImage= () => {
    const key = "18005070-db80de985224bc25be5b2d215";
    const api = "https://pixabay.com/api/";
    axios
      .get(`${api}?key=${key}&editors_choice=true&q=woman&per_page=200&safesearch=False`)
      .then(res => setImages([...images, ...res.data.hits]));

  }
// console.log(images);
function photo(val,index){
  return(
    <Reels url={val} key={index} />
  )
}
  return (
    <>

      <div className="parent">
      <div id="heading4">
        <span>Reels View</span>
      </div>
        {images.map(photo)}
      </div>
      
    </>
  );
}

export default ReelData