import React from 'react';
import style from './LandingPage.module.scss';
import videoHome from '../../../assets/video/fullfinal.mov';

const LandingPage = () => {

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
     );
}
 
export default LandingPage;
 