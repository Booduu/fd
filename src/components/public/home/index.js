
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Home = ({
    setIsHome,
    albums,
}) => {
    
    useEffect(() => {
        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    });

    return ( 
            <div className={style.container}>
                 {albums && albums[0]?.title && (
                <a href={albums[0].downloadLink} target="_blank" rel="noreferrer">
                    <motion.div 
                        className={style.titles}
                        initial={{ scaleY: 0 }} 
                        animate={{ scaleY: 1 }} 
                        exit={{ scaleY: 0 }}
                        transition={{ duration: .8 }}
                    >
                        <h1>{albums[0].title}</h1>
                        <h3>NEW ALBUM AVAILABLE NOW</h3>
                    </motion.div> 
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