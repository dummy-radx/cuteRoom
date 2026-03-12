import React from 'react';

// Wrapper for all SVGs to give them a consistent interactive behavior
export const InteractiveObject = ({ id, onClick, style, children }) => {
  return (
    <div 
      className={`interactive-item item-${id}`} 
      onClick={onClick}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        ...style
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      {children}
    </div>
  );
};

export const WindowSvg = () => (
  <svg width="120" height="150" viewBox="0 0 120 150">
    {/* Wall shadow / frame backing */}
    <rect x="25" y="15" width="70" height="120" fill="#a78672" />
    
    {/* Sky */}
    <rect x="30" y="20" width="60" height="110" fill="#bce6fa" />
    
    {/* Clouds / stars (simple dots) */}
    <circle cx="45" cy="40" r="3" fill="#fff" opacity="0.8" />
    <circle cx="75" cy="60" r="2" fill="#fff" opacity="0.6" />
    <circle cx="60" cy="90" r="2.5" fill="#fff" opacity="0.7" />
    
    {/* Window Frame Inner Sections */}
    <rect x="58" y="20" width="4" height="110" fill="#8c6d59" />
    <rect x="30" y="73" width="60" height="4" fill="#8c6d59" />
    
    {/* Curtains - Left */}
    <path d="M 20 10 Q 30 70 20 140 L 40 140 Q 35 70 45 10 Z" fill="#e8baba" />
    {/* Curtains - Right */}
    <path d="M 100 10 Q 90 70 100 140 L 80 140 Q 85 70 75 10 Z" fill="#e8baba" />
    
    {/* Top Bar */}
    <rect x="15" y="5" width="90" height="8" rx="4" fill="#6d5445" />
    {/* Sill */}
    <rect x="20" y="135" width="80" height="10" rx="3" fill="#8c6d59" />
  </svg>
);

export const FrameSvg = () => (
  <svg width="60" height="80" viewBox="0 0 60 80">
    <rect x="5" y="5" width="50" height="70" fill="#8c6d59" rx="2" />
    <rect x="10" y="10" width="40" height="60" fill="#fff" />
    {/* Picture content */}
    <rect x="12" y="12" width="36" height="56" fill="#f0ebca" />
    <circle cx="25" cy="25" r="8" fill="#fce181" />
    <path d="M 12 50 Q 30 30 48 50 L 48 68 L 12 68 Z" fill="#c3d9a3" />
    {/* Tiny figures (stick figures) */}
    <line x1="25" y1="50" x2="25" y2="40" stroke="#5a4a42" strokeWidth="1" />
    <circle cx="25" cy="38" r="2" fill="#5a4a42" />
    <line x1="32" y1="50" x2="32" y2="42" stroke="#5a4a42" strokeWidth="1" />
    <circle cx="32" cy="40" r="2" fill="#5a4a42" />
    {/* Holding hands */}
    <line x1="25" y1="45" x2="32" y2="45" stroke="#5a4a42" strokeWidth="1" />
    {/* Hanging nail/string */}
    <circle cx="30" cy="2" r="1.5" fill="#5a4a42" />
    <path d="M 30 2 L 15 5 M 30 2 L 45 5" stroke="#5a4a42" strokeWidth="1" />
  </svg>
);

export const VaseSvg = () => (
  <svg width="50" height="90" viewBox="0 0 50 90">
    {/* Stems */}
    <line x1="25" y1="50" x2="20" y2="20" stroke="#7eb572" strokeWidth="2" />
    <line x1="25" y1="50" x2="33" y2="25" stroke="#7eb572" strokeWidth="2" />
    <line x1="25" y1="50" x2="25" y2="15" stroke="#7eb572" strokeWidth="2" />
    
    {/* Flowers - Sunflowers */}
    {/* Left */}
    <circle cx="20" cy="20" r="6" fill="#fce181" />
    <circle cx="20" cy="20" r="3" fill="#5a4a42" />
    {/* Right */}
    <circle cx="33" cy="25" r="7" fill="#fce181" />
    <circle cx="33" cy="25" r="3.5" fill="#5a4a42" />
    {/* Top/Middle */}
    <circle cx="25" cy="15" r="8" fill="#fce181" />
    <circle cx="25" cy="15" r="4" fill="#5a4a42" />
    
    {/* Vase */}
    <path d="M 15 40 Q 10 70 15 90 L 35 90 Q 40 70 35 40 Z" fill="#88aec4" />
    <ellipse cx="25" cy="40" rx="10" ry="3" fill="#719db5" />
    <rect x="20" y="55" width="10" height="2" fill="#fff" opacity="0.3" rx="1" />
  </svg>
);

