import React from "react";
import '../css/bigHeader.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";


const BigHeader = ({ scrollToReservation }) => {

    return (
        <nav className="big-nav">
            <a href="/" className="big-logo-title">
                <img src={logo} alt="Logo"/>
            </a>
            <ul>
                <li>
                    <Link to="/home">Domov</Link>
                </li>
                <li>
                    <a href="#about-section">O nás</a>
                </li>
                <li className="services">
                    <a href="/service">
                        Služby
                    </a>
                </li>
                <li>
                    <Link to="/#reservation">Rezervácia</Link>
                </li>
                <li>
                    <Link to="/contact">Kontakty</Link>
                </li>               
            </ul>
        </nav>
    );
};

export default BigHeader;