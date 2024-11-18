import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/reservation.css';
import gt from '../images/greenTire.png';
import { RiPulseFill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";
import {LuPhoneCall} from 'react-icons/lu'
import { FaRegEnvelope } from "react-icons/fa";

const Reservation = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_b5l5qbi',  //service_id
        'template_v52wni7',            //template_id
        form.current, {
            publicKey: 'zSGVd6X9Rpi9MFy3H',     // public_key --- integration --- API KEY
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
    return (
        <div className="reservation">
            <img src={gt} alt="Zelene pozadie" className="background" />
            <div className="content">
                <div className="text-rec">
                    <div className="reservation-header">
                        <RiPulseFill className="icon-l" />
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
                                    <h2 className="iconLabel">NAVŠTÍVTE NÁS</h2>
                                    <h6>M. R. Štefánika 849, 010 01 Žilina</h6>
                                </div>
                        </div>
                        <div className="iconWithLabel">
                            <div className="iconWrapper">
                                <FaRegEnvelope className="envelopeIcon" />
                            </div>
                                <div className="to-row">
                                    <h2 className="iconLabel">NAPÍŠTE NÁM</h2>
                                    <h6>autoflex@autoflex.sk</h6>
                                </div>
                        </div>
                        <div className="iconWithLabel">
                            <div className="iconWrapper">
                                <LuPhoneCall className="phoneIcon"/>
                            </div>
                                <div className="to-row">
                                    <h2 className="iconLabel">ZAVOLAJTE NÁM</h2>
                                    <h6>+421 911 528 064</h6>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="black-rectangle">
                <div className="mid-rec">
                    <h1>REZERVÁCIA</h1>
                    <form className="reservation-form"  ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="MENO A PRIEZVISKO" className="form-input" name='user_name'/>
                        <input type="tel" placeholder="TELEFÓN" className="form-input" name='user_phone'/>
                        <input type="email" placeholder="EMAIL" className="form-input" name='user_email' />
                        <input type="datetime-local" className="form-input" name='user_date' />
                        <textarea class="form-input-big" placeholder="EČV VOZIDLA A PROBLÉM" name='message'></textarea>
                        <button type="submit" className="submit-button" value="Send">ODOSLAŤ</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Reservation;