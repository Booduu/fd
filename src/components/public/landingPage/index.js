import React from 'react';
import style from './LandingPage.module.scss';
import videoHome from '../../../assets/video/fullfinal.mov';
import videoPage from '../../../assets/video/background_video.mp4';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

const LandingPage = ({
    isHome,
}) => {

    return ( 
        <>
            <video className={style.video} autoPlay loop muted> 
            <source 
                src={videoHome} 
                type='video/mp4' 
            />
            </video>
            <div className={style.image}></div>
        </>
        // <>
        //     {isHome ? (
        //      <>
        //          <video className={style.video} autoPlay loop muted> 
        //              <source 
        //                  src={isHome ? videoHome : videoPage} 
        //                  type='video/mp4' 
        //              />
        //          </video>
        //          <div className={style.image}></div>
        //      </>
        //     ) : (
        //         <>
        //             <video className={style.video} autoPlay loop muted> 
        //                 <source 
        //                     src={videoPage} 
        //                     type='video/mp4' 
        //                 />
        //             </video>
        //             <div className={style.image}></div>
        //         </>
        //     )}
        // </>
       
     );
}
 
LandingPage.propTypes = {
    isHome: PropTypes.bool,
  }
export default LandingPage;
 