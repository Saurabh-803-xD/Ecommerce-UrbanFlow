
import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image2.png";
import React, { useState, useEffect } from 'react';

const Hero = () => {

  const sampleTexts = ['Mens', 'Womens', 'Kids', 'Everyone'];
  const [displayText, setDisplayText] = useState(sampleTexts[0]);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the text here
      setTextIndex((prevIndex) => (prevIndex + 1) % sampleTexts.length);
      setDisplayText(sampleTexts[textIndex]);
    }, 2000); 
    return () => clearInterval(intervalId);
  }, [textIndex, sampleTexts]);

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" loading="lazy"/>
          </div>
          <p>collections</p>
          <p>for <span className="changing-text">{displayText}</span></p>
        </div>
        <div className="hero-latest-btn">
          <div> Latest Collection</div>
          <img src={arrow_icon} alt='' loading="lazy"/>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" loading="lazy" width='500'></img>
      </div>
    </div>
  );
};

export default Hero;
