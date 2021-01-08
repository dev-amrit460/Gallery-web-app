import React, { useEffect, useState } from "react"
import Rotate from "../components/Rotate"
import axios from 'axios';

const Provider = () => {
let count=0;
const [photos,setPhotos]=useState([]);
useEffect( () =>{
const key = "eWYa4Jep0IA9I-aHGm9UK5UaBVLVzX1Npzs6WjX3dcc";
const api = "https://api.unsplash.com";
axios
.get(`${api}/photos/random?client_id=${key}&&count=15`)
.then(res=> setPhotos([...photos,...res.data]));

},[])
    return (
      <>
{photos.map(photo =>(
 
  <Rotate url={photo.urls.small} id={++count} key={photo.id}/>
))}

      </>
    );
  }

  export default Provider