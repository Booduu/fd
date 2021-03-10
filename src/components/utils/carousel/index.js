import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pochette from '../../../assets/design/pochettes/Cover-Full-Dub-Rewind.jpg'
import style from './Carousel.module.scss';

const Carousel = () => {
  const settings = {
    // className: "center",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
    return (
      <div style={{ width: '100%', maxWidth: '70vw', margin: '0px'}}>
        <Slider {...settings}>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          <div style={{ padding: '5px' }}>
            <img 
              src={pochette} 
              // style={{
              //   width: '100%',
              //   padding: '1px',
              //   maxHeight: '20vh',
              // }}
              className={style.image_carousel}
            />
          </div>
          
         
        </Slider>
      </div>
    )
}

export default Carousel;

