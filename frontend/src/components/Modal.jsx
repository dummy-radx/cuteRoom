import React, { useState } from 'react';
import './Modal.css';

export default function Modal({ item, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item) return null;

  const isCarousel = item.type === 'carousel';
  const isGallery = item.type === 'gallery';
  const isPaginated = isCarousel || isGallery;
  const totalItems = isPaginated ? item.items.length : 0;

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
          <h2 className="modal-title">{item.title}</h2>
        </div>
        
        <div className="modal-body">
          {isPaginated ? (
            <div className="carousel-container">
              {isGallery ? (
                <div className="gallery-item">
                  {item.items[currentIndex].src ? (
                    <img src={item.items[currentIndex].src} alt="Memory" className="gallery-image" />
                  ) : (
                    <div className="gallery-image-placeholder">
                      <span>Image Placeholder</span>
                    </div>
                  )}
                  <p className="modal-text gallery-caption">{item.items[currentIndex].caption}</p>
                </div>
              ) : (
                <p className="modal-text">{item.items[currentIndex]}</p>
              )}
              
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
