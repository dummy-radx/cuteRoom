import React from 'react';
import './LandingPage.css';

export default function LandingPage({ onEnter }) {
  return (
    <div className="landing-container">
      {/* Decorative floating flowers */}
      <div className="flower f1">✿</div>
      <div className="flower f2">❀</div>
      <div className="flower f3">✿</div>
      
      <div className="landing-content">
        <div className="hearts">
          <span className="heart pink">♥</span>
          <span className="heart yellow">♥</span>
          <span className="heart pink">♥</span>
        </div>
        
        <p className="subtitle">A little something made with love</p>
        <h1 className="title">For Sreeparna</h1>
        
        <div className="flower-divider">✿</div>
        
        <p className="description">
          I made you a tiny little room filled with things that
          remind me of you. Click around and explore - every
          corner has a little surprise waiting for you.
        </p>
        
        <button className="enter-button" onClick={onEnter}>
          Enter Room <span>♥</span>
        </button>
      </div>
      
      <div className="footer">
        made with all my heart, just for you - Ishan
      </div>
    </div>
  );
}
