import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <nav className="nav">
            <Link to="/home" className="logo-title">
                <img src={logo} alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/home">Domov</Link>
                </li>
                <li>
                    <a href="#about-section">O nás</a>
                </li>
                <li className="services" >
                    <Link to="/service" className="service-link">
                        Služby
                        <span className="arrow">&#62;</span>
                    </Link>
                    <ul className="service-dropdown">
                        <li><a href='/service'>Service 1</a></li>
                        <li><a href='/service'>Service 2</a></li>
                        <li><a href='/service'>Service 3</a></li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">Kontakty</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
