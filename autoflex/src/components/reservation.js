import React from "react";
import '../css/reservation.css';
import gt from '../images/greenTire.png';
import { RiPulseFill } from 'react-icons/ri';

const Header = () => {
    return (
        <div className="reservation">
            <img src={gt} alt="Zelene pozadie" className="background" />
            <div className="content">
                <div className="text-rec">
                    <div className="reservation-header">
                        <RiPulseFill className="icon" />
                        <h4>OBJEDNAJTE SA</h4>
                    </div>
                    <h2>DOSTANEME VÁS SPÄŤ NA CESTU</h2>
                    <p>Rezervujte sa telefonicky, emailom alebo využite náš online rezervačný formulár a rezervujte termín podľa svojich potrieb. Vyberte dátum a čas, ktorý vám vyhovuje, a my sa o vaše vozidlo postaráme.</p>
                </div>
                <div className="black-rectangle"></div>
            </div>
        </div>
    );
};

export default Header;