import React, { useState } from 'react';
import './Modal.css';

export default function Modal({ item, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item) return null;

  const isCarousel = item.type === 'carousel';
  const totalItems = isCarousel ? item.items.length : 0;

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="modal-header">
          {/* We can put an icon here based on the item id later */}
          <h2 className="modal-title">{item.title}</h2>
        </div>
        
        <div className="modal-body">
          {isCarousel ? (
            <div className="carousel-container">
              <p className="modal-text">{item.items[currentIndex]}</p>
              
              <div className="carousel-controls">
                <button 
                  className="nav-btn" 
                  onClick={handlePrev} 
                  disabled={currentIndex === 0}
                >
                  ←
                </button>
                <span className="page-indicator">
                  {currentIndex + 1} / {totalItems}
                </span>
                <button 
                  className="nav-btn" 
                  onClick={handleNext} 
                  disabled={currentIndex === totalItems - 1}
                >
                  →
                </button>
              </div>
            </div>
          ) : (
            <p className="modal-text">{item.content}</p>
          )}
        </div>
        
        <div className="modal-decorations">
          <span className="heart pink">♥</span>
          <span className="heart yellow">♥</span>
          <span className="heart pink">♥</span>
        </div>
      </div>
    </div>
  );
}
