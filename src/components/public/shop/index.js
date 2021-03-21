import React from 'react';
import  style from './Shop.module.scss';
import { connect } from 'react-redux';

const Shop = ({
    products,
}) => {
    return ( 
        <div className={style.container}>
            <div className={style.flex_container}>
                {products.map((product, index) => (
                    <div key={product._id} className={style.item_container}>
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
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default connect(state => ({
    products: state.apiDataReducer.products,
}))(Shop);