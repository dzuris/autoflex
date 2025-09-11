import React, { useEffect, useState } from 'react';
import '../css/bigHeader.css';
import logo from '../images/logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const BigHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);  // State to toggle dropdown visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);  // Toggle dropdown visibility
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    sessionStorage.setItem('scrollToAbout', 'true');

    if (location.pathname === '/') {
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  const handleReservationClick = (e) => {
    e.preventDefault();
    const reservationSection = document.getElementById('reservation-section');
    sessionStorage.setItem('scrollToReservation', 'true');

    if (location.pathname === '/') {
      if (reservationSection) {
        reservationSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      if (sessionStorage.getItem('scrollToAbout') === 'true') {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollToAbout');
      }

      if (sessionStorage.getItem('scrollToReservation') === 'true') {
        const reservationSection = document.getElementById('reservation-section');
        if (reservationSection) {
          reservationSection.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollToReservation');
      }
    }

    if (location.pathname !== '/') {
      sessionStorage.removeItem('scrollToAbout');
      sessionStorage.removeItem('scrollToReservation');
    }
  }, [location]);

  return (
    <nav className="big-nav">
      <a href="/" className="big-logo-title">
        <img src={logo} alt="Logo" />
      </a>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="/">Domov</a>
        </li>
        <li>
          <Link to="/" onClick={handleAboutClick}>O nás</Link>
        </li>
        <li className="services">
          <a href="/service">Služby</a>
        </li>
        <li>
          <Link to="/" onClick={handleReservationClick}>Rezervácia</Link>
        </li>
        <li>
          <Link to="/contact">Kontakty</Link>
        </li>
      </ul>

      <li className='dropDownMenu' onClick={toggleMenu}>
        <RxHamburgerMenu className='burgerIcon' />
        {isOpen && (
          <ul className="dropdown-list">
        
          </ul>
        )}
      </li>
    </nav>
  );
};

export default BigHeader;
