import React, { useState } from "react";
import '../css/review.css';
import { RiPulseFill } from 'react-icons/ri';
import { FaQuoteRight } from 'react-icons/fa';
import reviewsData from '../json/review.json';
import { Link } from "react-router-dom";

const Review = () => {
    const [reviews] = useState(reviewsData);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const currentReviews = [
        reviews[(currentReviewIndex + 0) % reviews.length],
        reviews[(currentReviewIndex + 1) % reviews.length],
        reviews[(currentReviewIndex + 2) % reviews.length],
    ];

    const goToNextReviews = () => {
        setCurrentReviewIndex((prevIndex) => {
            return (prevIndex - 1 + reviews.length) % reviews.length;
        });
    };

    const goToPreviousReviews = () => {
        setCurrentReviewIndex((prevIndex) => {
            return (prevIndex + 1) % reviews.length;
        });
    };

    return (
        <div>
        <div className="review">
            <div className="review-header">
                <RiPulseFill className="icon" />
                <h3>RECENZIE</h3>
            </div>
            <h1>ČO O NÁS HOVORIA KLIENTI</h1>

            <div className="review-boxes">
                {currentReviews.map((review, index) => (
                    <div className="review-box" key={index}>
                        <div className="box-under">
                            <FaQuoteRight color="#3FAB3E" size={30} />
                            <div className="review-text">{review.text}</div>
                            <div className="box-colm">
                                <img src={review.authorImage} alt={review.authorName} className="author-photo" />
                                <div className="adress-under">
                                    <h4 className="author-name">{review.authorName}</h4>
                                    <p className="author-address">{review.authorAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="review-navigation">
                <button onClick={goToPreviousReviews} className="arrow-button">&#8592;</button>
                <button onClick={goToNextReviews} className="arrow-button">&#8594;</button>
            </div>
        </div>
            <div className='all-lastRec'>
                <Link to="/service" className='all-lastRec'>
                    <span>ZANECHAJTE NÁM RECENZIU</span>
                </Link>
            </div>
        </div>
    );
};

export default Review;
