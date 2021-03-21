
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';

const Home = ({
    setIsHome,
    albums,
}) => {
    
    useEffect(() => {
        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    }, []);

    return ( 
    
            <div className={style.container}>
                 {albums && albums[0]?.title && (
                <a href={albums[0].downloadLink} target="_blank">
                    <div className={style.titles}>
                        <h1>{albums[0].title}</h1>
                        <h3>NEW ALBUM AVAILABLE NOW</h3>
                    </div> 
                </a>     
                )}
            </div>
        
     );
}
 
export default connect(state => ({
    albums: state.apiDataReducer.albums,
}))(Home);