import React from 'react';
import './App.css';
import './utils/utils.css'
import Game from './pages/game';
import { ZombieProvider } from './contexts/zombies/zombeContext';
function App() {



  return (
    
    <div className="App flexing-center col">
      <ZombieProvider>
          <Game/>
      </ZombieProvider>
    </div>
    
  );
}

export default App;
