import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './Home.module.scss';
import PropTypes from 'prop-types';
import { SEO } from '../index';
import { motion } from 'framer-motion';

const Home = ({
    setIsHome,
    albums,
}) => {
    
    const customLink = albums && albums[0]?.linkForLastAlbum ? albums[0]?.linkForLastAlbum : "https://flowercoast.ffm.to/forward?fbclid=IwAR1WvvIzEFQbDI4ltXg6iodMttyfktZIZ_fX_cjjciGn4NF6R-L0HJ2oTnU";
    
    useEffect(() => {
        setIsHome(true);
        return () => {
            setIsHome(false);
        }
    });
    console.log('skank customLink', customLink);
    return ( 
        <div className={style.container}>
            <SEO title="Home" />
                {albums && albums[0]?.title ? (
                    <a href={customLink} target="_blank" rel="noreferrer">
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
                ) : (
                    <a href={customLink} target="_blank" rel="noreferrer">
                        <motion.div 
                            className={style.titles}
                            initial={{ scaleY: 0 }} 
                            animate={{ scaleY: 1 }} 
                            exit={{ scaleY: 0 }}
                            transition={{ duration: .8 }}
                        >
                            <h1>Full Dub</h1>
                            <h3>NEW ALBUM AVAILABLE NOW</h3>
                            <p>Site en maintenance !</p>

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