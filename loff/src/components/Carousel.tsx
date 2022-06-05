import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function Carousel(props: { images: any }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {props.images.map((image: any, index: number) => {
        return (
          <Link to={"/serier"} key={index}>
            <div className="carousel-image-container">
              <img src={image.src} />
            </div>
          </Link>
        );
      })}
    </Slider>
  );
}

export default Carousel;
