import React from "react";
import Character from "../components/character/Character";
import './style.css'
import { CharacterProvider } from "../contexts/character/CharacterCanvasContext";
// import { ZombieProvider } from "../contexts/zombies/zombeContext";
import { useZombie } from "../contexts/zombies/zombeContext";
import Ground from "../components/gameBorad/Ground";
import Tower from "../components/gameBorad/Tower";
// import Zombie from "../components/zombies/Zombie";
const Game = () => {
    const {zombieDraw}=useZombie();
    console.log(zombieDraw());
    return (
      
            <CharacterProvider>
                <div className="game">

                <div className="game-play">
                <Tower/>
                
                <div className="game-action">
                   <Character />
                   {zombieDraw()}
                </div>
             
                
                {/* <Tower/> */}
                </div>
                <Ground/>
               
                </div>
                
                
            </CharacterProvider>
        
    );
}
export default Game;








