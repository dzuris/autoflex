import React, { useState, useEffect } from 'react';
import '../css/App.css';
import Header from "./Header";
import MainPage from "./mainPage";
import AllServices from "./allServices";
import About from "./about"
import Review from "./review"

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
      <div>
        <AllServices/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Review/>
      </div>
      <div>
        <h1>HELLO</h1>
      </div>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>↑</button>
      )}
    </div>
  );
}

export default App;
