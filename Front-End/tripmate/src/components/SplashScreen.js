import React from 'react';
import './SplashScreen.css';
import { FaGlobeAmericas } from 'react-icons/fa'; 

export default function SplashScreen() {
  return (
    <div className="splash-screen-container">
      <div className="splash-logo-box">
        <FaGlobeAmericas className="splash-icon" /> 
        <h1 className="splash-text">TripMate</h1>
        <p className="splash-tagline">Your Smart Travel Companion</p>
      </div>
    </div>
  );
}