import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Header from "./Header";
import MainPage from "./mainPage";
import AllServices from "./allServices";
import About from "./about"
import Review from "./review"
import Reservation from "./reservation"

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

  return (
    <div>
      <div>
        <Header />
        <MainPage />
      </div>
      <div id="service-section">
        <AllServices/>
      </div>
      <div id="about-section">
        <About/>
      </div>
      <div id="review-section">
        <Review/>
      </div>
      <div id="reservation-section">
        <Reservation/>
      </div>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
}

export default App;
