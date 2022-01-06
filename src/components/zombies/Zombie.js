import React, { useEffect, useRef, useState } from "react";
import './zombie.css'
import { useCharacterCanvas } from "../../contexts/character/CharacterCanvasContext";
import { useCollision } from "../../contexts/collision/collisionGame";
const Zombie=({posotionZ,gameSettings,specialMove,setSpecialMove,setGameOver,gameOver})=>{
  
    const zombieRef=useRef(null)
    const zombieSpeed=useRef(10);
    const {anime}=useCharacterCanvas();
    const {chracterRef,groundRef}=useCollision();
    const[zombiePosotion,setPosotion]=useState(posotionZ);
    const[zombieHealth,setHealth]=useState(gameSettings.zombieLevel);
    const myTimeOut=useRef(null);
 
    
   
  
    const ZombieMover=()=>{
        if(!gameOver){
        if(! isCollidedWithCharacter()){
        setPosotion({x:zombiePosotion.x+(+zombieSpeed.current),
            y:groundRef.current.getBoundingClientRect().y-80})
         }
        }
        
       
    }

   
    // zombie animation
    useEffect(() => {
        
    if(gameSettings.characterHealth<=0){
        
        setGameOver(true)
    }
        if(!gameOver){
            myTimeOut.current=setTimeout(()=>{
                ZombieMover();
               
            },1000/60) 
        }
        return () => {
            clearTimeout(myTimeOut.current);
        }
      });
 



    // collide with character

    const isCollidedWithCharacter=()=>{
        
        if(!gameOver&&zombieRef && chracterRef){ 
        let zombie=zombieRef.current.getBoundingClientRect()
        let charcter=chracterRef.current.getBoundingClientRect()
        zombieDirection(charcter.x,zombie.x)
        if(Math.abs(zombie.x-charcter.x)<=100){
            if(zombieHealth>0){
            zombieRef.current.style.animation='attack1 0.8s infinite'
            isSpecialMove();    
            }
            if(anime==='attack'){
                if(zombieHealth>0){
                setHealth(zombieHealth-1);
               
                }
                if(zombieHealth===0){
                    zombieRef.current.style.display='none'
                    
                }
                gameSettings.characterHealth-=0.0001;
            }
            else{
                if(gameSettings.characterHealth>0){
                gameSettings.characterHealth-=0.04;
                }
                
            }
            return true
        }
        
        zombieRef.current.style.animation='move1 0.8s infinite'
        return false
    }
    }

    const isSpecialMove=()=>{
        if(specialMove){
            setHealth(0);
            setSpecialMove(false);
        }
    }
    const zombieDirection=(charcterX,zombieX)=>{
        if(charcterX>zombieX){
            zombieRef.current.style.transform='scaleX(1)'
            zombieSpeed.current=-10;
        }
        else{
            zombieRef.current.style.transform='scaleX(-1)'
            zombieSpeed.current=10;
        }

    }




    if(posotionZ&&zombieHealth>0){
    return <div className="zombie" style={{right:`${zombiePosotion.x}px`, top: `${zombiePosotion.y}px` 
    ,transform:'scaleX(-1)'  }} ref={zombieRef}></div>
    }
    return <div ref={zombieRef}></div>
}
export default Zombie;