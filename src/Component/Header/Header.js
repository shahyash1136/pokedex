import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Header.scss';
const header = () => {
    return (
        <header>
            <div className="main__container">
                <a className="logo" href="index.html">
                    <img src={Logo} alt="Pokemon" />
                </a>
            </div>
        </header>
    )
}

export default header;