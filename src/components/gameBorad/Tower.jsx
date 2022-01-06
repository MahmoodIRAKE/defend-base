import React,{useEffect, useState,useRef} from "react";
import './board.css'
const Tower=({gameSettings})=>{
    const [renderBlood,setRender]=useState(true);
    const myTimeOut=useRef(null);
    useEffect(()=>{
       myTimeOut.current=setTimeout(()=>setRender(!renderBlood),1000/100)
       return () => {
        clearTimeout(myTimeOut.current);
    }
    },[renderBlood])
 
  
    return <div className="tower">
        <div className="fulltower" style={{height:`${gameSettings.towerPower*10}%`}}>
            
        </div>
    </div>
}
export default Tower;