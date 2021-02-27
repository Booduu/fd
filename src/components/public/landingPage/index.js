import React from 'react';
import style from './LandingPage.module.scss';
import video from '../../../assets/video/background_video.mp4';
 
const LandingPage = ({
    isHome,
}) => {
    return ( 
        <>
        {isHome ? (
            <video className={style.video} autoPlay loop muted>
                <source 
                    src={video} 
                    type='video/mp4' 
                />
            </video>
        ) : (
            <img className={style.image} src='https://images.pexels.com/photos/952437/pexels-photo-952437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        )}
        </>
       
     );
}
 
export default LandingPage;