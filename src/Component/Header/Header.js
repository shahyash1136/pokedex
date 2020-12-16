import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.scss';
import { NavLink } from "react-router-dom";
const header = () => {
    return (
        <header>
            <div className="main__container">
                <NavLink className="logo" to="/">
                    <img src={Logo} alt="Pokemon" />
                </NavLink>
            </div>
        </header>
    )
}

export default header;