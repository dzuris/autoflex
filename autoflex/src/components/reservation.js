import React from 'react';
import '../css/reservation.css';
import gt from '../images/greenTire.png';
import { RiPulseFill } from 'react-icons/ri';
import { FaLocationDot } from "react-icons/fa6";
import {LuPhoneCall} from 'react-icons/lu'
import { FaRegEnvelope } from "react-icons/fa";

const Reservation = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8493d00a-86c1-479f-8317-0706d7d1a6ee");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
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
                    <form className="reservation-form" onSubmit={onSubmit}>
                        <input type="text" placeholder="MENO A PRIEZVISKO" className="form-input" name='name' required/>
                        <input type="tel" placeholder="TELEFÓN" className="form-input" name='phone' required/>
                        <input type="email" placeholder="EMAIL" className="form-input" name='email' required/>
                        <input type="datetime-local" className="form-input" name='date' required   min={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
                            .toISOString()
                            .slice(0, 16)}/>
                        <textarea className="form-input-big" placeholder="EČV VOZIDLA A PROBLÉM" name='message' required></textarea>
                        <button type="submit" className="submit-button" value="Send">ODOSLAŤ</button>
                    </form>
                    <p className="form-result">{result}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Reservation;