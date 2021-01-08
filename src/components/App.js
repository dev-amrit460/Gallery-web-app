import React, { useEffect, useState } from "react"
import Api from "./Api"
import Image from "./Image"
import Masonry from "react-masonry-css"
import InfiniteScroll from "react-infinite-scroller"
import "bootstrap/dist/css/bootstrap.min.css"

let pageNumber = 1

const App = () => {
  const [imagesArray, setImagesArray] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    getImg(pageNumber)
  }, [])

  const getImg = pageNumber => {
    Api.get("/", { params: { page: pageNumber } }).then(res => {
      //console.log(res.data);
      setImagesArray([...imagesArray, ...res.data.hits])
      setTotalPages(res.data.totalHits / res.data.hits.length) //totalHits and hits length are coming from api.
    })
    //.catch((err) => console.log(err));
  }

  // these valuses are taken from bootstrap grid system
  const fitting = {
    default: 3, 1200: 3, 992: 2, 768: 2, 576: 1,
  }

  return (
    <div className="container-fluid">
      <InfiniteScroll
        pageStart={0}
        loadMore={() => getImg(++pageNumber)}
        hasMore={pageNumber < totalPages ? true : false}
      >
        <Masonry
          breakpointCols={fitting}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {imagesArray.map(image => (
            <Image key={image.id} {...image} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  )
}

export default App
