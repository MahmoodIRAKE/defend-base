import React, { useState } from "react";
import Character from "../components/character/Character";
import './style.css'
import { CharacterProvider } from "../contexts/character/CharacterCanvasContext";
// import { ZombieProvider } from "../contexts/zombies/zombeContext";
import { useZombie } from "../contexts/zombies/zombeContext";
import Ground from "../components/gameBorad/Ground";
import Tower from "../components/gameBorad/Tower";
import { CollisionProvider } from "../contexts/collision/collision";
// import Zombie from "../components/zombies/Zombie";
const zombieArray=[];
const Game = () => {
    const {zombieDraw}=useZombie();
    const [sendZombies,setSender]=useState(true)
   
    setTimeout(()=>{setSender(!sendZombies)},10000)
    return (
        <div className="game">
            <CharacterProvider>
                < CollisionProvider>
                

                <div className="game-play">
                <Tower/>
                
                <div className="game-action">
                   <Character />
                   {zombieDraw(zombieArray)}
                </div>
             
                
                {/* <Tower/> */}
                </div>
                <Ground/>
               
                
               
                </ CollisionProvider>
            </CharacterProvider>
            </div>
        
    );
}
export default Game;








