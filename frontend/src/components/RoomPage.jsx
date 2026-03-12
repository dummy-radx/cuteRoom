import React, { useState } from 'react';
import './RoomPage.css';
import { roomItems } from '../data/content';
import Modal from './Modal';
import { 
  InteractiveObject, WindowSvg, FrameSvg, VaseSvg, 
  BookcaseSvg, JarSvg, RadioSvg, TeddySvg, GiftSvg,
  LightSwitchSvg, CatSvg, EnvelopeSvg, GuitarSvg, CrystalBallSvg,
  BedSvg, LaptopSvg
} from './SvgAssets';

export default function RoomPage({ onBack }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);

  const renderSvgMap = {
    window: <WindowSvg />,
    frame: <FrameSvg />,
    vase: <VaseSvg />,
    bookcase: <BookcaseSvg />,
    jar: <JarSvg />,
    radio: <RadioSvg />,
    teddy: <TeddySvg />,
    gift: <GiftSvg />,
    switch: <LightSwitchSvg isOn={!isNightMode} />,
    cat: <CatSvg />,
    envelope: <EnvelopeSvg />,
    guitar: <GuitarSvg />,
    crystalBall: <CrystalBallSvg />,
    bed: <BedSvg />,
    laptop: <LaptopSvg />
  };

  const handleItemClick = (item) => {
    if (item.id === 'switch') {
      setIsNightMode(!isNightMode);
    } else if (item.type === 'generator') {
      const randomContent = item.items[Math.floor(Math.random() * item.items.length)];
      setSelectedItem({ 
        ...item, 
        type: 'generator_text', 
        content: randomContent,
        hint: "(Click again to see another message!)"
      });
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div className={`room-container ${isNightMode ? 'night-mode' : ''}`}>
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
              onClick={() => handleItemClick(item)}
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
          onRefresh={() => {
            if (selectedItem.type === 'generator_text') {
              const randomContent = selectedItem.items[Math.floor(Math.random() * selectedItem.items.length)];
              setSelectedItem({
                ...selectedItem,
                content: randomContent
              });
            }
          }}
        />
      )}
    </div>
  );
}
