
import React, { useContext, useEffect, useRef, useState } from "react";
import {characterEventListners,characterMovementRules, gravityHandler,stopAnime} from "./CharacteController";

const CharacterCanvasContext = React.createContext();
export function useCharacterCanvas() {
  return useContext(CharacterCanvasContext);
}

export const CharacterProvider = ({ children }) => {


  const keyIsOn = useRef(false);
 
   

  /// this is to check the keys that was pressed and although to check if it still pressed to do combonations
  const [keys, setKeys] = useState({
    left: 0,
    right: 0,
    up: 0,
    down: 0,
    space: 0,
  })

  const [anchor,setAnchor]=useState(450);
  const [posotion, setPosotion] = useState({x:50,y:anchor})
  const [anime,setAnime]=useState('');
  const [gravity,setGravity]=useState(false);
 

  const keysHandler = (name, value) => {
    setKeys(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  const posotionHandler = (name, value) => {
    setPosotion(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }


  
 
    
  
  const startGame=()=>characterEventListners(keysHandler,keyIsOn);
  
  useEffect(()=>{
    if(!keyIsOn.current){
    characterMovementRules(posotion,posotionHandler,keys,setGravity,setAnime)
    stopAnime(keys,setAnime)
    keyIsOn.current=true
    }
  },[posotion, keys])


    if(gravity){
    gravityHandler(anchor,posotionHandler,posotion,setGravity,setAnime)
    }
 





  return (
    <CharacterCanvasContext.Provider
      value={{ startGame,posotion,anime,setAnchor,setAnime}}
    >
      {children}
    </CharacterCanvasContext.Provider>
  );
};



