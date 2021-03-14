
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';

const Home = ({
    setIsHome,
    albums,
}) => {
    useEffect(() => {
        console.log('setIsHome useeffect')
        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    }, []);

    console.log('album', albums, albums[0].title)
    
    return ( 
    
            <div className={style.container}>
                <div className={style.titles}>
                    <h1>Rewind</h1>
                    <h3>NEW ALBUM AVAILABLE NOW</h3>
                </div> 
            </div>
        
     );
}
 
export default connect(state => ({
    albums: state.apiDataReducer.albums,
}))(Home);