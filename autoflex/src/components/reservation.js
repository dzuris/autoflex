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
                        <div className="iconWithLabel">
                            <div className="iconWrapper">
                                <FaLocationDot className="locationIcon"/>
                            </div>
                                <div className="to-row">
                                    <h2 className="iconLabel">LOCATION</h2>
                                    <h6>1265 11th Ave Calgary Alberta Canada</h6>
                                </div>
                        </div>
                        <div className="iconWithLabel">
                            <div className="iconWrapper">
                                <FaRegEnvelope className="envelopeIcon" />
                            </div>
                                <div className="to-row">
                                    <h2 className="iconLabel">EMAIL</h2>
                                    <h6>support@example.com</h6>
                                </div>
                        </div>
                        <div className="iconWithLabel">
                            <div className="iconWrapper">
                                <LuPhoneCall className="phoneIcon"/>
                            </div>
                                <div className="to-row">
                                    <h2 className="iconLabel">PHONE</h2>
                                    <h6>62 123 4567 890</h6>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="black-rectangle">
                <div className="mid-rec">
                    <h1>REZERVÁCIA</h1>
                    <form className="reservation-form">
                        <input type="text" placeholder="MENO A PRIEZVISKO" className="form-input" />
                        <input type="tel" placeholder="TELEFÓN" className="form-input" />
                        <input type="email" placeholder="EMAIL" className="form-input" />
                        <input type="datetime-local" className="form-input" />
                        <textarea class="form-input-big" placeholder="EČV VOZIDLA A PROBLÉM"></textarea>
                        <button type="submit" className="submit-button">ODOSLAŤ</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;