import React from "react";
import Carousel  from "nuka-carousel";

function carousel(){
    return <Carousel autoplay={true} autoplayInterval={3000} wrapAround={true}>
    <img src="src/assets/1 (1).jpg" alt="" />
    <img src="src/assets/1 (2).jpg" alt="" />
    <img src="src/assets/1 (3).jpg" alt="" />
    <img src="src/assets/1 (4).jpg" alt="" />
    <img src="src/assets/1 (5).jpg" alt="" />
    <img src="src/assets/1 (6).jpg" alt="" />
  </Carousel>
}

export default carousel;