import React, { useState } from "react";
import Character from "../components/character/Character";
import './style.css'
import { CharacterProvider } from "../contexts/character/CharacterCanvasContext";
// import { ZombieProvider } from "../contexts/zombies/zombeContext";
import { useZombie } from "../contexts/zombies/zombeContext";
import Ground from "../components/gameBorad/Ground";
import Tower from "../components/gameBorad/Tower";
import { CollisionProvider } from "../contexts/collision/collision";
import { GameProvider } from "../contexts/gameBoardContext.js/gameContext";
import CharacterHealthBar from "../components/character/CharacterHealthBar";
// import Zombie from "../components/zombies/Zombie";
const zombieArray=[];
const gameSettings={
    characterHealth:100,
    towerPower:0,
    score:0,
    zombieLevel:1,
}
const Game = () => {
    const {zombieDraw}=useZombie();
    const [sendZombies,setSender]=useState(true)
    setTimeout(()=>{setSender(!sendZombies)},10000)
    return (
        <div className="game">
           
            <CharacterProvider>
                < CollisionProvider>
                 <CharacterHealthBar gameSettings={gameSettings}/>

                <div className="game-play">
                <Tower/>
                <div className="game-action">
                   <Character/>
                   {zombieDraw(zombieArray,gameSettings)}
                </div>
                </div>
                <Ground/>
               
                
               
                </ CollisionProvider>
            </CharacterProvider>
            
            </div>
        
    );
}
export default Game;








