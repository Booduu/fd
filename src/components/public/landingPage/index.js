import React from 'react';
import style from './LandingPage.module.scss';
import video from '../../../assets/video/background_video.mp4';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';


const LandingPage = ({
    isHome,
}) => {
    return ( 
        <>
            {isHome ? (
                <ReactPlayer 
                    volume={0} 
                    muted  
                    onReady 
                    playing={true} 
                    width="100vw" 
                    height="100vh" 
                    controls={false} 
                    className={style.video_player} 
                    loop={true}
                    url='https://www.youtube.com/watch?v=CmlIn8dD8o4&ab_channel=PRODAFTRWRK' 
                    config={{
                        youtube: {
                        playerVars: { showinfo: 0 }
                        },
                    }}
                />
            ) : (
                <video className={style.video} autoPlay loop muted> 
                    <source 
                        src={video} 
                        type='video/mp4' 
                    />
                </video>
            )}
        </>
       
     );
}
 
LandingPage.propTypes = {
    isHome: PropTypes.bool,
  }
export default LandingPage;
 