import React from 'react';
import Styles from './Nav.module.css'
import logo from '../../images/logo.png'

function Nav() {
    return (
        <nav className={Styles.o_nav}>
            <img src={logo} alt="logo" />
        </nav>
    );
}

export default Nav;