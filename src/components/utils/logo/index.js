import React from 'react';
import fd_logo from '../../../assets/design/logo/fd_logo.svg';
import aftw_logo from '../../../assets/design/logo/logo_aftrwrk.svg';
import style from './Logo.module.scss';

const Logo = ({
    name,
}) => {
    const display = name === 'fulldub' ? fd_logo : name === 'afterwork' ? aftw_logo : fd_logo; 
    return <img className={style.logo} src={display} />;
}
 
export default Logo;
