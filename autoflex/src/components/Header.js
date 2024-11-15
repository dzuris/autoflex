import React from "react";
import '../css/Header.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="nav">
            <Link to="/" className="logo-title">
                <img src={logo} alt="Logo" />
            </Link>
            <ul>
                <li>
                    <Link to="/home">Domov</Link>
                </li>
                <li>
                    <a href="#about-section">O nás</a>
                </li>
                <li className="services">
                    <Link to="/service" className="service-link">
                        Služby
                        <span className="arrow">&#62;</span>
                    </Link>
                    {/* <ul className="service-dropdown">
                        <li><Link to="/service/1">Service 1</Link></li>
                        <li><Link to="/service/2">Service 2</Link></li>
                        <li><Link to="/service/3">Service 3</Link></li>
                    </ul> */}
                </li>
                <li>
                    <Link to="/contact">Kontakty</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
