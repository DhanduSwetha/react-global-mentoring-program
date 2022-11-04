import React from "react";
import logo from '../../common/netflixroulette.svg';
import './styles.css';

const NetflixLogo = () => {
    return (
        <div className="netflix-header">
            <span className="logo-symbol">N</span>
            <img src={logo} alt="Logo" className="logo" />
        </div>
    )
}
export default NetflixLogo
