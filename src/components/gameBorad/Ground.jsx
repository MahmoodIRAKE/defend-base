import React from "react";
import './board.css'
import { useCollision } from "../../contexts/collision/collisionGame";
import SpecialMove from "../specialMove/SpecialMoveX";
const Ground=({specialMove})=>{
     const {groundRef}=useCollision();
    return (
        <div className="ground" ref={groundRef}>
            {specialMove?<SpecialMove/>:<></>}
            <div className="item1"></div>
            <div className="item2"></div>
       
        </div>
    )
}
export default Ground;