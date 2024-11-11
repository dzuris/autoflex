import React from "react";
import '../css/reservation.css';
import gt from '../images/greenTire.png';
import { RiPulseFill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";
import {LuPhoneCall} from 'react-icons/lu'
import { FaRegEnvelope } from "react-icons/fa";

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
                    <div className="allIcons">
                        <div className="iconWrapper">
                            <FaLocationDot className="locationIcon"/>
                        </div>
                        <div className="iconWrapper">
                            <LuPhoneCall className="phoneIcon"/>
                        </div>
                        <div className="iconWrapper">
                            <FaRegEnvelope className="envelopeIcon" />
                        </div>
                    </div>
                </div>
                <div className="black-rectangle"></div>
            </div>
        </div>
    );
};

export default Header;