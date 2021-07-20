import React from 'react';
import fd_logo from '../../../assets/design/logo/fd_logo.svg';
import aftw_logo from '../../../assets/design/logo/logo_aftrwrk.svg';
import style from './Logo.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
 

const Logo = ({
    name,
}) => {
    const display = name === 'fulldub' ? fd_logo : name === 'afterwork' ? aftw_logo : fd_logo; 
    return  <NavLink to="/home" className={style.logo}><img alt="logo"  src={display} /></NavLink>;
}

Logo.propTypes = {
    name: PropTypes.string,
}
 
export default Logo;
