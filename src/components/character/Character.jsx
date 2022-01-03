import React,{useEffect,useRef} from "react";
import { useCharacterCanvas } from "../../contexts/character/CharacterCanvasContext";
import './character.css'
const Character=()=>{

    const {startGame,posotion,anime} = useCharacterCanvas();
    const isStartRef = useRef(false);

    useEffect(() => {
      if (!isStartRef.current) {
        startGame();
        isStartRef.current = true;
      }
      });
  

    return (
        
         <div className='move'  style={{ transform: `translate(${posotion.x}%,${posotion.y}%)`,
         animation: `${anime} 0.8s infinite`
         }} >
           
         </div>
        
        
    );
}
export default Character;
