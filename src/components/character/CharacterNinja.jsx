import React,{useEffect,useRef} from "react";
import { useCharacterCanvas } from "../../contexts/character/CharacterCanvasContext";
import { useCollision } from "../../contexts/collision/collisionGame";
import './character.css'
const Character=()=>{

    const {startGame,posotion,anime,setAnchor,classAnime,setPosotion,setClass,setAnime} = useCharacterCanvas();
    const {chracterRef,groundRef}=useCollision();
    const isStartRef = useRef(false);
  

    useEffect(() => {
      if (!isStartRef.current) {
        startGame();
        setAnchor(groundRef.current.getBoundingClientRect().y-100)
        isStartRef.current = true;
        if(classAnime==='glide'){
          setTimeout(()=>{
           setPosotion({x:100,y:groundRef.current.getBoundingClientRect().y-80})
           setClass('move')
           setAnime('')
          },5000)
        }
      }
      return () => {
        
    }
      });

  

    return (<>
         <div className={classAnime}  ref={chracterRef} style={{ left:`${posotion.x}px`, top: `${posotion.y}px`,
         animation: `${anime} ${anime==='down'?'5s forwards':'0.8s infinite'}`
         }} >
           
         </div>
         </>
        
        
        
    );
}
export default Character;
