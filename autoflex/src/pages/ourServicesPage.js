import React, { useEffect, useState } from 'react';
import Header from "../components/bigHeader";
import {RiPulseFill} from 'react-icons/ri'
import '../css/ourServicesPage.css';
import servicesData from '../json/service.json';
import moreServiceData from '../json/moreService.json'
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
  const [services] = useState(servicesData);
  useEffect(() => {
  }, []);

  const [moreServices] = useState(moreServiceData);
  useEffect(() => {
  }, []);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  }

  return (
    <div>
      <Header/>
      <div className="arrow-circle"  onClick={handleGoBack} style={{ cursor: 'pointer' }}>
                  <FaArrowLeft className="arrow-icon"/>
      </div>
      <div className="ourServRow">
        <div className="ourServ">
              <div className="ourServ-header">
                  <RiPulseFill className="ourServ-icon" />
                  <h3>ČO PONÚKAME?</h3>
              </div>
              <h1>OBJAVTE NAŠE SLUŽBY</h1>
              <p>V Autoservise Autoflex poskytujeme komplexnú starostlivosť o vozidlá od pravidelnej údržby až po náročné opravy. S dôrazom na kvalitu použitých dielov a profesionálny prístup sa staráme o údržbu všetkých druhov osobných a úžitkových motorových vozidiel ako pre súkromných tak aj firemných zákazníkov.</p>
              <div className="ourServ-boxes">
                {services.map((service, index) => (
                    <div className="ourServ-box" key={index}>
                        <img src={service.photoUrl} alt={service.title} className="ourServ-photo" />
                        <h4 className="ourServ-title">{service.title}</h4>
                    </div>
                ))}
            </div>
            <h1>DOPLNKOVÉ SLUŽBY</h1>
            <p>Okrem širokej ponuky štandardných služieb ponúkame aj doplnkové služby pre náročnejších klientov</p>
          </div>
          <div className="moreOurServ-boxes">
            {moreServices.map((moreService, index) => (
                <div className="moreOurServ-box" key={index}>
                    <div className="moreGreen-rectangle">
                        <img src={moreService.photoUrlMore} alt={moreService.titleMore} className="moreOurServ-photo" />
                    </div>
                    <h4 className="moreOurServ-title">{moreService.titleMore}</h4>
                    <p className="moreOurServP">{moreService.textMore}</p>
                </div>
            ))}
        </div>
        <div className='bigGreen'>
          <p>Naším cieľom je poskytovať kvalitné služby za férové ceny, bez skrytých poplatkov a nepríjemných prekvapení.</p>
          <p>Prezrite si náš základný cenník a v prípade záujmu o flotilové služby nás neváhajte kontaktovať pre cenovú ponuku na mieru.</p>
          <button className='moreServ-action-button'>CENNÍK</button>
        </div>
        <footer className='moreServFoot'>
          <p>© Copyright 2024 Marinko x Moresko - All right reserved</p>
        </footer>
        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        )}
        </div>
    </div>
  );
};

export default OurServices;
