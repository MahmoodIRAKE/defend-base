import React, { useState,useEffect,useRef} from "react";
import './character.css'

const CharacterHealthBar=({gameSettings})=>{
    const [renderBlood,setRender]=useState(true);
    const myTimeOut=useRef(null);
    useEffect(()=>{
       myTimeOut.current=setTimeout(()=>setRender(!renderBlood),1000/100)
    },[renderBlood])
    if(gameSettings.characterHealth<=0){
        clearTimeout(myTimeOut.current);
    }
    return <div className="slidecontainer">
  Your Health
  <div className='blood' style={{width:`${gameSettings.characterHealth}%`,backgroundColor:'red',height:'20px',}}>
     

  </div>
</div>
    
}
export default CharacterHealthBar;