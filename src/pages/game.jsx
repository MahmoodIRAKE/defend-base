import React, { useEffect } from "react";
import Character from "../components/character/Character";
import './style.css'
import { CharacterProvider } from "../contexts/CharacterCanvasContext";
import Ground from "../components/gameBorad/Ground";
const Game = () => {
   
    return (
      
            <CharacterProvider>
                <div className="game">
                <div className="game-action">
                <Character />
                
                </div>
                <Ground/>
               
                </div>
                
                
            </CharacterProvider>
        
    );
}
export default Game;








