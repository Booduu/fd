import React from 'react';
import  style from './Shop.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

const Shop = ({
    products,
}) => {
    return ( 
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className={style.container}
    > 
        {/* <div className={style.container}> */}
            <div className={style.flex_container}>
                {products.map((product, index) => (
                        <motion.div 
                            key={product._id} 
                            className={style.item_container}
                            initial={{ scaleX: 0 }} 
                            animate={{ scaleX: 1 }} 
                            exit={{ scaleY: 0 }}
                            transition={{ delay: `0.${index}` }}
                        >
                            <div className={style.img_container}>
                                <img src={product.cover} alt={`product ${product.name}`}/>
                            </div>
                            <div className={style.infos_pochette}>
                                <div className={style.infos}>
                                    <span className={style.product_type}>{product.type}</span>
                                    <span className={style.product_name}>{product.name}</span>
                                </div>
                                <a className={style.link_buy} href={product.link} target="_bank">BUY NOW</a>
                            </div>
                        </motion.div>
                ))}
            </div>
        {/* </div> */}
    </motion.div>
     );
}
 

Shop.propTypes = {
    products: PropTypes.array.isRequired,
}

export default connect(state => ({
    products: state.apiDataReducer.products,
}))(Shop);