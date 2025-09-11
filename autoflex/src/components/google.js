import React, { useEffect } from "react";
import "../css/review.css";
import { RiPulseFill } from "react-icons/ri";

const Google = () => {
  useEffect(() => {
    // load Elfsight script once
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="review">
        <div className="review-header">
          <RiPulseFill className="icon" />
          <h3>RECENZIE</h3>
        </div>
        <h1>ČO O NÁS HOVORIA KLIENTI</h1>
      </div>

      {/* Elfsight Google Reviews */}
      <div
        className="elfsight-app-57e212da-54bb-48c4-a115-ee164d93580d"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default Google;
