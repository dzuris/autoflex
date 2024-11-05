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
                    <a href="/about">O nás</a>
                </li>
                <li>
                    <a href="/service">Služby</a>
                </li>
                <li>
                    <a href="/contacts">Kontakty</a>
                </li>               
            </ul>
        </nav>
    );
};

export default Header;