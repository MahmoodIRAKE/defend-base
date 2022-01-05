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
import Score from "../components/gameBorad/Score";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import SpecialMove from "../components/specialMove/SpecialMove";
// import Zombie from "../components/zombies/Zombie";
const zombieArray=[];
const gameSettings={
    characterHealth:100,
    towerPower:0,
    score:1,
    zombieLevel:1,
}
const Game = () => {
    const {zombieDraw}=useZombie();
    const [sendZombies,setSender]=useState(true)
    const [specialMove,setSpecialMove]=useState(false)

    setTimeout(()=>{
        setSender(!sendZombies);
        gameSettings.score++;
        if(gameSettings.towerPower>=10){
            setSpecialMove(true);
            gameSettings.towerPower=0;    
        }
        gameSettings.towerPower++;
        gameSettings.zombieLevel++;
    },10000)

    return (
        <>
      
        <div className="game">
        <CharacterHealthBar gameSettings={gameSettings}/>
        <Score gameSettings={gameSettings}/>
        
            <CharacterProvider>
                < CollisionProvider>
                 
                <div className="game-play">
                <Tower gameSettings={gameSettings}/>
                <div className="game-action">
                   <Character/>
                   {zombieDraw(zombieArray,gameSettings,specialMove,setSpecialMove)}
                </div>
                </div>
                <Ground specialMove={specialMove}/>
               
                
               
                </ CollisionProvider>
            </CharacterProvider>
            
            </div>
            </>
    );
}
export default Game;








