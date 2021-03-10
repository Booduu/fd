import React, { useState, useEffect } from 'react';
import style from './Discography.module.scss';
import pochette from '../../../assets/design/pochettes/Cover-Full-Dub-Rewind.jpg'
import { wrapGrid } from 'animate-css-grid';
import ReactPlayer from "react-player";
import { Carousel } from '../../utils';



import './animeGrid.css';
import { connect } from 'react-redux';


const tab = [
    {
        name: "baa",
    },
    {
        name: "baz",
    },
    {
        name: "bae",
    },
    {
        name: "bar",
    },
    {
        name: "bat",
    },
    {
        name: "bay",
    },
    {
        name: "bau",
    },
    {
        name: "bai",
    },
    {
        name: "bao",
    },
    {
        name: "bak",
    },
    {
        name: "baj",
    },
    {
        name: "bav",
    },
];

const Card = ({
  album,
}) => {
    const [expanded, setExpanded] = useState(false);
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    return (
        <div
          // className={`card card--${randomNumber} ${expanded ? "card--expanded" : ""}`}
          className={[`card card--${randomNumber} ${expanded ? "card--expanded" : ""}`, style.cardExpanded].join(' ')}
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
            <div className={style.cardContainer}>
              <div className={[style.imageContainer, expanded && style.isExpanded].join(' ')}>
                <img 
                  src={`http://localhost:3030/uploads/albums/${album.cover}`}
                  className={style.poster}
                />
              </div>
              <div data-role={expanded} className={style.playerContainer}>
                <div className={style.infoText}>
                  <h3>REWIND</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard fezufkezjf febzfilze zebflzknf</p>
                </div>
                <div className={style.buttonContainer}>
                    <button>BUY NOW</button>
                    <button>DOWNLOAD MP3</button>
                </div>
                <div className={style.playerWrapper}>
                  <ReactPlayer
                    url={album.soundcloudLink}
                    width='350px'
                    height='240px'
                  />
                </div>
                </div>
              </div>
           </div>
      );
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
      console.log('albnums', this.props.albums)
    return (
    <div className={style.container}> 
        <div className={[classes, style.flex_container, 'flex_container'].join(' ')} ref={el => (this.grid = el)}>
            {this.props.albums.map(album => <Card key={album._id} album={album}/>)}
        </div>
    </div>
    );
  }
}


const Discography = ({
  albums,
  isMobile,
}) => {
  const state = {
    "grid-gap": false,
    "grid-template-columns": false,
  }
  // const iframe = document.getElementsByClassName('g-background-default');
  // iframe.style.borderRadius = '0px';

  useEffect(() => {

  }, []);
  return (
    <>
      {!isMobile ? (
      <div className="p-4">
        <Grid 
          settings={state} 
          albums={albums}
        /> 
      </div>
      ) : (
      <div className={style.container}> 
        <div className={style.containerMobile}>
          <div className={style.player_container}>
              <div className={style.player_wrapper}>
                <ReactPlayer
                  url="https://soundcloud.com/full-dub-1/sets/rewind"
                  width='100%'
                  height='60vh' 
                  borderRadius= '0px'
                  className={style.player}
                />
              </div>
          </div>
          <div className={style.slide_container}>
            <Carousel />
          </div>
        </div>
      </div>
      )}
    </>
    
  );
}

export default connect(state => ({
  albums: state.apiDataReducer.albums,
  isMobile: state.landingReducer.isMobile,
}))(Discography);