export const BookcaseSvg = () => (
  <svg width="80" height="120" viewBox="0 0 80 120">
    {/* Back */}
    <rect x="10" y="5" width="60" height="110" fill="#6d5445" rx="2" />
    {/* Shelves */}
    <rect x="5" y="35" width="70" height="5" fill="#8c6d59" rx="1" />
    <rect x="5" y="70" width="70" height="5" fill="#8c6d59" rx="1" />
    <rect x="5" y="105" width="70" height="5" fill="#8c6d59" rx="1" />
    <rect x="5" y="5" width="70" height="5" fill="#8c6d59" rx="1" />
    
    {/* Top Shelf Books */}
    <rect x="15" y="12" width="6" height="23" fill="#e8baba" />
    <rect x="23" y="15" width="8" height="20" fill="#fce181" />
    <rect x="33" y="10" width="7" height="25" fill="#88aec4" />
    <rect x="42" y="14" width="5" height="21" fill="#c3d9a3" />
    
    {/* Middle Shelf Books & Plant */}
    <rect x="15" y="47" width="8" height="23" fill="#88aec4" />
    <rect x="25" y="45" width="6" height="25" fill="#e8baba" />
    <rect x="33" y="50" width="5" height="20" fill="#fce181" />
    <rect x="40" y="48" width="8" height="22" fill="#d1a3a4" />
    {/* Tiny plant */}
    <path d="M 60 70 L 55 60 L 65 60 Z" fill="#c3d9a3" />
    <rect x="57" y="65" width="6" height="5" fill="#eebd80" />
    
    {/* Bottom Shelf - Stacked books or box */}
    <rect x="15" y="98" width="20" height="7" fill="#fce181" />
    <rect x="17" y="91" width="18" height="6" fill="#88aec4" />
    <circle cx="55" cy="90" r="5" fill="#d1a3a4" />
  </svg>
);

export const JarSvg = () => (
  <svg width="40" height="70" viewBox="0 0 40 70">
    {/* Jar Body */}
    <path d="M 10 15 Q 5 40 10 65 L 30 65 Q 35 40 30 15 Z" fill="#bce6fa" opacity="0.4" />
    <ellipse cx="20" cy="65" rx="10" ry="3" fill="#bce6fa" opacity="0.5" />
    
    {/* Inner Notes (folded papers) */}
    <rect x="12" y="50" width="12" height="10" fill="#fce181" transform="rotate(-10 12 50)" />
    <rect x="18" y="40" width="10" height="12" fill="#e8baba" transform="rotate(15 18 40)" />
    <rect x="14" y="30" width="14" height="8" fill="#c3d9a3" transform="rotate(5 14 30)" />
    <rect x="16" y="22" width="11" height="9" fill="#fce181" transform="rotate(-20 16 22)" />
    
    {/* Jar Lid / Cork */}
    <rect x="12" y="5" width="16" height="10" fill="#cca683" rx="2" />
    <ellipse cx="20" cy="5" rx="8" ry="2" fill="#eabf96" />
    
    {/* Reflection lines */}
    <path d="M 12 25 Q 10 40 13 55" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" strokeLinecap="round" />
  </svg>
);

