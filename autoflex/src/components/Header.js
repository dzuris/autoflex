import React from "react";
import '../css/Header.css';
import logo from '../images/logo.png';


const Header = () => {

    return (
        <nav className="nav">
            <a href="/" className="logo-title">
                <img src={logo} alt="Logo"/>
            </a>
            <ul>
                <li>
                    <a href="/home">Domov</a>
                </li>
                <li>
                    <a href="#about-section">O nás</a>
                </li>
                <li className="services">
                    <a href="/service" className="service-link">
                        Služby
                        <span className="arrow">&#62;</span>
                    </a>
                </li>
                <li>
                    <a href="#reservation-section">Kontakty</a>
                </li>               
            </ul>
        </nav>
    );
};

export default Header;