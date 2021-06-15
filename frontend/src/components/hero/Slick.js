import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/bg-1.jpg";
import img2 from "./images/bg-2.jpg";
import img3 from "./images/bg-3.jpg";
import img4 from "./images/bg-4.jpg";
import img5 from "./images/bg-5.jpg";
import Slider from "react-slick";

function Slick(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt="name" />
      </div>
      <div>
        <img src={img2} alt="name" />
      </div>
      <div>
        <img src={img3} alt="name" />
      </div>
      <div>
        <img src={img4} alt="name" />
      </div>
      <div>
        <img src={img5} alt="name" />
      </div>
    </Slider>
  );
}

export default Slick;
