import React from "react";
import Carousel  from "nuka-carousel";

function carousel(){
    return <Carousel autoplay={true} autoplayInterval={3000} wrapAround={true}>
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dasara-et00316318-1679638362.jpg" alt="" />
    <img src="src/assets/1 (2).jpg" alt="" />
    <img src="src/assets/1 (3).jpg" alt="" />
    <img src="src/assets/1 (4).jpg" alt="" />
    <img src="src/assets/1 (5).jpg" alt="" />
    <img src="src/assets/1 (6).jpg" alt="" />
  </Carousel>
}

export default carousel;