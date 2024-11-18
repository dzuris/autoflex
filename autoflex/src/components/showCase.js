import React from "react";
import '../css/showCase.css';
import BC from '../images/bigCar.png';
import { RiPulseFill } from 'react-icons/ri';

const ShowCase = () => {
    return (
    <div className="carShowC">
        <div className="white-recShow">
            <div className="showCaseCont">
                <div className="showCase-header">
                    <RiPulseFill className="icon" />
                    <h3>NAŠA PRÁCA</h3>
                </div>
                    <h2>SUBARU</h2>
            </div>
            <button className="green-button-showC">Click Me</button>
        </div>
        <img src={BC} alt="ShowCaseCar" className="carImgShow"/>
    </div>
    );
};

export default ShowCase;