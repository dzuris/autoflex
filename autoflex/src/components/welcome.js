import React, { useEffect, useState } from "react";
import "../css/welcome.css";
import mp from "../images/mainPageImg.png";
import ap from "../images/aproval.png";
import ln from "../images/loan.png";
import rt from "../images/rate.png";
import { LuPhoneCall } from "react-icons/lu";

const MainPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 895);

  const cards = [
    {
      img: ln,
      title: "NAJLEPŠIE CENY",
      text: "Všetky ponúkané služby dostupné za prijateľné ceny pre každého.",
    },
    {
      img: rt,
      title: "SKÚSENOSTI",
      text: "Pokrývame všetko od pravidelnej údržby po náročné opravy.",
    },
    {
      img: ap,
      title: "VYŠKOLENÍ MAJSTRI",
      text: "Všetci naši mechanici sú kvalifikovaní a pravidelne preškolení.",
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 895);
    window.addEventListener("resize", handleResize);

    let interval;
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 3000); // every 3 seconds
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, cards.length]);

  return (
    <div>
      {/* === HERO SECTION === */}
      <div className="welcome-full-page-image">
        <img src={mp} alt="Main page background" />
        <div className="welcome-text-overlay">
          <h1>AUTOSERVIS S TRADÍCIOU V ŽILINE</h1>
          <p>
            PROFESIONÁLNE SLUŽBY PRE VŠETKY TYPY VOZIDIEL. RÝCHLY, SPOĽAHLIVÝ A
            ODBORNÝ SERVIS.
          </p>
          <div className="welcome-first-rectangle">
            <button
              onClick={() =>
                document
                  .getElementById("reservation-section")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="welcome-action-button"
            >
              REZERVÁCIA TERMÍNU
            </button>
            <div className="welcome-contact-row">
              <LuPhoneCall className="welcome-phoneIcon" />
              <div className="welcome-number-tog">
                <h3>+421 903 528 064</h3>
                <h6>24-HODINOVÁ ASISTENČNÁ LINKA</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === GREEN SECTION === */}
      <div className="green-section">
        <div className="green-container">
          {isMobile ? (
            <div className="green-card fade-cycle show">
              <img src={cards[currentIndex].img} alt={cards[currentIndex].title} />
              <div className="green-text">
                <h3>{cards[currentIndex].title}</h3>
                <p>{cards[currentIndex].text}</p>
              </div>
            </div>
          ) : (
            cards.map((card, i) => (
              <div key={i} className="green-card">
                <img src={card.img} alt={card.title} />
                <div className="green-text">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
