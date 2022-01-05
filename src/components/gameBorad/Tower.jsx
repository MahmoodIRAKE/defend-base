import React,{useState} from "react";
import './board.css'
const Tower=({gameSettings})=>{
    const [renderBlood,setRender]=useState(true);
    setTimeout(()=>setRender(!renderBlood),1000/100)
    return <div className="tower">
        <div className="fulltower" style={{height:`${gameSettings.towerPower*10}%`}}>
            
        </div>
    </div>
}
export default Tower;