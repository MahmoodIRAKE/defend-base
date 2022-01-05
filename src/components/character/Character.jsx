import React,{useEffect,useRef} from "react";
import { useCharacterCanvas } from "../../contexts/character/CharacterCanvasContext";
import { useCollision } from "../../contexts/collision/collision";
import './character.css'
import CharacterHealthBar from "./CharacterHealthBar";
const Character=({gameSettings})=>{

    const {startGame,posotion,anime,setAnchor} = useCharacterCanvas();
    const {chracterRef,groundRef}=useCollision();
    const isStartRef = useRef(false);

    useEffect(() => {
      if (!isStartRef.current) {
        startGame();
        setAnchor(groundRef.current.getBoundingClientRect().y-100)
        isStartRef.current = true;
      }
    
      });
  

    return (<>
         <div className='move'  ref={chracterRef} style={{ left:`${posotion.x}px`, top: `${posotion.y}px`,
         animation: `${anime} 0.8s infinite`
         }} >
           
         </div>
         </>
        
        
        
    );
}
export default Character;
