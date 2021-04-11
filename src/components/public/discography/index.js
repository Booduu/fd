import React, { useState } from 'react';
import style from './Discography.module.scss';
import { wrapGrid } from 'animate-css-grid';
import ReactPlayer from "react-player";
import { Carousel } from '../../utils';
import './animeGrid.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Player = ({
  width,
  height,
  url,
  clas,
}) => {
  return (
    <ReactPlayer
      volume={0}
      controls={false}
      url={url}
      width={width}
      height={height}
      className={ clas ? style.player : null }
    />  
  )
}

Player.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  url: PropTypes.string,
  clas: PropTypes.string,
}

const Card = React.memo(({
  album,
}) => {
    const [expanded, setExpanded] = useState(false);
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return (
        <motion.div
          className={[`card card--${randomNumber} ${expanded ? "card--expanded" : ""}`, style.cardExpanded].join(' ')}
          onClick={() => {
            setExpanded(!expanded);
          }}
          initial={{ scaleY: 0 }} 
          animate={{ scaleY: 1 }} 
          exit={{ scaleY: 0 }}
          transition={{ duration: .2 }}
        >
            <div className={style.cardContainer}>
              <div className={[style.imageContainer, expanded && style.isExpanded].join(' ')}>
                <img 
                  src={album.cover}
                  className={style.poster}
                  alt={`album ${album.title}`}
                />
              </div>
              <div data-role={expanded} className={style.playerContainer}>
                <div className={style.infoText}>
                  <h3>{album.title}</h3>
                </div>
                <div className={style.buttonContainer}>
                    <a href={album.buyLink} target="_blank" rel="noopener noreferrer">BUY NOW</a>
                    <a href={album.downloadLink} target="_blank" rel="noopener noreferrer">DOWNLOAD MP3</a>
                </div>
                <div className={style.playerWrapper}>
                  <Player 
                    width='350px'
                    height='240px'
                    url={album.soundcloudLink}
                  />

                </div>
                </div>
              </div>
           </motion.div>
      );
});

Card.propTypes = {
  album: PropTypes.object,
}

class Grid extends React.Component {
  componentDidMount() {
    // will automatically clean itself up when dom node is removed
    wrapGrid(this.grid, { easing : 'backOut', stagger: 10, duration: 400 });
  }
  random() {
    return Math.floor(Math.random() * 5) + 1;
  }

  render() {
    let classes = "grid";
    Object.keys(this.props.settings)
      .filter(k => this.props.settings[k])
      .forEach(k => (classes += " " + k));

    return (
        <div className={[classes, style.flex_container, 'flex_container'].join(' ')} ref={el => (this.grid = el)}>
            {this.props.albums.map((album, index) => (
              <Card key={album._id} album={album}/>
            ))}
        </div>
    );
  }
}

Grid.propTypes = {
  albums: PropTypes.array,
  settings: PropTypes.object,
}

const Discography = ({
  albums,
  isMobile,
}) => {
  const state = {
    "grid-gap": false,
    "grid-template-columns": false,
  };

  const [albumToPlay, setAlbumToPlay] = useState(albums[0]);
  const handleAlbum = (album) => {
    setAlbumToPlay(album)
  };

  return (
    <>
      <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className={style.container}
      >
        {/* <div className={style.container}>  */}
          {!isMobile ? (
            <Grid 
              settings={state} 
              albums={albums}
            /> 
          ) : (
            <div className={style.containerMobile}>
              <div className={style.player_container}>
                  <div className={style.player_wrapper}>
                    <Player 
                      width='100%'
                      height= '60vh'
                      clas={style.player}
                      url={albumToPlay?.soundcloudLink ? albumToPlay.soundcloudLink : 'https://soundcloud.com/full-dub-1/sets/rewind'}
                    />
                  </div>
              </div>
              <div className={style.slide_container}>
                <Carousel 
                  albums={albums}
                  handleAlbum={handleAlbum}
                />
              </div>
            </div>
          )}
        {/* </div> */}
      </motion.div>
    </>
  );
}


Discography.propTypes = {
  albums: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default connect(state => ({
  albums: state.apiDataReducer.albums,
  isMobile: state.landingReducer.isMobile,
}))(Discography);
