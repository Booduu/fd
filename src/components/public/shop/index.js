import React from 'react';
import  style from './Shop.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SEO } from '../index';
import { motion } from 'framer-motion';

const Shop = ({
    products,
}) => {
    return ( 
    <motion.div 
        transition={{ duration: .4 }}
        className={style.container}
    > 
        <SEO title="Shop" />
        <div className={style.flex_container}>
            {products.map((product, index) => {
                return (
                <motion.div 
                    key={product._id} 
                    className={style.item_container}
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    exit={{ scaleX: 0 }}
                    // transition={{ delay: `0.${index}` }}
                    onClick={() => window.open(product.link)}
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
                    </div>
                </motion.div>
            )})}
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