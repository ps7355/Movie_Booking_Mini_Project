import React from "react";
import Carousel  from "nuka-carousel";

function carousel(){
    return <Carousel autoplay={true} autoplayInterval={3000} wrapAround={true}>
    <img src="https://img.ticketnew.com/tn/offer_banner/Rudhran/1920_400.jpg" alt="" />
    <img src="https://img.ticketnew.com/tn/offer_banner/Thiruvin_kural/1920_400.jpg" alt="" />
    <img src="https://img.ticketnew.com/tn/offer_banner/Vidyasagar/Website_Banner.jpg" alt="" />
    <img src="https://img.ticketnew.com/tn/offer_banner/Digit/insurence.jpg" alt="" />
    <img src="https://cdn3.ticketnew.com/tn/offer_banner/Digit/accidental.jpg" alt="" />
    <img src="https://img.ticketnew.com/tn/offer_banner/Digit/callsupport.jpg" alt="" />
  </Carousel>
}

export default carousel;