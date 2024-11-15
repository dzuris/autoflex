import React from "react";
import '../css/welcome.css';
import mp from '../images/mainPageImg.png';
import ap from '../images/aproval.png';
import ln from '../images/loan.png';
import rt from '../images/rate.png';
import {LuPhoneCall} from 'react-icons/lu'

const MainPage = () => {

    const scrollToReservation = () => {
        document.getElementById("reservation-section").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="welcome-full-page-image">
                <img src={mp} alt="Main page background" />
                <div className="welcome-text-overlay">
                    <h1>AUTOSERVIS S TRADÍCIOU V ŽILINE</h1>
                    <p>PROFESIONÁLNE SLUŽBY PRE VŠETKY TYPY VOZIDIEL. RÝCHLY, SPOĽAHLIVÝ A ODBORNÝ SERVIS.</p>
                    <div className="welcome-first-rectangle">
                        <button onClick={scrollToReservation} className="welcome-action-button">REZERVÁCIA TERMÍNU</button>
                        <LuPhoneCall className="welcome-phoneIcon"/>
                        <div className="welcome-number-tog">
                            <h3>+421 911 528 064</h3>
                            <h6>24-HODINOVÁ ASISTENČNÁ LINKA</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="green-rectangle">
                <div className="green-aproval">
                    <div className="green-one">
                        <img src={ln} alt="Aproval progress" />
                        <div className="green-col">
                            <h3>NAJLEPŠIE CENY</h3>
                            <h6>Všetky ponúkané služby dostupné za prijateľné ceny pre každého</h6>
                        </div>
                    </div>
                    <div className="green-one">
                        <img src={rt} alt="Aproval progress" />
                        <div className="green-col">
                            <h3>SKÚSENOSTI <span className="hidden-sign">&#9733;</span></h3>
                            <h6>Pokrývame všetko od pravidelnej údržby po náročné opravý</h6>
                        </div>
                    </div>
                    <div className="green-one">
                        <img src={ap} alt="Aproval progress" />
                        <div className="green-col">
                            <h3>VYŠKOLENÍ MAJSTRI</h3>
                            <h6>Všetci naši mechanici sú kvalifikovaní pravidelne preškolení</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;