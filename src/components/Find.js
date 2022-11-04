import React, { useState } from 'react'
import axios from 'axios';
import Masonry from "react-masonry-css"

const Find = () => {

    const download = e => {
        // console.log(e);
        fetch(e, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
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

    const [photos, setPhotos] = useState([]);
    const [inputs, setInputs] = useState("");

    const loadphoto = () => {
        const key = "18005070-db80de985224bc25be5b2d215";
        const api = "https://pixabay.com/api/";
        axios
            .get(`${api}?key=${key}&editors_choice=true&q=${inputs}&per_page=50`)
            .then(res => setPhotos(res.data.hits));

    }

    const fitting = {
        default: 3, 1200: 3, 992: 2, 768: 2, 576: 1,
    }

    function photo(val, index) {
        return (
            <div><img className="img-fluid" src={val.webformatURL} key={index} alt="img" />
                <button onClick={() => download(val.largeImageURL)} id="download">Download</button></div>

        )
    }
    return (
        <>
            <div className="App1">
                <div id="mydiv1">
                    <input style={{ width: "75%" }} type="text" value={inputs} onChange={(e) => setInputs(e.target.value)} placeholder="Search Image" />
                    <button style={{ marginLeft: "1rem" }} className="btn btn-danger" onClick={() => loadphoto()}>Submit</button>
                </div>
                {photos.length == 0 ? (<div style={{ color: "white", position:"absolute",top:"50%", right:"50%",transform:"translate(50%,-50%)"}}>Search Above ^</div>) : (<Masonry
                    breakpointCols={fitting}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                >
                    {photos.map(photo)}
                </Masonry>)}


            </div>

        </>
    )
}

export default Find
