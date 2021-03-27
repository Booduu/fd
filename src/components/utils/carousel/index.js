import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Carousel.module.scss';
import PropTypes from 'prop-types';

const Carousel = ({
  albums,
  handleAlbum,
}) => {
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
      <div style={{ width: '100%', maxWidth: '70vw', margin: '0px', }}>
        <Slider {...settings}>
          {albums.map((album, index) => (
            <div 
              index={album._id}
              onClick={() => handleAlbum(album)}
              className="item-slicky"
            >
              <img 
                src={album.cover}
                className={style.image_carousel}
                alt={`album ${album.title}`}
              />
            </div>
          ))}     
        </Slider>
      </div>
    )
}

Carousel.propTypes = {
  albums: PropTypes.array.isRequired,
  handleAlbum: PropTypes.func,
}


export default Carousel;

