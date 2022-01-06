import React, { useEffect, useState,useRef } from "react";
import Character from "../components/character/CharacterNinja";
import './style.css'
import { CharacterProvider } from "../contexts/character/CharacterCanvasContext";
import { useZombie } from "../contexts/zombies/zombeContext";
import Ground from "../components/gameBorad/Ground";
import Tower from "../components/gameBorad/Tower";
import { CollisionProvider } from "../contexts/collision/collisionGame";
import CharacterHealthBar from "../components/character/CharacterHealthBar";
import Score from "../components/gameBorad/Score";
import GameOverScreen from "../components/gameBorad/gameOver";
const zombieArray=[];


const Game = () => {
    const {zombieDraw}=useZombie();
    const myTimeOut=useRef(null);
    const [sendZombies,setSender]=useState(true)
    const [specialMove,setSpecialMove]=useState(false)
    const [gameOver,setGameOver]=useState(false);
    const gameSettings=useRef({
        characterHealth:100,
        towerPower:0,
        score:1,
        zombieLevel:1,
    })
   useEffect(()=>{
       if(!gameOver){
    myTimeOut.current=setTimeout(()=>{
        setSender(!sendZombies);
        gameSettings.current.score++;
        if(gameSettings.current.towerPower>=10){
            setSpecialMove(true);
            gameSettings.current.towerPower=0;    
        }
        gameSettings.current.towerPower++;
        gameSettings.current.zombieLevel++;
    },10000)}
},[sendZombies,gameOver])
   
    if(gameOver){
        clearTimeout(myTimeOut.current);
        return <GameOverScreen gameSettings={gameSettings}/>
    }

    return (
        
        <>
        <div className="game">
        <CharacterHealthBar gameSettings={gameSettings.current}/>
        <Score gameSettings={gameSettings.current}/>
        
            <CharacterProvider>
                < CollisionProvider>
                 
                <div className="game-play">
                <Tower gameSettings={gameSettings.current}/>
                <div className="game-action">
                   <Character gameSettings={gameSettings.current}/>
                   {zombieDraw(zombieArray,gameSettings.current,specialMove,setSpecialMove,setGameOver,gameOver)}
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








