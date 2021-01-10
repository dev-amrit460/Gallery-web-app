import React, { useEffect, useState } from "react"
import axios from 'axios';
import Reels from "./Reels";

const ReelData = () => {

  const [images, setImages] = useState([]);
  
  useEffect(()=>{
    loadImage();
  },[])

  const loadImage= () => {
    const key = "WuNnKZ04B1kDQXRQoh3GpYpNO4TbyiCU1p1RlnqLVJ0";
    const api = "https://api.unsplash.com";
    axios
      .get(`${api}/photos/random?client_id=${key}&&count=30`)
      .then(res => setImages([...images, ...res.data]));

  }

  return (
    <>

      <div className="parent">
        {images.map(photo => (

          <Reels url={photo.urls.small} key={photo.id} />
        ))}
      </div>
      
    </>
  );
}

export default ReelData