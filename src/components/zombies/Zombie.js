import React, { useEffect, useRef, useState } from "react";
import './zombie.css'
import { useZombie } from "../../contexts/zombies/zombeContext";
import { useCharacterCanvas } from "../../contexts/character/CharacterCanvasContext";
import { useCollision } from "../../contexts/collision/collision";

const Zombie=({posotionZ,id})=>{
    let tower=820;
    const zombieRef=useRef(null)
    const {anime,setAnime}=useCharacterCanvas();
    const {chracterRef,groundRef}=useCollision();
    const[zombiePosotion,setPosotion]=useState(posotionZ);
    const[zombieHealth,setHealth]=useState(5);
    // const isAnimateRef=useRef(true)
    
   
  
    const ZombieMover=()=>{
        
        if(! isCollidedWithCharacter()){
        setPosotion({x:zombiePosotion.x+10,y:groundRef.current.getBoundingClientRect().y-80})
         }
        
       
    }

   
    // zombie animation
    if(zombiePosotion.x<tower){
        setTimeout(()=>{
            ZombieMover();
        },1000/60) 
    }



    // collide with character

    const isCollidedWithCharacter=()=>{
        if(zombieRef && chracterRef){
        let zombie=zombieRef.current.getBoundingClientRect()
        let charcter=chracterRef.current.getBoundingClientRect()
        if(Math.abs(zombie.x-charcter.x)<=100){
            if(zombieHealth>0){
            zombieRef.current.style.animation='attack1 0.8s infinite'
            }
            if(anime==='attack'){
                if(zombieHealth>0){
                setHealth(zombieHealth-1);
                }
                if(zombieHealth===0){
                    zombieRef.current.style.animation='dead1 1s forwards'
                    zombieRef.current.style.display='none'
                }
            
                console.log(zombieHealth)
            }
            return true
        }
   
        zombieRef.current.style.animation='move1 0.8s infinite'
        return false
    }
    }





    if(posotionZ&&zombieHealth>0){
    return <div className="zombie" style={{right:`${zombiePosotion.x}px`, top: `${zombiePosotion.y}px` 
}} ref={zombieRef}></div>
    }
    return <div ref={zombieRef}></div>
}
export default Zombie;