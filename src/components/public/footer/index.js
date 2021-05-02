import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (  
        <div className={styles.footer}>
          <NavLink to="/Mentions">Mentions Légales</NavLink>
          <a href="">Dev. by Mathias Payen</a>
        </div>
    );
}
 
export default Footer;