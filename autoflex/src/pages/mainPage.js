import React, { useState, useEffect } from 'react';
import '../css/mainPage.css';
import Header from "../components/bigHeader";
import Welcome from "../components/welcome";
import AllServices from "../components/allServices";
import About from "../components/about";
// import Review from "../components/review";
// import Reservation from "../components/reservation";
import Fq from "../components/fq";
// import ShowCase from "../components/showCase"
import CookieConsent from "react-cookie-consent";
import Google from "../components/google";


const App = () => {
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

  // const [cookies] = useCookies(["cookieConsent"]);

  return (
      <div>
        <div>
          <Header />
          <Welcome />
        </div>
        <div id="service-section">
          <AllServices />
        </div>
        <div id="about-section">
          <About />
        </div>
        <div id="review-section">
          <Google />
        </div>
        {/* <div id="reservation-section">
          <Reservation />
        </div> */}
        {/* <div>
          <ShowCase/>
        </div> */}
        <div>
          <Fq id="fq-section" />
        </div>
        <div className='cookie-section'>
          <CookieConsent 
              location='bottom'
              style={{background: 'black', textAlign: 'center', zIndex: '99999'}}
              buttonStyle={{background: '#3FAB3E', color: 'white', justifyContent: 'center', fontSize: '14px'}}
          >This site use cookies.</CookieConsent>
        </div>
        <footer className='footer-main'> 
          <p>© Copyright 2024 Marinko x Moresko - All right reserved</p>
        </footer>

        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
        )}
      </div>
  );
}

export default App;
