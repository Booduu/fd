import { styled } from '@material-ui/core';
import React, { useEffect } from 'react';
import style from './Home.module.scss';

const Home = ({
    setIsHome,
}) => {
    useEffect(() => {
        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    }, []);
    
    return ( 
    
            <div className={style.container}>
                <div className={style.titles}>
                     <h1>REWIND</h1>
                    <h3>NEW ALBUM AVAILABLE NOW</h3>
                </div> 
            </div>
        
     );
}
 
export default Home;