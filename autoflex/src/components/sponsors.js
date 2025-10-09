import React from "react";
import "../css/sponsors.css";
import sponsor_1 from '../images/sponsor1.png';
import sponsor_2 from '../images/sponsor2.png';
import sponsor_3 from '../images/sponsor3.png';
import sponsor_4 from '../images/sponsor4.png';
import sponsor_5 from '../images/sponsor5.png';
// import sponsor_6 from '../images/sponsor11.svg';
import sponsor_7 from '../images/sponsor6.png';
// import sponsor_8 from '../images/sponsor7.jpg';
import sponsor_9 from '../images/sponsor8.png';
import sponsor_10 from '../images/sponsor9.jpg';
import sponsor_11 from '../images/sponsor10.png';
import { RiPulseFill } from 'react-icons/ri';

const Sponsors = () => {
  const sponsors = [
    // sponsor_1,
    sponsor_3,
    sponsor_5,
    // sponsor_6,
    sponsor_7,
    sponsor_4,
    sponsor_2,
    // sponsor_8,
    sponsor_9,
    sponsor_10,
    sponsor_11,
    
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
