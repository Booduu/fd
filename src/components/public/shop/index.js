import React from 'react';
import  style from './Shop.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEO } from '../index';
import { motion } from 'framer-motion';

const Shop = ({
    products,
}) => {
    // window.open("https://www.w3schools.com");
    return ( 
    <motion.div 
        transition={{ duration: .4 }}
        className={style.container}
    > 
        <SEO title="Shop" />
        <div className={style.flex_container}>
            {products.map((product, index) => (
                <motion.div 
                    key={product._id} 
                    className={style.item_container}
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    exit={{ scaleX: 0 }}
                    transition={{ delay: `0.${index}` }}
                >
                    <div className={style.img_container}>
                        <img src={product.cover} alt={`product ${product.name}`}/>
                        <div className={style.overlay}>BUY NOW</div>
                    </div>
                    <div className={style.infos_pochette}>
                        <div className={style.infos}>
                            <span className={style.product_type}>{product.type}</span>
                            <span className={style.product_name}>{product.name}</span>
                        </div>
                        {/* <a className={style.link_buy} href={product.link} target="_bank">BUY NOW</a> */}
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
     );
}
 

Shop.propTypes = {
    products: PropTypes.array.isRequired,
}

export default connect(state => ({
    products: state.apiDataReducer.products,
}))(Shop);