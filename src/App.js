import React from 'react';
import './App.css';
import './utils/utils.css'
import Game from './pages/game';
import { ZombieProvider } from './contexts/zombies/zombeContext';
import Login from './pages/loginPage';
import Error from './pages/404';
import Lobby from './pages/lobby';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from './contexts/userContextF/userContext';
import ScoreWorld from './pages/score';
function App() {



  return (
    
    <div className="App flexing-center">
      {/* <ZombieProvider>
          <Game/>
      </ZombieProvider> */}
     
      <Router>
        <Routes>
          <Route path="/" element={<UserProvider><Login/></UserProvider>} />
          <Route path="/lobby" element={<UserProvider><Lobby/></UserProvider>} />
          <Route path="/game" element={<UserProvider><ZombieProvider><Game/></ZombieProvider></UserProvider>} />
          <Route path="/score" element={<UserProvider><ScoreWorld/></UserProvider>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
