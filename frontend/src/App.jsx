import { useState } from 'react';
import LandingPage from './components/LandingPage';
import RoomPage from './components/RoomPage';

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'room'

  return (
    <div className="app">
      {view === 'landing' && <LandingPage onEnter={() => setView('room')} />}
      {view === 'room' && <RoomPage onBack={() => setView('landing')} />}
    </div>
  );
}

export default App;
