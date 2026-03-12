import React, { useState } from 'react';
import './RoomPage.css';
import { roomItems } from '../data/content';
import Modal from './Modal';
import { 
  InteractiveObject, WindowSvg, FrameSvg, VaseSvg, 
  BookcaseSvg, JarSvg, RadioSvg, TeddySvg, GiftSvg 
} from './SvgAssets';

export default function RoomPage({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderSvgMap = {
    window: <WindowSvg />,
    frame: <FrameSvg />,
    vase: <VaseSvg />,
    bookcase: <BookcaseSvg />,
    jar: <JarSvg />,
    radio: <RadioSvg />,
    teddy: <TeddySvg />,
    gift: <GiftSvg />
  };

  return (
    <div className="room-container">
      <button onClick={onBack} className="back-button">←</button>
      
      <div className="room-header">
        <h1>Sreeparna's Cozy Room</h1>
        <p>click on anything that catches your eye ~</p>
      </div>
      
      <div className="room-wrapper">
        <div className="room">
          <div className="floor"></div>
          <div className="rug"></div>

          {roomItems.map((item) => (
            <InteractiveObject 
              key={item.id} 
              id={item.id}
              onClick={() => setSelectedItem(item)}
              style={item.position}
            >
              {renderSvgMap[item.id]}
            </InteractiveObject>
          ))}
        </div>
      </div>

      {selectedItem && (
        <Modal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </div>
  );
}
