import React, { useState } from "react";
import './zombie.css'
// import { useZombie } from "../../contexts/zombies/zombeContext";
const Zombie=({posotion,id})=>{
    let tower=580;
    const[zombiePosotion,setPosotion]=useState(posotion);
    console.log(posotion);
    const ZombieMover=()=>{
       
        setPosotion({x:zombiePosotion.x+0.5,y:zombiePosotion.y})
       
    }
    // zombie animation
    if(zombiePosotion.x<tower){
        setTimeout(()=>{
            ZombieMover();
        },1000/20) 
    }
    if(posotion){
    return <div className="zombie" style={{right:`${zombiePosotion.x}%`, top: `${zombiePosotion.y}%`}}></div>
    }
    return <></>
}
export default Zombie;