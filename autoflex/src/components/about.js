import React from "react";
import '../css/about.css';
import fr from '../images/carPictureOne.png';
import sc from '../images/carsOnRamp.png';
import {RiPulseFill} from 'react-icons/ri'

const About = () => {
    return (
    <div className="rectangle-container">
        <div className="column">
            <img src={fr} alt="Prve auto" className="imgOne"/>
        </div>
        <div className="column">
            <div className="text">
                <div className="aboutHeader">
                     <RiPulseFill className="icon" />
                    <h4>KTO SME</h4>
                </div>
                <h2>AUTOFLEX - VIAC NEŽ LEN AUTOSERVIS</h2>
                <p>Sme rodinný autoservis s viac ako 15-ročnými skúsenosťami v oblasti údržby a opráv vozidiel. Našim cieľom je ponúkať kvalitné a cenovo dostupné služby, ktoré vám pomôžu udržať vaše auto v špičkovom stave. Naša práca je založená na spoľahlivosti, odbornosti a úprimnej starostlivosti o potreby zákazníka.</p>
            </div>
            <img src={sc} alt="Druhe auta" className="imgTwo"/>
        </div>
    </div>
    );
};

export default About;