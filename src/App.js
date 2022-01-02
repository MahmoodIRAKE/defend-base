import React from 'react';
import './App.css';
import './utils/utils.css'
import Game from './pages/game';
import { GameProvider } from './contexts/GameCanvasContext';
function App() {



  return (
    <GameProvider >
    <div className="App flexing-center col">
      hello
          <Game/>
    </div>
    </GameProvider >
  );
}

export default App;
