import React from "react";
import Header from "../components/bigHeader";
import {RiPulseFill} from 'react-icons/ri'
import '../css/contactPage.css';
import { FaLocationDot } from "react-icons/fa6";
import {LuPhoneCall} from 'react-icons/lu'
import { FaRegEnvelope } from "react-icons/fa";
import sl from '../images/smallerLogo.png';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  }

  return (
    <div>
      <Header/>
      <div className="contact-map-col">
        <div className="contact">
              <div className="contactArrow-circle" onClick={handleGoBack} style={{ cursor: 'pointer' }}>
                  <FaArrowLeft className="contactArrow-icon" />
              </div>
              <div className="contact-header">
                  <RiPulseFill className="contact-icon" />
                  <h3>KONTAKTUJTE NÁS</h3>
              </div>
              <h1>PREVÁDZKA</h1>
              <div className="contactAllIcons">
                          <div className="contactIconWithLabel">
                              <div className="contactIconWrapper">
                                  <FaLocationDot className="contactLocationIcon"/>
                              </div>
                                  <div className="contact'to-row">
                                      <h2 className="contactIconLabel">ADRESA</h2>
                                      <h6 className="biggerH">M. R. Štefánika 66, 01001 Žilina</h6>
                                  </div>
                          </div>
                          <div className="contactIconWithLabel">
                              <div className="contactIconWrapper">
                                  <FaRegEnvelope className="contactEnvelopeIcon" />
                              </div>
                                  <div className="contact-to-row">
                                      <h2 className="contactIconLabel">EMAIL</h2>
                                      <h6 className="biggerH">autoflex@autoflex.sk</h6>
                                  </div>
                          </div>
                          <div className="contactIconWithLabel">
                              <div className="contactIconWrapper">
                                  <LuPhoneCall className="contactPhoneIcon"/>
                              </div>
                                  <div className="contact-to-row">
                                      <h2 className="contactIconLabel">TELEFÓN</h2>
                                      <h6 className="biggerH">+421 911 528 064</h6>
                                  </div>
                          </div>
                          <div className="contactIconWithLabel-sec">
                              <div className="contactIconWrapper-sec">
                                  <LuPhoneCall className="contactPhoneIcon"/>
                              </div>
                              <div className="contact-to-row">
                                  <h2 className="contactIconLabel-sec">OTVÁRACIE HODINY</h2>
                                  
                                  <div className="column-contact">
                                      <h6 className="dif">Pondelok - Piatok</h6>
                                      <h6 className="dif">8:00 - 17:00</h6>
                                  </div>
                                  
                                  <div className="column-contact">
                                      <h6 className="dif">Sobota - Nedeľa</h6>
                                      <h6 className="dif">Zatvorené</h6>
                                  </div>
                              </div>
                          </div>
                      </div>
        </div>
          <div className="map">
            <iframe width="520" height="350" frameborder="0" scrolling="no" title="AUTOFLEX" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=AutoFlex,%20s.r.o.,%20M.%20R.%20%C5%A0tef%C3%A1nika%20849,%20010%2001%20%C5%BDilina+(AUTOFLEX)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
          </div>
       </div>
      <footer className="contact-footer">
        <h1>FAKTURAČNÉ ÚDAJE</h1>
        <div className="footer-p">
          <div>
            <p>AutoFlex, s.r.o.</p>
            <p>Rubínova 590/4</p>
            <p>010 09 Žilina - Bytčica</p>
            <p>prevádzka M.R.Štefánika 66</p>
            <p>010 01 Žilina</p>
          </div>
          <div>
            <p>Číslo účtu: 2927854326/1100</p>
            <p>IČO: 46101241</p>
            <p>DIČ: 2023240527</p>
            <p>IČ DPH: SK2023240527</p>
            <p>zapísaná v OR Okresného súdu v Žiline,</p>
            <p>Oddiel Sro, Vložka číslo: 54467/L</p>
            <p>tel: 041/700 33 44</p>
          </div>
          <div>
            <p>Telekom: 0903 528 064</p>
            <p>Orange: 0918 624 038</p>
            <p>mail: autoflex@autoflex.sk</p>  
          </div>
        </div>
        <img src={sl} alt="FooterImg" className="footer-image"/>
      </footer>
    </div>
  );
};

export default Contact;
