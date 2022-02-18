import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from './Gallery.css';
const Gallery = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  let SliderItems = images.map( (item, i) => {
      return (
          <div className={"Gallery__item"} key={i}>
              <img className={style.Gallery__image} src={item.image} alt={"Image " + i} />
          </div>
      );
  } );
  return (
    <React.Fragment>
      <div>
        <Slider {...settings}>
          {SliderItems}
        </Slider>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
