
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';
import PropTypes from 'prop-types';

const Home = ({
    setIsHome,
    albums,
}) => {
    
    useEffect(() => {
        console.log('oooooooooo')

        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    });

    return ( 
            <div className={style.container}>
                 {albums && albums[0]?.title && (
                <a href={albums[0].downloadLink} target="_blank" rel="noreferrer">
                    <div className={style.titles}>
                        <h1>{albums[0].title}</h1>
                        <h3>NEW ALBUM AVAILABLE NOW</h3>
                    </div> 
                </a>     
                )}
            </div>    
     );
}
 
Home.propTypes = {
    albums: PropTypes.array.isRequired,
    setIsHome: PropTypes.func,
}

export default connect(state => ({
    albums: state.apiDataReducer.albums,
}))(Home);