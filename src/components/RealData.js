import React, { useEffect, useState } from "react"
import axios from 'axios';
import Reels from "./Reels";

const ReelData = () => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    const key = "eWYa4Jep0IA9I-aHGm9UK5UaBVLVzX1Npzs6WjX3dcc";
    const api = "https://api.unsplash.com";
    axios
      .get(`${api}/photos/random?client_id=${key}&&count=30`)
      .then(res => setImages([...images, ...res.data]));

  }, [])
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