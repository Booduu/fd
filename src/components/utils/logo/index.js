import React from 'react';
import fd_logo from '../../../assets/design/logo/fd_logo.svg';
import aftw_logo from '../../../assets/design/logo/logo_aftrwrk.svg';
import style from './Logo.module.scss';
import PropTypes from 'prop-types';
 

const Logo = ({
    name,
}) => {
    const display = name === 'fulldub' ? fd_logo : name === 'afterwork' ? aftw_logo : fd_logo; 
    return <img alt="logo" className={style.logo} src={display} />;
}

Logo.propTypes = {
    name: PropTypes.string,
}
 
export default Logo;
