import React,{useEffect, useState} from "react";
import { useCharacterCanvas } from "../../contexts/CharacterCanvasContext";
import './character.css'
const Character=()=>{

    const {startGame,posotion,anime,direction} = useCharacterCanvas();
    

    useEffect(() => {
        startGame();
      }, []);
  

    return (
        
         <div className='move'  style={{ transform: `scaleX(${direction}) translate(${posotion.x}%,${posotion.y}%)`,
         animation: `${anime} 0.8s infinite`
         }} >
           
         </div>
        
        
    );
}
export default Character;
