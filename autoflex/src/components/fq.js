import React, { useState } from "react";
import faqData from "../json/faqs.json"; 
import '../css/fq.css';
import { RiPulseFill } from 'react-icons/ri';

const Fq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="fq">
            <div className="fq-header">
                <RiPulseFill className="icon" />
                <h3>FAQS</h3>
            </div>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""} ${activeIndex !== null && activeIndex !== index ? "inactive" : ""}`}
                        onClick={() => toggleAnswer(index)}
                    >
                        <h2 className="question">{item.question}</h2>
                        <div className="answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Fq;