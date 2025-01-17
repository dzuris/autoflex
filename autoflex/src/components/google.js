import React from "react";
import '../css/review.css';
import { RiPulseFill } from 'react-icons/ri';

const Google = () => {
   
    return (
        <div>
            <div className="review">
            <div className="review-header">
                <RiPulseFill className="icon" />
                <h3>RECENZIE</h3>
            </div>
            <h1>ČO O NÁS HOVORIA KLIENTI</h1>
            </div>
            <iframe title="REWIEV" src='https://widgets.sociablekit.com/google-reviews/iframe/25511161' frameborder='0' width='100%' height='450'></iframe>
        </div>
    );
};

export default Google;
