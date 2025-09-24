import React from "react";
import "../css/sponsors.css";
import sponsor_1 from '../images/spon1.png';
import sponsor_2 from '../images/spon2.png';
import sponsor_3 from '../images/spon3.png';
import sponsor_4 from '../images/spon4.png';
import sponsor_5 from '../images/spon5.png';
import { RiPulseFill } from 'react-icons/ri';

const Sponsors = () => {
  const sponsors = [
    sponsor_1,
    sponsor_2,
    sponsor_3,
    sponsor_4,
    sponsor_5,
    sponsor_1,
    sponsor_2,
    sponsor_3,
    sponsor_4,
    sponsor_5,
  ];

  return (
    <div className="sponsors-container">
      <div className="sponosor-header">
        <RiPulseFill className="icon" />
        <h3>SPOLUPRÁCA</h3>
      </div>
      <h1>VERNÍ PARTNERI</h1>

      {/* Wrapper limits slider to 10%–90% */}
      <div className="sponsors-slider-wrapper">
        <div className="sponsors-slider">
          {sponsors.concat(sponsors).map((logo, index) => (
            <div className="sponsor" key={index}>
              <img src={logo} alt={`sponsor-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
