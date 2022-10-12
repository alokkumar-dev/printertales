import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
export const Crousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  };
  return (
    <Slider {...settings} className="carousel">
      <div className="carouselDiv">
        <img
          className="carouselImages"
          src="https://printertales.com/public/upload/home/62bc5d937690b_home-sec.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://printertales.com/public/upload/blog/633173d25ff31_2-1-.jpg"
          alt=""
          className="carouselImages"
        />
      </div>
      <div>
        <img
          src="https://printertales.com/public/upload/blog/6331747b63b86_1.jpg"
          alt=""
          className="carouselImages"
        />
      </div>
      <div>
        <img
          src="https://printertales.com/public/upload/blog/632d912122842_connecting-brother-printer-to-wifi.jpg"
          alt=""
          className="carouselImages"
        />
      </div>
      <div>
        <img
          src="https://printertales.com/public/upload/blog/632be5e5ba216_2.jpg"
          alt=""
          className="carouselImages"
        />
      </div>
    </Slider>
  );
};
