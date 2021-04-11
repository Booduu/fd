import React, { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, toggleMenu } from '../../../store/actions'; 
import style from './Header.module.scss';
import { menuListPublic, menuListAdmin } from '../../../Constants/menu-list';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Header = ({
    auth,
    logout,
    isOpen,
    toggleMenu,
    isMobile,
}) => {

    const [displayMenuBar, setDisplayMenuBar] = useState(isOpen ? 'translate(0%)' : 'translate(250%)');

    useEffect(() => {
        setDisplayMenuBar(isOpen ? 'translate(123%)' : '');
    }, [isOpen]);
    return ( 
        <>
            <div 
                className={[style.container, isOpen ? style.menuOpen : '' ].join('')}
                style={{ transform: displayMenuBar, transition: isMobile ? '.5s' : 'none' }}
            >   
                <div className={style.menuPublic}>
                        {menuListPublic.map((link, index) => (
                            <div key={link + index}>
                                <NavLink 
                                    key={index + link.name}
                                    to={link.to}
                                    activeClassName={style.active}
                                    onClick={() => toggleMenu(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </div>
                        ))}
                    </div>

                {auth.isLoggedIn ? (
                    <div className={style.menuAdmin}>
                        {menuListAdmin.map((link, index) => (
                            <div key={link + index}>
                                <NavLink  
                                    key={index + link.name} 
                                    to={link.to}
                                    activeClassName={style.active}
                                    onClick={() => toggleMenu(false)}
                                >
                                    {link.name}
                                </NavLink>
                            </div>
                        ))}
                        <div>
                            <NavLink to="/home" onClick={() => {
                                logout();
                                toggleMenu(false); 
                            }}>logout</NavLink>
                        </div>
                    </div>
                ) : null}
            </div>
        </>
     );
}

Header.propTypes = {
    auth: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isMobile: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
}
 
export default connect(state => ({
    auth : state.authentificationReducer.auth,
    isOpen: state.menuReducer.isOpen,
    isMobile: state.landingReducer.isMobile,
}), { 
    logout,
    toggleMenu,
})(Header);