export const RadioSvg = () => (
  <svg width="60" height="45" viewBox="0 0 60 45">
    {/* Box */}
    <rect x="5" y="10" width="50" height="30" fill="#cca683" rx="4" />
    
    {/* Details - Front Grille */}
    <rect x="10" y="15" width="20" height="20" fill="#8c6d59" rx="2" />
    {/* Speaker dots */}
    <circle cx="15" cy="20" r="1" fill="#5a4a42" />
    <circle cx="20" cy="20" r="1" fill="#5a4a42" />
    <circle cx="25" cy="20" r="1" fill="#5a4a42" />
    <circle cx="15" cy="25" r="1" fill="#5a4a42" />
    <circle cx="20" cy="25" r="1" fill="#5a4a42" />
    <circle cx="25" cy="25" r="1" fill="#5a4a42" />
    <circle cx="15" cy="30" r="1" fill="#5a4a42" />
    <circle cx="20" cy="30" r="1" fill="#5a4a42" />
    <circle cx="25" cy="30" r="1" fill="#5a4a42" />
    
    {/* Dial/Display */}
    <rect x="35" y="15" width="15" height="8" fill="#fce181" rx="1" />
    <line x1="40" y1="15" x2="40" y2="23" stroke="#e0b467" strokeWidth="1" />
    <circle cx="42" cy="30" r="4" fill="#8c6d59" />
    
    {/* Antenna */}
    <line x1="12" y1="10" x2="5" y2="0" stroke="#999" strokeWidth="1.5" />
    <circle cx="5" cy="0" r="1.5" fill="#999" />
    
    {/* Music Note */}
    <path d="M 50 5 L 50 12 M 50 5 L 54 4 M 48 11 C 47 11, 46 12, 47 13" stroke="#d1a3a4" strokeWidth="1" fill="none" />
  </svg>
);

export const TeddySvg = () => (
  <svg width="60" height="70" viewBox="0 0 60 70">
    {/* Ears */}
    <circle cx="15" cy="15" r="8" fill="#cca683" />
    <circle cx="15" cy="15" r="4" fill="#eabf96" />
    <circle cx="45" cy="15" r="8" fill="#cca683" />
    <circle cx="45" cy="15" r="4" fill="#eabf96" />
    
    {/* Arms (behind) */}
    <path d="M 15 35 Q 5 40 10 50 Z" fill="#c4976c" />
    <path d="M 45 35 Q 55 40 50 50 Z" fill="#c4976c" />
    
    {/* Body */}
    <ellipse cx="30" cy="45" rx="18" ry="20" fill="#cca683" />
    <ellipse cx="30" cy="48" rx="12" ry="14" fill="#eabf96" />
    
    {/* Head */}
    <circle cx="30" cy="22" r="16" fill="#cca683" />
    <ellipse cx="30" cy="26" rx="8" ry="6" fill="#eabf96" />
    
    {/* Face */}
    <circle cx="24" cy="20" r="2" fill="#5a4a42" />
    <circle cx="36" cy="20" r="2" fill="#5a4a42" />
    <ellipse cx="30" cy="25" rx="3" ry="2" fill="#5a4a42" />
    <path d="M 28 28 Q 30 30 32 28" stroke="#5a4a42" strokeWidth="1" fill="none" />
    
    {/* Tiny heart on belly */}
    <path d="M 29 45 L 30 46 L 31 45 C 32 44, 30 43, 30 44 C 30 43, 28 44, 29 45 Z" fill="#d1a3a4" stroke="#d1a3a4" strokeWidth="1" />
    
    {/* Feet */}
    <ellipse cx="20" cy="62" rx="8" ry="5" fill="#cca683" />
    <ellipse cx="40" cy="62" rx="8" ry="5" fill="#cca683" />
  </svg>
);

export const GiftSvg = () => (
  <svg width="50" height="50" viewBox="0 0 50 50">
    {/* Box */}
    <rect x="5" y="15" width="40" height="30" fill="#e8baba" rx="2" />
    
    {/* Vertical Ribbon */}
    <rect x="20" y="15" width="10" height="30" fill="#fce181" />
    {/* Horizontal Ribbon */}
    <rect x="5" y="25" width="40" height="8" fill="#fce181" />
    
    {/* Lid */}
    <rect x="3" y="12" width="44" height="8" fill="#d1a3a4" rx="2" />
    <rect x="20" y="12" width="10" height="8" fill="#e0b467" />
    
    {/* Bow Loops */}
    <path d="M 25 12 C 15 0, 5 8, 20 12 Z" fill="#fce181" />
    <path d="M 25 12 C 35 0, 45 8, 30 12 Z" fill="#fce181" />
    <circle cx="25" cy="12" r="3" fill="#eebd80" />
  </svg>
);
