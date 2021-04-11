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
            <video className={style.video} autoPlay loop muted> 
                <source 
                    src={video} 
                    type='video/mp4' 
                />
            </video>
            <div className={style.image}></div>
        </>
        // <>
        //     {isHome ? (
        //         // <div className={style.container_video}>
        //         // <ReactPlayer 
        //         //     volume={0} 
        //         //     muted  
        //         //     onReady 
        //         //     playing={true} 
        //         //     width= '100%'
        //         //     height= '100vh'
        //         //     controls={false} 
        //         //     className={style.video_player} 
        //         //     loop={true}
        //         //     url='https://www.youtube.com/watch?v=CmlIn8dD8o4&ab_channel=PRODAFTRWRK' 
        //         //     config={{
        //         //         youtube: {
        //         //         playerVars: { showinfo: 0 }
        //         //         },
        //         //     }}
        //         //     style={{ height: '100vh'}}
        //         // />
        //         // </div>
        //        <>
        //         <iframe 
        //             width="925" 
        //             height="315" 
        //             className={style.video_player} 
        //             src="https://www.youtube.com/embed/CmlIn8dD8o4?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&mute=1&allowFullScreen=1" 
        //             frameBorder="0" 
        //             allowFullScreen
        //             allow="autoplay"
        //         >
        //         </iframe>
        //         <div className={style.image}></div>
        //         </>
        //     ) : (
        //         <>
        //         <video className={style.video} autoPlay loop muted> 
        //             <source 
        //                 src={video} 
        //                 type='video/mp4' 
        //             />
        //         </video>
        //         <div className={style.image}></div>
        //         </>
        //     )}
        // </>
       
     );
}
 
LandingPage.propTypes = {
    isHome: PropTypes.bool,
  }
export default LandingPage;
 