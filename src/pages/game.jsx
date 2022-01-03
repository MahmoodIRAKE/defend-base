import React from "react";
import Character from "../components/character/Character";
import './style.css'
import { CharacterProvider } from "../contexts/character/CharacterCanvasContext";
import Ground from "../components/gameBorad/Ground";
import Tower from "../components/gameBorad/Tower";
const Game = () => {
   
    return (
      
            <CharacterProvider>
                <div className="game">

                <div className="game-play">
                <Tower/>
                <div className="game-action">
                   <Character />
                    
                </div>
                <Tower/>
                </div>
                <Ground/>
               
                </div>
                
                
            </CharacterProvider>
        
    );
}
export default Game;








