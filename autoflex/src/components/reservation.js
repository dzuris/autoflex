import React from "react";
import '../css/reservation.css';
import gt from '../images/greenTire.png';

const Header = () => {
    return (
        <div className="reservation">
            <img src={gt} alt="Zelene pozadie" className="background" />
        </div>
    );
};

export default Header;