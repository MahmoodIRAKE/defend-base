import React, { useState } from "react";
import './character.css'

const CharacterHealthBar=({gameSettings})=>{
    const [renderBlood,setRender]=useState(true);
    setTimeout(()=>setRender(!renderBlood),1000/100)
    return <div className="slidecontainer">
  {/* <input type="range" min="1" max="100" value="10" class="slider"/> */}
  Your Health
  <div className='blood' style={{width:`${gameSettings.characterHealth}%`,backgroundColor:'red',height:'20px',}}>
     

  </div>
</div>
    
}
export default CharacterHealthBar;