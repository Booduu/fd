import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from '../../../store/actions';
import style from './Burger.module.scss';

const Burger = ({
    toggleMenu,
    isOpenMenu,
}) => {
    const [toggleBurger, setToggleBurger] = useState(false)
    useEffect(() => {
        console.log(toggleBurger);
    }, [toggleBurger])

    const isOpen = toggleBurger ? style.firstBurger : '';

    return ( 
        <div 
            className={style.menuBurger}
            onClick={() => toggleMenu(true)}
        >
            <div className={[style.burger, isOpenMenu ? style.firstBurger : ''].join(' ')}></div>
            <div className={[style.burger, isOpenMenu ? style.midBurger : ''].join(' ')}></div>
            <div className={[style.burger, isOpenMenu ? style.thirdBurger : ''].join(' ')}></div>

            <div className={[style.burger, style.burgerClose, isOpenMenu ? style.burgerOpenLeft : style.burgerCloseLeft].join(' ')}></div>
            <div className={[style.burger, style.burgerClose, , isOpenMenu ? style.burgerOpenRight : style.burgerCloseRight].join(' ')}></div>
        </div> 
    );
}
 
export default connect(state => ({
    isOpenMenu: state.menuReducer.isOpen,
}), {
    toggleMenu,
})(Burger);